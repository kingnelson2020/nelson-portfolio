"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import MobileMenu from "./MobileMenu";

/* Nav links declared as data array */
const navLinks = [
  { label: "Home", href: "#"},
  { label: "About", href: "#about"},
  { label: "Skills", href: "#skills"},
  { label: "Projects", href: "#projects"},
  { label: "Experience", href: "#experience"},
  { label: "Blog", href: "#blog-teaser"},
  { label: "Contact", href: "#contact"},
];

export default function Navbar () {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState<string>('#');

    useEffect(() => {
        const onscroll = () => {
          setScrolled(window.scrollY > 24);
          if (window.scrollY < 50) setActiveSection("#");
        };

        window.addEventListener("scroll", onscroll, { passive: true });
        return () => window.removeEventListener("scroll", onscroll);
    }, []);

    useEffect(() => {
        const sectionIds = navLinks.map((link) => link.href.replace('#', '')).filter(Boolean); //extract links from navlinks array, boolean filters the empty string from home link

        const observers: IntersectionObserver[] = [];

        sectionIds.forEach((id) => {
            const element = document.getElementById(id);
            if(!element) return;

            /* Attach observer to the ids */
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            setActiveSection(`#${id}`);
                        }
                    });
                },
                {
                    rootMargin: '-40% 0px -50% 0px',
                    threshold: 0,
                }
            );

            observer.observe(element);
            observers.push(observer);
        });

        return () => observers.forEach((observer) => observer.disconnect()); //cleanup - disconnect all observers when component unmounts
    }, []);

    return (
      <>
        <header className="fixed top-7 left-0 right-0 z-500 mx-auto w-full flex justify-center px-4">
          <nav
            className={`hidden md:flex items-center justify-between w-full max-w-3xl py-3 px-8 rounded-full border transition-all duration-500 ${scrolled ? "bg-background/80 border-border backdrop-blur-lg shadow-lg" : "bg-background/40 border-border/40 backdrop-blur-md"}`}
          >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`group relative
                text-base font-medium
                tracking-wider
                transition-colors duration-300 ${activeSection === link.href ? "text-primary" : "text-foreground/80"}`}
              >
                {link.label}
                <span
                  className="absolute -bottom-1.5 left-0 h-0.5 w-0 rounded-full
                bg-primary transition-all duration-500 ease-in-out
                group-hover:w-full"
                />
              </Link>
            ))}
          </nav>
          {/* Mobile Menu - hidden on desktop */}
        </header>
        <div className="md:hidden flex justify-center pt-8 px-4">
          <MobileMenu
            navLinks={navLinks}
            activeSection={activeSection}
            onClose={() => setActiveSection(activeSection)}/>
        </div>
      </>
    );
}