'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const roles = [
  { num: '01', label: 'CS Educator' },
  { num: '02', label: 'Full-Stack Developer' },
  { num: '03', label: 'Head of Department' },
]

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center pt-20 pb-12">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-12 lg:gap-20 items-center w-full max-w-6xl mx-auto">

        {/* Text content */}
        <div className="md:col-span-3 order-2 md:order-1">
          <motion.div
            className="flex flex-wrap items-center gap-4 mb-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="section-marker mb-0">PORTFOLIO &middot; 2025</p>
            <span
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono"
              style={{
                background: 'rgba(34, 197, 94, 0.07)',
                border: '1px solid rgba(34, 197, 94, 0.2)',
                fontFamily: 'var(--font-geist-mono, monospace)',
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              <span className="text-green-400">Open to opportunities</span>
            </span>
          </motion.div>

          <motion.h1
            className="font-display text-[clamp(3.5rem,9vw,7rem)] leading-none mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="block text-[#dde4f0]">Bruno</span>
            <span className="block italic text-[#1dd6c5]">Mata.</span>
          </motion.h1>

          <div className="flex flex-col gap-3 mb-8">
            {roles.map((role, i) => (
              <motion.div
                key={role.label}
                className="flex items-center gap-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.35 + i * 0.1 }}
              >
                <span
                  className="text-xs font-mono text-[#1dd6c5]/60 tabular-nums w-6 flex-shrink-0"
                  style={{ fontFamily: 'var(--font-geist-mono, monospace)' }}
                >
                  {role.num}
                </span>
                <span className="w-8 h-px bg-white/10 flex-shrink-0" />
                <span className="text-base md:text-lg text-[#8892a4] font-medium">{role.label}</span>
              </motion.div>
            ))}
          </div>

          <motion.p
            className="text-[#4a5568] italic text-lg mb-10 border-l-2 border-[#1dd6c5]/25 pl-5 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.75, duration: 0.6 }}
          >
            &ldquo;I build things. And I teach people to build things.&rdquo;
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.95, duration: 0.5 }}
          >
            <a
              href="/Profile.pdf"
              download
              className="inline-flex items-center gap-2.5 px-6 py-3 bg-[#1dd6c5] text-[#07090d] font-semibold text-sm rounded-lg transition-all duration-200 hover:bg-[#16c4b7] hover:shadow-[0_0_24px_rgba(29,214,197,0.35)]"
            >
              Download CV
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="inline-flex items-center gap-2.5 px-6 py-3 border border-white/10 text-[#8892a4] text-sm rounded-lg transition-all duration-200 hover:border-[#1dd6c5]/40 hover:text-[#1dd6c5]"
            >
              Get In Touch
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </motion.div>
        </div>

        {/* Photo */}
        <motion.div
          className="md:col-span-2 order-1 md:order-2 flex justify-center"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="relative">
            {/* Ambient glow */}
            <div
              className="absolute inset-0 rounded-full pointer-events-none"
              style={{
                background: 'radial-gradient(circle at center, rgba(29,214,197,0.18) 0%, rgba(79,142,247,0.08) 45%, transparent 70%)',
                transform: 'scale(1.6)',
                filter: 'blur(24px)',
                zIndex: 0,
              }}
            />
            {/* Animated gradient ring */}
            <div className="photo-ring" style={{ position: 'relative', zIndex: 1 }}>
              <div className="rounded-full overflow-hidden w-56 h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 relative bg-[#0e1117]">
                <Image
                  src="/2.jpg"
                  alt="Bruno Mata"
                  width={288}
                  height={288}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
            </div>

            {/* Floating badge — First Class */}
            <motion.div
              className="absolute -bottom-2 -left-4 md:-left-8 card px-3 py-2 text-xs"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.5 }}
            >
              <span className="text-[#1dd6c5] font-mono mr-2" style={{ fontFamily: 'var(--font-geist-mono, monospace)' }}>✦</span>
              <span className="text-[#8892a4]">First Class Honours</span>
            </motion.div>

            {/* Floating badge — HoD */}
            <motion.div
              className="absolute -top-2 -right-4 md:-right-8 card px-3 py-2 text-xs"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
            >
              <span className="text-[#4f8ef7] font-mono mr-2" style={{ fontFamily: 'var(--font-geist-mono, monospace)' }}>✦</span>
              <span className="text-[#8892a4]">Head of Department</span>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </div>
  )
}

export default Hero
