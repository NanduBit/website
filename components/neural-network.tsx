"use client"

import { useEffect, useRef } from "react"

interface Node {
  x: number
  y: number
  connections: number[]
  pulse: number
}

export function NeuralNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const nodesRef = useRef<Node[]>([])
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

    const createNodes = () => {
      const nodes: Node[] = []
      const nodeCount = 30

      for (let i = 0; i < nodeCount; i++) {
        nodes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          connections: [],
          pulse: Math.random() * Math.PI * 2,
        })
      }

      // Create connections between nearby nodes
      nodes.forEach((node, i) => {
        nodes.forEach((otherNode, j) => {
          if (i !== j) {
            const distance = Math.sqrt(Math.pow(node.x - otherNode.x, 2) + Math.pow(node.y - otherNode.y, 2))
            if (distance < 150 && node.connections.length < 3) {
              node.connections.push(j)
            }
          }
        })
      })

      nodesRef.current = nodes
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      nodesRef.current.forEach((node, i) => {
        // Update pulse
        node.pulse += 0.05

        // Draw connections
        node.connections.forEach((connectionIndex) => {
          const connectedNode = nodesRef.current[connectionIndex]
          const pulseIntensity = (Math.sin(node.pulse) + 1) / 2

          ctx.beginPath()
          ctx.strokeStyle = `rgba(0, 0, 0, ${0.1 * pulseIntensity})`
          ctx.lineWidth = 1 + pulseIntensity
          ctx.moveTo(node.x, node.y)
          ctx.lineTo(connectedNode.x, connectedNode.y)
          ctx.stroke()
        })

        // Draw node
        const nodeSize = 3 + Math.sin(node.pulse) * 2
        ctx.beginPath()
        ctx.fillStyle = `rgba(0, 0, 0, ${0.2 + Math.sin(node.pulse) * 0.1})`
        ctx.arc(node.x, node.y, nodeSize, 0, Math.PI * 2)
        ctx.fill()

        // Slowly move nodes
        node.x += Math.sin(node.pulse * 0.1) * 0.2
        node.y += Math.cos(node.pulse * 0.1) * 0.2

        // Keep nodes on screen
        if (node.x < 0) node.x = canvas.width
        if (node.x > canvas.width) node.x = 0
        if (node.y < 0) node.y = canvas.height
        if (node.y > canvas.height) node.y = 0
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    resizeCanvas()
    createNodes()
    window.addEventListener("resize", () => {
      resizeCanvas()
      createNodes()
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
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-40"
      style={{ background: "transparent" }}
    />
  )
}
