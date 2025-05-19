"use client"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Award, BarChart3, CheckCircle2, Joystick, LineChart, MessageSquare, Zap } from "lucide-react"

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
    <section className="py-20 bg-muted/30 dark:bg-muted/5" id="transformacao" ref={sectionRef}>
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
              Transformação
            </motion.div>
            <motion.h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl" variants={itemVariants}>
              Quem usa Homio não apenas organiza a clínica.
            </motion.h2>
            <motion.div className="space-y-4 text-muted-foreground" variants={containerVariants}>
              <motion.p variants={itemVariants}>
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
                <p className="text-sm font-medium">A Homio já vem pronta pra funcionar no que realmente importa.</p>
              </motion.div>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-6">
              <p className="text-lg italic pl-4 border-l-2 border-primary/50">
                Assuma o controle, ganhe previsibilidade e saia do padrão silencioso que limita o crescimento da sua
                clínica.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            className="bg-card rounded-xl border shadow-lg overflow-hidden transform-gpu hover:shadow-xl transition-all duration-500"
            variants={cardVariants}
          >
            <div className="p-6">
              <h3 className="text-xl font-bold mb-6">O que a Homio traz para sua clínica:</h3>

              <ul className="space-y-5">
                {[
                  {
                    text: "Controle total sobre todos os processos da clínica",
                    icon: <Joystick className="h-5 w-5 text-primary" />,
                  },
                  {
                    text: "Previsibilidade de resultados e crescimento sustentável",
                    icon: <BarChart3 className="h-5 w-5 text-primary" />,
                  },
                  {
                    text: "Comunicação clara e eficiente com seus pacientes",
                    icon: <MessageSquare className="h-5 w-5 text-primary" />,
                  },
                  {
                    text: "Automações que realmente funcionam e economizam tempo",
                    icon: <Zap className="h-5 w-5 text-primary" />,
                  },
                  {
                    text: "Acompanhamento simples e objetivo dos resultados",
                    icon: <LineChart className="h-5 w-5 text-primary" />,
                  },
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-3 group"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  >
                    <div className="rounded-full bg-primary/10 p-1.5 mt-0.5 group-hover:bg-primary/20 transition-colors duration-300">
                      {item.icon}
                    </div>
                    <span className="group-hover:text-primary/90 transition-colors duration-300">{item.text}</span>
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
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-lg mb-2">Destaque-se da concorrência</p>
                    <p className="text-muted-foreground">
                      Enquanto outros médicos continuam presos em processos manuais e desorganizados, você terá uma
                      clínica estruturada, eficiente e com resultados previsíveis.
                    </p>
                    <ul className="space-y-2 mt-4">
                      {[
                        "Mais tempo para atender pacientes",
                        "Menos estresse com gestão",
                        "Crescimento sustentável",
                      ].map((item, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
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
