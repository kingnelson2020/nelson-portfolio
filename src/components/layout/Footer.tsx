import { JSX } from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const footerLinks = [
    {label: 'About',        href: '#about'},
    {label: 'Skills',       href: '#skills'},
    {label: 'Projects',     href: '#projects'},
    {label: 'Experience',   href: '#experience'},
    {label: 'Blog',         href: '#blog-teaser'},
];

const socialLinks = [
    { label: 'Github',      href: 'https://github.com/kingnelson2020',      icon: FaGithub },
    { label: 'LinkedIn',    href: 'https://linkedin.com/in/molokwunelson',  icon: FaLinkedin},
    { label: 'Twitter',     href: 'https://x.com/iamnelsonebuka',           icon: FaXTwitter},
];

export default function Footer(): JSX.Element {
    return (
      <footer className="w-full border-t border-border mt-24">
        <div className="container-main py-16 w-full">
          {/* Three column grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full">
            {/* Left - Name + Tagline */}
            <div className="flex flex-col gap-3">
              <span className="text-2xl tracking-tight font-heading font-bold gradient-logo-sweep cursor-default">
                Nelson Molokwu
              </span>
              <p>From the kitchen to the codebase.</p>
              <p className="text-xs">
                Learning. Building. Sharing the journey.
              </p>
            </div>

            {/* Center - Quick Navlinks */}
            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                Quick Links
              </span>
              <ul className="flex flex-col gap-2">
                {footerLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right - Social links */}
            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                Find Me On
              </span>
              <div className="flex flex-col gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="inline-flex items-center gap-2.5 text-sm text-muted-foreground hover:text-primary transition-colors duration-200 group w-fit"
                  >
                    <social.icon
                      size={16}
                      className="group-hover:scale-110 transition-transform duration-200"
                    />
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Bottom Bar - full width */}
        <div className="border-t border-border/40">
          <div className="container-main py-5 flex flex-col md:flex-row items-center justify-between gap-2">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Nelson Molokwu. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground">
              Designed & built by Nelson Molokwu
            </p>
          </div>
        </div>
      </footer>
    );
}