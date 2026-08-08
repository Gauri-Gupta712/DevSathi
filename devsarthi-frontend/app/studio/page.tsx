'use client';

import React, { useState, useRef, useEffect } from 'react';
import dynamic from 'next/dynamic';
import {
  Play,
  Upload,
  Link as LinkIcon,
  MessageSquare,
  FileCode2,
  FolderOpen,
  Settings,
  Send,
  Loader2,
  ChevronRight,
  ChevronLeft,
  X,
  Video as Youtube
} from 'lucide-react';
import Header from '../components/Header';

// Dynamically import Monaco Editor to avoid SSR issues
const MonacoEditor = dynamic(() => import('@monaco-editor/react'), { ssr: false });

type Message = {
  id: string;
  role: 'user' | 'assistant';
  content: string;
};

type FileItem = {
  name: string;
  language: string;
  content: string;
};

export default function StudioPage() {
  const [code, setCode] = useState<string>('// Welcome to DevSarthi Studio\n// Write your code here...\n\ndef bubble_sort(arr):\n    n = len(arr)\n    for i in range(n):\n        for j in range(0, n-i-1):\n            if arr[j] > arr[j+1]:\n                arr[j], arr[j+1] = arr[j+1], arr[j]\n    return arr');
  const [language, setLanguage] = useState<string>('python');
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', role: 'assistant', content: 'Namaste! Main DevSarthi hoon. Kaise help karu main aaj aapki coding mein?' }
  ]);
  const [chatInput, setChatInput] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  
  const [files, setFiles] = useState<FileItem[]>([
    { name: 'main.py', language: 'python', content: 'def main():\n    print("Hello DevSarthi")' },
    { name: 'utils.js', language: 'javascript', content: 'export const add = (a, b) => a + b;' }
  ]);
  const [activeFile, setActiveFile] = useState<string>('main.py');
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleAnalyze = async () => {
    if (!code.trim()) return;
    
    const userMsg: Message = { id: Date.now().toString(), role: 'user', content: 'Please analyze my code.' };
    setMessages(prev => [...prev, userMsg]);
    setIsAnalyzing(true);
    
    try {
      const response = await fetch('http://localhost:8000/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code, language }),
      });
      
      const data = await response.json();
      
      setMessages(prev => [...prev, { 
        id: (Date.now() + 1).toString(), 
        role: 'assistant', 
        content: data.message || 'Analysis complete. Kya aapko isme koi specific doubt hai?' 
      }]);
    } catch (error) {
      setMessages(prev => [...prev, { 
        id: (Date.now() + 1).toString(), 
        role: 'assistant', 
        content: 'Oops, backend se connect karne mein issue aaya. Please make sure the server is running on port 8000.' 
      }]);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleSendMessage = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!chatInput.trim() || isAnalyzing) return;
    
    const userPrompt = chatInput;
    const userMsg: Message = { id: Date.now().toString(), role: 'user', content: userPrompt };
    setMessages(prev => [...prev, userMsg]);
    setChatInput('');
    setIsAnalyzing(true);
    
    try {
      const response = await fetch('http://localhost:8000/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code, prompt: userPrompt, language }),
      });
      
      const data = await response.json();
      
      setMessages(prev => [...prev, { 
        id: (Date.now() + 1).toString(), 
        role: 'assistant', 
        content: data.response || data.message || 'Analysis complete. Kya aapko isme koi specific doubt hai?' 
      }]);
    } catch (error) {
      setMessages(prev => [...prev, { 
        id: (Date.now() + 1).toString(), 
        role: 'assistant', 
        content: 'Backend se connect karne mein issue aaya. Make sure FastAPI server (port 8000) and Ollama are running.' 
      }]);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target?.result as string;
        const newFile = { name: file.name, language: file.name.split('.').pop() || 'text', content };
        setFiles(prev => [...prev, newFile]);
        setActiveFile(file.name);
        setCode(content);
      };
      reader.readAsText(file);
    }
  };

  const handleYoutubeLink = () => {
    const url = prompt("Enter YouTube tutorial link:");
    if (url) {
      setMessages(prev => [...prev, { 
        id: Date.now().toString(), 
        role: 'user', 
        content: `I'm learning from this video: ${url}` 
      }]);
      setTimeout(() => {
        setMessages(prev => [...prev, { 
          id: (Date.now() + 1).toString(), 
          role: 'assistant', 
          content: 'Great! Video context has been loaded. We can discuss the concepts from the tutorial.' 
        }]);
      }, 1000);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F4F0E6] font-sans text-[#153326]">
      <Header />
      
      {/* Studio Header Bar */}
      <div className="flex items-center justify-between px-6 py-3 border-b border-[#E2DDCF] bg-[#F4F0E6] mt-16">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="font-serif font-bold text-lg text-[#1E4D3B]">DevSarthi Studio</span>
            <span className="px-2 py-0.5 rounded-full bg-[#E4DFCE] text-[#3A5A4C] text-xs font-medium border border-[#E2DDCF]">Beta</span>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <select 
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="bg-white border border-[#E2DDCF] text-[#153326] text-sm rounded-md px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-[#1E4D3B]/50"
          >
            <option value="python">Python</option>
            <option value="javascript">JavaScript</option>
            <option value="typescript">TypeScript</option>
            <option value="java">Java</option>
            <option value="cpp">C++</option>
          </select>
          
          <button 
            onClick={handleAnalyze}
            disabled={isAnalyzing}
            className="flex items-center gap-2 bg-[#1E4D3B] hover:bg-[#153326] text-white px-4 py-1.5 rounded-md font-medium text-sm transition-colors disabled:opacity-50 shadow-sm"
          >
            {isAnalyzing ? <Loader2 className="w-4 h-4 animate-spin" /> : <Play className="w-4 h-4" />}
            Analyze Code
          </button>
        </div>
      </div>

      {/* Main 3-Panel Layout */}
      <div className="flex-1 flex overflow-hidden">
        
        {/* Sidebar (Left Panel) */}
        {sidebarOpen && (
          <div className="w-64 border-r border-[#E2DDCF] bg-[#FAF7EE] flex flex-col shrink-0">
            <div className="p-4 border-b border-[#E2DDCF] flex justify-between items-center bg-[#E4DFCE]">
              <h3 className="font-serif font-bold text-[#153326] flex items-center gap-2">
                <FolderOpen className="w-4 h-4 text-[#1E4D3B]" />
                Explorer
              </h3>
            </div>
            
            <div className="flex-1 overflow-y-auto p-2">
              <div className="text-xs font-semibold text-[#6A887B] uppercase tracking-wider mb-2 px-2 mt-2">Open Files</div>
              {files.map(f => (
                <div 
                  key={f.name}
                  onClick={() => {
                    setActiveFile(f.name);
                    setCode(f.content);
                  }}
                  className={`flex items-center gap-2 px-3 py-2 rounded-md cursor-pointer text-sm mb-1 transition-colors ${activeFile === f.name ? 'bg-[#1E4D3B] text-white font-medium' : 'text-[#3A5A4C] hover:bg-[#E8E2D4]'}`}
                >
                  <FileCode2 className="w-4 h-4" />
                  {f.name}
                </div>
              ))}
            </div>
            
            <div className="p-4 border-t border-[#E2DDCF] space-y-3 bg-[#FAF7EE]">
              <div className="text-xs font-semibold text-[#6A887B] uppercase tracking-wider mb-2">Tools</div>
              
              <label className="flex items-center gap-2 w-full px-3 py-2 text-sm text-[#3A5A4C] bg-[#E8E2D4] rounded-md hover:bg-[#E4DFCE] cursor-pointer transition-colors border border-transparent hover:border-[#E2DDCF]">
                <Upload className="w-4 h-4 text-[#1E4D3B]" />
                Upload File
                <input type="file" className="hidden" onChange={handleFileUpload} />
              </label>
              
              <button onClick={handleYoutubeLink} className="flex items-center gap-2 w-full px-3 py-2 text-sm text-[#3A5A4C] bg-[#E8E2D4] rounded-md hover:bg-[#E4DFCE] transition-colors border border-transparent hover:border-[#E2DDCF]">
                <Youtube className="w-4 h-4 text-red-500" />
                Add YouTube Link
              </button>
            </div>
          </div>
        )}

        {/* Sidebar Toggle */}
        <div className="bg-[#E4DFCE] border-r border-[#E2DDCF] w-6 flex flex-col items-center py-2 shrink-0">
          <button 
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-[#6A887B] hover:text-[#1E4D3B]"
          >
            {sidebarOpen ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
          </button>
        </div>

        {/* Monaco Editor (Middle Panel) */}
        <div className="flex-1 flex flex-col min-w-0 bg-[#1e1e1e]">
          <div className="flex items-center gap-1 bg-[#252526] px-2 py-1 overflow-x-auto">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-[#1e1e1e] border-t-2 border-[#1E4D3B] text-white text-sm cursor-pointer min-w-max">
              <FileCode2 className="w-4 h-4 text-[#52B788]" />
              {activeFile}
              <button className="ml-2 hover:bg-[#333] rounded p-0.5"><X className="w-3 h-3" /></button>
            </div>
          </div>
          
          <div className="flex-1 relative">
            <MonacoEditor
              height="100%"
              language={language}
              theme="vs-dark"
              value={code}
              onChange={(value) => setCode(value || '')}
              options={{
                minimap: { enabled: false },
                fontSize: 14,
                fontFamily: "'Fira Code', 'Courier New', monospace",
                lineHeight: 24,
                padding: { top: 16 },
                scrollBeyondLastLine: false,
                smoothScrolling: true,
                cursorBlinking: 'smooth',
                cursorSmoothCaretAnimation: 'on',
                formatOnPaste: true,
              }}
            />
          </div>
        </div>

        {/* Chat Panel (Right Panel) */}
        <div className="w-[400px] border-l border-[#E2DDCF] bg-white flex flex-col shrink-0">
          <div className="p-4 border-b border-[#E2DDCF] bg-[#FAF7EE] flex justify-between items-center">
            <h3 className="font-serif font-bold text-[#153326] flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-[#1E4D3B]" />
              DevSarthi Assistant
            </h3>
            <button className="text-[#6A887B] hover:text-[#1E4D3B]">
              <Settings className="w-4 h-4" />
            </button>
          </div>
          
          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#F4F0E6]">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm shadow-sm ${
                  msg.role === 'user' 
                    ? 'bg-[#1E4D3B] text-white rounded-br-sm font-medium' 
                    : 'bg-white border border-[#E2DDCF] text-[#153326] rounded-bl-sm'
                }`}>
                  <p className="whitespace-pre-wrap leading-relaxed">{msg.content}</p>
                </div>
              </div>
            ))}
            {isAnalyzing && (
              <div className="flex justify-start">
                <div className="max-w-[85%] rounded-2xl px-4 py-3 text-sm shadow-sm bg-white border border-[#E2DDCF] text-[#153326] rounded-bl-sm flex items-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin text-[#1E4D3B]" />
                  <span className="text-[#3A5A4C]">Thinking...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          
          {/* Chat Input */}
          <div className="p-4 bg-white border-t border-[#E2DDCF]">
            <form onSubmit={handleSendMessage} className="relative">
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                placeholder="Ask about your code..."
                className="w-full bg-[#F4F0E6] border border-[#E2DDCF] rounded-full pl-4 pr-12 py-3 text-sm focus:outline-none focus:border-[#1E4D3B] focus:ring-1 focus:ring-[#1E4D3B] text-[#153326]"
              />
              <button 
                type="submit"
                disabled={!chatInput.trim() || isAnalyzing}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-[#1E4D3B] text-white rounded-full hover:bg-[#153326] transition-colors disabled:opacity-50 disabled:hover:bg-[#1E4D3B]"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
            <div className="mt-3 flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
              {['Explain this error', 'How to optimize?', 'What is a pointer?'].map(suggestion => (
                <button 
                  key={suggestion}
                  onClick={() => setChatInput(suggestion)}
                  className="shrink-0 px-3 py-1 bg-[#E8E2D4] hover:bg-[#E4DFCE] text-[#3A5A4C] text-xs font-medium rounded-full transition-colors border border-[#E2DDCF]"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
