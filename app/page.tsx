'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('hero')
  const [scrollY, setScrollY] = useState(0)

  const sections = ['hero', 'about', 'skills', 'achievements', 'contact']

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const sectionElements = sections.map(s => document.getElementById(s))
    const currentSection = sectionElements.findIndex(
      el => el && el.offsetTop <= scrollY + window.innerHeight / 3
    )
    if (currentSection !== -1) setActiveSection(sections[currentSection])
  }, [scrollY])

  return (
    <div className="min-h-screen bg-[#07090d] text-[#dde4f0]">
      <Header activeSection={activeSection} />
      <main className="container mx-auto px-4 md:px-8">
        <AnimatePresence>
          <motion.section
            id="hero"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Hero />
          </motion.section>
        </AnimatePresence>
        <About />
        <Skills />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
