'use client';

import React, { useEffect } from 'react';

export default function HowItWorksSection() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { 
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    
    return () => {
      document.querySelectorAll('.reveal').forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="py-24 px-5 md:px-[64px] bg-surface-container-low" id="how-it-works">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-headline-lg text-headline-lg text-primary">How it Works</h2>
        </div>
        
        <div className="max-w-4xl mx-auto relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-outline-variant/40 before:to-transparent">
          
          {/* Step 1 */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group mb-12 reveal" style={{ transitionDelay: '0.1s' }}>
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-surface-container-low bg-surface-container-highest text-on-surface-variant shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm relative z-10 font-bold font-title-md">
              01
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-xl border border-outline-variant/20 bg-surface shadow-sm group-hover:border-primary/40 transition-colors">
              <h3 className="font-title-md text-primary mb-2">PASTE</h3>
              <p className="font-body-md text-on-surface-variant">Paste your buggy code or challenging assignment problem directly into the DevSarthi editor.</p>
            </div>
          </div>
          
          {/* Step 2 */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group mb-12 reveal" style={{ transitionDelay: '0.2s' }}>
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-surface-container-low bg-surface-container-highest text-on-surface-variant shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm relative z-10 font-bold font-title-md">
              02
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-xl border border-outline-variant/20 bg-surface shadow-sm group-hover:border-primary/40 transition-colors">
              <h3 className="font-title-md text-primary mb-2">UPLOAD</h3>
              <p className="font-body-md text-on-surface-variant">Upload your specific syllabus PDFs, lab manuals, or class notes securely to your local workspace.</p>
            </div>
          </div>
          
          {/* Step 3 */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group mb-12 reveal" style={{ transitionDelay: '0.3s' }}>
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-surface-container-low bg-primary-container text-on-primary-container shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm relative z-10 font-bold font-title-md">
              03
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-xl border border-primary/20 bg-primary/5 shadow-sm group-hover:border-primary/40 transition-colors">
              <h3 className="font-title-md text-primary mb-2">CONTEXT</h3>
              <p className="font-body-md text-on-surface-variant">DevSarthi cross-references your code with your uploaded materials to build a private knowledge graph.</p>
            </div>
          </div>
          
          {/* Step 4 */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group mb-12 reveal" style={{ transitionDelay: '0.4s' }}>
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-surface-container-low bg-surface-container-highest text-on-surface-variant shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm relative z-10 font-bold font-title-md">
              04
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-xl border border-outline-variant/20 bg-surface shadow-sm group-hover:border-primary/40 transition-colors">
              <h3 className="font-title-md text-primary mb-2">DIALOGUE</h3>
              <p className="font-body-md text-on-surface-variant">Engage in Socratic questioning with the AI, which guides you to find the root cause using your own notes.</p>
            </div>
          </div>
          
          {/* Step 5 */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group reveal" style={{ transitionDelay: '0.5s' }}>
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-surface-container-low bg-secondary text-on-secondary shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm relative z-10 font-bold font-title-md">
              05
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-xl border border-secondary/30 bg-secondary-container/10 shadow-sm group-hover:border-secondary/60 transition-colors">
              <h3 className="font-title-md text-secondary mb-2">MASTER</h3>
              <p className="font-body-md text-on-surface-variant">Truly understand the underlying concept, fix the bug yourself, and feel confident for your practical exams.</p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
