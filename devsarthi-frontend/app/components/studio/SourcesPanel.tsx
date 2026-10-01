import React, { useState } from 'react';
import {
  PanelLeftClose,
  PanelLeftOpen,
  Search,
  Plus,
  FileText,
  PlayCircle,
  File,
  Image as ImageIcon,
  Video,
  Trash2,
  Code2,
  FolderOpen
} from 'lucide-react';
import { FileItem } from '../../studio/page';

type SourcesPanelProps = {
  subject?: string;
  topic?: string;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  files: FileItem[];
  activeFile: string;
  onFileSelect: (fileName: string) => void;
  onFileUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onYoutubeLink: () => void;
  onDeleteSource: (fileName: string) => void;
};

export default function SourcesPanel({
  subject,
  topic,
  isOpen,
  setIsOpen,
  files,
  activeFile,
  onFileSelect,
  onFileUpload,
  onYoutubeLink,
  onDeleteSource
}: SourcesPanelProps) {
  const [searchQuery, setSearchQuery] = useState('');

  // 1. Filter files based on search input
  const filteredFiles = files.filter(f =>
    f.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    f.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
    f.language.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Helper to get matching icon and clean label
  const getFileInfo = (file: FileItem) => {
    switch (file.type) {
      case 'code':
        return { Icon: Code2, label: `${file.language.toUpperCase()} File` };
      case 'pdf':
        return { Icon: FileText, label: 'PDF Document' };
      case 'image':
        return { Icon: ImageIcon, label: 'Image File' };
      case 'video':
        return { Icon: Video, label: 'Video File' };
      case 'youtube':
        return { Icon: PlayCircle, label: 'YouTube Video' };
      case 'document':
      case 'text':
        return { Icon: FileText, label: `${file.language.toUpperCase()} Doc` };
      default:
        return { Icon: File, label: `${file.language.toUpperCase()} File` };
    }
  };

  // Collapsed Sidebar View
  if (!isOpen) {
    return (
      <div className="w-full glass-panel rounded-xl flex flex-col z-10 relative overflow-hidden transition-all duration-300">
        <div className="p-4 border-b border-outline-variant/30 flex justify-center items-center">
          <button
            className="text-on-surface-variant hover:text-primary transition-colors"
            onClick={() => setIsOpen(true)}
            title="Open Sources Panel"
          >
            <PanelLeftOpen className="w-5 h-5" />
          </button>
        </div>
      </div>
    );
  }

  // Expanded Sidebar View
  return (
    <div className="w-full glass-panel rounded-xl flex flex-col z-10 relative overflow-hidden transition-all duration-300 h-full bg-[#FDF9EF] border border-[#c0c9c2]">
      {/* Header */}
      <div className="p-4 border-b border-[#c0c9c2]/40 flex justify-between items-center">
        <h2 className="font-title-md text-[#013626] font-bold text-sm tracking-wide">My Sources</h2>
        <button
          className="text-on-surface-variant hover:text-[#013626] transition-colors p-1"
          onClick={() => setIsOpen(false)}
          title="Collapse Panel"
        >
          <PanelLeftClose className="w-5 h-5" />
        </button>
      </div>

      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Action Buttons */}
        <div className="p-4 flex flex-col gap-2.5">
          <label className="w-full py-2 px-4 bg-[#013626] hover:bg-[#001f14] text-white font-medium text-xs rounded-lg flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm">
            <Plus className="w-4 h-4" />
            Add Source
            <input
              type="file"
              className="hidden"
              onChange={onFileUpload}
              accept=".py,.js,.jsx,.ts,.tsx,.java,.cpp,.c,.html,.css,.json,.pdf,.png,.jpg,.jpeg,.webp,.mp4,.webm,.txt,.md,.csv"
            />
          </label>

          <button
            onClick={onYoutubeLink}
            className="w-full py-2 px-4 bg-white hover:bg-[#f7f3e9] text-[#013626] font-medium text-xs border border-[#c0c9c2] rounded-lg flex items-center justify-center gap-2 transition-all shadow-sm"
          >
            <PlayCircle className="w-4 h-4 text-red-600" />
            Add YouTube Link
          </button>

          {files.length > 0 && (
            <div className="relative mt-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-3.5 h-3.5" />
              <input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-[#c0c9c2] rounded-lg py-1.5 pl-8 pr-3 text-xs focus:ring-1 focus:ring-[#013626] focus:outline-none placeholder:text-gray-400"
                placeholder="Search sources..."
                type="text"
              />
            </div>
          )}
        </div>

        {/* Files List with Hover Delete & Polished Empty State */}
        <div className="flex-1 overflow-y-auto px-4 pb-4 flex flex-col gap-2">
          {files.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-4 border border-dashed border-[#c0c9c2] rounded-xl bg-white/30 my-auto min-h-[180px]">
              <div className="w-10 h-10 rounded-full bg-[#f7f3e9] flex items-center justify-center mb-2">
                <FolderOpen className="w-5 h-5 text-[#013626]" />
              </div>
              <p className="text-xs font-semibold text-[#013626]">No sources added</p>
              <p className="text-[11px] text-[#4B635B] mt-1 max-w-[150px]">
                Upload study files or paste links to begin
              </p>
            </div>
          ) : filteredFiles.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center px-4 text-gray-400 min-h-[160px]">
              <p className="text-xs font-medium">No matching source found</p>
            </div>
          ) : (
            filteredFiles.map((file) => {
              const isActive = file.name === activeFile;
              const { Icon, label } = getFileInfo(file);

              return (
                <div
                  key={file.name}
                  onClick={() => onFileSelect(file.name)}
                  className={`p-2.5 rounded-lg cursor-pointer transition-all group relative flex items-center justify-between ${isActive
                    ? 'bg-white border-2 border-[#013626] shadow-sm'
                    : 'bg-white/60 hover:bg-white border border-[#c0c9c2]/50 hover:border-[#013626]/40'
                    }`}
                >
                  <div className="flex items-start gap-2.5 min-w-0 pr-2">
                    <Icon className={`w-4 h-4 mt-0.5 shrink-0 transition-colors ${isActive ? 'text-[#013626]' : 'text-gray-500 group-hover:text-[#013626]'}`} />
                    <div className="min-w-0">
                      <h3 className={`text-xs font-semibold truncate transition-colors ${isActive ? 'text-[#013626]' : 'text-gray-800 group-hover:text-[#013626]'}`}>
                        {file.name}
                      </h3>
                      <p className="text-[11px] text-[#4B635B] mt-0.5">
                        {label}
                      </p>
                    </div>
                  </div>

                  {/* Delete Button on Hover */}
                  {onDeleteSource && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onDeleteSource(file.name);
                      }}
                      className="opacity-0 group-hover:opacity-100 p-1 hover:text-red-600 text-gray-400 hover:bg-red-50 transition-all rounded"
                      title="Remove source"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}