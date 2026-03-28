'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      <span className="section-num">04</span>

      <motion.div
        className="section-marker"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5 }}
      >
        Contact
      </motion.div>

      <motion.h2
        className="font-display text-4xl md:text-5xl text-[#dde4f0] mb-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Let&apos;s work<br />
        <span className="italic text-[#1dd6c5]">together.</span>
      </motion.h2>

      <motion.div
        className="max-w-xl"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div>
            <label htmlFor="name" className="block text-xs font-mono tracking-widest uppercase text-[#5e6b7e] mb-2" style={{ fontFamily: 'var(--font-geist-mono, monospace)' }}>
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your name"
              className="field-input"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-xs font-mono tracking-widest uppercase text-[#5e6b7e] mb-2" style={{ fontFamily: 'var(--font-geist-mono, monospace)' }}>
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="you@example.com"
              className="field-input"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-xs font-mono tracking-widest uppercase text-[#5e6b7e] mb-2" style={{ fontFamily: 'var(--font-geist-mono, monospace)' }}>
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              placeholder="What are you working on?"
              className="field-input resize-none"
            />
          </div>

          <motion.button
            type="submit"
            disabled={status === 'sending'}
            className="self-start inline-flex items-center gap-2.5 px-6 py-3 bg-[#1dd6c5] text-[#07090d] font-semibold text-sm rounded-lg transition-all duration-200 hover:bg-[#16c4b7] hover:shadow-[0_0_24px_rgba(29,214,197,0.35)] disabled:opacity-50 disabled:cursor-not-allowed"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Send className="w-4 h-4" />
            {status === 'sending' ? 'Sending…' : 'Send Message'}
          </motion.button>

          {status === 'success' && (
            <p className="text-sm text-[#1dd6c5]">Message sent! I&apos;ll be in touch.</p>
          )}
          {status === 'error' && (
            <p className="text-sm text-red-400">Something went wrong. Please try again.</p>
          )}
        </form>
      </motion.div>
    </section>
  )
}

export default Contact
