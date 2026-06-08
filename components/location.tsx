"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";

export function Location() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section id="location" className="py-20 md:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Hitta Hit</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Vi finns på Nynäsvägen i Haninge
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="w-full max-w-7xl mx-auto"
        >
          <div className="relative w-full h-[500px] md:h-[600px] rounded-lg overflow-hidden border border-border shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2046.5753628899845!2d18.145268916090845!3d59.18512532873937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f7b88b17b2689%3A0xd99c44f4b790f93e!2sDennis%20K%C3%B6k!5e0!3m2!1sen!2sse!4v1234567890123!5m2!1sen!2sse"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Dennis Kök location map"
              className="grayscale-[0.1] hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
