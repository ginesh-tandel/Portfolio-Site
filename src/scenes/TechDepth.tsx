import { useEffect, useRef } from "react";
import { gsap, prefersReducedMotion } from "../lib/gsap";
import { techStack } from "../data/content";
import RevealText from "../components/RevealText";

const satellites = [
  { label: "SQL Server (State)", pos: "top-1/4 left-1/4" },
  { label: "Redis (Cache)", pos: "top-3/4 left-1/4" },
  { label: "Docker (Container)", pos: "top-1/4 right-1/4" },
  { label: "Cloud (Infra)", pos: "top-3/4 right-1/4" },
] as const;

const allTech = Array.from(new Set(techStack.flatMap((layer) => layer.items)));

export default function TechDepth() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) {
      const ctx = gsap.context(() => {
        gsap.set(".tech-node", { opacity: 1, scale: 1 });
        gsap.set(".tech-chip", { opacity: 1, y: 0 });
      }, sectionRef);
      return () => ctx.revert();
    }

    const ctx = gsap.context(() => {
      gsap.from(".tech-node", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 65%",
          end: "center center",
          scrub: 1,
        },
        opacity: 0,
        scale: 0.6,
        stagger: 0.08,
      });

      gsap.from(".tech-chip", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          end: "50% 50%",
          scrub: 1,
        },
        opacity: 0,
        y: 10,
        stagger: 0.03,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      data-scene="6"
      className="relative min-h-screen w-full flex items-center justify-center py-32 px-6 md:px-10 bg-surface-container overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_rgba(200,162,255,0.05),transparent_60%)]"
      />

      <div className="relative z-10 max-w-6xl mx-auto w-full grid lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-5 flex flex-col gap-6">
          <span className="font-mono text-xs tracking-widest uppercase text-text-secondary">
            06 / Engineering Depth
          </span>
          <RevealText
            as="h2"
            className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.1]"
          >
            <span className="block">THE TECHNOLOGY CHANGES.</span>
            <span className="block text-accent mt-2">
              THE ENGINEERING PRINCIPLES DON'T.
            </span>
          </RevealText>
          <RevealText
            as="p"
            delay={0.15}
            className="text-text-secondary text-sm md:text-base leading-relaxed max-w-md"
          >
            A robust architecture is technology-agnostic at its core. It's
            about data flow, resilience, and maintaining state across
            distributed boundaries.
          </RevealText>

          <div className="flex flex-wrap gap-2 mt-2">
            {allTech.map((item) => (
              <span
                key={item}
                className="tech-chip font-mono text-xs px-3 py-1.5 border border-border-light text-text-secondary"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="lg:col-span-7 relative h-[420px] md:h-[500px] w-full bg-bg-elevated/50 backdrop-blur-md rounded-xl p-8 border border-border">
          <div className="relative w-full h-full">
            <div className="tech-node absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-surface rounded-full border border-accent/20 flex items-center justify-center shadow-[0_0_40px_rgba(200,162,255,0.1)] z-20">
              <span className="font-mono text-xs text-accent">.NET CORE</span>
            </div>

            {satellites.map((sat) => (
              <div
                key={sat.label}
                className={`tech-node absolute -translate-x-1/2 -translate-y-1/2 ${sat.pos} w-32 h-12 bg-surface-container-high rounded-lg border border-border-light flex items-center justify-center z-20`}
              >
                <span className="font-mono text-[10px] text-text-primary text-center px-2">
                  {sat.label}
                </span>
              </div>
            ))}

            <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" preserveAspectRatio="none">
              <line x1="50%" y1="50%" x2="25%" y2="25%" stroke="white" strokeOpacity="0.08" strokeDasharray="4 4" strokeWidth="1" />
              <line x1="50%" y1="50%" x2="25%" y2="75%" stroke="white" strokeOpacity="0.08" strokeDasharray="4 4" strokeWidth="1" />
              <line x1="50%" y1="50%" x2="75%" y2="25%" stroke="white" strokeOpacity="0.08" strokeDasharray="4 4" strokeWidth="1" />
              <line x1="50%" y1="50%" x2="75%" y2="75%" stroke="white" strokeOpacity="0.08" strokeDasharray="4 4" strokeWidth="1" />
            </svg>
          </div>

          <div className="absolute bottom-4 left-4 right-4 bg-surface/90 backdrop-blur-md border border-border rounded p-4 z-30">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-danger" />
              <span className="w-2 h-2 rounded-full bg-amber" />
              <span className="w-2 h-2 rounded-full bg-tertiary" />
              <span className="font-mono text-[10px] text-text-secondary ml-2">architecture.sys</span>
            </div>
            <div className="font-mono text-xs text-text-secondary leading-relaxed">
              <p className="text-tertiary">&gt; Init system topology...</p>
              <p>&gt; Binding logical services to physical boundaries.</p>
              <p>&gt; Establishing event bus for async communication.</p>
              <p className="animate-pulse">&gt; System OK.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
