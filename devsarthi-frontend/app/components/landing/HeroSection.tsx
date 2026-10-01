'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { PlayCircle, ArrowRight, PlusCircle, FileText, File, AlertCircle, Bot, Lightbulb, GraduationCap, Send } from 'lucide-react';

export default function HeroSection() {
  const fullText = "Let's look at the loop condition in line 3. What happens when `i` reaches the value of `len(arr)`?";
  const [typedText, setTypedText] = useState("");
  const [showHint, setShowHint] = useState(false);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let index = 0;
          setTypedText("");
          setShowHint(false);
          const interval = setInterval(() => {
            if (index < fullText.length) {
              setTypedText(fullText.substring(0, index + 1));
              index++;
            } else {
              clearInterval(interval);
              setTimeout(() => setShowHint(true), 400); // slight delay for hint
            }
          }, 35);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (terminalRef.current) {
      observer.observe(terminalRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative pt-24 pb-32 px-5 md:px-[64px] overflow-hidden bg-grid-pattern">
      {/* Abstract background blur blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary-container rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary-fixed-dim rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      
      <div className="max-w-[1280px] mx-auto relative z-10 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-container-high border border-outline-variant/30 text-on-surface-variant mb-8">
          <GraduationCap className="w-4 h-4 text-secondary" />
          <span className="font-label-caps text-label-caps tracking-widest uppercase">Built for Mumbai University</span>
        </div>
        
        <h1 className="font-display-lg text-display-lg text-primary mb-6 max-w-4xl tracking-tight leading-tight">
          Learn Smarter. Code Deeper. <br /> <span className="text-secondary">Think for Yourself.</span>
        </h1>
        
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-12">
          The AI learning workspace that doesn't just give you answers. DevSarthi uses Socratic dialogue and your actual syllabus materials to help you understand the 'why' behind the code.
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center mb-24">
          <Link href="/workspace" className="bg-primary text-on-primary px-8 py-4 rounded-lg font-title-md text-title-md hover:bg-tertiary-container transition-colors duration-300 inner-glow shadow-md flex items-center gap-2">
            Enter Workspace
            <ArrowRight className="w-5 h-5" />
          </Link>
          <button className="px-8 py-4 rounded-lg font-title-md text-title-md text-primary border border-outline hover:bg-surface-container transition-colors duration-300 flex items-center gap-2">
            Watch Demo
            <PlayCircle className="w-5 h-5" />
          </button>
        </div>

        {/* 3-Panel Workspace Preview */}
        <div className="w-full max-w-6xl mx-auto relative perspective-1000" ref={terminalRef}>
          <div className="absolute -inset-1 bg-gradient-to-r from-secondary-container via-primary-fixed to-secondary-fixed rounded-2xl blur opacity-20"></div>
          
          <div className="relative glass-panel rounded-2xl overflow-hidden flex flex-col md:flex-row h-[600px] border border-outline-variant/30 ambient-shadow transition-all duration-700 translate-y-0 opacity-100">
            
            {/* Left: Sources Panel */}
            <div className="w-full md:w-64 bg-surface-container-lowest/80 border-r border-outline-variant/20 p-4 flex flex-col gap-4 overflow-y-auto hidden md:flex">
              <div className="flex items-center justify-between mb-2">
                <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Your Sources</span>
                <PlusCircle className="w-[18px] h-[18px] text-on-surface-variant cursor-pointer hover:text-primary transition-colors" />
              </div>
              
              <div className="bg-surface rounded-lg p-3 border border-outline-variant/30 shadow-sm cursor-pointer hover:border-primary/50 transition-colors flex items-start gap-3 hover:scale-105 hover:shadow-md transition-all duration-300">
                <div className="p-2 bg-error-container rounded text-on-error-container shrink-0">
                  <FileText className="w-[20px] h-[20px]" />
                </div>
                <div>
                  <h4 className="font-title-md text-[14px] leading-tight text-on-surface mb-1 truncate">Python Programming.pdf</h4>
                  <p className="font-body-md text-[12px] text-on-surface-variant">MU Sem 3 • 4.2 MB</p>
                </div>
              </div>
              
              <div className="bg-surface-container-low rounded-lg p-3 border border-transparent shadow-sm cursor-pointer hover:border-outline-variant/50 transition-colors flex items-start gap-3 opacity-70 hover:scale-105 hover:shadow-md transition-all duration-300">
                <div className="p-2 bg-secondary-container rounded text-secondary shrink-0">
                  <File className="w-[20px] h-[20px]" />
                </div>
                <div>
                  <h4 className="font-title-md text-[14px] leading-tight text-on-surface mb-1 truncate">Data Structures Lab</h4>
                  <p className="font-body-md text-[12px] text-on-surface-variant">Experiment 4 notes</p>
                </div>
              </div>
            </div>

            {/* Center: Code Editor */}
            <div className="flex-1 glass-panel-dark flex flex-col border-r border-outline-variant/10 shadow-[0_0_50px_-12px_rgba(160,209,185,0.3)]">
              <div className="h-10 border-b border-outline-variant/10 flex items-center px-4 gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-error"></div>
                  <div className="w-3 h-3 rounded-full bg-secondary-container"></div>
                  <div className="w-3 h-3 rounded-full bg-primary-fixed"></div>
                </div>
                <span className="font-code-sm text-code-sm text-surface-variant/60 ml-4">main.py</span>
              </div>
              
              <div className="p-6 font-code-sm text-code-sm text-surface-bright overflow-y-auto h-full relative text-left">
                <div className="text-secondary-fixed-dim opacity-50 mb-2"># Array iteration challenge</div>
                <div className="flex"><span className="w-8 text-surface-variant/30 select-none">1</span><span className="text-[#c678dd]">def</span>&nbsp;<span className="text-[#61afef]">process_data</span><span className="text-surface-bright">(</span><span className="text-[#e06c75]">arr</span><span className="text-surface-bright">):</span></div>
                <div className="flex"><span className="w-8 text-surface-variant/30 select-none">2</span>&nbsp;&nbsp;&nbsp;&nbsp;total&nbsp;=&nbsp;<span className="text-[#d19a66]">0</span></div>
                <div className="flex"><span className="w-8 text-surface-variant/30 select-none">3</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#c678dd]">for</span>&nbsp;i&nbsp;<span className="text-[#c678dd]">in</span>&nbsp;<span className="text-[#56b6c2]">range</span>(<span className="text-[#56b6c2]">len</span>(arr)&nbsp;+&nbsp;<span className="text-[#d19a66]">1</span>):</div>
                
                <div className="flex relative">
                  <span className="w-8 text-error/80 select-none font-bold">4</span> 
                  <span className="relative z-10">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;total&nbsp;+=&nbsp;arr[i]&nbsp;&nbsp;<span className="text-surface-variant/50"># Calculating sum</span></span>
                  <div className="absolute inset-0 bg-error/20 -mx-6 px-6 border-l-2 border-error pointer-events-none animate-pulse"></div>
                </div>
                
                <div className="flex"><span className="w-8 text-surface-variant/30 select-none">5</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#c678dd]">return</span>&nbsp;total</div>
                <div className="flex"><span className="w-8 text-surface-variant/30 select-none">6</span></div>
                <div className="flex"><span className="w-8 text-surface-variant/30 select-none">7</span>data&nbsp;=&nbsp;[<span className="text-[#d19a66]">10</span>,&nbsp;<span className="text-[#d19a66]">20</span>,&nbsp;<span className="text-[#d19a66]">30</span>,&nbsp;<span className="text-[#d19a66]">40</span>]</div>
                <div className="flex"><span className="w-8 text-surface-variant/30 select-none">8</span><span className="text-[#56b6c2]">print</span>(process_data(data))</div>
                
                {/* Error Toast in Editor */}
                <div className="absolute bottom-6 left-6 right-6 bg-error-container/10 border border-error/30 rounded p-3 backdrop-blur-md">
                  <span className="font-code-sm text-code-sm text-error flex items-center gap-2">
                    <AlertCircle className="w-[16px] h-[16px]" />
                    IndexError: list index out of range
                  </span>
                </div>
              </div>
            </div>

            {/* Right: AI Chat Panel */}
            <div className="w-full md:w-80 bg-surface/90 flex flex-col p-4 relative overflow-hidden text-left h-full max-h-[300px] md:max-h-full">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-secondary-container/20 via-surface to-surface-container-low pointer-events-none"></div>
              
              <div className="flex items-center gap-2 mb-6 relative z-10 border-b border-outline-variant/20 pb-3">
                <div className="w-8 h-8 rounded bg-primary text-on-primary flex items-center justify-center inner-glow shadow-sm">
                  <Bot className="w-[18px] h-[18px]" />
                </div>
                <span className="font-title-md text-[16px] text-primary">DevSarthi AI</span>
              </div>
              
              <div className="flex-1 overflow-y-auto space-y-4 relative z-10 pr-2 pb-16">
                {/* User Message */}
                <div className="bg-surface-container p-3 rounded-lg rounded-tr-sm ml-6 border border-outline-variant/10 shadow-sm hover:scale-[1.02] hover:shadow-md transition-all">
                  <p className="font-body-md text-[14px] text-on-surface">I'm getting an IndexError on line 4. Why?</p>
                </div>
                
                {/* AI Response */}
                <div className="flex gap-3 mr-4">
                  <div className="w-6 h-6 rounded bg-primary-container text-on-primary-container flex items-center justify-center shrink-0 mt-1">
                    <Bot className="w-[14px] h-[14px]" />
                  </div>
                  <div className="space-y-3">
                    <div className="bg-surface-container-lowest p-3 rounded-lg rounded-tl-sm border border-outline-variant/30 shadow-sm hover:scale-[1.02] hover:shadow-md transition-all">
                      <p className="font-body-md text-[14px] text-on-surface mb-2">
                        {typedText}
                        {!showHint && <span className="inline-block w-1.5 h-3 ml-1 bg-primary animate-pulse align-middle"></span>}
                      </p>
                      {showHint && (
                        <code className="block bg-inverse-surface text-inverse-on-surface p-2 rounded text-[12px] font-code-sm mt-2 animate-fadeIn">
                          for i in range(len(arr) + 1):
                        </code>
                      )}
                    </div>
                    {showHint && (
                      <div className="inline-flex items-center gap-1.5 px-2 py-1 rounded bg-secondary-container/30 text-tertiary-fixed-variant text-[12px] font-label-caps cursor-pointer hover:bg-secondary-container/50 transition-colors animate-fadeIn">
                        <Lightbulb className="w-[14px] h-[14px]" />
                        Hint: Array indices are zero-based.
                      </div>
                    )}
                  </div>
                </div>
              </div>
              
              {/* Chat Input Area */}
              <div className="absolute bottom-4 left-4 right-4 bg-surface border border-outline-variant/40 rounded-lg shadow-sm flex items-center p-1 z-10">
                <input 
                  className="w-full bg-transparent border-none focus:outline-none font-body-md text-[14px] px-3 py-2 text-on-surface placeholder:text-on-surface-variant/50" 
                  placeholder="Type your answer..." 
                  type="text" 
                />
                <button className="p-2 text-primary hover:bg-surface-container rounded-md transition-colors">
                  <Send className="w-[20px] h-[20px]" />
                </button>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
