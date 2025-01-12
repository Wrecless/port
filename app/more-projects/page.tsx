'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import Link from 'next/link'
import React from "react";

const additionalProjects = [
    {
        title: 'E-commerce Platform',
        description: 'A fully-featured e-commerce platform with real-time inventory management and personalized recommendations.',
        image: '/placeholder.svg?height=300&width=400',
        github: 'https://github.com/brunomata/ecommerce-platform',
        demo: 'https://ecommerce-platform-demo.com',
        tags: ['React', 'Node.js', 'MongoDB', 'Redis'],
    },
    {
        title: 'Social Media Analytics Tool',
        description: 'An advanced analytics tool for social media managers to track engagement and optimize content strategies.',
        image: '/placeholder.svg?height=300&width=400',
        github: 'https://github.com/brunomata/social-media-analytics',
        demo: 'https://social-media-analytics-demo.com',
        tags: ['Python', 'Django', 'React', 'D3.js'],
    },
    {
        title: 'Augmented Reality Navigation App',
        description: 'A mobile app that uses AR technology to provide real-time navigation and information about points of interest.',
        image: '/placeholder.svg?height=300&width=400',
        github: 'https://github.com/brunomata/ar-navigation',
        demo: 'https://ar-navigation-demo.com',
        tags: ['React Native', 'ARKit', 'ARCore', 'Node.js'],
    },
    {
        title: 'Machine Learning-based Crop Yield Predictor',
        description: 'An AI-powered system that predicts crop yields based on various environmental and historical data.',
        image: '/placeholder.svg?height=300&width=400',
        github: 'https://github.com/brunomata/crop-yield-predictor',
        demo: 'https://crop-yield-predictor-demo.com',
        tags: ['Python', 'TensorFlow', 'Flask', 'Vue.js'],
    },
]

export default function MoreProjects() {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
            {/* Under Construction Notice */}
            <div className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-300 p-4 text-center">
                <p className="font-bold">
                    🚧 This section of the website is under construction. Stay tuned for updates! 🚧
                </p>
            </div>
            <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
                <main className="container mx-auto px-4 py-16">
                    <motion.h1
                        className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-teal-400 to-blue-500 text-transparent bg-clip-text"
                        initial={{opacity: 0, y: -50}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.5}}
                    >
                        More Projects
                    </motion.h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {additionalProjects.map((project, index) => (
                            <motion.div
                                key={project.title}
                                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
                                initial={{opacity: 0, y: 50}}
                                animate={{opacity: 1, y: 0}}
                                transition={{duration: 0.5, delay: index * 0.1}}
                            >
                                <img src={project.image} alt={project.title} className="w-full h-48 object-cover"/>
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tags.map((tag) => (
                                            <span key={tag}
                                                  className="bg-teal-100 dark:bg-teal-800 text-teal-800 dark:text-teal-100 px-2 py-1 rounded text-sm">
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
                                            <Github className="w-5 h-5 mr-2"/>
                                            GitHub
                                        </a>
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center text-blue-500 hover:text-blue-600"
                                        >
                                            <ExternalLink className="w-5 h-5 mr-2"/>
                                            Live Demo
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                    <div className="mt-12 text-center">
                        <Link href="/" passHref>
                            <motion.button
                                className="px-6 py-3 bg-gradient-to-r from-teal-400 to-blue-500 text-white rounded-full hover:from-teal-500 hover:to-blue-600 transition-colors duration-300"
                                whileHover={{scale: 1.05}}
                                whileTap={{scale: 0.95}}
                            >
                                Back to Home
                            </motion.button>
                        </Link>
                    </div>
                </main>
            </div>
        </div>
    )
}