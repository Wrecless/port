'use client'

import { useState, useEffect } from 'react'
import { MotionConfig } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'

const sections = ['hero', 'about', 'projects', 'skills', 'achievements', 'contact']

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const updateActiveSection = () => {
      const threshold = window.scrollY + window.innerHeight / 3
      const currentSection = [...sections]
        .reverse()
        .find((section) => {
          const element = document.getElementById(section)
          return element ? element.offsetTop <= threshold : false
        })

      if (currentSection) {
        setActiveSection((previous) => previous === currentSection ? previous : currentSection)
      }
    }

    updateActiveSection()
    const handleScroll = () => updateActiveSection()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-[#07090d] text-[#dde4f0]">
        <Header activeSection={activeSection} />
        <main className="container mx-auto px-4 md:px-8">
          <section id="hero">
            <Hero />
          </section>
          <About />
          <Projects />
          <Skills />
          <Achievements />
          <Contact />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  )
}
