"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"

export default function BookingSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const [iframeHeight, setIframeHeight] = useState(600)
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    // Add script for the booking widget
    const script = document.createElement("script")
    script.src = "https://stage.homio.com.br/js/form_embed.js"
    script.async = true
    document.body.appendChild(script)

    // Function to handle messages from the iframe
    const handleMessage = (event: MessageEvent) => {
      if (event.data && typeof event.data === "object" && event.data.type === "setHeight") {
        setIframeHeight(event.data.height)
      }
    }

    // Add event listener for messages from the iframe
    window.addEventListener("message", handleMessage)

    return () => {
      // Clean up
      document.body.removeChild(script)
      window.removeEventListener("message", handleMessage)
    }
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <section className="py-20 bg-muted/30 dark:bg-muted/10" id="agendar" ref={sectionRef}>
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <div className="space-y-2">
            <motion.div
              className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground mb-2"
              variants={itemVariants}
            >
              Demonstração
            </motion.div>
            <motion.h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl" variants={itemVariants}>
              Agende uma demonstração personalizada
            </motion.h2>
            <motion.p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl" variants={itemVariants}>
              Clicando aqui você poderá conhecer com um de nossos especialistas tudo que você pode fazer no Sistema
              Homio para a sua clínica.
            </motion.p>
          </div>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto bg-card rounded-xl overflow-hidden transform-gpu transition-all duration-500"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
        >
          <div className="p-0">
            <div className="relative">
              <iframe
                ref={iframeRef}
                src="https://stage.homio.com.br/widget/booking/Czv7PDibHq7zFgCIez9b"
                style={{ width: "100%", height: `${iframeHeight}px`, border: "none", overflow: "hidden" }}
                scrolling="no"
                id="Czv7PDibHq7zFgCIez9b_1747684233391"
                title="Agendar demonstração Homio"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
