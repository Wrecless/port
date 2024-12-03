import { motion } from 'framer-motion'
import { Parallax } from 'react-scroll-parallax'

const About = () => {
    return (
        <section id="about" className="py-20">
            <Parallax translateY={['-50px', '50px']}>
                <motion.h2
                    className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-teal-400 to-blue-500 text-transparent bg-clip-text"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    About Me
                </motion.h2>
            </Parallax>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <Parallax translateY={['25px', '-25px']}>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <p className="text-lg mb-6">
                            My journey in computer science began with a fascination for problem-solving and a desire to create
                            innovative solutions. As a graduate with First Class Honours in Computer Science, Ive honed my skills
                            in full-stack development, constantly pushing the boundaries of whats possible in tech.
                        </p>
                        <p className="text-lg mb-6">
                            My passion lies in crafting elegant, efficient, and user-centric applications that make a real
                            difference. Whether its developing a complex web application or optimizing database performance,
                            I approach each project with creativity, resilience, and a results-driven mindset.
                        </p>
                        <p className="text-lg">
                            Recognized with a Digital Innovation Award, I continue to seek out new challenges and opportunities
                            to grow as a developer and contribute to the ever-evolving world of technology.
                        </p>
                    </motion.div>
                </Parallax>
                <Parallax translateY={['50px', '-50px']}>
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 gap-6"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-teal-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                            </svg>
                            <h3 className="text-xl font-semibold mb-2">Technical Expertise</h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                Proficient in a wide range of programming languages and frameworks, always eager to learn more.
                            </p>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-teal-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                            </svg>
                            <h3 className="text-xl font-semibold mb-2">Innovative Thinking</h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                Approaching problems with creativity and out-of-the-box solutions.
                            </p>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-teal-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                            <h3 className="text-xl font-semibold mb-2">Results-Driven</h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                Focused on delivering high-quality, impactful solutions that exceed expectations.
                            </p>
                        </div>
                    </motion.div>
                </Parallax>
            </div>
        </section>
    )
}

export default About