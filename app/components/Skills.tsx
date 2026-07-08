'use client'

import { motion } from 'framer-motion'
import { BookOpen, Braces, Database, GitBranch, Layers, Server, Sparkles, Users } from 'lucide-react'

const skillGroups = [
  {
    title: 'Frontend Engineering',
    level: 'Primary stack',
    icon: Braces,
    accent: '#1dd6c5',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    title: 'Backend & APIs',
    level: 'Product-ready',
    icon: Server,
    accent: '#4f8ef7',
    skills: ['Node.js', 'REST APIs', 'Python', 'Nodemailer'],
  },
  {
    title: 'Data & Systems',
    level: 'Applied fluency',
    icon: Database,
    accent: '#f7b955',
    skills: ['SQL', 'Supabase', 'Schema design', 'Validation'],
  },
  {
    title: 'Delivery Workflow',
    level: 'Daily practice',
    icon: GitBranch,
    accent: '#9b87f5',
    skills: ['GitHub', 'Vercel', 'Docker', 'CI checks'],
  },
  {
    title: 'Curriculum Design',
    level: 'Department level',
    icon: BookOpen,
    accent: '#1dd6c5',
    skills: ['Lesson planning', 'Assessment', 'Learning games', 'KS3-KS5'],
  },
  {
    title: 'Technical Leadership',
    level: 'People + process',
    icon: Users,
    accent: '#4f8ef7',
    skills: ['Team leadership', 'Mentoring', 'Strategy', 'Communication'],
  },
]

const focusAreas = [
  { label: 'Build', value: 'full-stack apps', icon: Layers },
  { label: 'Teach', value: 'clear CS concepts', icon: BookOpen },
  { label: 'Improve', value: 'digital workflows', icon: Sparkles },
]

const Skills = () => {
  return (
    <section id="skills" className="relative py-24 overflow-hidden">
      <span className="section-num">03</span>

      <motion.div
        className="section-marker"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5 }}
      >
        Skills
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-16 items-start">
        <div>
          <motion.h2
            className="font-display text-4xl md:text-5xl text-[#dde4f0] mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Engineering and education, side by side.
          </motion.h2>

          <motion.div
            className="grid gap-3"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.18 }}
          >
            {focusAreas.map((area) => {
              const Icon = area.icon

              return (
                <div key={area.label} className="flex items-center gap-4 border-l border-white/10 pl-4">
                  <Icon className="w-5 h-5 text-[#1dd6c5]" />
                  <div>
                    <p className="text-xs font-mono tracking-widest uppercase text-[#5e6b7e]" style={{ fontFamily: 'var(--font-geist-mono, monospace)' }}>
                      {area.label}
                    </p>
                    <p className="text-[#dde4f0]">{area.value}</p>
                  </div>
                </div>
              )
            })}
          </motion.div>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          {skillGroups.map((group) => {
            const Icon = group.icon

            return (
              <article key={group.title} className="card p-5">
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div
                    className="h-10 w-10 rounded-lg flex items-center justify-center"
                    style={{ background: `${group.accent}12`, color: group.accent }}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <p
                    className="text-[0.65rem] font-mono tracking-widest uppercase"
                    style={{ color: group.accent, fontFamily: 'var(--font-geist-mono, monospace)' }}
                  >
                    {group.level}
                  </p>
                </div>

                <h3 className="text-lg font-semibold text-[#dde4f0] mb-4">{group.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 text-xs rounded text-[#8892a4]"
                      style={{
                        border: `1px solid ${group.accent}22`,
                        background: `${group.accent}08`,
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
