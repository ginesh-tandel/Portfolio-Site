import { useEffect, useRef } from "react";
import { gsap } from "../lib/gsap";
import { siteData, socialLinks } from "../data/content";
import MagneticButton from "../components/MagneticButton";
import RevealText from "../components/RevealText";

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".cta-element", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "center center",
          scrub: 1,
        },
        opacity: 0,
        y: 30,
        stagger: 0.1,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={sectionRef}
      id="contact"
      data-scene="11"
      className="relative min-h-screen flex flex-col items-center justify-center py-32 px-6 md:px-10 text-center"
    >
      <div className="max-w-3xl mx-auto">
        <RevealText
          as="h2"
          className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-tight leading-[1.05] mb-8"
        >
          <span className="block">WHAT SHOULD</span>
          <span className="block text-text-secondary">WE BUILD NEXT?</span>
        </RevealText>

        <RevealText
          as="p"
          delay={0.2}
          className="text-text-muted text-sm md:text-base mb-12 max-w-md mx-auto"
        >
          Available for selected remote engineering, consulting, and product
          engagements.
        </RevealText>

        <div className="cta-element flex flex-col sm:flex-row items-center justify-center gap-6 mb-20">
          <MagneticButton
            href={`mailto:${socialLinks.email}`}
            className="text-sm tracking-widest uppercase text-bg-primary bg-text-primary px-8 py-4 rounded-none hover:bg-accent transition-colors duration-300"
          >
            START A CONVERSATION →
          </MagneticButton>

          <MagneticButton
            href={socialLinks.github}
            className="text-sm tracking-widest uppercase text-text-muted border border-border-light px-8 py-4 rounded-none hover:text-text-primary hover:border-text-primary transition-colors duration-300"
          >
            VIEW GITHUB →
          </MagneticButton>
        </div>

        <div className="cta-element border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-text-muted text-xs">
          <div>
            <span className="text-text-primary font-medium">{siteData.name}</span>
            <span className="mx-2">·</span>
            <span>{siteData.title}</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href={socialLinks.github}
              className="hover:text-text-primary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href={socialLinks.linkedin}
              className="hover:text-text-primary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${socialLinks.email}`}
              className="hover:text-text-primary transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
