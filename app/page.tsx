'use client'

import Hero from "@/components/Hero"
import About from "@/components/About"
import Skills from "@/components/Skills"
import Experience from "@/components/Experience"
import Projects from "@/components/Projects"
import Contact from "@/components/Contact"
import './side.css';
import { House, Book, Atom, Briefcase, FolderKanban, Phone} from 'lucide-react';
import { useState } from "react";
import Footer from "@/components/Footer"

export default function Home() {
  const [active, setActive] = useState("Hero");

  const menu = [
    {name:  <House/>, hreff: 'Hero' },
    {name:  <Book/>, hreff: 'About' },
    {name:  <Atom/>, hreff: 'Skills' },
    {name:  <Briefcase/>, hreff: 'Experience' },
    {name:  <FolderKanban/>, hreff: 'Projects' },
    {name:  <Phone/>, hreff: 'Contact' },
  ]

  return (
    <main className=" text-white min-h-screen">
      <div className="bg-transparent flex justify-center items-center">
        <nav className="fixed top-1 left-1/2 transform -translate-x-1/2 rounded-[10px] p-1 bg-transparent flex flex-row">
          <ul className="flex gap-2">
            {menu.map((item) => (
              <li 
                className={`list-none cursor-pointer z-[1] p-3 text-white rounded-full ${active === item.hreff ? 'active' : 'bg-gray-700'}`}
                onClick={(e) => {
                  e.preventDefault(); // Evita o comportamento padrão do link
                  setActive(item.hreff);
                  
                  const section = document.getElementById(item.hreff);
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                <a className="w-full block" href={`#${item.hreff}`}>{item.name}</a>
              </li>
            ))}
            <div className="indicator"></div>
          </ul>
        </nav>
      </div>
      <Hero/>
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}
