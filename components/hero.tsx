"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown, Download, Eye } from "lucide-react"
import ParticleBackground from "./particle-background"
import TypewriterText from "./typewriter-text"

const rotatingTexts = [
  "I build on blockchain",
  "I craft full stack apps",
  "I write smart contracts",
  "I design Web3 solutions",
  "I develop secure systems",
  "I engineer digital products",
]


export default function Hero() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % rotatingTexts.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const handleDownloadResume = () => {
    // Create a dummy PDF download
    const link = document.createElement("a")
    link.href = "/resume.pdf"
    link.download = "raja_kumar_Resume.pdf"
    link.click()
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground />

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <motion.h1
            className="text-4xl sm:text-6xl lg:text-7xl font-bold font-poppins mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Hi, I'm <span className="gradient-text">Raja Kumar</span>
          </motion.h1>

          <motion.div
            className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-8 h-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <TypewriterText text={rotatingTexts[currentTextIndex]} key={currentTextIndex} />
          </motion.div>

          <motion.p
            className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Final-year Computer Science student passionate about building innovative digital solutions, specializing in full-stack development, blockchain technologies, and software engineering.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white font-semibold rounded-full hover:from-purple-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-purple-500/25"
            >
              <Eye className="mr-2" size={20} />
              View Projects
            </motion.a>

            <motion.button
              onClick={handleDownloadResume}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-3 glass border-2 border-purple-500/30 text-white font-semibold rounded-full hover:border-purple-500/50 transition-all duration-200"
            >
              <Download className="mr-2" size={20} />
              Download Resume
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <motion.a href="#about" className="inline-block animate-bounce-slow" whileHover={{ scale: 1.1 }}>
            <ChevronDown size={32} className="text-purple-400" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
