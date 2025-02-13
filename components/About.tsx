"use client"

import { motion } from "framer-motion"

export default function About() {
  return (
    <section id="About" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-center"
        >
          About Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-lg text-gray-300 max-w-2xl mx-auto text-center"
        >
          I'm a passionate junior full stack developer with over 2 years of experience in building scalable web
          applications. I specialize in React, Node.js, and cloud technologies, always striving to create efficient and
          user-friendly solutions. I always seek to learn and improve myself, creating efficient and intuitive solutions for the web.
        </motion.p>
      </div>
    </section>
  )
}

