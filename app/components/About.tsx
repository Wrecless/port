'use client'

import { motion } from 'framer-motion'

const highlights = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#1dd6c5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: 'Full-Stack Development',
    desc: 'React, Next.js, Node.js, Python — building real products end-to-end.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#1dd6c5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: 'CS Education',
    desc: 'Making complex concepts click. Head of Department in year one.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#4f8ef7]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Leadership',
    desc: 'Managing departments, curriculum design, and strategic planning.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#4f8ef7]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Innovation',
    desc: 'Digital Innovation Award recipient with a bias toward building.',
  },
]

const About = () => {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      <span className="section-num">01</span>

      <motion.div
        className="section-marker"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.div>

      <motion.h2
        className="font-display text-4xl md:text-5xl text-[#dde4f0] mb-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Developer first.<br />
        <span className="italic text-[#1dd6c5]">Educator always.</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <p className="text-[#8892a4] leading-relaxed mb-6 text-base md:text-lg">
            I graduated with First Class Honours in BSc Computer Science, earning a Digital Innovation
            Award along the way. My technical foundation spans the full stack — from React and Next.js
            on the frontend to Node.js, Python, and SQL on the backend. I approach every problem with
            the same mindset: build something that actually works and makes a difference.
          </p>
          <p className="text-[#8892a4] leading-relaxed text-base md:text-lg">
            In my first year of teaching, I was appointed Head of Department — leading curriculum design,
            strategic planning, and the entire CS provision from day one. That responsibility sharpened
            skills no degree could teach: communication, leadership, and the ability to break down complex
            ideas so anyone can grasp them. Whether in a classroom or a codebase, the goal is always the
            same: clarity, impact, and continuous improvement.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-4">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              className="card p-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
            >
              <div className="mb-3">{item.icon}</div>
              <h3 className="text-sm font-semibold text-[#dde4f0] mb-1.5">{item.title}</h3>
              <p className="text-xs text-[#5e6b7e] leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
