"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const handleRedirect = (url: string) => {
  window.open(url, "_blank"); 
};

const projects = [
  {
    title: "SafeMedicine",
    description:
      "SafeMedicine is a web application developed during the 2023 PUCRS Software Engineering Hackathon. The application offers doctors a tool to perform a second diagnostic check, allowing them to enter medical records, symptoms and suspected problems in the chat, to receive additional analysis.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ZpYx0evlR5eD149IRVdCcl46LCxaRi.png",
    url: "https://github.com/Joao-Schwingel/SafeMedicine"
  },
  {
    title: "Globo Aplausos",
    description:
      "A web application developed for Globo, Brazil's largest media company, that allows users to send virtual applause and reactions during live TV shows and events, enhancing viewer engagement and interaction.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-fQof6JW1DzXe3sPCQip52YFcI5vVif.png",
    url: "https://tools.ages.pucrs.br/globo-aplausos"
  },
  {
    title: "Connect Pharmacy",
    description: "Agencia Experimental de Engenharia de software 1",
    image: "/placeholder.svg?height=200&width=300",
    url: "https://github.com/Joao-Schwingel/Projet-AGES-1"
  },
]

export default function Projects() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-center"
        >
          Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              onClick={() => handleRedirect(project.url)}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
            >
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

