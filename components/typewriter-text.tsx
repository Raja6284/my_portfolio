"use client"

import { useState, useEffect } from "react"

interface TypewriterTextProps {
  text: string
  speed?: number
}

export default function TypewriterText({ text, speed = 100 }: TypewriterTextProps) {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    setDisplayText("")
    setCurrentIndex(0)
  }, [text])

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, speed)

      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text, speed])

  return (
    <span>
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  )
}
