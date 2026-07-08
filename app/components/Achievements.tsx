'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Rocket, School } from 'lucide-react'

const impactItems = [
  {
    title: 'Learning tools shipped',
    metric: '8+',
    subtitle: 'classroom-ready games',
    desc: 'Small, focused computer science activities designed to make abstract ideas easier to practise.',
    accent: '#1dd6c5',
    icon: School,
  },
  {
    title: 'Public products launched',
    metric: '4',
    subtitle: 'live deployments',
    desc: 'A mix of wellbeing, education, commerce, and media projects shipped as real web experiences.',
    accent: '#4f8ef7',
    icon: Rocket,
  },
  {
    title: 'CS pathway led',
    metric: 'KS3-KS5',
    subtitle: 'curriculum ownership',
    desc: 'Planning, assessment, technical delivery, and student progression handled across the department.',
    accent: '#f7b955',
    icon: GraduationCap,
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
        Impact
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h2 className="font-display text-4xl md:text-5xl text-[#dde4f0] mb-6">
            Proof, not job titles.
          </h2>
          <p className="text-[#8892a4] text-base md:text-lg leading-relaxed">
            The through-line is delivery: build useful things, put them in front of people, and keep improving the systems around them.
          </p>
        </motion.div>

        <motion.div
          className="grid gap-4"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          {impactItems.map((item) => {
            const Icon = item.icon

            return (
              <article
                key={item.title}
                className="card p-5 md:p-6 grid grid-cols-[auto_1fr_auto] gap-5 items-start"
              >
                <div
                  className="h-11 w-11 rounded-lg flex items-center justify-center"
                  style={{ background: `${item.accent}12`, color: item.accent }}
                >
                  <Icon className="w-5 h-5" />
                </div>

                <div>
                  <p
                    className="text-xs font-mono tracking-widest uppercase mb-1"
                    style={{ color: item.accent, fontFamily: 'var(--font-geist-mono, monospace)' }}
                  >
                    {item.subtitle}
                  </p>
                  <h3 className="font-display text-2xl text-[#dde4f0] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[#5e6b7e] text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="text-right">
                  <p className="font-display text-3xl md:text-4xl leading-none" style={{ color: item.accent }}>
                    {item.metric}
                  </p>
                </div>
              </article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Achievements
