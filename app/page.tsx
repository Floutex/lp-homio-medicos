"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import FeaturesSection from "@/components/features-section"
import Testimonials from "@/components/testimonials"
import FaqSection from "@/components/faq-section"
import ProblemSection from "@/components/problem-section"
import JourneySection from "@/components/journey-section"
import SolutionSection from "@/components/solution-section"
import DifferentiationSection from "@/components/differentiation-section"
import ReflectionSection from "@/components/reflection-section"
import OfferSection from "@/components/offer-section"
import HeroSection from "@/components/hero-section"
import BookingSection from "@/components/booking-section"
import { motion, useScroll } from "framer-motion"
import { useEffect, useState } from "react"
import { scrollToElement } from "@/lib/scroll-utils"

export default function Home() {
  const { scrollYProgress } = useScroll()
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      setScrollProgress(latest)
    })
  }, [scrollYProgress])

  return (
    <div className="flex min-h-screen flex-col relative">
      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-50 origin-left"
        style={{ scaleX: scrollProgress }}
      />

      <Navbar />

      {/* Hero Section with Video */}
      <HeroSection />

      {/* Problem Section */}
      <ProblemSection />

      {/* Journey Section */}
      <JourneySection />

      {/* Solution Section */}
      <SolutionSection />

      {/* Differentiation Section */}
      <DifferentiationSection />

      {/* Reflection Section */}
      <ReflectionSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* Offer Section - REORDENADO: agora vem antes dos Depoimentos */}
      <OfferSection />

      {/* Testimonials */}
      <Testimonials />

      {/* FAQ Section */}
      <FaqSection />

      {/* Booking Section */}
      <BookingSection />

      {/* Final CTA */}
      <motion.section
        className="py-20 bg-primary/5"
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
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
              Se você sente que a rotina da sua clínica poderia ser mais previsível, estruturada e eficiente
            </h2>
            <p className="text-xl text-muted-foreground mb-10">Essa é a ferramenta certa para você usar.</p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }} transition={{ duration: 0.2 }}>
              <Button
                className="group transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px]"
                size="lg"
                onClick={() => scrollToElement("agendar", 80)}
              >
                <span>Quero conhecer a Homio</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <Footer />

      {/* Floating back to top button - appears after scrolling down */}
      <motion.button
        className="fixed bottom-8 right-8 p-3 rounded-full bg-primary text-white shadow-lg z-40 hover:bg-primary/90 transition-all duration-300 hover:shadow-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: scrollProgress > 0.2 ? 1 : 0, y: scrollProgress > 0.2 ? 0 : 20 }}
        onClick={() => scrollToElement("hero", 0)}
        aria-label="Voltar ao topo"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
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
    </div>
  )
}
