"use client"

import { ArrowDown, CheckCircle2, LightbulbIcon, TimerIcon, TrendingUpIcon } from "lucide-react"
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
    scrollToElement("agendar")
  }

  return (
    <section className="py-20 bg-muted/30 dark:bg-muted/5" id="opportunity" ref={sectionRef}>
      <div className="container px-4 md:px-6">
        <motion.div
          className="grid gap-10 lg:grid-cols-2 items-center"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div className="space-y-6" variants={containerVariants}>
            <motion.div
              className="inline-block rounded-lg bg-primary/90 px-3 py-1 text-sm text-primary-foreground"
              variants={itemVariants}
            >
              Oportunidades
            </motion.div>
            <motion.h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl" variants={itemVariants}>
              Transforme desafios em resultados
            </motion.h2>
            <motion.div className="space-y-4 text-muted-foreground" variants={containerVariants}>
              <motion.p variants={itemVariants}>
                <span className="text-foreground font-medium">
                  Pensa comigo: cada paciente que não volta depois da primeira consulta…
                </span>{" "}
                Cada horário vazio na agenda que poderia ter sido ocupado…
              </motion.p>
              <motion.p variants={itemVariants}>Cada lead que pediu informação e nunca foi respondido…</motion.p>
              <motion.div
                className="flex items-center gap-2 p-4 bg-primary/10 rounded-lg border border-primary/20 transform-gpu hover:shadow-md transition-all duration-300"
                variants={itemVariants}
              >
                <LightbulbIcon className="h-5 w-5 text-primary" />
                <p className="text-sm font-medium">
                  Tudo isso é energia e oportunidade vazando todos os dias – que você não estava vendo escapar.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.div
            className="bg-card rounded-xl border shadow-lg overflow-hidden transform-gpu hover:shadow-xl transition-all duration-500"
            variants={cardVariants}
          >
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4">Com a Homio, em poucos dias, você pode:</h3>
              <ul className="space-y-4">
                {[
                  {
                    text: "Criar um processo comercial simples e previsível",
                    icon: <CheckCircle2 className="h-4 w-4 text-primary" />,
                  },
                  {
                    text: "Automatizar sem precisar contratar mais gente",
                    icon: <TimerIcon className="h-4 w-4 text-primary" />,
                  },
                  {
                    text: "Manter tudo sob seu controle, sem sair da sua zona de domínio",
                    icon: <TrendingUpIcon className="h-4 w-4 text-primary" />,
                  },
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  >
                    <div className="rounded-full bg-primary/10 p-1.5 mt-0.5">{item.icon}</div>
                    <span>{item.text}</span>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                className="mt-8 p-5 bg-gradient-to-br from-primary/5 to-primary/20 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.7, delay: 0.8 }}
              >
                <p className="text-lg font-medium mb-4">
                  Já imaginou sua clínica funcionando com menos esforço e mais resultado, com tudo no lugar certo?
                </p>
                <Button
                  onClick={handleScrollToBooking}
                  className="w-full bg-gradient-to-r from-primary to-[#5417b2] hover:opacity-90 text-white px-6 py-3 rounded-md flex items-center gap-2 justify-center"
                >
                  <span>Quero organizar minha operação com mais leveza</span>
                  <ArrowDown className="h-4 w-4" />
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
