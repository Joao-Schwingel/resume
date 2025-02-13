"use client"

import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section id="Hero" className="h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <motion.h1
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold mb-4"
        >
          João Vitor Schwingel
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-2xl text-gray-400"
        >
          Junior Full Stack Developer
        </motion.h2>
      </motion.div>
    </section>
  )
}

