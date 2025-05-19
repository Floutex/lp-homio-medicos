"use client"

import { useState, useEffect, useRef } from "react"
import Image, { type ImageProps } from "next/image"
import { createIntersectionObserver } from "@/lib/performance-utils"

interface OptimizedImageProps extends Omit<ImageProps, "onLoad"> {
  lowQualitySrc?: string
  blurEffect?: boolean
  lazyLoadingOffset?: string
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  lowQualitySrc,
  blurEffect = true,
  lazyLoadingOffset = "200px",
  className,
  ...props
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const imageRef = useRef<HTMLDivElement>(null)

  // Set up intersection observer for lazy loading
  useEffect(() => {
    if (!imageRef.current) return

    const observer = createIntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true)
          observer?.disconnect()
        }
      },
      { rootMargin: lazyLoadingOffset },
    )

    if (observer) {
      observer.observe(imageRef.current)
    } else {
      // Fallback if IntersectionObserver is not supported
      setIsInView(true)
    }

    return () => {
      observer?.disconnect()
    }
  }, [lazyLoadingOffset])

  // Handle image loading
  const handleImageLoad = () => {
    setIsLoaded(true)
  }

  return (
    <div
      ref={imageRef}
      className={`relative overflow-hidden ${className || ""}`}
      style={{
        width: typeof width === "number" ? `${width}px` : width,
        height: typeof height === "number" ? `${height}px` : height,
      }}
    >
      {isInView && (
        <>
          {blurEffect && !isLoaded && (
            <div
              className="absolute inset-0 bg-gray-200 dark:bg-gray-800 animate-pulse"
              style={{
                backgroundImage: lowQualitySrc ? `url(${lowQualitySrc})` : undefined,
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter: "blur(10px)",
              }}
            />
          )}
          <Image
            src={src || "/placeholder.svg"}
            alt={alt}
            width={typeof width === "number" ? width : undefined}
            height={typeof height === "number" ? height : undefined}
            onLoad={handleImageLoad}
            className={`transition-opacity duration-300 ${isLoaded ? "opacity-100" : "opacity-0"}`}
            {...props}
          />
        </>
      )}
    </div>
  )
}
