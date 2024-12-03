import { motion } from 'framer-motion'
import { Parallax } from 'react-scroll-parallax'
import { Award, BookOpen, Briefcase } from 'lucide-react'

const achievements = [
    {
        title: 'Digital Innovation Award',
        description: 'Recognized for outstanding contribution to digital innovation in the field of computer science.',
        icon: <Award className="w-12 h-12 text-teal-400" />,
    },
    {
        title: 'First Class Honours',
        description: 'Graduated with First Class Honours in BSc Computer Science.',
        icon: <BookOpen className="w-12 h-12 text-teal-400" />,
    },
    {
        title: 'Tech Innovator of the Year',
        description: 'Named Tech Innovator of the Year at the annual industry awards for groundbreaking project work.',
        icon: <Briefcase className="w-12 h-12 text-teal-400" />,
    },
]

const Achievements = () => {
    return (
        <section id="achievements" className="py-20">
            <Parallax translateY={['-50px', '50px']}>
                <motion.h2
                    className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-teal-400 to-blue-500 text-transparent bg-clip-text"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Achievements
                </motion.h2>
            </Parallax>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {achievements.map((achievement, index) => (
                    <Parallax key={achievement.title} translateY={[`${50 + index * 25}px`, `-${50 + index * 25}px`]}>
                        <motion.div
                            className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="flex justify-center mb-4">
                                {achievement.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-2 text-center">{achievement.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400 text-center">{achievement.description}</p>
                        </motion.div>
                    </Parallax>
                ))}
            </div>
        </section>
    )
}

export default Achievements