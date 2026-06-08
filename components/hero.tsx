"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-16 md:pt-20"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/hero.jpg')",
            }}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/30 to-background/50" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="relative inline-block">
            {/* Subtle white shadow backdrop */}
            <div className="absolute inset-0 bg-white/50 blur-3xl scale-110 rounded-lg" />
            
            {/* Text content */}
            <div className="relative">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground drop-shadow-[0_2px_6px_rgba(255,255,255,0.9)]">
                Dennis Kök
              </h1>

              <p className="text-lg md:text-xl lg:text-2xl text-foreground mb-12 max-w-2xl mx-auto leading-relaxed drop-shadow-[0_1px_4px_rgba(255,255,255,0.8)] font-semibold">
                Pizza, pasta, sallader och à la carte – tillagat med kvalitet och passion.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              asChild
              className="w-full sm:w-auto sm:min-w-[240px] bg-primary hover:bg-foreground hover:text-background text-primary-foreground font-semibold text-base md:text-lg py-6 transition-all duration-300"
            >
              <a href="#menu" className="flex items-center justify-center gap-2">
                Se Meny
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              asChild
              className="w-full sm:w-auto sm:min-w-[240px] font-semibold text-base md:text-lg py-6 transition-all duration-300 group"
            >
              <a
                href="https://wolt.com/sv/swe/stockholm/restaurant/dennis-kok?srsltid=AfmBOoo0y_aZTY4I6THGE6N2Ngs4yPHaPBxeF6PHanPVrTxPMLN4lfHM"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                Hemkörning med Wolt
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-6 h-10 border-2 border-foreground/40 rounded-full flex items-start justify-center p-2"
        >
          <motion.div className="w-1.5 h-1.5 bg-foreground/60 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
