"use client";

import Image from "next/image";
import Link from "next/link";
import { ExternalLink, ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left side - Copyright */}
          <div className="text-center md:text-left">
            <p className="text-muted-foreground">
              © {new Date().getFullYear()} Dennis Kök. All rights reserved.
            </p>
          </div>

          {/* Center - Logo */}
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10">
              <Image
                src="/logo.jpg"
                alt="Dennis Kök"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <span className="text-lg font-bold text-foreground">
              Dennis Kök
            </span>
          </div>

          {/* Right side - Created by */}
          <div className="flex items-center gap-4">
            <p className="text-muted-foreground">
              Website created by{" "}
              <a
                href="https://www.lejtech.se/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 font-semibold inline-flex items-center gap-1 transition-colors"
              >
                LEJTECH
                <ExternalLink className="w-3 h-3" aria-hidden="true" />
              </a>
            </p>

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              className="p-2 bg-background border border-border hover:border-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
              aria-label="Scroll to top"
            >
              <ArrowUp 
                className="w-5 h-5 group-hover:-translate-y-1 transition-transform" 
                aria-hidden="true"
              />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
