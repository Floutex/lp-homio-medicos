"use client"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function Testimonials() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const testimonials = [
    {
      quote:
        "Antes da Homio, eu tentava controlar tudo na planilha e no WhatsApp… hoje, minha clínica cresceu 30% sem precisar de mais pacientes.",
      name: "Dra. Renata",
      title: "Endocrinologista",
      avatar: "DR",
    },
    {
      quote:
        "A gente achava que o problema era o marketing. Descobrimos que era a falta de processo. A Homio virou a chave.",
      name: "Dr. Caio",
      title: "Clínico Geral",
      avatar: "DC",
    },
    {
      quote:
        "Meus pacientes não voltavam após a primeira consulta. Com a Homio, consegui estruturar um processo de retorno que mudou completamente meus resultados.",
      name: "Dra. Mariana",
      title: "Dermatologista",
      avatar: "DM",
    },
  ]

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

  const headerVariants = {
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
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.2 + i * 0.1,
      },
    }),
  }

  return (
    <section className="py-20" id="testimonials" ref={sectionRef}>
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <div className="space-y-2">
            <motion.div
              className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground mb-2"
              variants={headerVariants}
            >
              Depoimentos
            </motion.div>
            <motion.h2
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
              variants={headerVariants}
            >
              O que dizem nossos usuários
            </motion.h2>
            <motion.p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl" variants={headerVariants}>
              Médicos que transformaram suas clínicas com a Homio
            </motion.p>
          </div>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={cardVariants}
            >
              <Card className="h-full flex flex-col transform-gpu hover:shadow-lg transition-all duration-300 hover:translate-y-[-4px]">
                <CardContent className="pt-6 flex-grow">
                  <div className="mb-2 text-4xl text-primary">"</div>
                  <p className="italic text-muted-foreground">{testimonial.quote}</p>
                </CardContent>
                <CardFooter className="border-t pt-4">
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarFallback className="bg-primary/10 text-primary">{testimonial.avatar}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
