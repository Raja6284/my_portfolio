"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { ExternalLink, Github, Filter } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "CryptoPayLink",
    description:"Professional-grade crypto payment infrastructure designed for modern creators and businesses.The easiest way for creators, freelancers, and educators to accept cryptocurrency payments. No coding required, automatic verification, instant invoicing.",
    image: "/cryptopaylink.png?height=300&width=400",
    category: "Blockchain",
    tech: ["Nextjs", "Node.js", "Supabase", "TypeScript", "postgresql","Ether.js","solana/web3.js"],
    liveUrl: "https://crypto-pay-link.vercel.app/",
    githubUrl: "https://github.com/Raja6284/CryptoPayLink.git",
  },
  {
    id: 2,
    title: "OptiMedia",
    description:
      "A full-stack cloudinary AI powered image optimization application that allows users to upload images, apply customization and video compression, preview results, and download optimized media.",
    image: "/optimedia.png?height=300&width=400",
    category: "AI",
    tech: ["Next.js", "Tailwind CSS", "Cloudinary AI", "Node.js","Prisma","Clerk","Express"],
    liveUrl: "https://optimedia-saas.vercel.app/",
    githubUrl: "https://github.com/Raja6284/optimedia-saas.git",
  },
  {
    id: 3,
    title: "OneBrain",
    description:
      "Full-stack bookmarking application with user authentication, embeedding, and social sharing features. Built with React, Node.js, and MongoDB.",
    image: "/onebrain.png?height=300&width=400",
    category: "Web",
    tech: ["React", "Node.js", "MongoDB", "TypeScript", "Express"],
    liveUrl: "https://onebrain.vercel.app",
    githubUrl: "https://github.com/Raja6284/mybrain_frontend.git",
  },
  {
    id: 4,
    title: "GDrive3.0",
    description:
      "GDrive3.0 is a decentralized file storage application that allows users to upload, share, and manage files securely on the blockchain.",
    image: "/gdrive3.png?height=300&width=400",
    category: "Blockchain",
    tech: ["React", "Solidity", "Hardhat", "IPFS", "Tailwind CSS", "Ethers.js"],
    liveUrl: "https://gdrive-3.vercel.app/",
    githubUrl: "https://github.com/Raja6284/GDRIVE3.0.git",
  },
  {
    id: 5,
    title: "Task Management App",
    description:
      "TaskFlow is a task management app that helps users organize their tasks efficiently. Features include task creation, deadlines, and progress tracking and recurring tasks.",
    image: "/taskflow.png?height=300&width=400",
    category: "Web",
    tech: ["Next.js", "Tailwind CSS", "Redux","Express","Vercel"],
    liveUrl: "https://taskflow-sandy.vercel.app/",
    githubUrl: "https://github.com/Raja6284/taskflow.git",
  },
  {
    id: 6,
    title: "Solfinity",
    description:
      "Solfinity is a blockchain-based platform where useres can receive Faucet tokens, create and manage tokens and can also create Liquidity pools.",
    image: "/solfinity.png?height=300&width=400",
    category: "Blockchain",
    tech: ["solana-spl", "React", "Javascript", "Radium-sdk", "node-poyfil"],
    liveUrl: "https://solfinity.vercel.app/",
    githubUrl: "https://github.com/Raja6284/solfinity.git",
  },
  {
    id: 7,
    title: "MegaBlogger",
    description:
      "A blogging platform with user authentication, post creation, and commenting features. Built with React and Appwrite as backend.",
    image: "/megablogger.png?height=300&width=400",
    category: "Web",
    tech: ["React", "JavaScript", "Appwrite", "TinyMCE"],
    liveUrl: "https://mega-blogger.vercel.app/",
    githubUrl: "https://github.com/Raja6284/MegaBlogger.git",
  },
  
]

const categories = ["All", "Web", "Blockchain","AI"]

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-poppins gradient-text mb-4">Featured Projects</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-purple-500 to-purple-600 text-white"
                  : "glass text-gray-300 hover:text-white hover:bg-purple-500/20"
              }`}
            >
              <Filter className="inline mr-2" size={16} />
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass rounded-xl overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-200"
                  >
                    <ExternalLink size={16} />
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-200"
                  >
                    <Github size={16} />
                  </motion.a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold font-poppins text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4 line-clamp-3">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-xs text-purple-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-200"
                  >
                    <ExternalLink size={16} className="mr-1" />
                    Live Demo
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    <Github size={16} className="mr-1" />
                    Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
