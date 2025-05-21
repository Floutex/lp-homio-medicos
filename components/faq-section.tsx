"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function FaqSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const faqs = [
    {
      question: "Será que o sistema é caro?",
      answer:
        "A Homio tem o melhor custo entre os sistemas médicos do mercado. Nossos usuários podem te garantir: não existe outro sistema que condense tantas funcionalidades como a Homio.",
    },
    {
      question: "É muita coisa para aprender?",
      answer:
        "A interface é simples. O suporte é direto. E o que você precisar, a gente te mostra. Você não precisa de agência, programador ou consultor para usar a Homio.",
    },
    {
      question: "E se eu já tenho agenda cheia?",
      answer:
        "E isso é ótimo. A Homio não substitui sua agenda, ela organiza tudo ao redor dela, garantindo retorno, reativação e controle.",
    },
    {
      question: "E se eu achar que não preciso de um sistema assim?",
      answer:
        "Se você sente que sua clínica depende demais de você, que os retornos não acontecem como deveriam, e que sempre tem algo fora do lugar, então o que você mais precisa é justamente de um sistema para organizar tudo isso.",
    },
    {
      question: "E se eu não me adaptar?",
      answer:
        "Você pode testar com tranquilidade. São 7 dias de acesso completo com suporte dedicado. Se não fizer sentido, pode cancelar sem burocracia.",
    },
    {
      question: "E se eu já usar um sistema para agenda ou prontuário?",
      answer:
        "A Homio não é só um sistema de agendamento ou de prontuários, a Homio foca onde esses outros sistemas não chegam: relacionamento com o paciente entre as consultas, no marketing da sua clínica e na gestão do seu negócio.",
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

  const accordionVariants = {
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
    <section className="py-20 bg-muted/50 dark:bg-muted/10" id="faq" ref={sectionRef}>
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
              Dúvidas Frequentes
            </motion.div>
            <motion.h2
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
              variants={headerVariants}
            >
              Perguntas comuns
            </motion.h2>
            <motion.p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl" variants={headerVariants}>
              Esclarecemos as principais dúvidas sobre a Homio
            </motion.p>
          </div>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={accordionVariants}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-muted-foreground/20">
                <AccordionTrigger className="text-left text-lg font-medium hover:text-[#0387fe] transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
