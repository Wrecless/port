'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function MoreProjects() {
  return (
    <div className="min-h-screen bg-[#07090d] text-[#dde4f0] flex items-center justify-center px-4">
      <div className="max-w-lg w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p
            className="text-xs tracking-[0.25em] uppercase text-[#1dd6c5] mb-6 flex items-center justify-center gap-3"
            style={{ fontFamily: 'var(--font-geist-mono, monospace)' }}
          >
            <span className="w-6 h-px bg-[#1dd6c5]" />
            More Projects
            <span className="w-6 h-px bg-[#1dd6c5]" />
          </p>

          <h1 className="font-display text-5xl md:text-6xl text-[#dde4f0] mb-6">
            Coming<br />
            <span className="italic text-[#1dd6c5]">soon.</span>
          </h1>

          <p className="text-[#5e6b7e] text-base leading-relaxed mb-10">
            More projects are being organised and will be added here shortly.
            In the meantime, check out the work on the main page or visit my GitHub.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#1dd6c5] text-[#07090d] font-semibold text-sm rounded-lg hover:bg-[#16c4b7] transition-colors duration-200"
            >
              ← Back Home
            </Link>
            <a
              href="https://github.com/Wrecless"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/10 text-[#8892a4] text-sm rounded-lg hover:border-[#1dd6c5]/40 hover:text-[#1dd6c5] transition-all duration-200"
            >
              View GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
