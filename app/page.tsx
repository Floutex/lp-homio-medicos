"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { motion, useScroll } from "framer-motion"
import { useEffect, useState } from "react"
import { scrollToElement } from "@/lib/scroll-utils"
import { throttle } from "@/lib/performance-utils"
import dynamic from "next/dynamic"
import LazySection from "@/components/lazy-section"
import MouseMoveEffect from "@/components/mouse-move-effect"

// Eagerly load critical above-the-fold components
import HeroSection from "@/components/hero-section"

// Lazily load below-the-fold components
const ProblemSection = dynamic(() => import("@/components/problem-section"), {
  loading: () => <SectionPlaceholder height="400px" />,
  ssr: true,
})

const JourneySection = dynamic(() => import("@/components/journey-section"), {
  loading: () => <SectionPlaceholder />,
  ssr: false,
})

const SolutionSection = dynamic(() => import("@/components/solution-section"), {
  loading: () => <SectionPlaceholder />,
  ssr: false,
})

const DifferentiationSection = dynamic(() => import("@/components/differentiation-section"), {
  loading: () => <SectionPlaceholder />,
  ssr: false,
})

const ReflectionSection = dynamic(() => import("@/components/reflection-section"), {
  loading: () => <SectionPlaceholder />,
  ssr: false,
})

const FeaturesSection = dynamic(() => import("@/components/features-section"), {
  loading: () => <SectionPlaceholder />,
  ssr: false,
})

const OfferSection = dynamic(() => import("@/components/offer-section"), {
  loading: () => <SectionPlaceholder />,
  ssr: false,
})

const Testimonials = dynamic(() => import("@/components/testimonials"), {
  loading: () => <SectionPlaceholder />,
  ssr: false,
})

const FaqSection = dynamic(() => import("@/components/faq-section"), {
  loading: () => <SectionPlaceholder />,
  ssr: false,
})

const BookingSection = dynamic(() => import("@/components/booking-section"), {
  loading: () => <SectionPlaceholder />,
  ssr: false,
})

// Simple placeholder for sections while loading
function SectionPlaceholder({ height = "300px" }: { height?: string }) {
  return <div className="w-full bg-muted/10 animate-pulse rounded-lg mx-auto my-8 max-w-6xl" style={{ height }} />
}

export default function Home() {
  const { scrollYProgress } = useScroll()
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isScrollingUp, setIsScrollingUp] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  // Optimize scroll handling with throttling
  useEffect(() => {
    const handleScroll = throttle(() => {
      const currentScrollY = window.scrollY
      setIsScrollingUp(currentScrollY < lastScrollY)
      setLastScrollY(currentScrollY)
    }, 100)

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  // Optimize progress bar updates
  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      window.requestAnimationFrame(() => {
        setScrollProgress(latest)
      })
    })
  }, [scrollYProgress])

  // Preload critical resources
  useEffect(() => {
    // Preload hero image
    const preloadLink = document.createElement("link")
    preloadLink.rel = "preload"
    preloadLink.as = "image"
    preloadLink.href = "/images/logo-homio.png"
    document.head.appendChild(preloadLink)
  }, [])

  return (
    <div className="flex min-h-screen flex-col relative">
      {/* Adiciona o efeito de mouse em toda a landing page */}
      <MouseMoveEffect />

      {/* Progress bar - optimized with will-change and hardware acceleration */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-50 origin-left will-change-transform"
        style={{
          scaleX: scrollProgress,
          translateZ: 0, // Force hardware acceleration
        }}
      />

      <Navbar />

      {/* Hero Section - load immediately (above the fold) */}
      <HeroSection />

      {/* Problem Section - lazy load with placeholder */}
      <LazySection id="problem">
        <ProblemSection />
      </LazySection>

      {/* Journey Section - lazy load with placeholder */}
      <LazySection id="journey">
        <JourneySection />
      </LazySection>

      {/* Solution Section - lazy load with placeholder */}
      <LazySection id="solution">
        <SolutionSection />
      </LazySection>

      {/* Differentiation Section - lazy load with placeholder */}
      <LazySection id="differentiation">
        <DifferentiationSection />
      </LazySection>

      {/* Reflection Section - lazy load with placeholder */}
      <LazySection id="transformacao">
        <ReflectionSection />
      </LazySection>

      {/* Features Section - lazy load with placeholder */}
      <LazySection id="features">
        <FeaturesSection />
      </LazySection>

      {/* Offer Section - lazy load with placeholder */}
      <LazySection id="offer">
        <OfferSection />
      </LazySection>

      {/* Testimonials - lazy load with placeholder */}
      <LazySection id="testimonials">
        <Testimonials />
      </LazySection>

      {/* FAQ Section - lazy load with placeholder */}
      <LazySection id="faq">
        <FaqSection />
      </LazySection>

      {/* Booking Section - lazy load with placeholder */}
      <LazySection id="agendar">
        <BookingSection />
      </LazySection>

      {/* Final CTA - optimized animations */}
      <motion.section
        className="py-12 sm:py-20 bg-primary/5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="container px-4 md:px-6">
          <motion.div
            className="flex flex-col items-center text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter mb-4 sm:mb-6">
              Se você sente que a rotina da sua clínica poderia ser mais previsível, estruturada e eficiente
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-10">
              Essa é a ferramenta certa para você usar.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="will-change-transform w-full sm:w-auto"
            >
              <Button
                className="group transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px] w-full sm:w-auto"
                size="lg"
                onClick={() => scrollToElement("agendar", 80)}
              >
                <span className="text-sm sm:text-base">
                  <span className="hidden sm:inline">Quero conhecer a Homio</span>
                  <span className="sm:hidden">Agendar demo</span>
                </span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <Footer />

      {/* Floating back to top button - optimized with conditional rendering */}
      {scrollProgress > 0.1 && (
        <motion.button
          className="fixed bottom-4 sm:bottom-8 right-4 sm:right-8 p-2 sm:p-3 rounded-full bg-primary text-white shadow-lg z-40 hover:bg-primary/90 transition-all duration-300 hover:shadow-xl will-change-transform"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={() => scrollToElement("hero", 0)}
          aria-label="Voltar ao topo"
          style={{ translateZ: 0 }} // Force hardware acceleration
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m18 15-6-6-6 6" />
          </svg>
        </motion.button>
      )}
    </div>
  )
}
