'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ParallaxProvider } from 'react-scroll-parallax'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('hero')
  const [scrollY, setScrollY] = useState(0)
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const sections = ['hero', 'about', 'projects', 'skills', 'achievements', 'contact']

  useEffect(() => {
    const sectionElements = sections.map(section => document.getElementById(section))
    const currentSection = sectionElements.findIndex(
        el => el && el.offsetTop <= scrollY + window.innerHeight / 3
    )
    if (currentSection !== -1) {
      setActiveSection(sections[currentSection])
    }
  }, [scrollY])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle('dark')
  }

  return (
      <ParallaxProvider>
        <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
          <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
            <Header activeSection={activeSection} />
            <main className="container mx-auto px-4 py-16">
              <AnimatePresence>
                <motion.section
                    id="hero"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                  <Hero />
                </motion.section>
              </AnimatePresence>
              <About />
              <Projects />
              <Skills />
              <Achievements />
              <Contact />
            </main>
            <Footer />
            <motion.button
                className="fixed bottom-8 right-8 p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white"
                onClick={toggleDarkMode}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
              {darkMode ? (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
              ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
              )}
            </motion.button>
          </div>
        </div>
      </ParallaxProvider>
  )
}
