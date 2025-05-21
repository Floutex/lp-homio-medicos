"use client"

import { HelpCircle } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function ProblemSection() {
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
    <section className="py-12 sm:py-20 bg-muted/50 dark:bg-muted/10" id="problem" ref={sectionRef}>
      <div className="container px-4 md:px-6">
        <motion.div
          className="grid gap-8 lg:gap-10 lg:grid-cols-2 items-center"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div className="space-y-4 sm:space-y-6" variants={containerVariants}>
            <motion.div
              className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground"
              variants={itemVariants}
            >
              O Desafio
            </motion.div>
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter"
              variants={itemVariants}
            >
              Você trabalha o dia inteiro, consulta atrás de consulta, mas sente que vive apagando incêndios?
            </motion.h2>

            <motion.div className="space-y-3 sm:space-y-4" variants={containerVariants}>
              <motion.p className="text-sm sm:text-base text-muted-foreground" variants={itemVariants}>
                Mesmo com a agenda cheia, parece que tem sempre alguma coisa fora do lugar.
              </motion.p>

              <motion.div className="space-y-4 mt-4" variants={itemVariants}>
                <p className="text-sm sm:text-base">
                  Talvez você nunca tenha parado pra pensar, mas a clínica depende demais de uma pessoa só... de você,
                  de uma secretária.
                </p>
                <p className="text-sm sm:text-base">
                  Você precisa constantemente atrair novos agendamentos, e sente o quanto os plantões, parcerias e
                  indicações têm parecido cruciais para a sua clínica.
                </p>
                <p className="text-sm sm:text-base">
                  E aí vem o você não esperava: muitos pacientes não voltam. Param na primeira consulta ou ficam meses e
                  meses sem aparecer.
                </p>
                <p className="text-sm sm:text-base font-medium">
                  E quando os resultados não acompanham o esforço, a sensação de que tem algo errado surge:
                </p>
              </motion.div>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-4 sm:mt-6">
              <p className="text-base sm:text-lg italic pl-3 sm:pl-4 border-l-2 border-primary/50">
                Você não sabe o que está fora do lugar, mas acaba achando que o marketing não está bom, ou que seus
                atendentes não estão dando conta, ou até que os pacientes mudaram o jeito de se relacionar com o médico.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            className="bg-card rounded-xl border shadow-lg overflow-hidden transform-gpu hover:shadow-xl transition-all duration-500"
            variants={cardVariants}
          >
            <div className="p-4 sm:p-6">
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.7, delay: 0.5 }}
              >
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/20 p-1.5 mt-1 flex-shrink-0">
                    <HelpCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-lg mb-2">Mas e se o real desafio estiver em outro lugar?</p>
                    <p className="text-muted-foreground">
                      E se o verdadeiro gargalo estiver num <strong>processo comercial</strong> que nem chegou a ser
                      estruturado porque ninguém nunca te apresentou isso como parte essencial da clínica?
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
