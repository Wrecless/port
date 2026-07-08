'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import Image from 'next/image'
import { RotateCcw } from 'lucide-react'

// "Bruno Mata." tokenised — each token's array index is its home position.
const NAME = ['B', 'r', 'u', 'n', 'o', ' ', 'M', 'a', 't', 'a', '.']
const SORTED = NAME.map((_, i) => i)

// Deterministic starting permutation (SSR-safe) with enough inversions to be
// worth watching but few enough to finish in about three seconds.
const INITIAL_ORDER = [2, 0, 3, 1, 6, 4, 7, 5, 10, 8, 9]

const STEP_MS = 110

type Step = { i: number; swap: boolean }

function buildSteps(start: number[]): Step[] {
  const arr = [...start]
  const steps: Step[] = []
  for (let end = arr.length - 1; end > 0; end--) {
    let swapped = false
    for (let i = 0; i < end; i++) {
      const swap = arr[i] > arr[i + 1]
      steps.push({ i, swap })
      if (swap) {
        ;[arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
        swapped = true
      }
    }
    if (!swapped) break
  }
  return steps
}

function shuffled(): number[] {
  const arr = [...SORTED]
  do {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[arr[i], arr[j]] = [arr[j], arr[i]]
    }
  } while (arr.every((value, i) => value === i))
  return arr
}

const roles = [
  'CS Educator & Head of Department',
  'Full-Stack Developer',
  'BSc Computer Science — First Class Honours',
]

const Hero = () => {
  const prefersReduced = useReducedMotion()
  const [order, setOrder] = useState(INITIAL_ORDER)
  const [comparing, setComparing] = useState<number | null>(null)
  const [sorted, setSorted] = useState(false)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const play = useCallback((start: number[]) => {
    if (timerRef.current) clearInterval(timerRef.current)
    const steps = buildSteps(start)
    let index = 0
    setOrder(start)
    setSorted(false)
    timerRef.current = setInterval(() => {
      if (index >= steps.length) {
        if (timerRef.current) clearInterval(timerRef.current)
        timerRef.current = null
        setComparing(null)
        setSorted(true)
        return
      }
      const step = steps[index]
      setComparing(step.i)
      if (step.swap) {
        setOrder((prev) => {
          const next = [...prev]
          ;[next[step.i], next[step.i + 1]] = [next[step.i + 1], next[step.i]]
          return next
        })
      }
      index += 1
    }, STEP_MS)
  }, [])

  useEffect(() => {
    if (prefersReduced) {
      setOrder(SORTED)
      setSorted(true)
      return
    }
    const start = setTimeout(() => play(INITIAL_ORDER), 700)
    return () => {
      clearTimeout(start)
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [prefersReduced, play])

  return (
    <div className="min-h-screen flex items-center justify-center pt-20 pb-12">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-12 lg:gap-20 items-center w-full max-w-6xl mx-auto">

        {/* Text content */}
        <div className="md:col-span-3 order-2 md:order-1">
          <motion.div
            className="flex flex-wrap items-center gap-4 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
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

          {/* Signature: the name bubble-sorts itself into place */}
          <h1 className="font-display leading-none mb-3" aria-label="Bruno Mata">
            <span className="flex items-end whitespace-nowrap" aria-hidden="true">
              {order.map((token, pos) => {
                const isComparing =
                  comparing !== null && (pos === comparing || pos === comparing + 1)

                return (
                  <motion.span
                    key={token}
                    layout
                    transition={{ type: 'spring', stiffness: 480, damping: 34 }}
                    className="flex flex-col items-center"
                    style={{ minWidth: token === 5 ? '0.35em' : undefined }}
                  >
                    <motion.span
                      animate={{ y: isComparing ? -8 : 0 }}
                      transition={{ duration: 0.15 }}
                      className={`text-[clamp(2.6rem,7vw,5.5rem)] ${token >= 6 ? 'italic' : ''}`}
                      style={{
                        color: token >= 6 ? '#1dd6c5' : '#dde4f0',
                        textShadow: isComparing ? '0 0 24px rgba(29,214,197,0.5)' : 'none',
                      }}
                    >
                      {NAME[token]}
                    </motion.span>
                    <span
                      className="hidden sm:block text-[0.6rem] font-mono text-[#3d4a5a] tabular-nums mt-1.5"
                      style={{ fontFamily: 'var(--font-geist-mono, monospace)' }}
                    >
                      {token}
                    </span>
                  </motion.span>
                )
              })}
            </span>
          </h1>

          <div className="flex items-center gap-4 mb-10 h-5">
            <p
              className="text-xs font-mono text-[#3d4a5a]"
              style={{ fontFamily: 'var(--font-geist-mono, monospace)' }}
            >
              {sorted
                ? 'sorted ✓ · 11 elements · bubble sort · O(n²)'
                : `bubble_sort(name) · comparing [${comparing ?? 0}, ${(comparing ?? 0) + 1}]`}
            </p>
            {sorted && !prefersReduced && (
              <button
                type="button"
                onClick={() => play(shuffled())}
                className="inline-flex items-center gap-1.5 text-xs font-mono text-[#5e6b7e] hover:text-[#1dd6c5] transition-colors duration-200"
                style={{ fontFamily: 'var(--font-geist-mono, monospace)' }}
                aria-label="Shuffle the letters and sort them again"
              >
                <RotateCcw className="w-3 h-3" />
                run again
              </button>
            )}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex flex-col gap-3 mb-8">
              {roles.map((role) => (
                <div key={role} className="flex items-center gap-4">
                  <span className="w-8 h-px bg-white/10 flex-shrink-0" />
                  <span className="text-base md:text-lg text-[#8892a4] font-medium">{role}</span>
                </div>
              ))}
            </div>

            <p className="text-[#4a5568] italic text-lg mb-10 border-l-2 border-[#1dd6c5]/25 pl-5 leading-relaxed">
              &ldquo;I build things. And I teach people to build things.&rdquo;
            </p>

            <div className="flex flex-wrap gap-4">
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
            </div>
          </motion.div>
        </div>

        {/* Photo */}
        <motion.div
          className="md:col-span-2 order-1 md:order-2 flex justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
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
          </div>
        </motion.div>

      </div>
    </div>
  )
}

export default Hero
