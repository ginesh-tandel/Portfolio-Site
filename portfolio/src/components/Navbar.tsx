import { useEffect, useRef, useState } from "react";
import { gsap } from "../lib/gsap";
import { navLinks } from "../data/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [sceneIndex, setSceneIndex] = useState(1);
  const navRef = useRef<HTMLElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const scenes = document.querySelectorAll("[data-scene]");
      let current = 1;
      scenes.forEach((scene, i) => {
        const rect = scene.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.5) {
          current = i + 1;
        }
      });
      setSceneIndex(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
      gsap.fromTo(
        mobileMenuRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }
      );
    } else {
      document.body.style.overflow = "";
    }
  }, [menuOpen]);

  const totalScenes = 11;

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-bg-primary/80 backdrop-blur-md border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          <a
            href="#"
            className="text-sm font-medium tracking-wide text-text-primary hover:text-accent transition-colors"
          >
            Ginesh
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs tracking-widest uppercase text-text-muted hover:text-text-primary transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
            <span className="text-xs font-mono text-text-muted ml-4">
              {String(sceneIndex).padStart(2, "0")} / {String(totalScenes).padStart(2, "0")}
            </span>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-8 h-8 flex flex-col items-center justify-center gap-1.5"
            aria-label="Toggle menu"
          >
            <span
              className={`w-5 h-px bg-text-primary transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-[3.5px]" : ""
              }`}
            />
            <span
              className={`w-5 h-px bg-text-primary transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-[3.5px]" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div
          ref={mobileMenuRef}
          className="fixed inset-0 z-40 bg-bg-primary/95 backdrop-blur-lg flex flex-col items-center justify-center gap-10"
        >
          {navLinks.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-3xl font-light tracking-wide text-text-primary hover:text-accent transition-colors"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {link.label}
            </a>
          ))}
          <span className="text-sm font-mono text-text-muted mt-6">
            {String(sceneIndex).padStart(2, "0")} / {String(totalScenes).padStart(2, "0")}
          </span>
        </div>
      )}
    </>
  );
}
