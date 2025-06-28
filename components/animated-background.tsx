"use client"

import { useEffect, useRef } from "react"

interface GeometricShape {
  x: number
  y: number
  size: number
  rotation: number
  rotationSpeed: number
  opacity: number
  type: "circle" | "triangle" | "square" | "hexagon"
  speed: number
  direction: number
}

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const shapesRef = useRef<GeometricShape[]>([])
  const animationRef = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const createShape = (): GeometricShape => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 40 + 10,
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.02,
      opacity: Math.random() * 0.1 + 0.02,
      type: ["circle", "triangle", "square", "hexagon"][Math.floor(Math.random() * 4)] as GeometricShape["type"],
      speed: Math.random() * 0.5 + 0.1,
      direction: Math.random() * Math.PI * 2,
    })

    const drawShape = (shape: GeometricShape) => {
      ctx.save()
      ctx.translate(shape.x, shape.y)
      ctx.rotate(shape.rotation)
      ctx.globalAlpha = shape.opacity
      ctx.strokeStyle = "#000000"
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)"
      ctx.lineWidth = 1

      switch (shape.type) {
        case "circle":
          ctx.beginPath()
          ctx.arc(0, 0, shape.size / 2, 0, Math.PI * 2)
          ctx.stroke()
          break

        case "triangle":
          ctx.beginPath()
          ctx.moveTo(0, -shape.size / 2)
          ctx.lineTo(-shape.size / 2, shape.size / 2)
          ctx.lineTo(shape.size / 2, shape.size / 2)
          ctx.closePath()
          ctx.stroke()
          break

        case "square":
          ctx.beginPath()
          ctx.rect(-shape.size / 2, -shape.size / 2, shape.size, shape.size)
          ctx.stroke()
          break

        case "hexagon":
          ctx.beginPath()
          for (let i = 0; i < 6; i++) {
            const angle = (i * Math.PI) / 3
            const x = (Math.cos(angle) * shape.size) / 2
            const y = (Math.sin(angle) * shape.size) / 2
            if (i === 0) ctx.moveTo(x, y)
            else ctx.lineTo(x, y)
          }
          ctx.closePath()
          ctx.stroke()
          break
      }
      ctx.restore()
    }

    const initShapes = () => {
      shapesRef.current = []
      for (let i = 0; i < 25; i++) {
        shapesRef.current.push(createShape())
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      shapesRef.current.forEach((shape) => {
        // Update position
        shape.x += Math.cos(shape.direction) * shape.speed
        shape.y += Math.sin(shape.direction) * shape.speed

        // Update rotation
        shape.rotation += shape.rotationSpeed

        // Wrap around screen
        if (shape.x < -50) shape.x = canvas.width + 50
        if (shape.x > canvas.width + 50) shape.x = -50
        if (shape.y < -50) shape.y = canvas.height + 50
        if (shape.y > canvas.height + 50) shape.y = -50

        drawShape(shape)
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    resizeCanvas()
    initShapes()
    window.addEventListener("resize", () => {
      resizeCanvas()
      initShapes()
    })
    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return (
    <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" style={{ background: "transparent" }} />
  )
}
