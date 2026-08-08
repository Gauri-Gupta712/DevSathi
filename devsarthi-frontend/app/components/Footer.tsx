import Link from 'next/link'
import { Leaf } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#0E271D] text-[#E2EFE7] py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 mb-12">
          {/* Column 1: Branding */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-3 w-fit">
              <div className="w-10 h-10 rounded-xl bg-[#2D6A4F] text-white flex items-center justify-center font-bold text-lg shadow-sm">
                DS
              </div>
              <span className="font-serif font-bold text-white text-2xl">DevSarthi</span>
            </Link>
            <p className="text-[#95B8A6] text-sm mt-2 max-w-xs leading-relaxed">
              Empowering Mumbai University CE students with an intelligent, Socratic approach to mastering code and software engineering.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-[#74C69D] uppercase tracking-wider text-xs font-bold mb-2">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-[#E2EFE7] hover:text-[#74C69D] transition-colors text-sm">Home</Link>
              </li>
              <li>
                <Link href="/dashboard" className="text-[#E2EFE7] hover:text-[#74C69D] transition-colors text-sm">Dashboard</Link>
              </li>
              <li>
                <Link href="/studio" className="text-[#E2EFE7] hover:text-[#74C69D] transition-colors text-sm">AI Studio</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Tech Stack */}
          <div className="flex flex-col gap-4">
            <h3 className="text-[#74C69D] uppercase tracking-wider text-xs font-bold mb-2">Powered By</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-[#E2EFE7]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#52B788]"></span>
                Next.js 16
              </li>
              <li className="flex items-center gap-2 text-sm text-[#E2EFE7]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#52B788]"></span>
                FastAPI
              </li>
              <li className="flex items-center gap-2 text-sm text-[#E2EFE7]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#52B788]"></span>
                TinyLlama
              </li>
              <li className="flex items-center gap-2 text-sm text-[#E2EFE7]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#52B788]"></span>
                Ollama
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#1F4334] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#95B8A6]">
            © 2025 DevSarthi — Built for Mumbai University CE Students
          </p>
          <div className="flex items-center gap-2 text-xs text-[#95B8A6]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#52B788] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#52B788]"></span>
            </span>
            Socratic AI-Powered Learning
          </div>
        </div>
      </div>
    </footer>
  )
}
