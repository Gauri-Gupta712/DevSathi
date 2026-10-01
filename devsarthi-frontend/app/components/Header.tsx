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
    { name: 'Features', href: '/#features' },
    { name: 'How It Works', href: '/#how-it-works' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50 h-[72px] bg-surface/80 backdrop-blur-xl border-b border-outline-variant/20 shadow-sm transition-all">
      <div className="max-w-[1280px] mx-auto px-5 md:px-[64px] h-full flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="flex flex-col">
              <span className="font-headline-lg font-bold text-primary text-xl md:text-2xl leading-none group-hover:opacity-80 transition-opacity">DevSarthi</span>
            </div>
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== '/' && pathname.includes(link.href))
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-[16px] font-medium transition-colors hover:opacity-80 duration-300 ${isActive
                  ? 'text-primary font-semibold border-b-2 border-primary pb-1'
                  : 'text-on-surface-variant hover:text-primary'
                  }`}
              >
                {link.name}
              </Link>
            )
          })}
        </nav>

        <div className="hidden md:flex items-center">
          <Link
            href="/login"
            className="flex items-center gap-2 bg-primary text-on-primary px-6 py-2 rounded font-title-md text-[16px] transition-all duration-300 hover:opacity-80 active:scale-95 inner-glow shadow-sm"
          >
            Login
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-primary p-2 focus:outline-none"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-surface border-b border-outline-variant/20 shadow-lg absolute w-full">
          <div className="px-5 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-[16px] font-medium transition-colors ${isActive
                    ? 'bg-primary-container/10 text-primary font-semibold'
                    : 'text-on-surface-variant hover:text-primary hover:bg-surface-container'
                    }`}
                >
                  {link.name}
                </Link>
              )
            })}
            <Link
              href="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 bg-primary text-on-primary px-4 py-3 rounded-lg text-[16px] font-semibold mt-4 transition-colors hover:opacity-90"
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
