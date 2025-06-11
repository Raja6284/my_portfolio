"use client"

import { useState, useEffect } from "react"

const KONAMI_CODE = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "KeyB",
  "KeyA",
]

export function useKonamiCode() {
  const [keys, setKeys] = useState<string[]>([])
  const [activated, setActivated] = useState(false)

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      setKeys((prevKeys) => {
        const newKeys = [...prevKeys, event.code].slice(-KONAMI_CODE.length)

        if (newKeys.join(",") === KONAMI_CODE.join(",")) {
          setActivated(true)
          return []
        }

        return newKeys
      })
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  return activated
}
