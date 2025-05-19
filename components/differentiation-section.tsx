"use client"

import type React from "react"

import {
  Calendar,
  DollarSign,
  Users,
  X,
  ArrowDown,
  CheckCircle,
  AlertTriangle,
  Clock,
  MessageSquare,
} from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { scrollToElement } from "@/lib/scroll-utils"
import FrostedGlassIcon from "@/components/frosted-glass-icon"

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
          className="flex flex-col items-center text-center max-w-5xl mx-auto"
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

          <motion.h2
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8"
            variants={itemVariants}
          >
            <span className="italic">
              "Aí você pode estar pensando: Eu já uso um sistema pra agenda ou prontuário."
            </span>
          </motion.h2>

          {/* Comparação de sistemas */}
          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mb-12" variants={cardVariants}>
            <Card className="bg-muted/50 border shadow-md overflow-hidden h-full">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center h-full">
                  <div className="rounded-full bg-muted/70 p-4 mb-4">
                    <Calendar className="h-10 w-10 text-muted-foreground" />
                  </div>
                  <h3 className="text-xl font-medium mb-3">Sistemas comuns</h3>
                  <p className="text-muted-foreground">Focam apenas em agendamento ou prontuários</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary/10 border shadow-md overflow-hidden h-full">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center h-full">
                  <motion.div
                    className="rounded-full bg-primary/20 p-4 mb-4"
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
                      className="h-10 w-10 text-primary"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </motion.div>
                  <h3 className="text-xl font-medium mb-3">Homio</h3>
                  <p>Foca no relacionamento com o paciente entre as consultas</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Explicação principal */}
          <motion.div
            className="w-full mb-12 bg-gradient-to-r from-primary/5 to-transparent p-6 rounded-xl text-center"
            variants={itemVariants}
          >
            <p className="text-lg">
              A Homio não é só um sistema de agendamento ou de prontuários, a Homio foca onde esses outros sistemas não
              chegam: relacionamento com o paciente entre as consultas, no marketing da sua clínica e na gestão do seu
              negócio.
            </p>
          </motion.div>

          {/* Problemas com outros sistemas */}
          <motion.div className="w-full mb-12" variants={cardVariants}>
            <Card className="border shadow-lg overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-gradient-to-r from-primary/10 to-transparent p-5">
                  <h3 className="text-xl font-medium">Outros sistemas que tentam fazer isso são:</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-6">
                  {[
                    { text: "Caros demais", icon: <DollarSign className="h-5 w-5 text-red-500" />, delay: 0.5 },
                    { text: "Complexos", icon: <X className="h-5 w-5 text-red-500" />, delay: 0.6 },
                    { text: "Incompletos", icon: <X className="h-5 w-5 text-red-500" />, delay: 0.7 },
                    { text: "Exigem equipe inteira", icon: <Users className="h-5 w-5 text-red-500" />, delay: 0.8 },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-3 p-3 bg-red-50 dark:bg-red-900/10 rounded-lg"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.5, delay: item.delay }}
                    >
                      <div className="rounded-full bg-red-100 dark:bg-red-900/20 p-2 flex-shrink-0">{item.icon}</div>
                      <span className="font-medium">{item.text}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Destaque */}
          <motion.div className="w-full mb-12" variants={itemVariants}>
            <Card className="border-l-4 border-primary shadow-md overflow-hidden">
              <CardContent className="p-6 flex items-center gap-4">
                <FrostedGlassIcon
                  icon={<CheckCircle className="h-6 w-6 text-primary" />}
                  color="rgba(59, 130, 246, 0.5)"
                />
                <p className="font-medium text-lg">
                  Centenas de médicos já sabem disto: a Homio foi feita pra clínicas pequenas e médias, e funciona com
                  você no controle.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Pensa comigo */}
          <motion.div className="w-full mb-12" variants={cardVariants}>
            <Card className="border shadow-lg overflow-hidden">
              <CardContent className="p-6">
                <h3 className="text-2xl font-medium mb-6 flex items-center justify-center gap-2">
                  <AlertTriangle className="h-6 w-6 text-primary" />
                  Pensa comigo:
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  {[
                    {
                      text: "Cada paciente que não volta depois da primeira consulta…",
                      icon: <Users className="h-6 w-6 text-primary" />,
                      delay: 1.2,
                    },
                    {
                      text: "Cada horário vazio na agenda que poderia ter sido ocupado…",
                      icon: <Clock className="h-6 w-6 text-primary" />,
                      delay: 1.35,
                    },
                    {
                      text: "Cada lead que pediu informação e nunca foi respondido…",
                      icon: <MessageSquare className="h-6 w-6 text-primary" />,
                      delay: 1.5,
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex flex-col p-4 bg-primary/5 rounded-xl shadow-sm"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.5, delay: item.delay }}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="rounded-full bg-primary/10 p-2">{item.icon}</div>
                        <div className="h-px flex-grow bg-primary/20"></div>
                      </div>
                      <p>{item.text}</p>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  className="p-5 bg-gradient-to-r from-primary/20 to-primary/5 rounded-lg my-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 1.7 }}
                >
                  <p className="font-medium text-lg text-center">
                    Tudo isso é energia e oportunidade vazando todos os dias – que você não estava vendo escapar.
                  </p>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Solução e CTA */}
          <motion.div className="w-full" variants={cardVariants}>
            <Card className="border shadow-lg overflow-hidden bg-gradient-to-br from-white to-primary/5 dark:from-gray-900 dark:to-primary/10">
              <CardContent className="p-8">
                <motion.p
                  className="text-lg mb-8 text-center max-w-3xl mx-auto"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.6, delay: 1.9 }}
                >
                  Com a Homio, em poucos dias, você pode criar um processo comercial simples, previsível e automatizado,
                  sem precisar contratar mais gente, sem depender de ninguém, e sem sair da sua zona de domínio.
                </motion.p>

                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 2.1 }}
                >
                  <p className="text-2xl font-medium mb-6">
                    Já imaginou sua clínica funcionando com menos esforço e mais resultado, com tudo no lugar certo?
                  </p>
                  <Button
                    onClick={handleScrollToBooking}
                    size="lg"
                    className="group transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px] bg-primary hover:bg-primary/90 text-white"
                  >
                    <span>Quero organizar minha operação com mais leveza</span>
                    <ArrowDown className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-y-1" />
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
