"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiPython,
  SiCplusplus,
  SiMongodb,
  SiPostgresql,
  SiAmazonwebservices,
  SiDocker,
  SiGit,
  SiFigma,
  SiTensorflow,
  SiFlutter,
} from "react-icons/si"
import { Code } from "lucide-react"
import GitHubCalendar from 'react-github-calendar';

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: SiReact, level: 90 },
      { name: "Next.js", icon: SiNextdotjs, level: 85 },
      { name: "TypeScript", icon: SiTypescript, level: 80 },
      { name: "JavaScript", icon: SiJavascript, level: 95 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, level: 85 },
      { name: "C++", icon: SiCplusplus, level: 70 },
      { name: "Python", icon: SiPython, level: 90 },
      { name: "Java", icon: Code, level: 75 },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "MongoDB", icon: SiMongodb, level: 80 },
      { name: "PostgreSQL", icon: SiPostgresql, level: 75 },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "AWS", icon: SiAmazonwebservices, level: 70 },
      { name: "Docker", icon: SiDocker, level: 65 },
      { name: "Git", icon: SiGit, level: 90 },
      { name: "Figma", icon: SiFigma, level: 80 },
      { name: "TensorFlow", icon: SiTensorflow, level: 75 },
      { name: "Flutter", icon: SiFlutter, level: 70 },
    ],
  },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-poppins gradient-text mb-4">Skills & Technologies</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              className="glass rounded-xl p-6"
            >
              <h3 className="text-xl font-bold font-poppins text-white mb-6 text-center">{category.title}</h3>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      duration: 0.5,
                      delay: categoryIndex * 0.1 + skillIndex * 0.05,
                    }}
                    className="space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <skill.icon className="text-purple-400" size={20} />
                        <span className="text-white font-medium">{skill.name}</span>
                      </div>
                      <span className="text-gray-400 text-sm">{skill.level}%</span>
                    </div>

                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-purple-500 to-purple-600 h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          duration: 1,
                          delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.5,
                          ease: "easeOut",
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub Contribution Graph Placeholder */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 glass rounded-xl p-8"
        >
          <h3 className="text-2xl font-bold font-poppins text-white mb-6 text-center">GitHub Activity</h3>
          <div className="flex justify-center">
            <div className="grid grid-cols-12 gap-1">
              {Array.from({ length: 84 }, (_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.2, delay: 0.8 + i * 0.01 }}
                  className={`w-3 h-3 rounded-sm ${
                    Math.random() > 0.7 ? "bg-purple-500" : Math.random() > 0.5 ? "bg-purple-600/60" : "bg-gray-700"
                  }`}
                />
              ))}
            </div>
          </div>
          <p className="text-center text-gray-400 mt-4">Consistent coding activity throughout the year</p>
        </motion.div> */}

        


{/* GitHub Contribution Graph */}
<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={isInView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.8, delay: 0.6 }}
  className="mt-16 glass rounded-xl p-8"
>
  <h3 className="text-2xl font-bold font-poppins text-white mb-6 text-center">GitHub Activity</h3>
  <div className="flex justify-center overflow-x-auto">
    <GitHubCalendar 
      username="Raja6284" // Replace with your GitHub username
      colorScheme="dark"
      blockSize={12}
      blockMargin={3}
      fontSize={14}
      theme={{
        dark: ['#0e1117', '#4c2889', '#6e40aa', '#8b5cf6', '#a78bfa'],
      }}
      style={{
        color: '#9ca3af'
      }}
      showWeekdayLabels
      labels={{
        totalCount: '{{count}} contributions in the last year'
      }}
    />
  </div>
  <p className="text-center text-gray-400 mt-4">Consistent coding activity throughout the year</p>
</motion.div>
      </div>
    </section>
  )
}
