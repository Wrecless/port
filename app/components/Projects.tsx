'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import Image from 'next/image'

const projects = [
  {
    title: 'SoulSupport',
    subtitle: 'Mental Health Platform',
    description:
      'A digital platform providing accessible mental health support through breathing exercises, meditation, sound therapy, physical exercises, and sleep hypnotherapy — designed to promote relaxation, mindfulness, and well-being.',
    image: '/img_2.png',
    github: 'https://github.com/Wrecless/soul',
    demo: 'https://soulsupport.vercel.app/',
    tags: ['Next.js', 'Node.js', 'Tailwind CSS', 'API'],
    accent: '#1dd6c5',
  },
  {
    title: 'Wrekify',
    subtitle: 'Music Streaming App',
    description:
      'A Spotify-inspired platform that lets users upload, stream, and manage their music library seamlessly. Features music playback, playlists, and a sleek responsive UI.',
    image: '/img.png',
    github: 'https://github.com/Wrecless/spotify-clone',
    demo: 'https://wrekify.vercel.app/',
    tags: ['Next.js', 'Tailwind CSS', 'Node.js', 'Supabase'],
    accent: '#4f8ef7',
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
        Things I&apos;ve<br />
        <span className="italic text-[#1dd6c5]">shipped.</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <motion.article
            key={project.title}
            className="card overflow-hidden group"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, delay: 0.15 + i * 0.12 }}
          >
            {/* Image */}
            <div className="relative h-48 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
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
            <div className="p-6">
              <p
                className="text-xs font-mono tracking-widest uppercase mb-1.5"
                style={{ color: project.accent, fontFamily: 'var(--font-geist-mono, monospace)' }}
              >
                {project.subtitle}
              </p>
              <h3 className="font-display text-2xl text-[#dde4f0] mb-3">{project.title}</h3>
              <p className="text-[#5e6b7e] text-sm leading-relaxed mb-5">{project.description}</p>

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
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-[#5e6b7e] hover:text-[#dde4f0] transition-colors duration-200"
                >
                  <Github className="w-4 h-4" />
                  Source
                </a>
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
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default Projects
