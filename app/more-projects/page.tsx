'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Binary, Calculator, ExternalLink, ListOrdered, ToggleLeft } from 'lucide-react'
import Link from 'next/link'

const hubUrl = 'https://mr-mata-learning-hub.vercel.app/'

const tools = [
  {
    title: 'Sorting algorithm games',
    concept: 'Algorithms',
    desc: 'Step through comparison sorts move by move and watch order emerge — the same idea behind the bubble-sort name on the home page.',
    icon: ListOrdered,
    accent: '#1dd6c5',
  },
  {
    title: 'Binary challenges',
    concept: 'Data representation',
    desc: 'Convert, count, and think in base 2 until binary place value feels as natural as decimal.',
    icon: Binary,
    accent: '#4f8ef7',
  },
  {
    title: 'Logic games',
    concept: 'Boolean logic',
    desc: 'Puzzles that turn truth tables and logic gates into something you play with, not just memorise.',
    icon: ToggleLeft,
    accent: '#f7b955',
  },
  {
    title: 'Computational maths',
    concept: 'Computational thinking',
    desc: 'Quick-fire drills for the maths that underpins computing, tuned for KS3–KS5 lessons.',
    icon: Calculator,
    accent: '#9b87f5',
  },
]

export default function MoreProjects() {
  return (
    <div className="min-h-screen bg-[#07090d] text-[#dde4f0]">
      <div className="container mx-auto px-4 md:px-8 py-16 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-[#5e6b7e] hover:text-[#1dd6c5] transition-colors duration-200 mb-14"
          >
            <ArrowLeft className="w-4 h-4" />
            Back home
          </Link>

          <p className="section-marker">Classroom Tools</p>

          <h1 className="font-display text-4xl md:text-6xl text-[#dde4f0] mb-6">
            Built for lessons,<br />
            <span className="italic text-[#1dd6c5]">played by students.</span>
          </h1>

          <p className="text-[#8892a4] text-base md:text-lg leading-relaxed max-w-2xl mb-14">
            These games live inside the Mr. Mata Learning Hub and get used in real KS3–KS5
            lessons. Each one targets a single concept students find hard, and strips away
            everything else.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-14"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          {tools.map((tool) => {
            const Icon = tool.icon

            return (
              <a
                key={tool.title}
                href={hubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="card p-6 group"
              >
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div
                    className="h-10 w-10 rounded-lg flex items-center justify-center"
                    style={{ background: `${tool.accent}12`, color: tool.accent }}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <p
                    className="text-[0.65rem] font-mono tracking-widest uppercase"
                    style={{ color: tool.accent, fontFamily: 'var(--font-geist-mono, monospace)' }}
                  >
                    {tool.concept}
                  </p>
                </div>

                <h2 className="text-lg font-semibold text-[#dde4f0] mb-2">{tool.title}</h2>
                <p className="text-sm text-[#8892a4] leading-relaxed mb-4">{tool.desc}</p>

                <span className="inline-flex items-center gap-1.5 text-sm text-[#5e6b7e] group-hover:text-[#1dd6c5] transition-colors duration-200">
                  <ExternalLink className="w-4 h-4" />
                  Play in the Learning Hub
                </span>
              </a>
            )
          })}
        </motion.div>

        <motion.div
          className="flex flex-wrap items-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a
            href={hubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#1dd6c5] text-[#07090d] font-semibold text-sm rounded-lg hover:bg-[#16c4b7] transition-colors duration-200"
          >
            Open the Learning Hub
            <ExternalLink className="w-4 h-4" />
          </a>
          <a
            href="https://github.com/Wrecless"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-white/10 text-[#8892a4] text-sm rounded-lg hover:border-[#1dd6c5]/40 hover:text-[#1dd6c5] transition-all duration-200"
          >
            More on GitHub
          </a>
        </motion.div>
      </div>
    </div>
  )
}
