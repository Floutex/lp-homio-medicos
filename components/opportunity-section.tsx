"use client"

import { ArrowDown } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { scrollToElement } from "@/lib/scroll-utils"
import type React from "react"

export default function OpportunitySection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

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

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.3,
      },
    },
  }

  const handleScrollToBooking = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    scrollToElement("booking")
  }

  return (
    <section className="py-12 sm:py-20" id="opportunity" ref={sectionRef}>
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center text-center max-w-3xl mx-auto"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div
            className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground mb-4 sm:mb-6"
            variants={itemVariants}
          >
            Oportunidades
          </motion.div>

          <motion.div
            className="w-full p-4 sm:p-6 bg-card rounded-xl border shadow-lg mb-6 sm:mb-10 transform-gpu hover:shadow-xl transition-all duration-500"
            variants={cardVariants}
          >
            <h3 className="text-lg sm:text-xl font-medium mb-2 sm:mb-4">Pensa comigo:</h3>
            <ul className="space-y-2 sm:space-y-3">
              {[
                "Cada paciente que não volta depois da primeira consulta…",
                "Cada horário vazio na agenda que poderia ter sido ocupado…",
                "Cada lead que pediu informação e nunca foi respondido…",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  className="pl-3 sm:pl-4 border-l-2 border-primary/30 text-sm sm:text-base text-left"
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.15 }}
                >
                  {item}
                </motion.li>
              ))}
            </ul>

            <motion.div
              className="p-3 sm:p-5 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg my-4 sm:my-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <p className="font-medium text-sm sm:text-base">
                Tudo isso é energia e oportunidade vazando todos os dias – que você não estava vendo escapar.
              </p>
            </motion.div>

            <motion.p
              className="text-base sm:text-lg"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
            >
              Com a Homio, em poucos dias, você pode criar um processo comercial simples, previsível e automatizado, sem
              precisar contratar mais gente, sem depender de ninguém, e sem sair da sua zona de domínio.
            </motion.p>

            <motion.div
              className="mt-6 sm:mt-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 1.3 }}
            >
              <p className="text-lg sm:text-xl font-medium mb-3 sm:mb-4">
                Já imaginou sua clínica funcionando com menos esforço e mais resultado, com tudo no lugar certo?
              </p>
              <Button
                onClick={handleScrollToBooking}
                className="mt-2 bg-gradient-to-r from-primary to-[#5417b2] hover:opacity-90 text-white px-6 py-3 rounded-md flex items-center gap-2 mx-auto w-full sm:w-auto justify-center"
              >
                <span className="text-sm sm:text-base">
                  <span className="hidden sm:inline">Quero organizar minha operação com mais leveza</span>
                  <span className="sm:hidden">Organizar minha clínica</span>
                </span>
                <ArrowDown className="h-4 w-4" />
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
