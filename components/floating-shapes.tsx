"use client"

import { useEffect, useState } from "react"

interface Shape {
  id: number
  x: number
  y: number
  size: number
  rotation: number
  speed: number
  type: "circle" | "square" | "triangle"
}

export function FloatingShapes() {
  const [shapes, setShapes] = useState<Shape[]>([])

  useEffect(() => {
    // Create initial shapes
    const initialShapes: Shape[] = []
    for (let i = 0; i < 15; i++) {
      initialShapes.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 40 + 20,
        rotation: Math.random() * 360,
        speed: Math.random() * 20 + 10,
        type: ["circle", "square", "triangle"][Math.floor(Math.random() * 3)] as Shape["type"],
      })
    }
    setShapes(initialShapes)

    // Animate shapes
    const interval = setInterval(() => {
      setShapes((prev) =>
        prev.map((shape) => ({
          ...shape,
          y: shape.y <= -10 ? 110 : shape.y - shape.speed * 0.02,
          rotation: shape.rotation + 1,
          x: shape.x + Math.sin(Date.now() * 0.001 + shape.id) * 0.05,
        })),
      )
    }, 50)

    return () => clearInterval(interval)
  }, [])

  const getShapeStyle = (shape: Shape) => {
    const baseStyle = {
      left: `${shape.x}%`,
      top: `${shape.y}%`,
      width: `${shape.size}px`,
      height: `${shape.size}px`,
      transform: `translate(-50%, -50%) rotate(${shape.rotation}deg)`,
      opacity: 0.3,
      border: "2px solid #000000",
      backgroundColor: "rgba(0, 0, 0, 0.08)",
    }

    switch (shape.type) {
      case "circle":
        return { ...baseStyle, borderRadius: "50%" }
      case "square":
        return { ...baseStyle, borderRadius: "8px" }
      case "triangle":
        return {
          ...baseStyle,
          width: 0,
          height: 0,
          backgroundColor: "transparent",
          borderLeft: `${shape.size / 2}px solid transparent`,
          borderRight: `${shape.size / 2}px solid transparent`,
          borderBottom: `${shape.size}px solid rgba(0, 0, 0, 0.25)`,
          border: "none",
        }
      default:
        return baseStyle
    }
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {shapes.map((shape) => (
        <div key={shape.id} className="absolute transition-all duration-100 ease-linear" style={getShapeStyle(shape)} />
      ))}
    </div>
  )
}
