import React, { useRef, useEffect, useState } from 'react';
import {
  Brain,
  Lightbulb,
  BookOpen,
  FileCheck,
  PlusCircle,
  Send,
  Loader2,
  Edit3,
  Copy,
  Trash2,
  Sparkles,
  Check
} from 'lucide-react';

type Message = {
  id: string;
  role: 'user' | 'assistant';
  content: string;
};

type TutorPanelProps = {
  subject?: string;
  topic?: string;
  isOpen: boolean;
  messages: Message[];
  chatInput: string;
  setChatInput: (val: string) => void;
  isAnalyzing: boolean;
  onSendMessage: (e?: React.FormEvent) => void;
  onQuickPrompt?: (promptText: string) => void;
};

export default function TutorPanel({
  subject,
  topic,
  isOpen,
  messages,
  chatInput,
  setChatInput,
  isAnalyzing,
  onSendMessage,
  onQuickPrompt
}: TutorPanelProps) {
  // 1. ALL HOOKS AT THE TOP (NO EARLY RETURNS)
  const [activeTab, setActiveTab] = useState<'chat' | 'notes'>('chat');
  const [notes, setNotes] = useState<string>('');
  const [copied, setCopied] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Load persistent notes per subject and topic
  useEffect(() => {
    const storageKey = `devsarthi_notes_${subject || 'general'}_${topic || 'scratchpad'}`;
    const saved = localStorage.getItem(storageKey);
    if (saved) {
      setNotes(saved);
    } else {
      setNotes('');
    }
  }, [subject, topic]);

  // Save notes on edit
  const handleNoteChange = (text: string) => {
    setNotes(text);
    const storageKey = `devsarthi_notes_${subject || 'general'}_${topic || 'scratchpad'}`;
    localStorage.setItem(storageKey, text);
  };

  // Auto-scroll chat to latest message
  useEffect(() => {
    if (activeTab === 'chat') {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen, activeTab]);

  const handleCopyNotes = () => {
    navigator.clipboard.writeText(notes);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const handleClearNotes = () => {
    if (confirm('Are you sure you want to clear your notes for this session?')) {
      handleNoteChange('');
    }
  };

  // 2. RENDER EMPTY CONTAINER IF CLOSED (maintains identical hook order)
  if (!isOpen) {
    return <div className="hidden" aria-hidden="true" />;
  }

  return (
    <div className="w-full glass-card rounded-xl flex flex-col z-10 relative overflow-hidden h-full shadow-sm border border-outline-variant/30 bg-[#FDF9EF]">
      {/* Header with Dual Tabs: Tutor & Notes */}
      <div className="p-3 border-b border-outline-variant/30 flex justify-between items-center bg-[#f7f3e9]">
        <div className="flex items-center gap-1 bg-white/80 p-0.5 rounded-lg border border-[#c0c9c2]/60">
          <button
            onClick={() => setActiveTab('chat')}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold transition-all ${activeTab === 'chat'
                ? 'bg-[#013626] text-[#FDF9EF] shadow-xs'
                : 'text-[#4B635B] hover:text-[#013626]'
              }`}
          >
            <Brain className="w-3.5 h-3.5" />
            Tutor
          </button>
          <button
            onClick={() => setActiveTab('notes')}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold transition-all ${activeTab === 'notes'
                ? 'bg-[#013626] text-[#FDF9EF] shadow-xs'
                : 'text-[#4B635B] hover:text-[#013626]'
              }`}
          >
            <Edit3 className="w-3.5 h-3.5" />
            Notes
          </button>
        </div>

        {subject && topic ? (
          <div className="flex items-center gap-1.5 text-[11px] font-semibold text-[#013626] bg-[#e6eee9] px-2 py-0.5 rounded-full border border-[#013626]/20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse"></span>
            Context Active
          </div>
        ) : (
          <div className="flex items-center gap-1.5 text-[11px] text-[#4B635B] bg-[#ece8dc] px-2 py-0.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
            Ready
          </div>
        )}
      </div>

      {/* TAB 1: TUTOR CHAT */}
      {activeTab === 'chat' ? (
        <>
          <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3 bg-[#FDF9EF]/50">
            {messages.map((msg, idx) => (
              <div key={msg.id} className={`flex flex-col gap-1 ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                <div className={`text-[10px] font-bold uppercase tracking-wider text-gray-400 ${msg.role === 'user' ? 'mr-1' : 'ml-1'}`}>
                  {msg.role === 'user' ? 'You' : 'DevSarthi'}
                </div>

                <div
                  className={`rounded-2xl p-3 text-xs leading-relaxed max-w-[90%] shadow-xs ${msg.role === 'user'
                      ? 'bg-[#013626] text-[#FDF9EF] rounded-tr-xs'
                      : 'bg-white border border-[#c0c9c2]/50 text-gray-800 rounded-tl-xs'
                    }`}
                >
                  <p className="whitespace-pre-wrap">{msg.content}</p>
                </div>

                {/* Quick Prompts */}
                {msg.role === 'assistant' && idx === 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    <button
                      onClick={() => onQuickPrompt?.('Give me a small Socratic hint on this logic.')}
                      className="px-2.5 py-1 border border-[#013626]/30 rounded-full text-[11px] font-medium text-[#013626] bg-[#f7f3e9] hover:bg-[#ece8dc] transition-colors flex items-center gap-1"
                    >
                      <Lightbulb className="w-3 h-3 text-amber-600" /> Give Me a Hint
                    </button>
                    <button
                      onClick={() => onQuickPrompt?.('Can you explain the conceptual theory behind this?')}
                      className="px-2.5 py-1 border border-[#c0c9c2] rounded-full text-[11px] font-medium text-[#4B635B] bg-white hover:bg-[#f7f3e9] transition-colors flex items-center gap-1"
                    >
                      <BookOpen className="w-3 h-3 text-blue-600" /> Explain Concept
                    </button>
                    <button
                      onClick={() => onQuickPrompt?.('Please review the algorithmic correctness and flow of my logic.')}
                      className="px-2.5 py-1 border border-[#c0c9c2] rounded-full text-[11px] font-medium text-[#4B635B] bg-white hover:bg-[#f7f3e9] transition-colors flex items-center gap-1"
                    >
                      <FileCheck className="w-3 h-3 text-emerald-600" /> Review Logic
                    </button>
                  </div>
                )}
              </div>
            ))}

            {isAnalyzing && (
              <div className="flex flex-col gap-1 items-start mt-2">
                <div className="text-[10px] font-bold uppercase tracking-wider text-gray-400 ml-1">DevSarthi</div>
                <div className="bg-white border border-[#c0c9c2]/50 rounded-2xl rounded-tl-xs p-3 text-xs text-gray-700 shadow-xs flex items-center gap-2">
                  <Loader2 className="w-3.5 h-3.5 animate-spin text-[#013626]" />
                  Thinking...
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Chat Input */}
          <div className="p-3 border-t border-[#c0c9c2]/50 bg-white">
            <form
              onSubmit={onSendMessage}
              className="relative flex items-center gap-2 bg-[#FDF9EF]/80 border border-[#c0c9c2] rounded-xl p-1.5 focus-within:border-[#013626] focus-within:ring-1 focus-within:ring-[#013626] transition-all"
            >
              <textarea
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    onSendMessage(e);
                  }
                }}
                className="flex-1 bg-transparent border-none focus:ring-0 resize-none py-1 px-2 text-xs outline-none max-h-24 text-gray-800"
                placeholder="Ask DevSarthi a question..."
                rows={1}
              />

              <button
                type="submit"
                disabled={!chatInput.trim() || isAnalyzing}
                className="p-1.5 bg-[#013626] text-white rounded-lg hover:bg-[#001f14] transition-colors disabled:opacity-30 shrink-0"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </>
      ) : (
        /* TAB 2: PERSISTENT NOTES SCRATCHPAD */
        <div className="flex-1 flex flex-col p-4 bg-[#FDF9EF]/40">
          <div className="flex items-center justify-between pb-2 border-b border-[#c0c9c2]/40 mb-3">
            <span className="text-[11px] font-semibold text-[#4B635B]">
              Session Notes &middot; {subject || 'General'}
            </span>
            <div className="flex items-center gap-1.5">
              <button
                onClick={handleCopyNotes}
                title="Copy notes"
                className="p-1 rounded text-gray-500 hover:text-[#013626] hover:bg-[#ece8dc] transition-colors"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
              <button
                onClick={handleClearNotes}
                title="Clear notes"
                className="p-1 rounded text-gray-500 hover:text-red-600 hover:bg-red-50 transition-colors"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <textarea
            value={notes}
            onChange={(e) => handleNoteChange(e.target.value)}
            placeholder="Write key concepts, pseudocode, or questions to remember..."
            className="flex-1 w-full text-xs font-sans leading-relaxed p-3 bg-white border border-[#c0c9c2] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#013626] resize-none"
          />

          <div className="pt-3">
            <button
              onClick={() => {
                if (!notes.trim()) return;
                setActiveTab('chat');
                onQuickPrompt?.(`Here are my session notes:\n\n${notes}\n\nCan you quiz me on these key concepts?`);
              }}
              disabled={!notes.trim()}
              className="w-full py-2 bg-[#013626] text-white text-xs font-semibold rounded-lg hover:bg-[#001f14] transition-all flex items-center justify-center gap-1.5 disabled:opacity-40 shadow-xs"
            >
              <Sparkles className="w-3.5 h-3.5" /> Quiz Me on My Notes
            </button>
          </div>
        </div>
      )}
    </div>
  );
}