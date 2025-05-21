"use client"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { CheckCircle2, Zap } from "lucide-react"

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
                className="flex items-center gap-2 p-4 bg-primary/10 rounded-lg border border-primary/20 transform-gpu hover:shadow-md transition-all duration-300"
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

          <motion.div
            className="bg-card rounded-xl border shadow-lg overflow-hidden transform-gpu hover:shadow-xl transition-all duration-500"
            variants={cardVariants}
          >
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4">O que a transformação significa para você:</h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
                {[
                  "Assume o controle.",
                  "Ganha previsibilidade.",
                  "E sai do padrão silencioso que ainda domina a maioria.",
                ].map((text, index) => (
                  <motion.div
                    key={index}
                    className="bg-primary/10 rounded-lg p-4 border border-primary/20 text-center font-medium"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  >
                    {text}
                  </motion.div>
                ))}
              </div>

              <ul className="space-y-4">
                {[
                  {
                    text: "Você não precisa entender de marketing",
                    icon: <CheckCircle2 className="h-4 w-4 text-primary" />,
                  },
                  {
                    text: "Você não precisa de uma equipe inteira",
                    icon: <CheckCircle2 className="h-4 w-4 text-primary" />,
                  },
                  {
                    text: "Você mantém o controle de tudo",
                    icon: <CheckCircle2 className="h-4 w-4 text-primary" />,
                  },
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
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
                <p className="text-lg font-medium mb-2">E se você estiver se perguntando:</p>
                <p className="italic text-lg mb-3">"mas eu não entendo nada de marketing…"</p>
                <p>
                  saiba que você <span className="font-bold">não precisa</span>.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
