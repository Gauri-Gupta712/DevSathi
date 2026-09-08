import React, { useState } from 'react';
import Link from 'next/link';
import {
  Bell,
  HelpCircle,
  Settings,
  BookOpen,
  Brain,
  Code2,
  X,
  Check
} from 'lucide-react';

type StudioHeaderProps = {
  subject?: string;
  topic?: string;
  activity?: 'read' | 'practice' | 'code' | null;
  onActivityChange?: (activity: 'read' | 'practice' | 'code') => void;
};

export default function StudioHeader({
  subject,
  topic,
  activity = 'code',
  onActivityChange
}: StudioHeaderProps) {
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [fontSize, setFontSize] = useState('13px');
  const [wordWrap, setWordWrap] = useState(true);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 h-16 bg-[#FDF9EF]/90 backdrop-blur-md border-b border-[#c0c9c2]/50 z-30 flex items-center justify-between px-6">
        {/* Brand & Active Topic */}
        <div className="flex items-center gap-5">
          <Link href="/" className="font-serif text-xl font-bold text-[#013626] tracking-tight hover:opacity-90">
            DevSarthi Studio
          </Link>

          {subject && topic && (
            <div className="hidden md:flex items-center gap-2 pl-4 border-l border-[#c0c9c2]/60 text-xs text-[#4B635B]">
              <span>Session:</span>
              <strong className="text-[#013626] font-medium">{subject} &middot; {topic}</strong>
            </div>
          )}
        </div>

        {/* Center: Integrated Workspace Activity Switcher */}
        {onActivityChange && (
          <div className="flex items-center bg-[#f7f3e9] border border-[#c0c9c2] p-1 rounded-lg shadow-xs">
            <button
              onClick={() => onActivityChange('read')}
              className={`flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-md transition-all ${activity === 'read'
                ? 'bg-[#013626] text-[#FDF9EF] shadow-xs'
                : 'text-[#4B635B] hover:text-[#013626]'
                }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              Read
            </button>
            <button
              onClick={() => onActivityChange('practice')}
              className={`flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-md transition-all ${activity === 'practice'
                ? 'bg-[#013626] text-[#FDF9EF] shadow-xs'
                : 'text-[#4B635B] hover:text-[#013626]'
                }`}
            >
              <Brain className="w-3.5 h-3.5" />
              Practice
            </button>
            <button
              onClick={() => onActivityChange('code')}
              className={`flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-md transition-all ${activity === 'code'
                ? 'bg-[#013626] text-[#FDF9EF] shadow-xs'
                : 'text-[#4B635B] hover:text-[#013626]'
                }`}
            >
              <Code2 className="w-3.5 h-3.5" />
              Code
            </button>
          </div>
        )}

        {/* Top-Right Utility Actions */}
        <div className="flex items-center gap-2.5">
          <button
            title="Notifications"
            className="w-9 h-9 rounded-full flex items-center justify-center text-[#4B635B] hover:text-[#013626] hover:bg-[#f7f3e9] transition-colors"
          >
            <Bell className="w-4 h-4" />
          </button>

          <button
            onClick={() => setSettingsOpen(!settingsOpen)}
            title="Workspace Settings"
            className="w-9 h-9 rounded-full flex items-center justify-center text-[#4B635B] hover:text-[#013626] hover:bg-[#f7f3e9] transition-colors"
          >
            <Settings className="w-4 h-4" />
          </button>

          <button
            title="Help & Shortcuts"
            className="w-9 h-9 rounded-full flex items-center justify-center text-[#4B635B] hover:text-[#013626] hover:bg-[#f7f3e9] transition-colors"
          >
            <HelpCircle className="w-4 h-4" />
          </button>

          <div className="w-8 h-8 rounded-full bg-[#013626] text-[#FDF9EF] text-xs font-semibold flex items-center justify-center shadow-xs ml-1">
            ST
          </div>
        </div>
      </header>

      {/* Lightweight Settings Popover Modal */}
      {settingsOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-end p-6 pt-20 bg-black/10 backdrop-blur-[1px]">
          <div className="w-80 bg-white rounded-xl border border-[#c0c9c2] shadow-xl p-5 flex flex-col gap-4 animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between pb-3 border-b border-[#c0c9c2]/50">
              <h3 className="font-serif text-sm font-bold text-[#013626] flex items-center gap-2">
                <Settings className="w-4 h-4" /> Workspace Settings
              </h3>
              <button
                onClick={() => setSettingsOpen(false)}
                className="text-gray-400 hover:text-gray-700"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="flex flex-col gap-3 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-gray-700 font-medium">Editor Font Size</span>
                <select
                  value={fontSize}
                  onChange={(e) => setFontSize(e.target.value)}
                  className="px-2 py-1 bg-[#f7f3e9] border border-[#c0c9c2] rounded text-xs text-[#013626] outline-none"
                >
                  <option value="12px">12px</option>
                  <option value="13px">13px (Default)</option>
                  <option value="14px">14px</option>
                  <option value="16px">16px</option>
                </select>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-gray-700 font-medium">Word Wrap</span>
                <button
                  onClick={() => setWordWrap(!wordWrap)}
                  className={`w-9 h-5 rounded-full p-0.5 transition-colors ${wordWrap ? 'bg-[#013626]' : 'bg-gray-300'
                    }`}
                >
                  <div
                    className={`w-4 h-4 rounded-full bg-white transition-transform ${wordWrap ? 'translate-x-4' : 'translate-x-0'
                      }`}
                  />
                </button>
              </div>

              <div className="pt-2 border-t border-[#c0c9c2]/40 flex justify-between items-center text-[11px] text-[#4B635B]">
                <span>DevSarthi Engine</span>
                <span className="px-2 py-0.5 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded font-mono">
                  Socratic v1.0
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}