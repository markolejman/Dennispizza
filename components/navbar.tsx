"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Hem", href: "#hero" },
  { label: "Vår Meny", href: "#menu" },
  { label: "Kontakta Oss", href: "#contact" },
  { label: "Om Oss", href: "#about" },
  { label: "Hitta Hit", href: "#location" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full",
          isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-md border-b border-border"
            : "bg-background border-b border-border"
        )}
      >
        <div className="container mx-auto px-4 lg:px-8 w-full max-w-full">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 hover:opacity-80 transition-all duration-300 hover:scale-105"
              aria-label="Dennis Kök Startsida"
            >
              <div className="relative w-10 h-10 md:w-12 md:h-12">
                <Image
                  src="/logo.jpg"
                  alt="Dennis Kök"
                  fill
                  className="object-cover rounded-lg"
                  priority
                />
              </div>
              <span className="text-lg md:text-xl font-bold text-foreground">
                Dennis Kök
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm lg:text-base font-medium text-foreground/80 hover:text-primary transition-all duration-300 relative group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
              
              {/* Desktop Call Button */}
              <a
                href="tel:+4687777472"
                className="px-6 py-2.5 bg-primary hover:bg-foreground hover:text-background text-primary-foreground font-semibold rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
                aria-label="Ring Dennis Kök"
              >
                08-777 74 72
              </a>
            </div>

            {/* Mobile: Call Button + Menu Button */}
            <div className="md:hidden flex items-center gap-3">
              {/* Mobile Call Button */}
              <a
                href="tel:+4687777472"
                className="px-4 py-2 bg-primary hover:bg-foreground hover:text-background text-primary-foreground font-semibold rounded-full transition-all duration-300 text-sm shadow-md"
                aria-label="Ring Dennis Kök"
              >
                08-777 74 72
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-foreground hover:text-primary transition-colors"
                aria-label={isMobileMenuOpen ? "Stäng meny" : "Öppna meny"}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 md:hidden transition-all duration-300",
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />

        {/* Menu Content */}
        <div
          className={cn(
            "absolute top-16 left-0 right-0 bg-background border-b border-border shadow-xl transition-transform duration-300",
            isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
          )}
        >
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col gap-6">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={handleLinkClick}
                  className="text-lg font-medium text-foreground hover:text-primary transition-all duration-300 py-2 relative group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
