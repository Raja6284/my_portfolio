"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { Calendar, Code, GraduationCap, MapPin } from "lucide-react"

const quickFacts = [
  { icon: GraduationCap, label: "Final Year CS Student", value: "Heritage Institute of Technology" },
  { icon: Code, label: "Coding Experience", value: "1+ Years" },
  { icon: Calendar, label: "Age", value: "22 Years Old" },
  { icon: MapPin, label: "Location", value: "Kolkata, Inida" },
]

const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "C++",
  "SQL",
  "Java",
  "MongoDB",
  "AWS",
  "Docker",
  "Solidity",
  "Git",
  "Rust",
  "Foundry",
  "Hardhat",
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-poppins gradient-text mb-4">About Me</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Get to know more about who I am, what I do, and what skills I have
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-80 h-80 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full blur-lg opacity-30 animate-pulse"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-gradient-to-r from-purple-500 to-purple-600 p-1">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <Image
                    src="/profile_pic.jpg?height=320&width=320"
                    alt="Raja Kumar"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <p className="text-gray-300 text-lg leading-relaxed">
                I am a passionate software developer with expertise in C++, JavaScript, Solidity, Rust, and SQL. Currently pursuing my Bachelor of Technology at Heritage Institute of Technology, I have a strong foundation in full-stack web development and blockchain technology.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
               In addition, I have earned certifications in Blockchain and Its Applications (NPTEL), Introduction to Cybersecurity (CISCO),and Bitcoin Enterprise (BSV Academy), enhancing my understanding of blockchain security and cryptocurrency technologies.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
              I am always eager to learn new technologies, solve complex problems, and collaborate with like-minded individuals to build innovative solutions. 🚀.
              </p>
            </div>

            {/* Quick Facts */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {quickFacts.map((fact, index) => (
                <motion.div
                  key={fact.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="glass p-4 rounded-lg"
                >
                  <div className="flex items-center space-x-3">
                    <fact.icon className="text-purple-400" size={24} />
                    <div>
                      <p className="text-sm text-gray-400">{fact.label}</p>
                      <p className="text-white font-semibold">{fact.value}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Skill Tags */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold font-poppins mb-4 text-white">Technologies I work with</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.8 + index * 0.05 }}
                    className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-purple-600/20 border border-purple-500/30 rounded-full text-sm text-purple-300 hover:from-purple-500/30 hover:to-purple-600/30 transition-all duration-200"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
