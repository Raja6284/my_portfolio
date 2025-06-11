"use client"

import { useEffect } from "react"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Experience from "@/components/experience"
import Contact from "@/components/contact"
import BackToTop from "@/components/back-to-top"
import { useKonamiCode } from "@/hooks/use-konami-code"
import toast from "react-hot-toast"

export default function Home() {
  const konamiActivated = useKonamiCode()

  useEffect(() => {
    // Console message for developers
    console.log(`
    🚀 Welcome to Alex Johnson's Portfolio!
    
    Built with:
    - Next.js 14 & TypeScript
    - Tailwind CSS & Framer Motion
    - Glass morphism & Custom animations
    
    Interested in the code? Check out the GitHub repo!
    `)

    // Konami code easter egg
    if (konamiActivated) {
      toast("🎉 Konami Code activated! You found the secret!", {
        duration: 5000,
        style: {
          background: "linear-gradient(135deg, #8b5cf6, #7c3aed)",
          color: "#fff",
        },
      })
    }
  }, [konamiActivated])

  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      <BackToTop />
    </main>
  )
}
