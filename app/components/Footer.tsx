import { ArrowUp, Github, Linkedin } from 'lucide-react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="border-t border-white/[0.05] py-10 mt-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          <div>
            <p className="text-[#dde4f0] text-sm font-semibold mb-2">Bruno Mata</p>
            <p className="text-[#3d4a5a] text-sm max-w-md">
              Built with Next.js, shipped on Vercel, and shaped around education, useful products, and clean delivery.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8">
            <div className="flex items-center gap-5">
              <Link
                href="/more-projects"
                className="text-[#3d4a5a] hover:text-[#1dd6c5] text-sm transition-colors duration-200"
              >
                More projects
              </Link>
              <a
                href="https://github.com/Wrecless"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#3d4a5a] hover:text-[#dde4f0] transition-colors duration-200"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/bruno-mata-41364b1b1/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#3d4a5a] hover:text-[#1dd6c5] transition-colors duration-200"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>

            <a
              href="#hero"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-[#5e6b7e] hover:border-[#1dd6c5]/40 hover:text-[#1dd6c5] transition-colors duration-200"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </a>
          </div>
        </div>

        <p className="text-[#3d4a5a] text-xs mt-8">
          &copy; {new Date().getFullYear()} Bruno Mata. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
