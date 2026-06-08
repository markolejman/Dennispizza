"use client";

import { motion } from "framer-motion";
import { Phone, MapPin, Clock, ExternalLink } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";
import { Button } from "@/components/ui/button";

const openingHours = [
  { day: "Måndag", hours: "10–21" },
  { day: "Tisdag", hours: "10–21" },
  { day: "Onsdag", hours: "10–00" },
  { day: "Torsdag", hours: "10–00" },
  { day: "Fredag", hours: "10–00" },
  { day: "Lördag", hours: "11–00" },
  { day: "Söndag", hours: "11–00" },
];

export function Contact() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section id="contact" className="py-20 md:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Kontakta Oss
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Vi finns här för dig - ring, besök eller beställ mat
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Phone Card */}
          <motion.article
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            className="bg-card border border-border rounded-lg p-8 hover:border-primary/50 transition-all duration-300"
          >
            <div className="flex flex-col items-center text-center gap-4">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                <Phone className="w-8 h-8 text-primary" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Ring Oss</h3>
                <p className="text-muted-foreground mb-4">
                  Kontakta oss för beställningar och frågor
                </p>
              </div>
              <Button
                asChild
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 transition-all duration-300"
              >
                <a href="tel:+4687777472" aria-label="Ring Dennis Kök">
                  08-777 74 72
                </a>
              </Button>
            </div>
          </motion.article>

          {/* Address & Maps Card */}
          <motion.article
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            className="bg-card border border-border rounded-lg p-8 hover:border-primary/50 transition-all duration-300"
          >
            <div className="flex flex-col items-center text-center gap-4">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                <MapPin className="w-8 h-8 text-primary" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Adress</h3>
                <address className="text-muted-foreground not-italic mb-4">
                  Nynäsvägen 3G
                  <br />
                  136 47 Haninge
                </address>
              </div>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full border-2 border-primary/50 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 group"
              >
                <a
                  href="https://www.google.com/maps/dir//Dennis+K%C3%B6k,+Nyn%C3%A4sv%C3%A4gen+3G,+136+47+Haninge/@59.1855963,18.1452689,16.29z/data=!4m8!4m7!1m0!1m5!1m1!1s0x465f7b88b17b2689:0xd99c44f4b790f93e!2m2!1d18.1473901!2d59.1851253?entry=ttu&g_ep=EgoyMDI2MDYwMS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                  aria-label="Öppna Google Maps för vägbeskrivning"
                >
                  Öppna i Maps
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </a>
              </Button>
            </div>
          </motion.article>

          {/* Opening Hours Card */}
          <motion.article
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
            className="bg-card border border-border rounded-lg p-8 hover:border-primary/50 transition-all duration-300 md:col-span-2 lg:col-span-1"
          >
            <div className="flex flex-col items-center text-center gap-4">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                <Clock className="w-8 h-8 text-primary" aria-hidden="true" />
              </div>
              <div className="w-full">
                <h3 className="text-xl font-semibold mb-4">Öppettider</h3>
                <dl className="space-y-2 text-sm">
                  {openingHours.map((item) => (
                    <div
                      key={item.day}
                      className="flex justify-between items-center"
                    >
                      <dt className="text-muted-foreground">{item.day}:</dt>
                      <dd className="font-medium">{item.hours}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
