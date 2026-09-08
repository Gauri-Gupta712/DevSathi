import React from 'react';
import { CloudUpload, Network, MessageSquare, Award, FileText, Terminal } from 'lucide-react';

export default function SourceLearningSection() {
  return (
    <section className="py-24 px-5 md:px-[64px] bg-surface" id="features">
      <div className="max-w-[1280px] mx-auto">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-4">Learn From Your Own Material</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Don't rely on generic web searches. Ground your AI in the exact syllabus, PDFs, and notes prescribed by your professors.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
          
          {/* Upload Panel (Spans 2 columns on desktop) */}
          <div className="md:col-span-2 bg-surface-container rounded-2xl p-8 border border-outline-variant/20 flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-shadow reveal" style={{ transitionDelay: '0.1s' }}>
            <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-surface-container-high rounded-full opacity-50 group-hover:scale-110 transition-transform duration-700"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-surface rounded-xl flex items-center justify-center text-primary mb-6 shadow-sm border border-outline-variant/10">
                <CloudUpload className="w-6 h-6" />
              </div>
              <h3 className="font-title-md text-title-md text-on-surface mb-2">1. Secure Local Upload</h3>
              <p className="font-body-md text-on-surface-variant max-w-sm">Drag and drop PDFs, code files, or text. Everything stays local. No data is sent to external servers.</p>
            </div>
            <div className="mt-4 flex gap-2 relative z-10">
              <div className="px-3 py-1.5 bg-surface rounded text-[12px] font-label-caps text-on-surface-variant border border-outline-variant/30 flex items-center gap-1">
                <FileText className="w-[14px] h-[14px]" /> .PDF
              </div>
              <div className="px-3 py-1.5 bg-surface rounded text-[12px] font-label-caps text-on-surface-variant border border-outline-variant/30 flex items-center gap-1">
                <Terminal className="w-[14px] h-[14px]" /> .PY, .C, .JAVA
              </div>
            </div>
          </div>
          
          {/* Understand Panel */}
          <div className="bg-primary text-on-primary rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden inner-glow shadow-md reveal" style={{ transitionDelay: '0.2s' }}>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-tertiary/40 to-transparent"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-primary-container rounded-xl flex items-center justify-center text-primary-fixed mb-6">
                <Network className="w-6 h-6" />
              </div>
              <h3 className="font-title-md text-title-md mb-2">2. Context Creation</h3>
              <p className="font-body-md text-on-primary/80">DevSarthi builds a private knowledge graph from your materials.</p>
            </div>
          </div>
          
          {/* Ask Panel */}
          <div className="bg-surface-container-low rounded-2xl p-8 border border-outline-variant/20 flex flex-col justify-between reveal" style={{ transitionDelay: '0.3s' }}>
            <div className="w-12 h-12 bg-secondary-container rounded-xl flex items-center justify-center text-secondary mb-6">
              <MessageSquare className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-title-md text-title-md text-on-surface mb-2">3. Socratic Query</h3>
              <p className="font-body-md text-on-surface-variant">Ask questions. Get guided back to specific pages in your own notes.</p>
            </div>
          </div>
          
          {/* Master Panel (Spans 2 columns) */}
          <div className="md:col-span-2 bg-inverse-surface text-inverse-on-surface rounded-2xl p-8 flex items-center justify-between overflow-hidden relative shadow-lg reveal" style={{ transitionDelay: '0.4s' }}>
            <div className="absolute left-0 top-0 w-full h-full bg-grid-pattern opacity-10"></div>
            <div className="relative z-10 max-w-md">
              <div className="w-12 h-12 bg-surface-tint/30 rounded-xl flex items-center justify-center text-secondary-fixed mb-6 border border-surface-tint">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-title-md text-title-md mb-2">4. Master the Syllabus</h3>
              <p className="font-body-md text-inverse-on-surface/70">Bridge the gap between practical coding errors and academic theory. Ace vivas and practical exams with deep understanding.</p>
            </div>
            <div className="hidden md:block relative z-10">
              {/* Decorative abstract representation of mastering */}
              <div className="w-32 h-32 rounded-full border-4 border-secondary-fixed/20 flex items-center justify-center relative">
                <div className="absolute w-24 h-24 rounded-full border-4 border-secondary-fixed/40 border-t-secondary-fixed animate-spin" style={{ animationDuration: '3s' }}></div>
                <Award className="w-10 h-10 text-secondary-fixed" />
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
