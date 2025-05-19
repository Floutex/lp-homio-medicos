"use client"

import { useEffect, useState, memo } from "react"
import { throttle } from "@/lib/performance-utils"

// Memoize the component to prevent unnecessary re-renders
const CssGridBackground = memo(function CssGridBackground() {
  const [mounted, setMounted] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    setMounted(true)

    // Throttle scroll event for better performance
    const handleScroll = throttle(() => {
      const position = window.scrollY
      // Only update state if significant change (reduces renders)
      if (Math.abs(position - scrollPosition) > 50) {
        setScrollPosition(position)
      }
    }, 100)

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [scrollPosition])

  // Calculate parallax effect based on scroll position
  const translateY = mounted ? scrollPosition * 0.1 : 0

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Apply hardware acceleration and will-change for better performance */}
      <div
        className="absolute inset-0 grid-background will-change-transform hardware-accelerated"
        style={{
          transform: `translateY(${translateY}px)`,
          opacity: 0.8, // Slightly reduced opacity for better performance
        }}
      />
      <div className="absolute inset-0 grid-gradient" />
    </div>
  )
})

export default CssGridBackground
