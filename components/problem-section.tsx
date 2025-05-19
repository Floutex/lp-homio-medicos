"use client"

import { AlertTriangle, Flame, HeartPulse, HelpCircle, Search, Users } from "lucide-react"
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

  const challenges = [
    {
      text: "Você trabalha o dia inteiro, consulta atrás de consulta, mas sente que vive apagando incêndio",
      icon: <Flame className="h-5 w-5 text-primary" />,
    },
    {
      text: "Mesmo com a agenda cheia, parece que tem sempre alguma coisa fora do lugar",
      icon: <HeartPulse className="h-5 w-5 text-primary" />,
    },
    {
      text: "A clínica depende demais de uma pessoa só — de você, de uma secretária",
      icon: <Users className="h-5 w-5 text-primary" />,
    },
    {
      text: "Você precisa constantemente atrair novos agendamentos através de plantões, parcerias e indicações",
      icon: <Search className="h-5 w-5 text-primary" />,
    },
  ]

  return (
    <section className="py-20 bg-muted/50 dark:bg-muted/10" id="problem" ref={sectionRef}>
      <div className="container px-4 md:px-6">
        <motion.div
          className="grid gap-10 lg:grid-cols-2 items-center"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div className="space-y-6" variants={containerVariants}>
            <motion.div
              className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground"
              variants={itemVariants}
            >
              O Desafio
            </motion.div>
            <motion.h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl" variants={itemVariants}>
              Quando os resultados não acompanham o esforço
            </motion.h2>

            <motion.div className="space-y-4" variants={containerVariants}>
              <motion.p className="text-muted-foreground" variants={itemVariants}>
                Talvez você nunca tenha parado pra pensar, mas existe um padrão comum em clínicas médicas que limita seu
                crescimento:
              </motion.p>

              <motion.div
                className="flex items-center gap-2 p-4 bg-destructive/10 rounded-lg border border-destructive/20 transform-gpu hover:shadow-md transition-all duration-300 mt-4"
                variants={itemVariants}
              >
                <AlertTriangle className="h-5 w-5 text-destructive" />
                <p className="font-medium">
                  Muitos pacientes não voltam. Param na primeira consulta ou ficam meses sem aparecer.
                </p>
              </motion.div>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-6">
              <p className="text-lg italic pl-4 border-l-2 border-primary/50">
                Você não sabe o que está fora do lugar, mas acaba achando que o marketing não está bom, ou que seus
                atendentes não estão dando conta, ou até que os pacientes mudaram o jeito de se relacionar com o médico.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            className="bg-card rounded-xl border shadow-lg overflow-hidden transform-gpu hover:shadow-xl transition-all duration-500"
            variants={cardVariants}
          >
            <div className="p-6">
              <h3 className="text-xl font-bold mb-6">Você se identifica com estes desafios?</h3>

              <ul className="space-y-5">
                {challenges.map((challenge, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-3 group"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  >
                    <div className="rounded-full bg-primary/10 p-1.5 mt-0.5 group-hover:bg-primary/20 transition-colors duration-300">
                      {challenge.icon}
                    </div>
                    <span className="group-hover:text-primary/90 transition-colors duration-300">{challenge.text}</span>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                className="mt-8 p-5 bg-gradient-to-br from-primary/5 to-primary/20 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.7, delay: 0.8 }}
              >
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/20 p-1.5 mt-1">
                    <HelpCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-lg mb-2">E se o real desafio estiver em outro lugar?</p>
                    <p className="text-muted-foreground">
                      E se o verdadeiro gargalo estiver num processo comercial que nem chegou a ser estruturado porque
                      ninguém nunca te apresentou isso como parte essencial da clínica?
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
