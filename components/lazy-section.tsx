"use client"

import { useState, useEffect, useRef, type ReactNode } from "react"
import { createIntersectionObserver } from "@/lib/performance-utils"

interface LazySectionProps {
  children: ReactNode
  placeholder?: ReactNode
  rootMargin?: string
  threshold?: number
  className?: string
  id?: string
}

export default function LazySection({
  children,
  placeholder,
  rootMargin = "200px",
  threshold = 0,
  className,
  id,
}: LazySectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const observer = createIntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
          observer?.disconnect()
        }
      },
      { rootMargin, threshold },
    )

    if (observer) {
      observer.observe(sectionRef.current)
    } else {
      // Fallback if IntersectionObserver is not supported
      setIsVisible(true)
    }

    return () => {
      observer?.disconnect()
    }
  }, [rootMargin, threshold])

  return (
    <section ref={sectionRef} className={className} id={id}>
      {isVisible ? children : placeholder || <div className="w-full h-64 bg-muted/20 animate-pulse rounded-lg"></div>}
    </section>
  )
}
