import { motion } from 'framer-motion'
import { Parallax } from 'react-scroll-parallax'
import Image from 'next/image'

const Hero = () => {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <Parallax translateY={['-50px', '50px']}>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Image
                            src="/1.jpg"
                            alt="Bruno Mata"
                            width={400}
                            height={400}
                            className="rounded-full border-4 border-teal-400 shadow-lg"
                        />
                    </motion.div>
                </Parallax>
                <Parallax translateY={['50px', '-50px']}>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-teal-400 to-blue-500 text-transparent bg-clip-text">
                            Hi, I am Bruno Mata
                        </h2>
                        <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                            Full-Stack Developer & Digital Innovator
                        </h3>
                        <p className="text-xl mb-6 text-gray-600 dark:text-gray-400">
                            BSc (Hons) Computer Science graduate with First Class Honours and an award for Digital Innovation.
                        </p>
                        <div className="flex space-x-4">
                            <motion.a
                                href="#projects"
                                className="inline-flex items-center px-6 py-3 bg-teal-500 text-white rounded-full hover:bg-teal-600 transition-colors duration-300"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={(e) => {
                                    e.preventDefault()
                                    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
                                }}
                            >
                                View Projects
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </motion.a>
                            <motion.a
                                href="/Profile.pdf"
                                className="inline-flex items-center px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                download
                            >
                                Download CV
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </motion.a>
                        </div>
                    </motion.div>
                </Parallax>
            </div>
        </div>
    )
}

export default Hero