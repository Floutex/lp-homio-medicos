"use client"

import type React from "react"

import { useState, useEffect, useCallback, memo } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { motion } from "framer-motion"
import Image from "next/image"
import { scrollToElement } from "@/lib/scroll-utils"
import { throttle } from "@/lib/performance-utils"

// Memoize NavItem for better performance
const NavItem = memo(function NavItem({
  item,
  index,
  handleNavClick,
}: {
  item: { label: string; href: string }
  index: number
  handleNavClick: (e: React.MouseEvent<HTMLAnchorElement>, id: string) => void
}) {
  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
    >
      <a
        href={`#${item.href}`}
        className="text-sm font-medium transition-colors hover:text-[#0387fe] relative group"
        onClick={(e) => handleNavClick(e, item.href)}
      >
        {item.label}
        <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-[#0387fe] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
      </a>
    </motion.div>
  )
})

// Memoize the entire Navbar component
const Navbar = memo(function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const navItems = [
    { label: "Problema", href: "problem" },
    { label: "Solução", href: "solution" },
    { label: "Recursos", href: "features" },
    { label: "Depoimentos", href: "testimonials" },
    { label: "Perguntas", href: "faq" },
    { label: "Agendar", href: "agendar" },
  ]

  // Throttle scroll handler for better performance
  useEffect(() => {
    const handleScroll = throttle(() => {
      const offset = window.scrollY
      setScrolled(offset > 50)
    }, 100)

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Memoize click handler to prevent recreating on each render
  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    scrollToElement(id, 80) // 80px de offset para compensar a navbar
    setIsOpen(false) // Fecha o menu mobile se estiver aberto
  }, [])

  return (
    <motion.header
      className={`sticky top-0 z-50 w-full border-b backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-300 will-change-transform ${
        scrolled ? "bg-background/95 shadow-sm" : "bg-background/50"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="container flex h-16 items-center justify-between">
        <motion.div
          className="flex items-center gap-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Link href="/" className="flex items-center space-x-2" aria-label="Homio Homepage">
            <Image
              src="/images/logo-homio.png"
              alt="Homio™ Logo"
              width={120}
              height={40}
              className="h-8 w-auto"
              priority // Mark as priority for early loading
            />
          </Link>
        </motion.div>

        <nav className="hidden md:flex gap-6" aria-label="Main Navigation">
          {navItems.map((item, index) => (
            <NavItem key={item.href} item={item} index={index} handleNavClick={handleNavClick} />
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 }}>
            <ThemeToggle />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="will-change-transform"
          >
            <Button
              className="hidden md:flex items-center gap-2 bg-primary hover:bg-primary/90 text-white rounded-xl h-auto transition-all duration-300 hover:shadow-md hover:translate-y-[-2px]"
              onClick={(e) => {
                e.preventDefault()
                scrollToElement("agendar", 80)
              }}
            >
              <span className="text-sm font-medium">Quero conhecer</span>
            </Button>
          </motion.div>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon" aria-label="Open Menu">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="mt-6 mb-8">
                <Image src="/images/logo-homio.png" alt="Homio Logo" width={120} height={40} className="h-8 w-auto" />
              </div>
              <nav className="flex flex-col gap-4" aria-label="Mobile Navigation">
                {navItems.map((item, index) => (
                  <a
                    key={index}
                    href={`#${item.href}`}
                    className="text-lg font-medium transition-colors hover:text-[#0387fe]"
                    onClick={(e) => handleNavClick(e, item.href)}
                  >
                    {item.label}
                  </a>
                ))}
                <div className="flex items-center gap-4 mt-4">
                  <ThemeToggle />
                  <Button
                    className="w-full flex items-center gap-2 bg-primary hover:bg-primary/90 text-white rounded-xl h-auto"
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToElement("agendar", 80)
                      setIsOpen(false)
                    }}
                  >
                    <span className="text-sm font-medium">Quero conhecer</span>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  )
})

export default Navbar
