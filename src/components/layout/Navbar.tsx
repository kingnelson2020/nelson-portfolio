"use client";
import { useState, useEffect, JSX } from "react";
import Link from "next/link";
import { Search, Menu } from "lucide-react";

/* Nav links declared as data array */
const navLinks = [
    { label: 'Work', href: '#work' },
    { label: 'Blog', href: '/blog' },
    { label: 'About', href: '#about' },
    { label: 'Stack', href: '#stack' },
];

export default function Navbar(): JSX.Element {
    const [scrolled, setScrolled] = useState<boolean>(false); // for tracking scroll position to apply style to the navbar
    const [menuOpen, setMenuOpen] = useState<boolean>(false); // for tracking mobile menu state
    const [searchOpen, setSearchOpen] = useState<boolean>(false); // for tracking seach overlay state

    /* Attach scroll event listener. attach {passive: true } on scroll listener to tell the browser to optimize the scroll event */
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll); // cleanup function to remove the event listener when the component unmounts
    }, []);

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-500 ${scrolled ? 'pt-3' : 'pt-5'}`}>
            <nav className={`flex items-center justify-between border border-white/[0.08] backdrop-blur-xl transition-all duration-500 ${scrolled ? 'w-[88%] max-w-2xl h-12 rounded-2xl bg-secondary/80 shadow-[0_8px_40px_rgba(0,0,0,0.5)]' : 'w-[94%] max-w-4xl h-14 rounded-2xl bg-secondary/50'} px-5`}>
                {/* Logo */}
                <Link href="/" className='group relative shrink-0 inline-flex items-center justify-center text-[18px] font-bold tracking-tight text-white/85 transition-all duration-300 ease-out hover:text-white hover:-translate-y-[1px] font-display'>
                <span className="absolute inset-0 -z-10 rounded-full opacity-0 blur-xl bg-accent/20 transition-opacity duration-500 ease-out group-hover:opacity-100" />
                <span className='relative gradient-logo-sweep'>NM<span className='text-accent transition-colors duration-300 group-hover:text-accent/80'>.</span></span></Link>

                {/* Desktop Nav Links */}
                <ul className="hidden md:flex items-center gap-1">
                    {navLinks.map((link) => (
                        <li key={link.label}>
                            <Link href={link.href} className='relative px-3 py-1.5 text-sm text-muted hover:text-foreground transition-colors duration-200 group font-body'>{link.label}<span className='absolute bottom-0.5 left-3 right-3 h-px rounded-full bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left' /></Link>
                        </li>
                    ))}
                </ul>

                {/* Right Side Actions */}
                <div className='flex items-center gap-2'>
                    {/* Search - visible on all screens */}
                    <button aria-label="Open search" onClick={() => setSearchOpen(true)} className='w-9 h-9 flex items-center justify-center rounded-lg text-muted hover:text-foreground hover:bg-foreground/5 transition-all duration-200'>
                        <Search size={18} />
                    </button>
                    {/* CTA Button */}
                    <Link href="#contact" className='hidden md:inline-flex items-center px-5 py-2 text-sm font-semibold tracking-tight text-accent border border-accent/30 rounded-xl bg-white/2 backdrop-blur-sm hover:bg-accent/10 hover:border-accent/60 hover:shadow-[0_0_25px_rgba(59,130,246,0.15)] hover:-translate-y-[1px] transition-all duration-300 ease-out active:translate-y-0 font-body'>Let's Talk</Link>

                    {/* Mobile Menu */}
                    <button aria-label="Open menu" onClick={() => setMenuOpen(true)} className='md:hidden w-9 h-9 flex items-center justify-center rounded-lg text-muted hover:text-foreground hover:bg-foreground/5 transition-all duration-200'>
                        <Menu size={18} />
                    </button>
                </div>
            </nav>
        </header>
    );
}