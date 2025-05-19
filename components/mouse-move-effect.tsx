"use client"

import { useEffect, useState } from "react"
import { throttle } from "@/lib/performance-utils"

export default function MouseMoveEffect() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    // Posição inicial no centro da tela
    setMousePosition({
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    })

    // Throttle para melhorar a performance
    const handleMouseMove = throttle((event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY })
    }, 50) // Atualiza a cada 50ms para melhor performance

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  if (!isMounted) return null

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300 will-change-transform"
      style={{
        background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
        transform: "translateZ(0)", // Força aceleração de hardware
      }}
      aria-hidden="true"
    />
  )
}
