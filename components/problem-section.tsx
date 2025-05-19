"use client"

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

  return (
    <section className="py-20 bg-muted/50 dark:bg-muted/10" id="problem" ref={sectionRef}>
      <div className="container px-4 md:px-6">
        <motion.div
          className="max-w-3xl mx-auto"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div
            className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground mb-6"
            variants={itemVariants}
          >
            O Desafio
          </motion.div>

          <motion.div className="space-y-6 text-lg" variants={containerVariants}>
            <motion.p variants={itemVariants}>
              Você trabalha o dia inteiro, consulta atrás de consulta, mas sente que vive apagando incêndio?
            </motion.p>

            <motion.p variants={itemVariants}>
              Mesmo com a agenda cheia, parece que tem sempre alguma coisa fora do lugar.
            </motion.p>

            <motion.p variants={itemVariants}>
              Talvez você nunca tenha parado pra pensar, mas a clínica depende demais de uma pessoa só — de você, de uma
              secretária.
            </motion.p>

            <motion.p variants={itemVariants}>
              Você precisa constantemente atrair novos agendamentos, e sente o quanto os plantões, parcerias e
              indicações têm parecido cruciais para a sua clínica.
            </motion.p>

            <motion.p variants={itemVariants}>
              E aí vem o você não esperava: muitos pacientes não voltam. Param na primeira consulta ou ficam meses e
              meses sem aparecer.
            </motion.p>

            <motion.p variants={itemVariants}>
              E quando os resultados não acompanham o esforço, a sensação de que tem algo errado surge:
            </motion.p>

            <motion.p variants={itemVariants} className="italic pl-4 border-l-2 border-primary/50">
              Você não sabe o que está fora do lugar, mas acaba achando que o marketing não está bom, ou que seus
              atendentes não estão dando conta, ou até que os pacientes mudaram o jeito de se relacionar com o médico.
            </motion.p>

            <motion.div variants={itemVariants} className="bg-primary/10 p-6 rounded-lg mt-8">
              <p className="font-medium text-xl mb-3">Mas e se o real desafio estiver em outro lugar?</p>

              <p className="font-medium text-xl">
                E se o verdadeiro gargalo estiver num processo comercial que nem chegou a ser estruturado porque ninguém
                nunca te apresentou isso como parte essencial da clínica?
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
