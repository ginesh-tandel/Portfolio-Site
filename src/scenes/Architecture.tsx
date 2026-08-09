import { useEffect, useRef } from "react";
import { gsap, prefersReducedMotion } from "../lib/gsap";
import RevealText from "../components/RevealText";
import { architectureNodes } from "../data/content";

const connections: [string, string][] = [
  ["frontend", "api"],
  ["api", "app"],
  ["app", "domain"],
  ["domain", "infra"],
  ["infra", "db"],
  ["auth", "api"],
  ["cache", "app"],
  ["jobs", "infra"],
  ["integrate", "app"],
  ["messaging", "infra"],
  ["monitor", "infra"],
];

export default function Architecture() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) {
      const ctx = gsap.context(() => {
        gsap.set(".arch-node", { scale: 1, opacity: 1 });
        gsap.set(".arch-line", { strokeDashoffset: 0, opacity: 1 });
      }, sectionRef);
      return () => ctx.revert();
    }

    const ctx = gsap.context(() => {
      gsap.from(".arch-node", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "center center",
          scrub: 1,
        },
        scale: 0.4,
        opacity: 0,
        stagger: 0.1,
        transformOrigin: "center",
      });

      gsap.from(".arch-line", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "20% 60%",
          end: "70% 40%",
          scrub: 1,
        },
        strokeDashoffset: 140,
        opacity: 0,
        stagger: 0.08,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      data-scene="3"
      className="relative min-h-screen flex flex-col justify-center py-32 px-6 md:px-10 bg-bg-secondary"
    >
      <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-5 order-2 lg:order-1">
          <RevealText
            as="h2"
            className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6"
          >
            <span className="block">11+ YEARS</span>
            <span className="block text-text-secondary">OF ENGINEERING</span>
          </RevealText>
          <RevealText
            as="p"
            delay={0.2}
            className="text-text-secondary text-sm md:text-base leading-relaxed max-w-md"
          >
            Architecture isn't about adding complexity. It's about making
            complexity manageable — turning isolated fragments of code into a
            cohesive, reliable product engine.
          </RevealText>
        </div>

        <div className="lg:col-span-7 order-1 lg:order-2 relative h-[380px] md:h-[460px] w-full">
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="absolute inset-0 w-full h-full pointer-events-none"
          >
            {connections.map(([fromId, toId], i) => {
              const from = architectureNodes.find((node) => node.id === fromId);
              const to = architectureNodes.find((node) => node.id === toId);
              if (!from || !to) return null;
              return (
                <line
                  key={i}
                  className="arch-line"
                  x1={from.x}
                  y1={from.y}
                  x2={to.x}
                  y2={to.y}
                  stroke="#555"
                  strokeWidth="0.35"
                  strokeDasharray="2 1"
                  vectorEffect="non-scaling-stroke"
                />
              );
            })}
          </svg>

          {architectureNodes.map((node) => (
            <div
              key={node.id}
              className="arch-node absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-3"
              style={{ left: `${node.x}%`, top: `${node.y}%` }}
            >
              <div className="w-14 h-14 bg-bg-primary/70 border border-border rounded-full flex items-center justify-center shadow-[0_20px_80px_rgba(0,0,0,0.16)]">
                <span className="font-mono text-[10px] text-text-secondary text-center px-2">
                  {node.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
