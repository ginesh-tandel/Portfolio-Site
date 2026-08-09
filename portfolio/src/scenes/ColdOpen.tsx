import { useEffect, useRef } from "react";
import { gsap, prefersReducedMotion } from "../lib/gsap";
import { siteData } from "../data/content";

export default function ColdOpen() {
  const containerRef = useRef<HTMLDivElement>(null);
  const initLinesRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) {
      gsap.set(initLinesRef.current, { opacity: 0, display: "none" });
      gsap.set(heroRef.current, { opacity: 1 });
      gsap.set(".hero-line, .hero-sub, .hero-cta", { opacity: 1, y: 0 });
      return;
    }

    const initLines = initLinesRef.current?.querySelectorAll(".init-line");
    if (!initLines) return;

    const tl = gsap.timeline({ delay: 0.5 });

    tl.to(initLines[0], { opacity: 1, duration: 0.3 })
      .to(initLines[1], { opacity: 1, duration: 0.3 }, "+=0.3")
      .to(initLines[2], { opacity: 1, duration: 0.3 }, "+=0.2")
      .to(initLines[3], { opacity: 1, duration: 0.3 }, "+=0.2")
      .to(initLinesRef.current, {
        opacity: 0,
        duration: 0.6,
        delay: 0.8,
        ease: "power2.inOut",
      })
      .to(
        heroRef.current,
        {
          opacity: 1,
          duration: 1,
          ease: "power2.out",
        },
        "-=0.2"
      )
      .from(
        ".hero-line",
        {
          y: 60,
          opacity: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
        },
        "-=0.8"
      )
      .from(
        ".hero-sub",
        {
          opacity: 0,
          y: 20,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.4"
      )
      .from(
        ".hero-cta",
        {
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.3"
      );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      data-scene="1"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      <div
        ref={initLinesRef}
        className="absolute inset-0 flex flex-col items-center justify-center gap-3 font-mono text-sm text-text-muted"
      >
        <div className="init-line opacity-0">&gt; system.initialize()</div>
        <div className="init-line opacity-0">&gt; loading experience...</div>
        <div className="init-line opacity-0">&gt; loading architecture...</div>
        <div className="init-line opacity-0">
          &gt; loading {siteData.yearsExperience} years of engineering...
        </div>
        <div className="init-line opacity-0 w-2 h-4 bg-text-muted/50 animate-pulse mt-2" />
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 pointer-events-none opacity-60 bg-gradient-to-br from-accent/[0.06] via-transparent to-bg-elevated/30"
      />

      <div
        ref={heroRef}
        className="relative opacity-0 text-center px-6 max-w-5xl mx-auto"
      >
        <h1 className="mb-8">
          {siteData.heroStatement.map((line, i) => (
            <span
              key={i}
              className="hero-line block text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05]"
            >
              {line}
            </span>
          ))}
        </h1>

        <p className="hero-sub text-sm md:text-base text-text-secondary tracking-wide mb-12">
          {siteData.supportingText}
        </p>

        <div className="hero-cta">
          <span className="inline-block text-xs tracking-[0.3em] text-text-muted border-b border-border-light pb-1 hover:text-accent hover:border-accent transition-colors duration-300 cursor-pointer">
            {siteData.scrollCta}
          </span>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent to-border-light" />
    </div>
  );
}
