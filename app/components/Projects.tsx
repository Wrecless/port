import { motion } from 'framer-motion'
import { Parallax } from 'react-scroll-parallax'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
    {
        title: 'SoulSupport',
        description: 'SoulSupport is a digital platform dedicated to providing accessible mental health support through various resources, including breathing exercises, meditation, sound therapy, physical exercises, and sleep hypnotherapy. These tools are designed to promote relaxation, mindfulness, and overall well-being.\n' +
            '\n' +
            'The website features a user-friendly interface with navigation options such as Home, Support, and Help, allowing users to easily access the resources they need. Additionally, SoulSupport maintains a presence on LinkedIn and GitHub, offering avenues for users to connect and engage with the platform\'s community.\n' +
            '\n' +
            'By offering a comprehensive suite of mental health resources, SoulSupport aims to empower individuals to take charge of their mental well-being in a supportive and accessible environment.',
        image: '/img_2.png?height=300&width=400',
        github: 'https://github.com/Wrecless/soul',
        demo: 'https://soulsupport.vercel.app/',
        tags: ['Next.js', 'Node.js', 'Tailwind CSS', 'Api'],
    },
    {
        title: 'Wrekify',
        description: 'A Spotify-inspired personal project that lets users upload, stream, and manage their music library seamlessly. Designed with a sleek UI, it offers core features like music playback, playlists, and a responsive, user-friendly experience. Perfect for showcasing creative coding and full-stack development skills!',
        image: '/img.png?height=300&width=400',
        github: 'https://github.com/Wrecless/spotify-clone',
        demo: 'https://wrekify.vercel.app/',
        tags: ['Next.js', 'Tailwind Css', 'Node.js', 'Supabase'],
    },
]

const Projects = () => {
    return (
        <section id="projects" className="py-20">
            <Parallax translateY={['-50px', '50px']}>
                <motion.h2
                    className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-teal-400 to-blue-500 text-transparent bg-clip-text"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Projects
                </motion.h2>
            </Parallax>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <Parallax key={project.title} translateY={[`${50 + index * 25}px`, `-${50 + index * 25}px`]}>
                        <motion.div
                            className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <img src={project.image} alt={project.title} className="w-full h-auto object-cover" />
                            <div className="p-6">
                                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="bg-teal-100 dark:bg-teal-800 text-teal-800 dark:text-teal-100 px-2 py-1 rounded text-sm">
                      {tag}
                    </span>
                                    ))}
                                </div>
                                <div className="flex justify-between">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center text-teal-500 hover:text-teal-600"
                                    >
                                        <Github className="w-5 h-5 mr-2" />
                                        GitHub
                                    </a>
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center text-blue-500 hover:text-blue-600"
                                    >
                                        <ExternalLink className="w-5 h-5 mr-2" />
                                        Live Demo
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </Parallax>
                ))}
            </div>
        </section>
    )
}

export default Projects
