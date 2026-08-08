'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Code2, Menu, X } from 'lucide-react'

export default function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'AI Studio', href: '/studio' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50 h-16 bg-[#F4F0E6]/95 backdrop-blur-md border-b border-[#E2DDCF] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#1E4D3B] text-white flex items-center justify-center font-bold text-lg shadow-sm">
              DS
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-[#153326] text-xl leading-none">DevSarthi</span>
              <span className="text-[10px] bg-[#1E4D3B]/10 text-[#1E4D3B] border border-[#1E4D3B]/20 rounded-full px-2 py-0.5 mt-1 font-medium w-fit">
                MU Edition v2.0
              </span>
            </div>
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-[#1E4D3B]/10 text-[#1E4D3B] font-semibold'
                    : 'text-[#3A5A4C] hover:text-[#153326] hover:bg-[#E8E2D4]'
                }`}
              >
                {link.name}
              </Link>
            )
          })}
        </nav>

        <div className="hidden md:flex items-center">
          <Link
            href="/studio"
            className="flex items-center gap-2 bg-[#1E4D3B] text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-colors hover:bg-[#153326] shadow-md"
          >
            <Code2 size={18} />
            Start Coding
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-[#3A5A4C] hover:text-[#153326] p-2"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#F4F0E6] border-b border-[#E2DDCF]">
          <div className="px-4 pt-2 pb-4 space-y-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-[#1E4D3B]/10 text-[#1E4D3B] font-semibold'
                      : 'text-[#3A5A4C] hover:text-[#153326] hover:bg-[#E8E2D4]'
                  }`}
                >
                  {link.name}
                </Link>
              )
            })}
            <Link
              href="/studio"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 bg-[#1E4D3B] text-white px-4 py-3 rounded-xl text-base font-semibold mt-4 transition-colors hover:bg-[#153326]"
            >
              <Code2 size={18} />
              Start Coding
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
