"use client"

import type React from "react"

import { Calendar, DollarSign, Users, X, ArrowDown } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { scrollToElement } from "@/lib/scroll-utils"

export default function DifferentiationSection() {
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
    <section className="py-20 bg-muted/30 dark:bg-muted/5" id="differentiation" ref={sectionRef}>
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center text-center max-w-3xl mx-auto"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div
            className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground mb-6"
            variants={itemVariants}
          >
            Diferencial
          </motion.div>

          <motion.div
            className="w-full p-6 bg-card rounded-xl border shadow-lg mb-10 transform-gpu hover:shadow-xl transition-all duration-500"
            variants={cardVariants}
          >
            <p className="text-lg font-medium italic mb-6">
              "Aí você pode estar pensando: Eu já uso um sistema pra agenda ou prontuário."
            </p>

            <div className="flex flex-col md:flex-row gap-6 mb-8">
              <div className="flex-1 flex flex-col items-center p-4 bg-muted/50 rounded-lg">
                <Calendar className="h-10 w-10 text-muted-foreground mb-3" />
                <h3 className="text-lg font-medium mb-2">Sistemas comuns</h3>
                <p className="text-sm text-muted-foreground">Focam apenas em agendamento ou prontuários</p>
              </div>
              <div className="flex-1 flex flex-col items-center p-4 bg-primary/10 rounded-lg">
                <motion.div
                  className="rounded-full bg-primary/20 p-2"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
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
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </motion.div>
                <h3 className="text-lg font-medium mb-2">Homio</h3>
                <p className="text-sm">Foca no relacionamento com o paciente entre as consultas</p>
              </div>
            </div>

            <p className="text-muted-foreground mb-6">
              A Homio não é só um sistema de agendamento ou de prontuários, a Homio foca onde esses outros sistemas não
              chegam: relacionamento com o paciente entre as consultas, no marketing da sua clínica e na gestão do seu
              negócio.
            </p>

            <div className="bg-muted/30 p-5 rounded-lg mb-6">
              <h3 className="text-lg font-medium mb-4">Outros sistemas que tentam fazer isso são:</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  { text: "Caros demais", icon: <DollarSign className="h-4 w-4 text-red-500" /> },
                  { text: "Complexos", icon: <X className="h-4 w-4 text-red-500" /> },
                  { text: "Incompletos", icon: <X className="h-4 w-4 text-red-500" /> },
                  { text: "Exigem equipe inteira", icon: <Users className="h-4 w-4 text-red-500" /> },
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center gap-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  >
                    <div className="rounded-full bg-red-100 dark:bg-red-900/20 p-1">{item.icon}</div>
                    <span>{item.text}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <motion.div
              className="p-4 border-l-4 border-primary bg-primary/5 rounded-r-lg mb-8"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <p className="font-medium">
                Centenas de médicos já sabem disto: a Homio foi feita pra clínicas pequenas e médias, e funciona com
                você no controle.
              </p>
            </motion.div>

            {/* Novo conteúdo adicionado */}
            <motion.div
              className="mt-10 space-y-6 text-left"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              <h3 className="text-xl font-medium mb-4">Pensa comigo:</h3>
              <ul className="space-y-3">
                {[
                  "Cada paciente que não volta depois da primeira consulta…",
                  "Cada horário vazio na agenda que poderia ter sido ocupado…",
                  "Cada lead que pediu informação e nunca foi respondido…",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="pl-4 border-l-2 border-primary/30"
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ duration: 0.5, delay: 1.2 + index * 0.15 }}
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>

              <motion.div
                className="p-5 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg my-6"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 1.7 }}
              >
                <p className="font-medium">
                  Tudo isso é energia e oportunidade vazando todos os dias – que você não estava vendo escapar.
                </p>
              </motion.div>

              <motion.p
                className="text-lg"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6, delay: 1.9 }}
              >
                Com a Homio, em poucos dias, você pode criar um processo comercial simples, previsível e automatizado,
                sem precisar contratar mais gente, sem depender de ninguém, e sem sair da sua zona de domínio.
              </motion.p>

              <motion.div
                className="mt-8 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 2.1 }}
              >
                <p className="text-xl font-medium mb-4">
                  Já imaginou sua clínica funcionando com menos esforço e mais resultado, com tudo no lugar certo?
                </p>
                <Button
                  onClick={handleScrollToBooking}
                  className="mt-2 bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-md flex items-center gap-2 mx-auto"
                >
                  Quero organizar minha operação com mais leveza
                  <ArrowDown className="h-4 w-4" />
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
