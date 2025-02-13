"use client"

import { motion } from "framer-motion"

const experiences = [
  {
    company: "Dell Technologies",
    position: "Frontend Developer Intern",
    period: "May 2024 - Present",
    description:
      "Currently working on frontend development projects, focusing on automation and application observability. Gaining valuable experience in a corporate environment, contributing to large-scale projects and improving monitoring capabilities.",
  },
  {
    company: "Nelogica",
    position: "Frontend Developer",
    period: "November 2022 - April 2024",
    description:
      "Developed frontend solutions while gaining deep understanding of the company's business to enhance development skills. Worked with cutting-edge technologies to create efficient and user-friendly interfaces for financial software.",
  },
]

export default function Experience() {
  return (
    <section id="Experience" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-center"
        >
          Experience
        </motion.h2>
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-8 bg-gray-700 rounded-lg p-6 shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-2">{exp.position}</h3>
              <p className="text-blue-400 mb-2">{exp.company}</p>
              <p className="text-gray-400 mb-4">{exp.period}</p>
              <p className="text-gray-300">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

