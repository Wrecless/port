'use client'

import { motion } from 'framer-motion'
import { ArrowRight, ExternalLink, Github } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const projects = [
  {
    title: 'SoulSupport',
    subtitle: 'Mental Health Platform',
    description:
      'A mental-health support platform with guided breathing, meditation, sound therapy, physical exercises, and sleep hypnotherapy. Built end-to-end with Next.js and Node.js — content structure, API integration, and deployment.',
    image: '/img_2.png',
    github: 'https://github.com/Wrecless/soul',
    demo: 'https://soulsupport.vercel.app/',
    tags: ['Next.js', 'Node.js', 'Tailwind CSS', 'API'],
    accent: '#1dd6c5',
  },
  {
    title: 'Mr. Mata Learning Hub',
    subtitle: 'Computer Science Learning Hub',
    description:
      'Built for my own classroom: focused games covering sorting algorithms, binary, logic, and computational maths — each one targeting a single concept students find hard, and used in real KS3–KS5 lessons.',
    image: '/mr-mata-learning-hub.png',
    demo: 'https://mr-mata-learning-hub.vercel.app/',
    tags: ['Next.js', 'Teaching Tools', 'Computer Science', 'Games'],
    accent: '#4f8ef7',
  },
  {
    title: 'Hugzy Designs',
    subtitle: 'Custom 3D Printing Website',
    description:
      'A production site for a custom 3D printing studio — product showcase for lightboxes, portrait lamps, and jewellery, with a custom order flow wired to a working enquiry pipeline.',
    image: '/hugzy-designs.png',
    demo: 'https://hugzydesigns.vercel.app/',
    tags: ['Next.js', 'Product Site', '3D Printing', 'Forms'],
    accent: '#f7b955',
  },
]

const Projects = () => {
  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      <span className="section-num">02</span>

      <motion.div
        className="section-marker"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5 }}
      >
        Projects
      </motion.div>

      <motion.h2
        className="font-display text-4xl md:text-5xl text-[#dde4f0] mb-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Built, shipped, and in use.
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, delay: 0.15 }}
      >
        {projects.map((project, i) => (
          <article
            key={project.title}
            className={`card overflow-hidden group ${i === 0 ? 'md:col-span-2 lg:grid lg:grid-cols-[1.15fr_0.85fr]' : ''}`}
          >
            {/* Image */}
            <div className={`relative overflow-hidden ${i === 0 ? 'h-64 lg:h-full lg:min-h-[24rem]' : 'h-48'}`}>
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes={i === 0 ? '(min-width: 1024px) 58vw, (min-width: 768px) 100vw, 100vw' : '(min-width: 768px) 50vw, 100vw'}
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Gradient overlay */}
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to top, #0e1117 0%, transparent 60%)' }}
              />
              {/* Accent line on image bottom */}
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                style={{ background: project.accent }}
              />
            </div>

            {/* Content */}
            <div className={i === 0 ? 'p-7 md:p-8 flex flex-col justify-center' : 'p-6'}>
              <p
                className="text-xs font-mono tracking-widest uppercase mb-1.5"
                style={{ color: project.accent, fontFamily: 'var(--font-geist-mono, monospace)' }}
              >
                {project.subtitle}
              </p>
              <h3 className={`font-display text-[#dde4f0] mb-3 ${i === 0 ? 'text-3xl md:text-4xl' : 'text-2xl'}`}>
                {project.title}
              </h3>
              <p className={`text-[#5e6b7e] leading-relaxed mb-5 ${i === 0 ? 'text-base' : 'text-sm'}`}>
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-xs rounded"
                    style={{
                      border: `1px solid ${project.accent}22`,
                      color: project.accent,
                      background: `${project.accent}08`,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-5">
                {'github' in project && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-[#5e6b7e] hover:text-[#dde4f0] transition-colors duration-200"
                  >
                    <Github className="w-4 h-4" />
                    Source
                  </a>
                )}
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm transition-colors duration-200"
                  style={{ color: project.accent }}
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
              </div>
            </div>
          </article>
        ))}
      </motion.div>

      <motion.div
        className="mt-8 flex justify-start"
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.45, delay: 0.2 }}
      >
        <Link
          href="/more-projects"
          className="inline-flex items-center gap-2 text-sm text-[#8892a4] hover:text-[#1dd6c5] transition-colors duration-200"
        >
          View more projects
          <ArrowRight className="w-4 h-4" />
        </Link>
      </motion.div>
    </section>
  )
}

export default Projects
