"use client"

import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Award, BarChart3, Joystick, LineChart, MessageSquare, Zap } from "lucide-react"

export default function ReflectionSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="transformacao" className="py-16 bg-muted/30 dark:bg-muted/10">
      <div className="container px-4 md:px-6">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="space-y-6">
            <Badge className="bg-primary/10 text-primary hover:bg-primary/20 dark:bg-primary/20 dark:hover:bg-primary/30 px-3 py-1 text-sm">
              Transformação
            </Badge>
            <motion.h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl" variants={itemVariants}>
              Quem usa Homio não apenas organiza a clínica.
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              <motion.div
                className="bg-card dark:bg-card/80 p-6 rounded-lg shadow-sm border border-border flex flex-col items-center text-center"
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Joystick className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Assume o controle</h3>
              </motion.div>

              <motion.div
                className="bg-card dark:bg-card/80 p-6 rounded-lg shadow-sm border border-border flex flex-col items-center text-center"
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Ganha previsibilidade</h3>
              </motion.div>

              <motion.div
                className="bg-card dark:bg-card/80 p-6 rounded-lg shadow-sm border border-border flex flex-col items-center text-center"
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Sai do padrão silencioso</h3>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="bg-card dark:bg-card/80 p-8 rounded-lg shadow-sm border border-border"
            variants={itemVariants}
          >
            <motion.p className="text-lg mb-6 leading-relaxed" variants={itemVariants}>
              Porque sim, com a Homio você pode ser gestor do seu negócio, sem que isso seja massacrante ou tome tempo
              do que você realmente ama: <span className="font-bold text-primary">atender seus pacientes</span>.
            </motion.p>

            <motion.div
              className="bg-muted/50 dark:bg-muted/20 p-6 rounded-lg border-l-4 border-primary"
              variants={itemVariants}
            >
              <h3 className="text-xl font-bold mb-4">A Homio já vem pronta pra funcionar no que realmente importa:</h3>

              <div className="space-y-4">
                <motion.div
                  className="flex items-center gap-3"
                  variants={itemVariants}
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                >
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <MessageSquare className="h-5 w-5 text-primary" />
                  </div>
                  <span className="font-medium">Comunicação clara</span>
                </motion.div>

                <motion.div
                  className="flex items-center gap-3"
                  variants={itemVariants}
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                >
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Zap className="h-5 w-5 text-primary" />
                  </div>
                  <span className="font-medium">Automações úteis</span>
                </motion.div>

                <motion.div
                  className="flex items-center gap-3"
                  variants={itemVariants}
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                >
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <LineChart className="h-5 w-5 text-primary" />
                  </div>
                  <span className="font-medium">Acompanhamento simples</span>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
