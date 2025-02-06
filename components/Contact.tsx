"use client"

import { motion } from "framer-motion"
import { useState } from "react"

export default function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const mailtoLink = `mailto:jv.schwingel@gmail.com?subject=Portfolio Contact from ${name}&body=${encodeURIComponent(message)}`
    window.location.href = mailtoLink
  }

  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-center"
        >
          Contact Me
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="max-w-md mx-auto"
        >
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white"
                required
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
          <div className="mt-8 text-center">
            <p className="text-gray-300">Or contact me directly:</p>
            <p className="text-gray-300 mt-2">
              Email:{" "}
              <a href="mailto:jv.schwingel@gmail.com" className="text-blue-400 hover:underline">
                jv.schwingel@gmail.com
              </a>
            </p>
            <p className="text-gray-300 mt-2">
              Phone:{" "}
              <a href="tel:+5551996498698" className="text-blue-400 hover:underline">
                +55 51 99649-8698
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

