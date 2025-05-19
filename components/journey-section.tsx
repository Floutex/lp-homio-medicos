"use client"

import { Activity, AlertCircle, CheckCircle2, Gauge, User } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function JourneySection() {
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
    <section className="py-20 bg-muted/30 dark:bg-muted/5" id="journey" ref={sectionRef}>
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
              A Jornada do Paciente
            </motion.div>
            <motion.h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl" variants={itemVariants}>
              O que acontece entre uma consulta e outra?
            </motion.h2>
            <motion.div className="space-y-4 text-muted-foreground" variants={containerVariants}>
              <motion.p variants={itemVariants}>
                <span className="text-foreground font-medium">
                  Estudos mostram que até 60% dos pacientes não retornam.
                </span>{" "}
                E isso não acontece por falta de qualidade ou por má gestão.
              </motion.p>
              <motion.p variants={itemVariants}>
                Acontece porque a maioria das clínicas não acompanha a jornada entre uma consulta e outra.
              </motion.p>
              <motion.div
                className="flex items-center gap-2 p-4 bg-primary/10 rounded-lg border border-primary/20 transform-gpu hover:shadow-md transition-all duration-300"
                variants={itemVariants}
              >
                <AlertCircle className="h-5 w-5 text-primary" />
                <p className="text-sm font-medium">
                  O verdadeiro desafio está no que acontece quando o paciente sai do consultório.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.div
            className="bg-card rounded-xl border shadow-lg overflow-hidden transform-gpu hover:shadow-xl transition-all duration-500"
            variants={cardVariants}
          >
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4">Sinais de que você precisa de um processo estruturado:</h3>
              <ul className="space-y-4">
                {[
                  {
                    text: "Você sente que sua clínica opera sempre no limite",
                    icon: <Gauge className="h-4 w-4 text-primary" />,
                  },
                  { text: "Tudo gira em torno de você", icon: <User className="h-4 w-4 text-primary" /> },
                  {
                    text: "Mesmo com movimento, os resultados não evoluem como você gostaria",
                    icon: <Activity className="h-4 w-4 text-primary" />,
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
                <p className="text-lg font-medium mb-3">
                  Talvez o que você mais precise agora não é de mais pacientes, mas de um processo:
                </p>
                <ul className="space-y-2">
                  {["Simples de implementar", "Visível para toda a equipe", "Sob seu controle direto"].map(
                    (item, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        <span>{item}</span>
                      </li>
                    ),
                  )}
                </ul>
                <p className="mt-4 text-sm italic">
                  Para que tudo o que já acontece no seu dia a dia finalmente funcione como uma engrenagem bem ajustada.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
