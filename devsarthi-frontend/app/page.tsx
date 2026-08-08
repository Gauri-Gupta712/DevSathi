'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import {
  Code2,
  Sparkles,
  Brain,
  Languages,
  ChevronRight,
  GraduationCap,
  Zap,
  Shield,
  ArrowRight,
  Terminal,
  Bot,
  Layers,
  MessageCircle,
  BookOpen,
  Star
} from 'lucide-react';
import Header from './components/Header';
import Footer from './components/Footer';

export default function Home() {
  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: 'Socratic Questioning',
      description: "We don't just give answers. We guide you to find them yourself through intelligent questioning.",
      color: 'terracotta',
      highlight: true
    },
    {
      icon: <Languages className="w-6 h-6" />,
      title: 'Hinglish + Marathi',
      description: 'Learn in the language you are most comfortable with. Break the language barrier in programming.',
      color: 'sage'
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: 'MU Syllabus Aligned',
      description: 'Strictly aligned with Mumbai University 2026 syllabus to help you ace your exact coursework.',
      color: 'tan'
    },
    {
      icon: <Code2 className="w-6 h-6" />,
      title: 'Live Code Editor',
      description: 'Write, run, and debug code directly in your browser with our integrated Monaco Editor.',
      color: 'terracotta',
      highlight: true
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'AI Debug Analysis',
      description: 'Instant, intelligent analysis of your runtime errors and logical bugs to point you in the right direction.',
      color: 'sage'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Privacy First',
      description: '100% local processing. No API keys needed, ensuring your data and code remain completely private.',
      color: 'tan'
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'terracotta':
        return 'bg-[#1E4D3B]/10 text-[#1E4D3B] border-[#1E4D3B]/30';
      case 'sage':
        return 'bg-[#2D6A4F]/10 text-[#2D6A4F] border-[#2D6A4F]/30';
      case 'tan':
        return 'bg-[#52B788]/10 text-[#1E4D3B] border-[#52B788]/30';
      default:
        return 'bg-[#1E4D3B]/10 text-[#1E4D3B] border-[#1E4D3B]/30';
    }
  };

  const processSteps = [
    { num: '01', title: 'PASTE', desc: 'Paste your code and error', color: 'terracotta' },
    { num: '02', title: 'ANALYZE', desc: 'AI reviews your context', color: 'sage' },
    { num: '03', title: 'QUESTION', desc: 'Respond to guiding hints', color: 'tan' },
    { num: '04', title: 'LEARN', desc: 'Understand the core concept', color: 'terracotta' },
    { num: '05', title: 'MASTER', desc: 'Solve it independently', color: 'sage' },
  ];

  const techStack = [
    { name: 'Next.js 16', color: 'terracotta' },
    { name: 'FastAPI', color: 'sage' },
    { name: 'TinyLlama 1.1B', color: 'tan' },
    { name: 'LoRA Fine-Tuning', color: 'terracotta' },
    { name: 'Ollama', color: 'sage' },
    { name: 'Monaco Editor', color: 'tan' },
  ];

  const getDotColor = (color: string) => {
    switch (color) {
      case 'terracotta': return 'bg-[#1E4D3B]';
      case 'sage': return 'bg-[#2D6A4F]';
      case 'tan': return 'bg-[#52B788]';
      default: return 'bg-[#1E4D3B]';
    }
  };

  // Socratic Response Typewriter Animation hook
  const fullText = "Dekho, array ki length n hai. Loop kahan tak chal raha hai? Array indices hamesha 0 se start hote hain. What should be your loop condition?";
  const [typedText, setTypedText] = useState("");
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let index = 0;
          setTypedText("");
          const interval = setInterval(() => {
            if (index < fullText.length) {
              setTypedText((prev) => fullText.substring(0, index + 1));
              index++;
            } else {
              clearInterval(interval);
            }
          }, 25);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (terminalRef.current) {
      observer.observe(terminalRef.current);
    }
    return () => observer.disconnect();
  }, []);

  // Timeline Progress Scroll hook
  const [scrollProgress, setScrollProgress] = useState(0);
  const stepsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!stepsRef.current) return;
      const rect = stepsRef.current.getBoundingClientRect();
      const viewHeight = window.innerHeight;
      
      const start = viewHeight * 0.8;
      const end = viewHeight * 0.2;
      const current = start - rect.top;
      
      let progress = current / rect.height;
      progress = Math.max(0, Math.min(1, progress));
      setScrollProgress(progress * 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#F4F0E6] text-[#153326] font-sans selection:bg-[#1E4D3B]/20 scroll-behavior: smooth">
      <Header />

      <main className="flex flex-col items-center w-full">
        {/* 1. HERO SECTION */}
        <section className="relative w-full min-h-[85vh] flex flex-col items-center justify-center overflow-hidden px-6 py-20 text-center">
          {/* Animated Background Blobs */}
          <div className="absolute top-1/4 left-1/4 w-[45vw] h-[45vw] rounded-full bg-[#1E4D3B]/5 blur-[120px] pointer-events-none -translate-x-1/2 -translate-y-1/2 animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[40vw] h-[40vw] rounded-full bg-[#52B788]/8 blur-[100px] pointer-events-none translate-x-1/2 translate-y-1/2 animate-float" style={{ animationDelay: '1.5s' }}></div>
          
          <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto space-y-10 animate-slideUp">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-[#1E4D3B]/10 text-[#1E4D3B] border border-[#1E4D3B]/20 rounded-full text-xs font-semibold uppercase tracking-wider shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1E4D3B] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#1E4D3B]"></span>
              </span>
              Powered by TinyLlama + LoRA Fine-Tuning
            </div>

            <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-medium leading-[1.1] tracking-tight text-[#153326]">
              Your AI Coding<br />
              Mentor for<br />
              <span className="text-[#1E4D3B] italic relative inline-block">
                Mumbai University
                <span className="absolute bottom-0 left-0 w-full h-[6px] bg-[#1E4D3B]/10 -rotate-1 rounded-full"></span>
              </span>
            </h1>

            <p className="text-[#3A5A4C] text-lg md:text-xl max-w-2xl leading-relaxed">
              Stop copying code blindly. DevSarthi asks smart Socratic questions in Hinglish to help you find and fix bugs yourself, built strictly for MU computer engineering.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link 
                href="/studio"
                className="inline-flex items-center justify-center gap-2.5 px-10 py-5 bg-[#1E4D3B] text-white rounded-full hover:bg-[#153326] shadow-lg hover:shadow-[#1E4D3B]/30 transition-all duration-300 hover:-translate-y-1 font-bold text-base"
              >
                Launch Socratic Studio <ArrowRight className="w-5 h-5" />
              </Link>
              <a 
                href="#demo"
                className="inline-flex items-center justify-center px-10 py-5 border border-[#1E4D3B] text-[#1E4D3B] rounded-full hover:bg-[#1E4D3B]/5 transition-all duration-300 hover:-translate-y-1 font-bold text-base cursor-pointer"
              >
                Explore Socratic Demo
              </a>
            </div>

            {/* Interactive Badge Cards */}
            <div className="pt-6 flex flex-wrap justify-center items-center gap-4">
              <div className="flex items-center gap-2.5 px-5 py-3 bg-white border border-[#E2DDCF] rounded-2xl shadow-sm hover:shadow-md hover:border-[#1E4D3B]/40 hover:-translate-y-1 transition-all duration-300 cursor-default group">
                <div className="w-8 h-8 rounded-xl bg-[#1E4D3B]/10 flex items-center justify-center text-[#1E4D3B] group-hover:scale-110 transition-transform">
                  <Shield className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-[#153326] uppercase tracking-wide">No API Keys</div>
                  <div className="text-[10px] text-[#3A5A4C]">Runs 100% free offline</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 px-5 py-3 bg-white border border-[#E2DDCF] rounded-2xl shadow-sm hover:shadow-md hover:border-[#2D6A4F]/40 hover:-translate-y-1 transition-all duration-300 cursor-default group">
                <div className="w-8 h-8 rounded-xl bg-[#2D6A4F]/10 flex items-center justify-center text-[#2D6A4F] group-hover:scale-110 transition-transform">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-[#153326] uppercase tracking-wide">100% Local</div>
                  <div className="text-[10px] text-[#3A5A4C]">Private data processing</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 px-5 py-3 bg-white border border-[#E2DDCF] rounded-2xl shadow-sm hover:shadow-md hover:border-[#52B788]/40 hover:-translate-y-1 transition-all duration-300 cursor-default group">
                <div className="w-8 h-8 rounded-xl bg-[#52B788]/15 flex items-center justify-center text-[#1E4D3B] group-hover:scale-110 transition-transform">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-[#153326] uppercase tracking-wide">MU Syllabus</div>
                  <div className="text-[10px] text-[#3A5A4C]">Semester V coursework</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* NEW CTA BLOCK #1 */}
        <section className="w-full max-w-7xl mx-auto px-6 py-6 mt-4">
          <div className="bg-[#1E4D3B] text-[#F4F0E6] rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-lg">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-2xl"></div>
            
            <div className="relative z-10 text-left max-w-xl space-y-3">
              <h2 className="font-serif text-3xl font-bold leading-tight">Start Coding Socratic Style →</h2>
              <p className="text-[#F4F0E6]/85 text-sm md:text-base leading-relaxed">
                Experience AI tutoring built specifically for Semester V computer engineering coursework. No setup or external API keys needed.
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 text-white rounded-full text-xs font-medium border border-white/10">
                  <Shield className="w-3.5 h-3.5" /> No API Keys
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 text-white rounded-full text-xs font-medium border border-white/10">
                  <Bot className="w-3.5 h-3.5" /> 100% Local
                </span>
              </div>
            </div>
            
            <Link 
              href="/studio"
              className="relative z-10 w-full md:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#F4F0E6] text-[#1E4D3B] rounded-full hover:bg-white shadow-md transition-all duration-300 hover:-translate-y-0.5 font-bold whitespace-nowrap"
            >
              Launch Studio <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* 2. ABOUT SECTION */}
        <section id="demo" className="w-full max-w-7xl mx-auto px-6 py-12 scroll-mt-20">
          <div className="bg-[#E4DFCE]/60 rounded-3xl p-10 md:p-16 flex flex-col lg:flex-row items-center gap-12 border border-[#E2DDCF] shadow-sm">
            <div className="flex-1 space-y-6">
              <h2 className="font-serif text-4xl md:text-5xl font-medium text-[#153326]">What is DevSarthi?</h2>
              <p className="text-[#3A5A4C] text-lg md:text-xl leading-relaxed">
                We believe that giving you the answer directly robs you of the opportunity to learn. DevSarthi is designed as a Socratic tutor—it analyzes your code, identifies the bug, and asks you targeted questions in Hinglish or Marathi to help you figure it out yourself.
              </p>
            </div>
            <div ref={terminalRef} className="flex-1 w-full max-w-2xl">
              <div className="bg-white rounded-2xl border border-[#E2DDCF] shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
                <div className="bg-[#E4DFCE]/60 px-5 py-3.5 border-b border-[#E2DDCF] flex items-center gap-2">
                  <div className="w-3.5 h-3.5 rounded-full bg-[#E07A5F]"></div>
                  <div className="w-3.5 h-3.5 rounded-full bg-[#F2CC8F]"></div>
                  <div className="w-3.5 h-3.5 rounded-full bg-[#52B788]"></div>
                  <span className="ml-2 text-xs font-semibold text-[#6A887B]">devsarthi-terminal</span>
                </div>
                <div className="p-8 space-y-5 font-mono text-base leading-relaxed">
                  <div className="flex gap-3">
                    <span className="text-[#6A887B] font-bold">User:</span>
                    <span className="text-[#153326]">My sorting code gives IndexOutOfBoundsException!</span>
                  </div>
                  <div className="flex gap-3 min-h-[5rem]">
                    <span className="text-[#1E4D3B] font-bold">DevSarthi:</span>
                    <span className="text-[#3A5A4C]">
                      {typedText}
                      <span className="inline-block w-1.5 h-4 ml-1 bg-[#1E4D3B] animate-pulse"></span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. FEATURES SECTION */}
        <section className="w-full max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-16 space-y-4">
            <span className="small-caps tracking-widest text-[#6A887B] text-sm font-semibold uppercase">What We Offer</span>
            <h2 className="font-serif text-4xl md:text-5xl text-[#153326]">Features</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <div 
                key={idx} 
                className={`rounded-2xl p-8 border shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[#1E4D3B]/50 group ${
                  feature.highlight 
                    ? 'border-[#1E4D3B] bg-[#FAF8F2] ring-1 ring-[#1E4D3B]/10 scale-[1.01]' 
                    : 'bg-white border-[#E2DDCF]'
                }`}
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-6 transition-colors duration-300 ${getColorClasses(feature.color)}`}>
                  {feature.icon}
                </div>
                <h3 className="font-serif text-2xl mb-3 text-[#153326]">{feature.title}</h3>
                <p className="text-[#3A5A4C] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 4. HOW IT WORKS */}
        <section className="w-full max-w-7xl mx-auto px-6 py-10">
          <div ref={stepsRef} className="bg-[#E4DFCE]/40 rounded-3xl p-10 md:p-16 border border-[#E2DDCF]">
            <div className="text-center mb-16 space-y-4">
              <span className="small-caps tracking-widest text-[#6A887B] text-sm font-semibold uppercase">Our Process</span>
              <h2 className="font-serif text-4xl md:text-5xl text-[#153326]">How DevSarthi Works</h2>
            </div>
            <div className="flex flex-col lg:flex-row justify-between relative">
              {/* Connecting background line */}
              <div className="hidden lg:block absolute top-7 left-12 right-12 h-[2px] bg-[#E2DDCF] z-0"></div>
              {/* Connecting progress line */}
              <div 
                className="hidden lg:block absolute top-7 left-12 h-[2px] bg-[#1E4D3B] z-0 transition-all duration-75"
                style={{ width: `calc(${scrollProgress}% - 6rem)` }}
              ></div>
              
              {processSteps.map((step, idx) => (
                <div key={idx} className="flex flex-col items-center relative z-10 w-full lg:w-1/5 mb-8 lg:mb-0 text-center px-2 group">
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center font-serif text-xl mb-4 bg-[#F4F0E6] border-2 transition-transform duration-300 group-hover:scale-110 ${
                    step.color === 'terracotta' ? 'border-[#1E4D3B] text-[#1E4D3B]' : 
                    step.color === 'sage' ? 'border-[#2D6A4F] text-[#2D6A4F]' : 
                    'border-[#52B788] text-[#1E4D3B]'
                  }`}>
                    {step.num}
                  </div>
                  <h4 className="font-medium text-[#153326] mb-2">{step.title}</h4>
                  <p className="text-sm text-[#3A5A4C]">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. TECH STACK */}
        <section className="w-full max-w-7xl mx-auto px-6 py-20 text-center overflow-hidden">
          <h2 className="font-serif text-3xl mb-10 text-[#6A887B]">Built With</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech, idx) => (
              <div key={idx} className="bg-white px-5 py-2.5 rounded-full border border-[#E2DDCF] shadow-sm flex items-center gap-2 hover:-translate-y-1 transition-transform duration-300 cursor-default">
                <span className={`w-2 h-2 rounded-full ${getDotColor(tech.color)}`}></span>
                <span className="text-[#3A5A4C] font-medium">{tech.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 7. QUOTE SECTION */}
        <section className="w-full max-w-4xl mx-auto px-6 pb-20">
          <div className="bg-[#E4DFCE]/50 rounded-3xl p-12 text-center border border-[#E2DDCF]">
            <p className="font-serif italic text-2xl md:text-3xl text-[#3A5A4C] leading-relaxed">
              "The only way to learn programming is by programming."
            </p>
            <p className="mt-4 text-[#6A887B] font-medium">— Dennis Ritchie</p>
          </div>
        </section>

        {/* 8. CTA SECTION */}
        <section className="w-full max-w-6xl mx-auto px-6 pb-24">
          <div className="bg-[#1E4D3B] rounded-3xl p-12 md:p-20 text-center text-white relative overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black opacity-10 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl"></div>
            
            <div className="relative z-10 max-w-2xl mx-auto space-y-8">
              <h2 className="font-serif text-4xl md:text-6xl text-[#F4F0E6]">Ready to Debug Smarter?</h2>
              <p className="text-[#F4F0E6]/90 text-lg md:text-xl">
                Stop copying answers. Start understanding your code.
              </p>
              <Link 
                href="/studio"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#F4F0E6] text-[#1E4D3B] rounded-full font-bold hover:bg-white transition-all duration-300 hover:-translate-y-1 shadow-lg mt-4"
              >
                Launch AI Studio <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}