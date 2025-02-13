"use client"

import { motion } from "framer-motion"

const skills = [
  { name: "React", level: 90 },
  { name: "Angular", level: 90 },
  { name: "TypeScript", level: 90 },
  { name: "Node.js", level: 80 },
  { name: "Nest.js", level: 80 },
  { name: "Git", level: 85 },
  { name: "Docker", level: 75 },
  { name: "AWS", level: 75 },
  { name: "Grafana", level: 60 },
  { name: "Splunk", level: 60 },
  { name: "Prometheus", level: 60 },
]

export default function Skills() {
  return (
    <section id="Skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-center"
        >
          Skills
        </motion.h2>
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-4"
            >
              <div className="flex justify-center mb-1">
                <span className="text-base font-medium text-gray-300">{skill.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

