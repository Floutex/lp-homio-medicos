"use client"

import FeatureCard from "@/components/feature-card"
import {
  ClipboardIcon,
  CalendarIcon,
  MessageIcon,
  ChartIcon,
  UserIcon,
  AutomationIcon,
  SocialIcon,
  ControlIcon,
} from "@/components/medical-icons"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function FeaturesSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const features = [
    {
      icon: <CalendarIcon />,
      title: "Agendamento Automático",
      description: "Agende e confirme consultas automaticamente, sem depender de secretárias ou processos manuais.",
      accentColor: "rgba(8, 145, 178, 0.5)",
    },
    {
      icon: <MessageIcon />,
      title: "Comunicação Inteligente",
      description: "Envie lembretes de consultas e reative pacientes que não retornaram, tudo de forma automática.",
      accentColor: "rgba(14, 116, 144, 0.5)",
    },
    {
      icon: <UserIcon />,
      title: "Gestão de Pacientes",
      description: "Organize leads e acompanhe a jornada completa do paciente, da primeira consulta aos retornos.",
      accentColor: "rgba(3, 105, 161, 0.5)",
    },
    {
      icon: <ChartIcon />,
      title: "Análise de Resultados",
      description: "Identifique gargalos e oportunidades com relatórios claros e objetivos sobre sua operação.",
      accentColor: "rgba(15, 118, 110, 0.5)",
    },
    {
      icon: <AutomationIcon />,
      title: "Automação Completa",
      description:
        "Automatize processos repetitivos e libere tempo para focar no que realmente importa: seus pacientes.",
      accentColor: "rgba(13, 148, 136, 0.5)",
    },
    {
      icon: <SocialIcon />,
      title: "Marketing Integrado",
      description: "Gerencie suas redes sociais e campanhas de marketing diretamente da plataforma, sem complicações.",
      accentColor: "rgba(2, 132, 199, 0.5)",
    },
    {
      icon: <ControlIcon />,
      title: "Controle Total",
      description: "Tenha visibilidade e controle sobre todos os aspectos da sua clínica, sem depender de terceiros.",
      accentColor: "rgba(8, 145, 178, 0.5)",
    },
    {
      icon: <ClipboardIcon />,
      title: "Processos Estruturados",
      description: "Implemente processos comerciais eficientes sem precisar de consultores ou especialistas.",
      accentColor: "rgba(14, 116, 144, 0.5)",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  return (
    <section className="py-20 bg-muted/50 dark:bg-muted/10" id="features" ref={sectionRef}>
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
              Recursos Principais
            </motion.div>
            <motion.h2
              id="features-heading"
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
              variants={headerVariants}
            >
              Tudo o que sua clínica precisa
            </motion.h2>
            <motion.p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl" variants={headerVariants}>
              A Homio não é só um sistema: é a estrutura que faltava para sua clínica funcionar com processo, ritmo e
              controle.
            </motion.p>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              accentColor={feature.accentColor}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
