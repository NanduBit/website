"use client"

import { useEffect, useState } from "react"

interface Dot {
  id: number
  x: number
  y: number
  size: number
  pulse: number
}

export function PulsingDots() {
  const [dots, setDots] = useState<Dot[]>([])

  useEffect(() => {
    // Create grid of dots
    const newDots: Dot[] = []
    let id = 0
    for (let x = 10; x <= 90; x += 15) {
      for (let y = 10; y <= 90; y += 15) {
        newDots.push({
          id: id++,
          x,
          y,
          size: Math.random() * 8 + 4,
          pulse: Math.random() * Math.PI * 2,
        })
      }
    }
    setDots(newDots)

    // Animate dots
    const interval = setInterval(() => {
      setDots((prev) =>
        prev.map((dot) => ({
          ...dot,
          pulse: dot.pulse + 0.1,
        })),
      )
    }, 50)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {dots.map((dot) => (
        <div
          key={dot.id}
          className="absolute rounded-full bg-black transition-all duration-100"
          style={{
            left: `${dot.x}%`,
            top: `${dot.y}%`,
            width: `${dot.size + Math.sin(dot.pulse) * 4}px`,
            height: `${dot.size + Math.sin(dot.pulse) * 4}px`,
            opacity: 0.15 + Math.sin(dot.pulse) * 0.08,
            transform: `translate(-50%, -50%)`,
          }}
        />
      ))}
    </div>
  )
}
