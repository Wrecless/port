'use client'

import { motion } from 'framer-motion'

const technicalSkills = [
  'JavaScript / TypeScript',
  'React & Next.js',
  'Node.js',
  'Python',
  'SQL',
  'HTML & CSS',
  'C / C++ / C#',
  'PHP',
  'Docker',
  'Git & GitHub',
]

const educationSkills = [
  'Curriculum Design',
  'Head of Department',
  'Classroom Technology',
  'Student Assessment',
  'Lesson Planning',
  'Team Leadership',
  'Problem-Based Learning',
  'Pastoral Care',
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

      <motion.h2
        className="font-display text-4xl md:text-5xl text-[#dde4f0] mb-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        What I bring<br />
        <span className="italic text-[#1dd6c5]">to the table.</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">

        {/* Technical */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#1dd6c5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
            <h3 className="text-xs font-mono tracking-widest uppercase text-[#1dd6c5]" style={{ fontFamily: 'var(--font-geist-mono, monospace)' }}>
              Technical Stack
            </h3>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {technicalSkills.map((skill, i) => (
              <motion.span
                key={skill}
                className="tag-tech px-3.5 py-1.5 text-sm text-[#8892a4] rounded-md cursor-default transition-all duration-200"
                style={{ border: '1px solid rgba(29, 214, 197, 0.15)', background: 'rgba(29, 214, 197, 0.03)' }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.2 + i * 0.04 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#4f8ef7]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            <h3 className="text-xs font-mono tracking-widest uppercase text-[#4f8ef7]" style={{ fontFamily: 'var(--font-geist-mono, monospace)' }}>
              Education &amp; Leadership
            </h3>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {educationSkills.map((skill, i) => (
              <motion.span
                key={skill}
                className="tag-edu px-3.5 py-1.5 text-sm text-[#8892a4] rounded-md cursor-default transition-all duration-200"
                style={{ border: '1px solid rgba(79, 142, 247, 0.15)', background: 'rgba(79, 142, 247, 0.03)' }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.3 + i * 0.04 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default Skills
