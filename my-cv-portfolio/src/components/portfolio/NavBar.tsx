import { useState, useEffect, useRef } from "react";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { id: "about",          label: "About",          color: "hover:text-violet" },
    { id: "skills",         label: "Skills",          color: "hover:text-cyan" },
    { id: "projects",       label: "Projects",        color: "hover:text-crimson" },
    { id: "certifications", label: "Certifications",  color: "hover:text-amber" },
    { id: "contact",        label: "Contact",         color: "hover:text-violet" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-ink/95 backdrop-blur-md border-b border-rule"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Wordmark */}
        <div className="flex items-center gap-3">
          <div className="relative w-6 h-6 bg-violet flex items-center justify-center overflow-hidden">
            <span className="font-display text-ink text-xs font-black">IT</span>
          </div>
          <span className="font-mono-custom caption-text text-foreground tracking-widest">
            IPSHITA TEWARY
          </span>
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`caption-text text-foreground transition-colors duration-200 ${link.color}`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-px bg-foreground transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
          <span className={`block w-6 h-px bg-foreground transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-px bg-foreground transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </button>
      </div>

      {/* Mobile drawer */}
      <div className={`md:hidden overflow-hidden transition-all duration-400 ${menuOpen ? "max-h-96" : "max-h-0"}`}>
        <div className="bg-ink/98 border-t border-rule px-8 pb-8 pt-4 space-y-1">
          {links.map((link, i) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`block py-3 font-display text-3xl font-black text-foreground ${link.color} transition-colors animate-reveal-left`}
              style={{ animationDelay: `${i * 0.06}s` }}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
