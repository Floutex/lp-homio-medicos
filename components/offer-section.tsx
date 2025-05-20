"use client"

import { Check } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { scrollToElement } from "@/lib/scroll-utils"

export default function OfferSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const benefits = [
    "Acesso imediato ao sistema completo",
    "Onboarding assistido gratuito",
    "Suporte humano e rápido, direto no WhatsApp",
    "Atualizações contínuas — sem custo extra",
    "Garantia de satisfação: 7 dias para testar sem risco",
    "Acesso ao nosso canal de estratégias práticas para clínicas",
  ]

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

  const headerVariants = {
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

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.5 + i * 0.1,
      },
    }),
  }

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        delay: 1.2,
      },
    },
  }

  return (
    <section
      className="py-12 sm:py-20 bg-gradient-to-b from-background to-muted/30 dark:from-background dark:to-muted/10"
      id="offer"
      ref={sectionRef}
    >
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-3 sm:space-y-4 text-center mb-8 sm:mb-12"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <div className="space-y-2">
            <motion.div
              className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground mb-2"
              variants={headerVariants}
            >
              Nossa Oferta
            </motion.div>
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter"
              variants={headerVariants}
            >
              Ao entrar para a Homio, você recebe:
            </motion.h2>
            <motion.p
              className="mx-auto max-w-[700px] text-sm sm:text-base md:text-xl text-muted-foreground"
              variants={headerVariants}
            >
              Tudo o que você precisa para transformar sua clínica
            </motion.p>
          </div>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto bg-card rounded-xl border shadow-lg overflow-hidden transform-gpu hover:shadow-xl transition-all duration-500"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={cardVariants}
        >
          <div className="p-6 sm:p-8 md:p-10">
            <ul className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2">
              {benefits.map((benefit, index) => (
                <motion.li key={index} custom={index} variants={itemVariants} className="flex items-start gap-2 group">
                  <div className="rounded-full bg-primary/10 p-1 mt-1 group-hover:bg-[#0387fe]/20 transition-colors duration-300 flex-shrink-0">
                    <Check className="h-3 w-3 sm:h-4 sm:w-4 text-primary group-hover:text-[#0387fe] transition-colors duration-300" />
                  </div>
                  <span className="text-xs sm:text-sm group-hover:text-[#0387fe] transition-colors duration-300">
                    {benefit}
                  </span>
                </motion.li>
              ))}
            </ul>

            <motion.div
              className="mt-8 sm:mt-10 text-center"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
            >
              <p className="text-base sm:text-lg font-medium mb-2">E tudo isso com o menor custo do mercado:</p>
              <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">
                Você não paga por usuário, não precisa de consultor, e não leva funções pela metade.
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground mb-6 sm:mb-8">
                Não tem tempo agora para implantar? A Homio foi feita para quem tem pouco tempo e muita demanda. Com
                poucos cliques, você já terá lembretes e reativações funcionando.
              </p>

              {/* Novo botão CTA */}
              <motion.div className="flex justify-center" variants={buttonVariants}>
                <Button
                  className="group transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px] w-full sm:w-auto text-sm sm:text-base bg-gradient-to-r from-primary to-[#5417b2] text-white px-6 py-3 rounded-md"
                  size="lg"
                  onClick={() => scrollToElement("agendar", 80)}
                >
                  <span>
                    <span className="hidden sm:inline">Quero conhecer a estrutura que pode destravar minha rotina</span>
                    <span className="sm:hidden">Conhecer a Homio</span>
                  </span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
