"use client"

import { DollarSign, Users, X, CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

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

  return (
    <section className="py-20 bg-muted/30 dark:bg-muted/5" id="differentiation" ref={sectionRef}>
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
              Diferencial
            </motion.div>
            <motion.h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl" variants={itemVariants}>
              Aí você pode estar pensando: "Eu já uso um sistema pra agenda ou prontuário".
            </motion.h2>
            <motion.div className="space-y-4 text-muted-foreground" variants={containerVariants}>
              <motion.p variants={itemVariants}>
                A Homio não é só um sistema de agendamento ou de prontuários, a Homio foca onde esses outros sistemas
                não chegam:{" "}
                <span className="text-foreground font-medium">
                  relacionamento com o paciente entre as consultas, no marketing da sua clínica e na gestão do seu
                  negócio.
                </span>
              </motion.p>
              <motion.div
                className="flex items-center gap-2 p-4 bg-primary/10 rounded-lg border border-primary/20 transform-gpu hover:shadow-md transition-all duration-300"
                variants={itemVariants}
              >
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                <p className="text-sm font-medium">
                  Centenas de médicos já sabem disto: a Homio foi feita pra clínicas pequenas e médias, e funciona com
                  você no controle.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.div
            className="bg-card rounded-xl border shadow-lg overflow-hidden transform-gpu hover:shadow-xl transition-all duration-500"
            variants={cardVariants}
          >
            <div className="p-6">
              <h4 className="text-xl font-medium mb-5">Outros sistemas que tentam fazer parte disso são:</h4>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                {[
                  {
                    text: "Caros demais",
                    icon: <DollarSign className="h-5 w-5 text-red-500" />,
                  },
                  {
                    text: "Complexos",
                    icon: <X className="h-5 w-5 text-red-500" />,
                  },
                  {
                    text: "Incompletos",
                    icon: <X className="h-5 w-5 text-red-500" />,
                  },
                  {
                    text: "Exigem equipe inteira",
                    icon: <Users className="h-5 w-5 text-red-500" />,
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col items-center text-center p-3 bg-red-50 dark:bg-red-900/10 rounded-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  >
                    <div className="rounded-full bg-red-100 dark:bg-red-900/20 p-2 mb-2">{item.icon}</div>
                    <span className="text-sm font-medium">{item.text}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="p-5 bg-gradient-to-br from-primary/5 to-primary/20 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.7, delay: 0.8 }}
              >
                <p className="text-base">
                  <span className="font-medium">Existem outros sistemas que até tentam fazer parte disso</span>, porém
                  são caros demais, complexos, incompletos e exigem uma equipe inteira pra rodar.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
