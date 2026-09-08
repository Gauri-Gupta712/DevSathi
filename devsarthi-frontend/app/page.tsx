'use client';

import React, { useState, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import StudioHeader from './components/studio/StudioHeader';
import SourcesPanel from './components/studio/SourcesPanel';
import LearningWorkspace, { WorkspaceMode } from './components/studio/LearningWorkspace';
import TutorPanel from './components/studio/TutorPanel';
import NotesDrawer from './components/studio/NotesDrawer';
import { Edit3, Dumbbell, Settings } from 'lucide-react';

type Message = {
  id: string;
  role: 'user' | 'assistant';
  content: string;
};

export type SourceType = "code" | "image" | "pdf" | "document" | "text" | "video" | "youtube" | "unknown";

export type FileItem = {
  name: string;
  type: SourceType;
  language: string;
  content: string;
};

export default function StudioPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#FDF9EF] flex items-center justify-center">Loading Studio...</div>}>
      <StudioContent />
    </Suspense>
  );
}

function StudioContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const subject = searchParams?.get('subject') || '';
  const topic = searchParams?.get('topic') || '';

  const hasSession = Boolean(subject && topic);

  const [code, setCode] = useState<string>('// Welcome to DevSarthi Studio\n// Write your code here...\n\ndef bubble_sort(arr):\n    n = len(arr)\n    for i in range(n):\n        for j in range(0, n-i-1):\n            if arr[j] > arr[j+1]:\n                arr[j], arr[j+1] = arr[j+1], arr[j]\n    return arr');
  const [language, setLanguage] = useState<string>('python');

  const initialMessages: Message[] = hasSession ? [
    { id: '1', role: 'assistant', content: 'Hello! I am DevSarthi. How can I help you with your coding today?' }
  ] : [
    { id: '1', role: 'assistant', content: 'Your Socratic learning guide.\n\nAdd a source or start a learning activity, and I\'ll help you understand it step by step.' }
  ];

  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [chatInput, setChatInput] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const initialFiles: FileItem[] = hasSession ? [
    { name: 'main.py', type: 'code', language: 'python', content: 'def main():\n    print("Hello DevSarthi")' },
    { name: 'utils.js', type: 'code', language: 'javascript', content: 'export const add = (a, b) => a + b;' }
  ] : [];

  const [files, setFiles] = useState<FileItem[]>(initialFiles);
  const [activeFile, setActiveFile] = useState<string>(hasSession ? 'main.py' : '');

  const [sourcesOpen, setSourcesOpen] = useState(true);
  const [tutorOpen, setTutorOpen] = useState(true);
  const [workspaceMode, setWorkspaceMode] = useState<WorkspaceMode>(hasSession ? 'entry' : 'welcome');
  const [notesOpen, setNotesOpen] = useState(false);

  type Activity = 'read' | 'practice' | 'code' | null;
  const [sessionActivity, setSessionActivity] = useState<Activity>(null);

  React.useEffect(() => {
    setSessionActivity(null);
  }, [subject, topic]);

  const handleActivitySelect = (activity: Activity) => {
    setSessionActivity(activity);
    if (activity === 'read') setWorkspaceMode('viewer');
    else if (activity === 'practice') setWorkspaceMode('practice');
    else if (activity === 'code') setWorkspaceMode('editor');
  };

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
        content: data.message || 'Analysis complete. Do you have any specific doubts?'
      }]);
    } catch (error) {
      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: 'Oops, backend se connect karne mein issue aaya. Please make sure the server is running on port 8000.'
      }]);
    } finally {
      setIsAnalyzing(false);
      if (!tutorOpen) setTutorOpen(true);
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
        content: data.response || data.message || 'Analysis complete. Do you have any specific doubts?'
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

  // UPDATED: Proper detection for code files, PDFs, videos, and images
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const ext = file.name.split('.').pop()?.toLowerCase() || '';
    let sourceType: SourceType = 'unknown';

    const codeExtensions = [
      'py', 'js', 'jsx', 'ts', 'tsx', 'html', 'css', 'json',
      'java', 'c', 'cpp', 'cs', 'go', 'rs', 'php', 'rb', 'sql', 'sh'
    ];

    if (codeExtensions.includes(ext)) {
      sourceType = 'code';
    } else if (file.type.startsWith('image/') || ['png', 'jpg', 'jpeg', 'gif', 'webp', 'svg'].includes(ext)) {
      sourceType = 'image';
    } else if (file.type === 'application/pdf' || ext === 'pdf') {
      sourceType = 'pdf';
    } else if (file.type.startsWith('video/') || ['mp4', 'webm', 'mov', 'mkv'].includes(ext)) {
      sourceType = 'video';
    } else if (['doc', 'docx', 'csv', 'md', 'rtf'].includes(ext)) {
      sourceType = 'document';
    } else if (file.type.startsWith('text/') || ext === 'txt') {
      sourceType = 'text';
    } else {
      sourceType = 'code';
    }

    // Binary media preview handling
    if (['image', 'pdf', 'video'].includes(sourceType)) {
      const objectUrl = URL.createObjectURL(file);
      const newFile: FileItem = {
        name: file.name,
        type: sourceType,
        language: ext || 'binary',
        content: objectUrl
      };

      setFiles(prev => [...prev, newFile]);
      setActiveFile(file.name);
      setCode(objectUrl);
      setWorkspaceMode('viewer');
      return;
    }

    // Text and Code files reading
    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      const lang = ext === 'py' ? 'python' : ext === 'js' ? 'javascript' : ext === 'ts' ? 'typescript' : ext || 'text';
      const newFile: FileItem = {
        name: file.name,
        type: sourceType,
        language: lang,
        content
      };
      setFiles(prev => [...prev, newFile]);
      setActiveFile(file.name);
      setCode(content);
      setLanguage(lang);

      if (sessionActivity) {
        if (sessionActivity === 'read') setWorkspaceMode('viewer');
        else if (sessionActivity === 'practice') setWorkspaceMode('practice');
        else if (sessionActivity === 'code') setWorkspaceMode('editor');
      } else {
        setWorkspaceMode('entry');
      }
    };
    reader.readAsText(file);
  };

  const handleStartSession = (newSubject: string, newTopic: string) => {
    const params = new URLSearchParams(searchParams?.toString() || '');
    params.set('subject', newSubject);
    params.set('topic', newTopic);
    router.push(`/studio?${params.toString()}`);
  };

  const handleYoutubeLink = () => {
    const url = prompt("Enter YouTube tutorial link:");
    if (url) {
      const newFile: FileItem = {
        name: `YouTube Video ${files.length + 1}`,
        type: 'youtube',
        language: 'video',
        content: url
      };
      setFiles(prev => [...prev, newFile]);
      setActiveFile(newFile.name);
      setCode(url);

      if (sessionActivity) {
        if (sessionActivity === 'read') setWorkspaceMode('viewer');
        else if (sessionActivity === 'practice') setWorkspaceMode('practice');
        else if (sessionActivity === 'code') setWorkspaceMode('editor');
      } else {
        setWorkspaceMode('entry');
      }

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
      if (!tutorOpen) setTutorOpen(true);
    }
  };

  const handleFileSelect = (fileName: string) => {
    setActiveFile(fileName);
    const selected = files.find(f => f.name === fileName);
    if (selected) {
      setCode(selected.content);
      const lang = selected.language === 'py' ? 'python' : selected.language === 'js' ? 'javascript' : selected.language;
      setLanguage(lang);
    }

    if (sessionActivity) {
      if (sessionActivity === 'read') setWorkspaceMode('viewer');
      else if (sessionActivity === 'practice') setWorkspaceMode('practice');
      else if (sessionActivity === 'code') setWorkspaceMode('editor');
    } else {
      setWorkspaceMode('entry');
    }
  };

  const handleDeleteSource = (fileName: string) => {
    const updatedFiles = files.filter(f => f.name !== fileName);
    setFiles(updatedFiles);
    if (activeFile === fileName) {
      if (updatedFiles.length > 0) {
        handleFileSelect(updatedFiles[0].name);
      } else {
        setActiveFile('');
        setCode('');
        setWorkspaceMode('welcome');
      }
    }
  };

  const activeFileObj = files.find(f => f.name === activeFile);
  const activeFileType = activeFileObj?.type || 'unknown';

  return (
    <div className="flex flex-col min-h-screen bg-[#FDF9EF] font-body-md text-[#1c1c16] overflow-hidden">
      <StudioHeader subject={subject} topic={topic} />

      <main
        className="mt-16 flex-1 grid h-[calc(100vh-4rem)] p-4 gap-4 overflow-hidden relative"
        style={{
          gridTemplateColumns: `${sourcesOpen ? 'minmax(240px, 280px)' : '48px'} minmax(0, 1fr) ${tutorOpen ? 'minmax(300px, 340px)' : '0px'}`
        }}
      >
        <div className="absolute inset-0 pointer-events-none opacity-5" style={{ backgroundImage: 'radial-gradient(#013626 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

        <SourcesPanel
          subject={subject}
          topic={topic}
          isOpen={sourcesOpen}
          setIsOpen={setSourcesOpen}
          files={files}
          activeFile={activeFile}
          onFileSelect={handleFileSelect}
          onFileUpload={handleFileUpload}
          onYoutubeLink={handleYoutubeLink}
          onDeleteSource={handleDeleteSource}
        />

        <LearningWorkspace
          mode={workspaceMode}
          setMode={setWorkspaceMode}
          code={code}
          setCode={setCode}
          language={language}
          activeFile={activeFile}
          activeFileType={activeFileType}
          onAnalyze={handleAnalyze}
          isAnalyzing={isAnalyzing}
          subject={subject}
          topic={topic}
          onFileUpload={handleFileUpload}
          onStartSession={handleStartSession}
          onActivitySelect={handleActivitySelect}
        />

        <TutorPanel
          subject={subject}
          topic={topic}
          isOpen={tutorOpen}
          messages={messages}
          chatInput={chatInput}
          setChatInput={setChatInput}
          isAnalyzing={isAnalyzing}
          onSendMessage={handleSendMessage}
        />

        {workspaceMode !== 'entry' && workspaceMode !== 'welcome' && (
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 glass-panel p-1.5 rounded-full shadow-lg bg-surface/80 backdrop-blur-md border border-outline-variant/30">
            <button
              onClick={() => setNotesOpen(!notesOpen)}
              className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container hover:text-primary transition-colors"
              title="Notes"
            >
              <Edit3 className="w-5 h-5" />
            </button>

            <div className="w-px h-6 bg-outline-variant/50"></div>

            <select
              value={sessionActivity || 'code'}
              onChange={(e) => handleActivitySelect(e.target.value as Activity)}
              className="px-4 h-10 rounded-full flex items-center gap-2 text-primary bg-primary-container/10 hover:bg-primary-container/20 font-title-md text-[14px] transition-colors border border-primary/20 outline-none cursor-pointer appearance-none text-center"
              style={{ textAlignLast: 'center' }}
            >
              <option value="read">Activity: Read</option>
              <option value="practice">Activity: Practice</option>
              <option value="code">Activity: Code</option>
            </select>

            <div className="w-px h-6 bg-outline-variant/50"></div>

            <button
              className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container hover:text-primary transition-colors"
              title="Settings"
            >
              <Settings className="w-5 h-5" />
            </button>
          </div>
        )}

        <NotesDrawer isOpen={notesOpen} onClose={() => setNotesOpen(false)} />
      </main>
    </div>
  );
}