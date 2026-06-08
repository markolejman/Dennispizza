"use client";

import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";
import Image from "next/image";

export function About() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section id="about" className="py-20 md:py-32 bg-secondary/20" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
        >
          Om Oss
        </motion.h2>

        <div className="max-w-6xl mx-auto md:grid md:grid-cols-2 md:gap-8 md:items-center">
          <div className="max-w-sm mx-auto md:mx-0 flex flex-col gap-6 items-center md:items-start">
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
              className="rounded-lg overflow-hidden shadow-xl w-full"
            >
              <Image
                src="/om-oss.jpg"
                alt="Dennis Kök Pizza - Om Oss"
                width={400}
                height={300}
                className="w-full h-auto object-cover"
                priority
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
              className="w-full md:hidden"
            >
              <p className="text-lg text-muted-foreground leading-relaxed text-center">
                En topprestaurang som levererar allt från pizza till pasta, sallader
                och à la carte. Mat för alla smaker vid alla tillfällen.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
              className="w-full flex justify-center md:hidden"
            >
              <a
                href="https://www.instagram.com/denniskokpizza/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-card border-2 border-border hover:border-accent hover:bg-accent hover:text-accent-foreground rounded-lg transition-all duration-300 hover:shadow-lg group"
                aria-label="Besök Dennis Kök på Instagram"
              >
                <Instagram 
                  className="w-6 h-6 text-accent group-hover:scale-110 transition-transform" 
                  aria-hidden="true"
                />
                <span className="font-semibold">
                  Följ oss på Instagram
                </span>
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            className="hidden md:block space-y-8"
          >
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              En topprestaurang som levererar allt från pizza till pasta, sallader
              och à la carte. Mat för alla smaker vid alla tillfällen.
            </p>

            <a
              href="https://www.instagram.com/denniskokpizza/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-card border-2 border-border hover:border-accent hover:bg-accent hover:text-accent-foreground rounded-lg transition-all duration-300 hover:shadow-lg group"
              aria-label="Besök Dennis Kök på Instagram"
            >
              <Instagram 
                className="w-6 h-6 text-accent group-hover:scale-110 transition-transform" 
                aria-hidden="true"
              />
              <span className="font-semibold">
                Följ oss på Instagram
              </span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
