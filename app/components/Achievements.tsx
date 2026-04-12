'use client'

import { motion } from 'framer-motion'

const achievements = [
  {
    num: '01',
    title: 'First Class Honours',
    subtitle: 'BSc Computer Science',
    desc: 'Graduated top of class with First Class Honours — every project, every exam, every late night debugging session worth it.',
    accent: '#1dd6c5',
  },
  {
    num: '02',
    title: 'Digital Innovation Award',
    subtitle: 'University Recognition',
    desc: 'Recognised for outstanding contribution to digital innovation during my Computer Science degree.',
    accent: '#4f8ef7',
  },
  {
    num: '03',
    title: 'Head of Department',
    subtitle: 'Year One of Teaching',
    desc: 'Appointed to lead the entire CS department in my first year — curriculum design, staff coordination, and strategy from day one.',
    accent: '#1dd6c5',
  },
]

const Achievements = () => {
  return (
    <section id="achievements" className="relative py-24 overflow-hidden">
      <span className="section-num">04</span>

      <motion.div
        className="section-marker"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5 }}
      >
        Achievements
      </motion.div>

      <motion.h2
        className="font-display text-4xl md:text-5xl text-[#dde4f0] mb-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Recognition &amp;<br />
        <span className="italic text-[#1dd6c5]">milestones.</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {achievements.map((item, i) => (
          <motion.div
            key={item.title}
            className="card p-7 relative overflow-hidden group"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, delay: 0.15 + i * 0.1 }}
          >
            {/* Large decorative number */}
            <span
              className="absolute -top-2 -right-1 font-display text-8xl font-bold leading-none pointer-events-none select-none transition-opacity duration-300 group-hover:opacity-100"
              style={{ color: `${item.accent}12` }}
            >
              {item.num}
            </span>

            {/* Accent line */}
            <div
              className="w-8 h-0.5 mb-5 rounded-full"
              style={{ background: item.accent }}
            />

            <p
              className="text-xs font-mono tracking-widest uppercase mb-2"
              style={{ color: item.accent, fontFamily: 'var(--font-geist-mono, monospace)' }}
            >
              {item.subtitle}
            </p>

            <h3 className="font-display text-xl text-[#dde4f0] mb-3 leading-snug">
              {item.title}
            </h3>

            <p className="text-[#5e6b7e] text-sm leading-relaxed">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Achievements
