/**
 * Performance utilities for optimizing animations and loading
 */

// Throttle function to limit execution frequency
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number,
): (...args: Parameters<T>) => ReturnType<T> | undefined {
  let inThrottle = false
  let lastResult: ReturnType<T>

  return function (this: any, ...args: Parameters<T>): ReturnType<T> | undefined {
    if (!inThrottle) {
      lastResult = func.apply(this, args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
    return lastResult
  }
}

// Debounce function to delay execution until after a pause
export function debounce<T extends (...args: any[]) => any>(func: T, wait: number): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout> | null = null

  return function (this: any, ...args: Parameters<T>): void {
    const later = () => {
      timeout = null
      func.apply(this, args)
    }

    if (timeout !== null) {
      clearTimeout(timeout)
    }
    timeout = setTimeout(later, wait)
  }
}

// Check if the browser supports IntersectionObserver
export const supportsIntersectionObserver = typeof IntersectionObserver !== "undefined"

// Create a performant intersection observer hook
export function createIntersectionObserver(
  callback: IntersectionObserverCallback,
  options: IntersectionObserverInit = {},
): IntersectionObserver | null {
  if (!supportsIntersectionObserver) return null

  return new IntersectionObserver(callback, {
    rootMargin: "200px", // Load elements before they're visible
    threshold: 0,
    ...options,
  })
}

// Check if the browser supports requestIdleCallback
export const supportsIdleCallback = typeof window !== "undefined" && "requestIdleCallback" in window

// Schedule low-priority work during idle periods
export function scheduleIdleWork(callback: () => void, timeout = 1000): void {
  if (supportsIdleCallback) {
    ;(window as any).requestIdleCallback(callback, { timeout })
  } else {
    setTimeout(callback, 1)
  }
}

// Measure component render time
export function measureRenderTime(componentName: string): () => void {
  if (process.env.NODE_ENV !== "production") {
    const startTime = performance.now()
    return () => {
      const endTime = performance.now()
      console.log(`[Performance] ${componentName} rendered in ${(endTime - startTime).toFixed(2)}ms`)
    }
  }
  return () => {}
}

// Preload critical resources
export function preloadResource(url: string, as: "image" | "style" | "script" | "font" | "fetch"): void {
  if (typeof document === "undefined") return

  const link = document.createElement("link")
  link.rel = "preload"
  link.href = url
  link.as = as

  if (as === "font") {
    link.setAttribute("crossorigin", "anonymous")
  }

  document.head.appendChild(link)
}
