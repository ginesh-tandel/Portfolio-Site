import { useEffect, useRef } from "react";
import { gsap, prefersReducedMotion } from "../lib/gsap";
import RevealText from "../components/RevealText";

const nodes = [
  { id: "frontend", label: "Frontend", icon: "language", x: 12, y: 18, size: "sm", bg: "bg-secondary", fg: "text-bg-primary" },
  { id: "api", label: "API Gateway", icon: "api", x: 38, y: 50, size: "lg", bg: "bg-accent", fg: "text-bg-primary" },
  { id: "domain", label: "Domain", icon: "schema", x: 72, y: 18, size: "sm", bg: "bg-tertiary", fg: "text-bg-primary" },
  { id: "infra", label: "Infrastructure", icon: "dns", x: 72, y: 80, size: "sm", bg: "bg-surface-container-highest", fg: "text-text-primary" },
  { id: "db", label: "Database", icon: "database", x: 90, y: 50, size: "lg", bg: "bg-amber", fg: "text-bg-primary" },
] as const;

const connections: [number, number][] = [
  [0, 1],
  [1, 2],
  [1, 3],
  [2, 4],
  [3, 4],
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
            className="absolute inset-0 w-full h-full"
          >
            {connections.map(([from, to], i) => (
              <line
                key={i}
                className="arch-line"
                x1={nodes[from].x}
                y1={nodes[from].y}
                x2={nodes[to].x}
                y2={nodes[to].y}
                stroke="#2a2a2a"
                strokeWidth="0.3"
                strokeDasharray="1.4 1.4"
                vectorEffect="non-scaling-stroke"
              />
            ))}
          </svg>

          {nodes.map((node) => (
            <div
              key={node.id}
              className="arch-node absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2"
              style={{ left: `${node.x}%`, top: `${node.y}%` }}
            >
              <div
                className={`${node.bg} ${node.fg} ${
                  node.size === "lg" ? "w-16 h-16" : "w-12 h-12"
                } rounded-full flex items-center justify-center shadow-lg`}
              >
                <span className="font-icon" style={{ fontSize: node.size === "lg" ? 26 : 20 }}>
                  {node.icon}
                </span>
              </div>
              <span className="font-mono text-[10px] uppercase tracking-wider text-text-secondary whitespace-nowrap">
                {node.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
