"use client";
import { JSX } from "react";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

interface MobileMenuProps {
    navLinks: { label: string; href: string }[];
    onClose: () => void;
    activeSection: string;
}

export default function MobileMenu({
    navLinks,
    onClose,
    activeSection,
}: MobileMenuProps): JSX.Element {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div className="relative flex justify-center md:hidden">
        {/* Trigger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          className={`w-14 h-14 flex items-center justify-center rounded-full border border-border bg-background/80 backdrop-blur-md text-foreground hover:text-primary hover:border-border-hover transition-all duration-300 ${isOpen ? "hidden" : "flex"}`}
        >
          <Menu size={22} />
        </button>
        {/* Dropdown PAnel */}
        {isOpen && (
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            className="absolute top-0 left-1/2 -translate-x-1/2 w-64 rounded-2xl border border-border bg-background/95 backdrop-blur-xl shadow-lg py-2 px-3 transition-all duration-300"
          >
            {/* Links and X wrapper */}
            <div className="relative flex flex-col items-center gap-1">
              {/* X button - left side, vertically centered */}
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
                className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-lg text-primary transition-colors duration-200"
              >
                <X size={22} />
              </button>
              {/* Navlinks */}
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => {
                    setIsOpen(false);
                    onClose();
                  }}
                  className={`group relative w-full text-center py-1.5 text-sm font-medium tracking-wider transition-colors duration-300 ${activeSection === link.href ? "text-primary" : "text-foreground/80"}`}
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-20 h-0.5 rounded-full bg-primary transition-all duration-500 ease-in-out origin-left scale-x-0 group-hover:scale-x-100" />
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    );
}