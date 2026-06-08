"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";
import { menuData } from "@/lib/menu-data";
import { ChevronDown } from "lucide-react";

export function Menu() {
  const [activeCategory, setActiveCategory] = useState(menuData[0].id);
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const menuTopRef = useRef<HTMLDivElement>(null);
  const isChangingRef = useRef(false);

  const scrollToTop = () => {
    // Scroll to match navbar anchor behavior
    const menuSection = document.getElementById('menu');
    if (menuSection) {
      menuSection.scrollIntoView({ 
        behavior: "smooth", 
        block: "start" 
      });
    }
  };

  const handleCategoryChange = (categoryId: string) => {
    // Prevent double-firing on mobile
    if (isChangingRef.current || categoryId === activeCategory) {
      return;
    }
    
    isChangingRef.current = true;
    setActiveCategory(categoryId);
    scrollToTop();
    
    // Reset the flag after a short delay
    setTimeout(() => {
      isChangingRef.current = false;
    }, 300);
  };

  const activeCategoryData = menuData.find((cat) => cat.id === activeCategory);

  return (
    <section id="menu" className="py-20 md:py-32 bg-secondary/20" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          ref={menuTopRef}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Vår Meny</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {activeCategoryData?.description || "Upptäck vårt utbud av pizzor, pastarätter och mycket mer"}
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Desktop Category Navigation */}
          <motion.aside
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            className="lg:w-64 flex-shrink-0 hidden lg:block"
          >
            <div className="sticky top-24 bg-card border border-border rounded-lg p-4 shadow-md">
              <nav className="space-y-2" aria-label="Menykategorier">
                {menuData.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => handleCategoryChange(category.id)}
                    className={cn(
                      "w-full text-left px-4 py-3 rounded-lg transition-all duration-200 font-medium",
                      activeCategory === category.id
                        ? "bg-primary text-primary-foreground shadow-md"
                        : "hover:bg-muted text-foreground/80 hover:text-foreground"
                    )}
                    aria-current={activeCategory === category.id ? "page" : undefined}
                  >
                    {category.name}
                  </button>
                ))}
              </nav>
            </div>
          </motion.aside>

          {/* Mobile Category Dropdown */}
          <div className="lg:hidden w-full">
            <div className="relative">
              <select
                value={activeCategory}
                onChange={(e) => handleCategoryChange(e.target.value)}
                className="w-full px-4 py-3 bg-card border-2 border-border rounded-lg text-foreground font-medium appearance-none cursor-pointer focus:outline-none focus:border-primary transition-colors shadow-md"
                aria-label="Välj menykategori"
              >
                {menuData.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/60 pointer-events-none" />
            </div>
          </div>

          {/* Menu Items */}
          <div className="flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="grid gap-6 md:grid-cols-2"
              >
                {activeCategoryData?.items.map((item, index) => (
                  <article
                    key={`${activeCategory}-${index}`}
                    className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg shadow-sm"
                  >
                    <div className="flex justify-between items-start gap-4">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-2 text-foreground">
                          {item.name}
                        </h3>
                        {item.description && (
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {item.description}
                          </p>
                        )}
                      </div>
                      <div className="flex-shrink-0">
                        <span className="text-lg font-bold text-primary">
                          {item.price}
                        </span>
                      </div>
                    </div>
                  </article>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
