import { motion } from 'framer-motion'

const skills = [
    { name: 'Web - JS/CSS/HTML', level: 90 },
    { name: 'Next.js', level: 85 },
    { name: 'React', level: 80 },
    { name: 'Node.js', level: 80 },
    { name: 'Python', level: 85 },
    { name: 'SQL', level: 70 },
    { name: 'C', level: 70 },
    { name: 'C#', level: 65 },
    { name: 'C++', level: 60 },
    { name: 'PHP', level: 65 },
    { name: 'Docker', level: 40 },
]

const Skills = () => {
    return (
        <section id="skills" className="py-20">
                <motion.h2
                    className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-teal-400 to-blue-500 text-transparent bg-clip-text"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Skills
                </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {skills.map((skill, index) => (
                        <motion.div
                            className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg"
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="flex justify-between mb-2">
                                <span className="text-lg font-semibold">{skill.name}</span>
                                <span className="text-teal-500">{skill.level}%</span>
                            </div>
                            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                                <motion.div
                                    className="bg-gradient-to-r from-teal-400 to-blue-500 h-2.5 rounded-full"
                                    initial={{ width: 0 }}
                                    animate={{ width: `${skill.level}%` }}
                                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                                ></motion.div>
                            </div>
                        </motion.div>
                ))}
            </div>
        </section>
    )
}

export default Skills