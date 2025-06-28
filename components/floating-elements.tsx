"use client"

import { useEffect, useState } from "react"

interface FloatingElement {
  id: number
  x: number
  y: number
  size: number
  speed: number
  opacity: number
}

export function FloatingElements() {
  const [elements, setElements] = useState<FloatingElement[]>([])

  useEffect(() => {
    // Create initial floating elements
    const initialElements: FloatingElement[] = []
    for (let i = 0; i < 8; i++) {
      initialElements.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 60 + 20,
        speed: Math.random() * 20 + 10,
        opacity: Math.random() * 0.1 + 0.05,
      })
    }
    setElements(initialElements)

    // Animate elements
    const interval = setInterval(() => {
      setElements((prev) =>
        prev.map((element) => ({
          ...element,
          y: element.y <= -10 ? 110 : element.y - element.speed * 0.01,
          x: element.x + Math.sin(Date.now() * 0.001 + element.id) * 0.1,
        })),
      )
    }, 50)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {elements.map((element) => (
        <div
          key={element.id}
          className="absolute rounded-full bg-black transition-all duration-1000 ease-linear"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            width: `${element.size}px`,
            height: `${element.size}px`,
            opacity: element.opacity,
            transform: `translate(-50%, -50%)`,
          }}
        />
      ))}
    </div>
  )
}
