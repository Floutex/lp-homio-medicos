"use client"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Zap } from "lucide-react"

export default function ReflectionSection() {
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
    <section className="py-20 bg-muted/30 dark:bg-muted/5" id="transformacao" ref={sectionRef}>
      <div className="container px-4 md:px-6">
        <motion.div
          className="max-w-3xl mx-auto"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div className="space-y-6" variants={containerVariants}>
            <motion.div
              className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground"
              variants={itemVariants}
            >
              Transformação
            </motion.div>
            <motion.h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl" variants={itemVariants}>
              Quem usa Homio não apenas organiza a clínica.
            </motion.h2>

            <motion.div className="space-y-4" variants={containerVariants}>
              {/* Três frases destacadas em cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {[
                  "Assume o controle.",
                  "Ganha previsibilidade.",
                  "E sai do padrão silencioso que ainda domina a maioria.",
                ].map((text, index) => (
                  <motion.div
                    key={index}
                    className="bg-primary/10 rounded-lg p-4 border border-primary/20 text-center font-medium"
                    variants={itemVariants}
                    transition={{ delay: 0.1 * index }}
                  >
                    {text}
                  </motion.div>
                ))}
              </div>

              <motion.p variants={itemVariants} className="text-muted-foreground">
                <span className="text-foreground font-medium">
                  Porque sim, com a Homio você pode ser gestor do seu negócio,
                </span>{" "}
                sem que isso seja massacrante ou tome tempo do que você realmente ama: atender seus pacientes.
              </motion.p>

              <motion.div
                className="flex items-center gap-2 p-4 bg-primary/10 rounded-lg border border-primary/20 transform-gpu hover:shadow-md transition-all duration-300 mt-4"
                variants={itemVariants}
              >
                <Zap className="h-5 w-5 text-primary" />
                <p className="text-sm font-medium">
                  A Homio já vem pronta pra funcionar no que realmente importa: comunicação clara, automações úteis e
                  acompanhamento simples.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
