import React from 'react';
import { Code, Bot, User, XCircle, CheckCircle, GraduationCap } from 'lucide-react';

export default function DifferentiationSection() {
  return (
    <section className="py-24 px-5 md:px-[64px] bg-surface-container-lowest">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-headline-lg text-headline-lg text-primary mb-4">More Than an AI That Gives You Answers</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            True engineering understanding doesn't come from copy-pasting solutions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Generic AI Card */}
          <div className="glass-panel p-8 rounded-xl border border-outline-variant/30 flex flex-col bg-surface opacity-80 filter grayscale-[20%]">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-outline-variant/20">
              <Code className="text-outline w-6 h-6" />
              <h3 className="font-title-md text-title-md text-on-surface-variant">Generic Code Assistants</h3>
            </div>
            
            <div className="space-y-4 flex-1">
              <div className="flex gap-3 opacity-70">
                <div className="w-8 h-8 rounded-full bg-surface-variant flex items-center justify-center shrink-0">
                  <User className="text-[16px] w-4 h-4" />
                </div>
                <div className="bg-surface-variant p-3 rounded-lg rounded-tl-none">
                  <p className="text-[14px]">Fix this IndexError for me.</p>
                </div>
              </div>
              
              <div className="flex gap-3 justify-end opacity-70">
                <div className="bg-surface-variant p-3 rounded-lg rounded-tr-none text-right">
                  <p className="text-[14px] mb-2">Here is the fixed code:</p>
                  <code className="text-[12px] bg-white p-1 rounded block">for i in range(len(arr)):</code>
                </div>
                <div className="w-8 h-8 rounded-full bg-surface-variant flex items-center justify-center shrink-0">
                  <Bot className="text-[16px] w-4 h-4" />
                </div>
              </div>
            </div>
            
            <div className="mt-6 pt-4 border-t border-outline-variant/20 flex items-center gap-2 text-error">
              <XCircle className="w-[18px] h-[18px]" />
              <span className="font-body-md font-semibold text-[14px]">Result: Problem solved, zero learning.</span>
            </div>
          </div>
          
          {/* DevSarthi Card */}
          <div className="glass-panel p-8 rounded-xl border border-primary/30 flex flex-col bg-surface shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-container blur-3xl opacity-10 rounded-full"></div>
            
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-primary/20">
              <GraduationCap className="text-primary w-6 h-6" />
              <h3 className="font-title-md text-title-md text-primary font-bold">DevSarthi Approach</h3>
            </div>
            
            <div className="space-y-4 flex-1 relative z-10">
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center shrink-0 text-on-surface-variant">
                  <User className="text-[16px] w-4 h-4" />
                </div>
                <div className="bg-surface-container-high p-3 rounded-lg rounded-tl-none border border-outline-variant/20">
                  <p className="text-[14px]">Fix this IndexError for me.</p>
                </div>
              </div>
              
              <div className="flex gap-3 justify-end">
                <div className="bg-primary-container p-3 rounded-lg rounded-tr-none border border-primary/20 text-on-primary-container max-w-[85%] shadow-sm">
                  <p className="text-[14px] mb-2">
                    I won't give you the answer directly, but let's figure it out together. Look at your syllabus notes on 'Array Traversals' attached. What is the maximum valid index for an array of size N?
                  </p>
                </div>
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0 text-on-primary shadow-sm">
                  <Bot className="text-[16px] w-4 h-4" />
                </div>
              </div>
            </div>
            
            <div className="mt-6 pt-4 border-t border-primary/20 flex items-center gap-2 text-secondary">
              <CheckCircle className="w-[18px] h-[18px]" />
              <span className="font-body-md font-semibold text-[14px]">Result: Deep comprehension achieved.</span>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
