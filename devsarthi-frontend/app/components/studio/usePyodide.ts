'use client';

import React, { useState, useEffect, useRef } from 'react';

declare global {
    interface Window {
        loadPyodide?: any;
    }
}

export function usePyodide() {
    const [isPyodideReady, setIsPyodideReady] = useState(false);
    const [isRunning, setIsRunning] = useState(false);
    const pyodideRef = useRef<any>(null);

    useEffect(() => {
        let isMounted = true;

        async function loadScriptAndInit() {
            if (typeof window === 'undefined') return;

            if (!window.loadPyodide && !document.getElementById('pyodide-cdn-script')) {
                const script = document.createElement('script');
                script.id = 'pyodide-cdn-script';
                script.src = 'https://cdn.jsdelivr.net/pyodide/v0.26.1/full/pyodide.js';
                script.async = true;
                document.head.appendChild(script);

                await new Promise<void>((resolve, reject) => {
                    script.onload = () => resolve();
                    script.onerror = () => reject(new Error('Failed to load Pyodide script'));
                });
            } else if (!window.loadPyodide) {
                let attempts = 0;
                while (!window.loadPyodide && attempts < 40) {
                    await new Promise(r => setTimeout(r, 100));
                    attempts++;
                }
            }

            try {
                if (window.loadPyodide && !pyodideRef.current) {
                    const pyodide = await window.loadPyodide({
                        indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.26.1/full/',
                    });

                    if (isMounted) {
                        pyodideRef.current = pyodide;
                        setIsPyodideReady(true);
                    }
                }
            } catch (err) {
                console.error('Error initializing Pyodide:', err);
            }
        }

        loadScriptAndInit();

        return () => {
            isMounted = false;
        };
    }, []);

    const runPython = async (
        code: string,
        onOutput: (line: string) => void,
        onError: (errLine: string) => void
    ) => {
        if (!pyodideRef.current) {
            onError('Python runtime is initializing. Please wait a moment...');
            return;
        }

        setIsRunning(true);

        try {
            // 1. Capture stdout
            pyodideRef.current.setStdout({
                batched: (out: string) => {
                    if (out) onOutput(out);
                },
            });

            // 2. Capture stderr
            pyodideRef.current.setStderr({
                batched: (err: string) => {
                    if (err) onError(err);
                },
            });

            // 3. Handle Python input() requests synchronously via browser prompt
            pyodideRef.current.setStdin({
                stdin: () => {
                    const userInput = window.prompt('Enter input for Python program:');
                    if (userInput === null) {
                        return '\n';
                    }
                    // Echo input into the terminal display so students see what they typed
                    onOutput(`> ${userInput}\n`);
                    return userInput + '\n';
                },
                isatty: true,
            });

            await pyodideRef.current.runPythonAsync(code);
        } catch (err: any) {
            onError(err.message || String(err));
        } finally {
            setIsRunning(false);
        }
    };

    return { isPyodideReady, isRunning, runPython };
}