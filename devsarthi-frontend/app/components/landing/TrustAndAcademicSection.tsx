import React from 'react';
import { ShieldOff, Server } from 'lucide-react';

export default function TrustAndAcademicSection() {
  return (
    <section className="py-16 px-5 md:px-[64px] border-t border-outline-variant/10 bg-surface reveal">
      <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        <div className="flex flex-col gap-4 reveal" style={{ transitionDelay: '0.1s' }}>
          <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">Trusted Architecture</span>
          <div className="flex gap-4">
            <div className="group flex items-center gap-2 px-4 py-2 bg-surface-container rounded border border-outline-variant/20 shadow-sm hover:-translate-y-1 hover:shadow-md hover:border-primary/50 cursor-pointer transition-all duration-300">
              <ShieldOff className="text-primary transition-transform duration-300 group-hover:scale-110 w-5 h-5" />
              <span className="font-body-md font-semibold text-on-surface">No API Keys Required</span>
            </div>
            <div className="group flex items-center gap-2 px-4 py-2 bg-surface-container rounded border border-outline-variant/20 shadow-sm hover:-translate-y-1 hover:shadow-md hover:border-primary/50 cursor-pointer transition-all duration-300">
              <Server className="text-secondary transition-transform duration-300 group-hover:scale-110 w-5 h-5" />
              <span className="font-body-md font-semibold text-on-surface">100% Local Processing</span>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col gap-4 md:items-end reveal" style={{ transitionDelay: '0.2s' }}>
          <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">Syllabus Optimized For</span>
          <div className="flex flex-wrap gap-2 justify-end">
            <span className="px-3 py-1 bg-surface-container-high rounded-full text-[14px] font-body-md text-on-surface border border-outline-variant/30 hover:-translate-y-1 hover:shadow-md hover:border-primary/50 cursor-default transition-all duration-300">Computer Engg (CS)</span>
            <span className="px-3 py-1 bg-surface-container-high rounded-full text-[14px] font-body-md text-on-surface border border-outline-variant/30 hover:-translate-y-1 hover:shadow-md hover:border-primary/50 cursor-default transition-all duration-300">Info Tech (IT)</span>
            <span className="px-3 py-1 bg-surface-container-high rounded-full text-[14px] font-body-md text-on-surface border border-outline-variant/30 hover:-translate-y-1 hover:shadow-md hover:border-primary/50 cursor-default transition-all duration-300">AI &amp; Data Science</span>
            <span className="px-3 py-1 bg-surface-container-high rounded-full text-[14px] font-body-md text-on-surface border border-outline-variant/30 hover:-translate-y-1 hover:shadow-md hover:border-primary/50 cursor-default transition-all duration-300">EXTC</span>
          </div>
        </div>
        
      </div>
    </section>
  );
}
