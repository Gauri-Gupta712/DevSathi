import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest full-width border-t border-outline-variant/20 mt-auto">
      <div className="w-full py-12 px-5 md:px-[64px] flex flex-col md:flex-row justify-between items-center gap-[24px] max-w-[1280px] mx-auto">
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="font-headline-lg-mobile text-headline-lg-mobile font-bold text-primary">
            DevSarthi
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant text-center md:text-left">
            © 2024 DevSarthi. Built for Mumbai University Engineering.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 mt-6 md:mt-0">
          <Link href="#" className="font-body-md text-body-md text-on-surface-variant hover:text-primary underline decoration-2 transition-all focus:ring-2 focus:ring-primary outline-none">
            Privacy Policy
          </Link>
          <Link href="#" className="font-body-md text-body-md text-on-surface-variant hover:text-primary underline decoration-2 transition-all focus:ring-2 focus:ring-primary outline-none">
            Terms of Service
          </Link>
          <Link href="#" className="font-body-md text-body-md text-on-surface-variant hover:text-primary underline decoration-2 transition-all focus:ring-2 focus:ring-primary outline-none">
            MU Syllabus
          </Link>
          <Link href="#" className="font-body-md text-body-md text-on-surface-variant hover:text-primary underline decoration-2 transition-all focus:ring-2 focus:ring-primary outline-none">
            Local AI Support
          </Link>
        </div>
      </div>
    </footer>
  )
}
