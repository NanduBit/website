"use client"

import { useEffect, useRef } from "react"

export function WaveAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let time = 0

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const drawWave = (amplitude: number, frequency: number, phase: number, opacity: number) => {
      ctx.beginPath()
      ctx.strokeStyle = `rgba(0, 0, 0, ${opacity})`
      ctx.lineWidth = 2

      for (let x = 0; x <= canvas.width; x += 2) {
        const y = canvas.height / 2 + Math.sin(x * frequency + phase) * amplitude
        if (x === 0) ctx.moveTo(x, y)
        else ctx.lineTo(x, y)
      }
      ctx.stroke()
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw multiple waves with different properties
      drawWave(30, 0.01, time * 0.02, 0.1)
      drawWave(20, 0.015, time * 0.025, 0.08)
      drawWave(40, 0.008, time * 0.015, 0.06)
      drawWave(25, 0.012, time * 0.03, 0.04)

      time++
      animationRef.current = requestAnimationFrame(animate)
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)
    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-30"
      style={{ background: "transparent" }}
    />
  )
}
