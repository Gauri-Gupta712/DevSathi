import React, { useState } from 'react';
import { X, Save } from 'lucide-react';

type NotesDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function NotesDrawer({ isOpen, onClose }: NotesDrawerProps) {
  const [note, setNote] = useState('Base case stops recursive calls.\n\nThings to revise:\n- recursion\n- stack overflow');

  if (!isOpen) return null;

  return (
    <div className="absolute right-6 bottom-24 w-80 glass-panel rounded-xl shadow-2xl flex flex-col z-40 border border-outline-variant/30 overflow-hidden transform transition-all">
      <div className="p-3 border-b border-outline-variant/30 flex justify-between items-center bg-surface-container-low/80">
        <h3 className="font-title-md text-primary font-bold text-[15px]">My Notes</h3>
        <button onClick={onClose} className="text-on-surface-variant hover:text-primary transition-colors">
          <X className="w-4 h-4" />
        </button>
      </div>
      <div className="p-3 bg-surface/90">
        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          className="w-full h-48 bg-transparent border-none focus:ring-0 resize-none text-[14px] text-on-surface outline-none"
          placeholder="Jot down something..."
        />
      </div>
      <div className="p-3 border-t border-outline-variant/30 bg-surface-container-lowest flex justify-end">
        <button 
          onClick={onClose}
          className="px-4 py-1.5 bg-primary text-on-primary rounded text-[13px] font-title-md hover:bg-surface-tint transition-colors flex items-center gap-1 shadow-sm"
        >
          <Save className="w-4 h-4" /> Save Note
        </button>
      </div>
    </div>
  );
}
