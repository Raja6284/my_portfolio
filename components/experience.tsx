"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Calendar, MapPin, ExternalLink } from "lucide-react"

const experiences = [
  {
    id: 1,
    company: "PearlThoughts",
    position: "Full-Stack Developer Intern",
    location: "Remote",
    duration: "May 2025 - June 2025",
    description: [
      "Developed and maintened web application using nx monorepo architecture",
      "Implemented backend services with NestJS and Prisma ORM",
      "Collaborated with frontend team to integrate APIs with Next.js",
      "Participated in code reviews and contributed to team knowledge sharing",
    ],
    website: "https://pearlthoughts.com/",
  },
  {
    id: 2,
    company: "Sapphire Infocom Pvt. Ltd.",
    position: "Full Stack Developer",
    location: "Remote",
    duration: "March 2025 - May 2025",
    description: [
      "Built and maintained a bookmarking application with user authentication and social sharing features",
      "Developed RESTful APIs using Node.js and Express",
      "Implemented frontend components with React and TypeScript",
      "Deployed on vercel for public access",
    ],
    website: "https://www.sapphireinfocom.com/",
  },
  {
    id: 3,
    company: "Timechain Summer of Code'2024 ",
    position: "Contributor",
    location: "Remote",
    duration: "May 2024 - August 2024",
    description: [
      "Worked on BSV blockchain projects.",
      "Contributed to the development of smart contracts and decentralized applications.",
      "Participated on cohort 1 of Timechain Summer of Code.",
      "Collaborated with mentors and other contributors to enhance blockchain solutions.",
    ],
    website: "https://tsoc.dev/",
  },
  {
    id: 4,
    company: "Salesforce",
    position: "Salesforce Developer Intern",
    location: "Remote",
    duration: "Nov 2023 - Dec 2023",
    description: [
      "Developed and maintained Salesforce applications using Apex and Visualforce",
      "Implemented custom business logic and workflows to enhance CRM functionality",
      "Learned Salesforce best practices and participated in code reviews",
      "Lightining Web Components development",
    ],
    website: "https://www.salesforce.com/in/",
  },
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-poppins gradient-text mb-4">Experience</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My professional journey and the experiences that have shaped my skills
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-purple-600"></div>

          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative flex items-center mb-12 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full border-4 border-gray-900 z-10"></div>

              {/* Content */}
              <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                <motion.div whileHover={{ scale: 1.02 }} className="glass rounded-xl p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold font-poppins text-white mb-1">{experience.position}</h3>
                      <div className="flex items-center space-x-2 mb-2">
                        <h4 className="text-purple-400 font-semibold">{experience.company}</h4>
                        {experience.website && (
                          <motion.a
                            href={experience.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
                          >
                            <ExternalLink size={16} />
                          </motion.a>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mb-4 text-sm text-gray-400">
                    <div className="flex items-center space-x-1 mb-2 sm:mb-0">
                      <Calendar size={16} />
                      <span>{experience.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin size={16} />
                      <span>{experience.location}</span>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {experience.description.map((item, itemIndex) => (
                      <motion.li
                        key={itemIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{
                          duration: 0.5,
                          delay: index * 0.2 + itemIndex * 0.1 + 0.3,
                        }}
                        className="text-gray-300 text-sm flex items-start"
                      >
                        <span className="text-purple-400 mr-2 mt-1.5 w-1 h-1 bg-purple-400 rounded-full flex-shrink-0"></span>
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
