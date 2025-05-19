"use client"

import { Button } from "@/components/ui/button"

export default function VideoSection() {
  return (
    <section className="py-10">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-video rounded-xl overflow-hidden border shadow-xl">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/B5Pql0TNBpA?rel=0"
              title="Sistema Homio | Demonstração"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>

          <div className="mt-6 text-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Quero ver como o Sistema Homio funciona na prática
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
