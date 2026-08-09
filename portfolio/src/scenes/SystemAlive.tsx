import { useEffect, useRef } from "react";
import { gsap, prefersReducedMotion } from "../lib/gsap";
import RevealText from "../components/RevealText";

export default function SystemAlive() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) {
      const ctx = gsap.context(() => {
        gsap.set(".wireframe-block", { opacity: 1, scale: 1 });
        gsap.set(".ui-reveal", { opacity: 1, y: 0 });
      }, sectionRef);
      return () => ctx.revert();
    }

    const ctx = gsap.context(() => {
      gsap.from(".wireframe-block", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "center center",
          scrub: 1,
        },
        opacity: 0,
        scale: 0.9,
        stagger: 0.1,
      });

      gsap.to(".ui-reveal", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "30% 50%",
          end: "70% 50%",
          scrub: 1,
        },
        opacity: 1,
        y: 0,
        stagger: 0.08,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      data-scene="4"
      className="relative min-h-screen flex flex-col justify-center py-32 px-6 md:px-10 overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-gradient-to-br from-accent/[0.06] via-transparent to-transparent blur-3xl rounded-full pointer-events-none"
      />

      <div className="max-w-6xl mx-auto w-full relative">
        <div className="flex items-center justify-center gap-4 mb-8">
          <span className="h-px w-12 bg-border-light" />
          <span className="font-mono text-xs tracking-widest uppercase text-accent">
            Transformation Phase
          </span>
          <span className="h-px w-12 bg-border-light" />
        </div>

        <RevealText
          as="h2"
          className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-16 text-center"
        >
          <span className="block">FROM SYSTEMS</span>
          <span className="block bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
            TO EXPERIENCES.
          </span>
        </RevealText>

        <div className="relative max-w-3xl mx-auto">
          <div className="grid grid-cols-3 gap-3 mb-6">
            {Array.from({ length: 9 }).map((_, i) => (
              <div
                key={i}
                className="wireframe-block aspect-[4/3] rounded border border-border bg-bg-secondary"
              />
            ))}
          </div>

          <div className="space-y-3">
            <div className="ui-reveal opacity-0 translate-y-4 h-2 bg-border-light rounded w-full" />
            <div className="ui-reveal opacity-0 translate-y-4 h-2 bg-border-light rounded w-3/4" />
            <div className="ui-reveal opacity-0 translate-y-4 h-2 bg-border-light rounded w-5/6" />
          </div>

          <div className="mt-8 grid grid-cols-4 gap-3">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="ui-reveal opacity-0 translate-y-4 h-20 rounded border border-border bg-bg-secondary flex items-center justify-center"
              >
                <div className="w-8 h-8 rounded-full bg-border-light" />
              </div>
            ))}
          </div>

          <div className="mt-6 ui-reveal opacity-0 translate-y-4 h-32 rounded border border-border bg-bg-secondary p-4">
            <div className="h-2 bg-border-light rounded w-1/3 mb-3" />
            <div className="h-1.5 bg-border rounded w-full mb-2" />
            <div className="h-1.5 bg-border rounded w-5/6 mb-2" />
            <div className="h-1.5 bg-border rounded w-4/6 mb-2" />
            <div className="h-1.5 bg-border rounded w-2/3" />
          </div>

          <div className="mt-4 ui-reveal opacity-0 translate-y-4 grid grid-cols-3 gap-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="h-16 rounded border border-accent/20 bg-accent/5 flex items-center justify-center"
              >
                <div className="w-12 h-1.5 bg-accent/20 rounded" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
