"use client"

import { Calendar, DollarSign, Users, X, UserCircle2 } from "lucide-react"
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
    <section className="py-16 sm:py-24 bg-muted/30 dark:bg-muted/5" id="differentiation" ref={sectionRef}>
      <div className="container px-4 md:px-6">
        <motion.div
          className="max-w-3xl mx-auto"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <div className="text-center mb-10">
            <motion.div
              className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground mb-4"
              variants={itemVariants}
            >
              Diferencial
            </motion.div>
            <motion.h2
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4"
              variants={itemVariants}
            >
              Entenda o que nos diferencia
            </motion.h2>
            <motion.p className="text-muted-foreground max-w-2xl mx-auto" variants={itemVariants}>
              "Aí você pode estar pensando: Eu já uso um sistema pra agenda ou prontuário."
            </motion.p>
          </div>

          <motion.div className="space-y-8" variants={containerVariants}>
            {/* Step 1 */}
            <motion.div className="relative pl-8 md:pl-0" variants={cardVariants}>
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="hidden md:flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 text-primary font-bold text-xl shrink-0">
                  1
                </div>
                <div className="md:hidden absolute left-0 top-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary font-bold text-sm">
                  1
                </div>
                <div className="flex-1 space-y-4">
                  <h3 className="text-xl font-bold">Sistemas comuns vs. Homio</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <div className="flex items-center gap-3 mb-3">
                        <Calendar className="h-6 w-6 text-muted-foreground" />
                        <h4 className="font-medium">Sistemas comuns</h4>
                      </div>
                      <p className="text-sm text-muted-foreground">Focam apenas em agendamento ou prontuários</p>
                    </div>

                    <div className="bg-primary/10 p-4 rounded-lg">
                      <div className="flex items-center gap-3 mb-3">
                        <UserCircle2 className="h-6 w-6 text-primary" />
                        <h4 className="font-medium">Homio</h4>
                      </div>
                      <p className="text-sm">Foca no relacionamento com o paciente entre as consultas</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Step 2 */}
            <motion.div className="relative pl-8 md:pl-0" variants={cardVariants}>
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="hidden md:flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 text-primary font-bold text-xl shrink-0">
                  2
                </div>
                <div className="md:hidden absolute left-0 top-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary font-bold text-sm">
                  2
                </div>
                <div className="flex-1 space-y-4">
                  <h3 className="text-xl font-bold">Além do básico</h3>

                  <div className="bg-gradient-to-r from-primary/5 to-primary/15 p-5 rounded-lg">
                    <p className="mb-4">
                      A Homio não é só um sistema de agendamento ou de prontuários, a Homio foca onde esses outros
                      sistemas não chegam: relacionamento com o paciente entre as consultas, no marketing da sua clínica
                      e na gestão do seu negócio.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Step 3 */}
            <motion.div className="relative pl-8 md:pl-0" variants={cardVariants}>
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="hidden md:flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 text-primary font-bold text-xl shrink-0">
                  3
                </div>
                <div className="md:hidden absolute left-0 top-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary font-bold text-sm">
                  3
                </div>
                <div className="flex-1 space-y-4">
                  <h3 className="text-xl font-bold">Problemas com outros sistemas</h3>

                  <div className="bg-muted/30 p-5 rounded-lg">
                    <h4 className="font-medium mb-3">Outros sistemas que tentam fazer isso são:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        { text: "Caros demais", icon: <DollarSign className="h-4 w-4 text-red-500" /> },
                        { text: "Complexos", icon: <X className="h-4 w-4 text-red-500" /> },
                        { text: "Incompletos", icon: <X className="h-4 w-4 text-red-500" /> },
                        { text: "Exigem equipe inteira", icon: <Users className="h-4 w-4 text-red-500" /> },
                      ].map((item, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <div className="rounded-full bg-red-100 dark:bg-red-900/20 p-1">{item.icon}</div>
                          <span className="text-sm sm:text-base">{item.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Step 4 */}
            <motion.div className="relative pl-8 md:pl-0" variants={cardVariants}>
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="hidden md:flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 text-primary font-bold text-xl shrink-0">
                  4
                </div>
                <div className="md:hidden absolute left-0 top-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary font-bold text-sm">
                  4
                </div>
                <div className="flex-1">
                  <div className="p-5 border-l-4 border-primary bg-primary/5 rounded-r-lg">
                    <p className="font-medium">
                      Centenas de médicos já sabem disto: a Homio foi feita pra clínicas pequenas e médias, e funciona
                      com você no controle.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
