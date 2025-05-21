"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { scrollToElement } from "@/lib/scroll-utils"

export default function SolutionSection() {
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

  return (
    <section className="py-12 sm:py-20" id="solution" ref={sectionRef}>
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
            A Solução
          </motion.div>
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter mb-4 sm:mb-6"
            variants={itemVariants}
          >
            Em poucos dias, você pode estruturar um processo completo, automatizado e previsível de atendimento, retorno
            e crescimento
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8"
            variants={itemVariants}
          >
            Mesmo sem agência, sem especialistas, equipe ou tempo sobrando.
          </motion.p>

          <motion.div
            className="w-full p-4 sm:p-6 bg-card rounded-xl border shadow-lg mb-6 sm:mb-10 transform-gpu hover:shadow-xl transition-all duration-500"
            variants={cardVariants}
          >
            <p className="text-base sm:text-lg font-medium mb-3 sm:mb-4">
              A Homio não é só um sistema: é a estrutura que faltava pra sua clínica funcionar como processo, ritmo e
              controle.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">
              Sim, usando a Homio, você pode, de forma prática e descomplicada, ter processos comerciais na sua clínica,
              tendo a sua gestão de marketing e vendas na palma da sua mão.
            </p>
            <ul className="text-left space-y-1 sm:space-y-2 mb-4 sm:mb-6">
              {[
                "Organiza leads",
                "Agenda e confirma automaticamente consultas",
                "Envia mensagens automáticas para lembretes de consultas",
                "Reativa pacientes que não voltaram",
                "Posta seus conteúdos nas suas redes sociais... E muito mais.",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-center gap-2 text-sm sm:text-base"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                >
                  <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>

            <motion.h3
              className="text-lg sm:text-xl font-medium text-center mt-8 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Te mostra onde estão os gargalos, sem precisar de consultor, agência ou programador.
            </motion.h3>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Button
              className="group transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px] w-full sm:w-auto bg-gradient-to-r from-primary to-[#5417b2] text-white px-6 py-3 rounded-md"
              size="lg"
              onClick={() => scrollToElement("agendar", 80)}
            >
              <span className="text-sm sm:text-base">
                <span className="hidden sm:inline">Quero organizar minha operação com mais leveza</span>
                <span className="sm:hidden">Organizar minha clínica</span>
              </span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
