import { useEffect, useRef } from "react";
import { gsap, prefersReducedMotion } from "../lib/gsap";
import RevealText from "../components/RevealText";

const nodes = [
  { id: "frontend", label: "Frontend", x: 200, y: 40, color: "#59c2ff" },
  { id: "api", label: "API Layer", x: 200, y: 120, color: "#c8a2ff" },
  { id: "app", label: "Application", x: 200, y: 200, color: "#ffad66" },
  { id: "domain", label: "Domain", x: 200, y: 280, color: "#73d0a1" },
  { id: "infra", label: "Infrastructure", x: 200, y: 360, color: "#ff6b9d" },
  { id: "db", label: "Database", x: 200, y: 440, color: "#59c2ff" },
  { id: "auth", label: "Authentication", x: 50, y: 160, color: "#c8a2ff" },
  { id: "cache", label: "Caching", x: 350, y: 160, color: "#73d0a1" },
  { id: "jobs", label: "Background Jobs", x: 50, y: 320, color: "#ffad66" },
  { id: "integrate", label: "Integrations", x: 350, y: 320, color: "#59c2ff" },
  { id: "messaging", label: "Messaging", x: 50, y: 400, color: "#ff6b9d" },
  { id: "monitor", label: "Monitoring", x: 350, y: 400, color: "#c8a2ff" },
];

const connections = [
  [0, 1], [1, 2], [2, 3], [3, 4], [4, 5],
  [1, 6], [1, 7], [3, 8], [3, 9], [4, 10], [4, 11],
];

export default function Architecture() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

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
        scale: 0,
        opacity: 0,
        stagger: 0.08,
        transformOrigin: "center",
      });

      gsap.from(".arch-line", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "20% 60%",
          end: "60% 40%",
          scrub: 1,
        },
        strokeDashoffset: 200,
        opacity: 0,
        stagger: 0.05,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      data-scene="3"
      className="relative min-h-screen flex flex-col justify-center py-32 px-6 md:px-10"
    >
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center">
        <div className="order-2 md:order-1">
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
            className="text-text-muted text-sm md:text-base leading-relaxed max-w-md italic"
          >
            Architecture isn't about adding complexity. It's about making
            complexity manageable.
          </RevealText>
        </div>

        <div className="order-1 md:order-2 flex justify-center">
          <svg
            ref={svgRef}
            viewBox="0 0 400 480"
            className="w-full max-w-sm"
            fill="none"
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
                strokeWidth="1"
                strokeDasharray="200"
                strokeDashoffset="200"
              />
            ))}
            {nodes.map((node) => (
              <g key={node.id} className="arch-node">
                <circle
                  cx={node.x}
                  cy={node.y}
                  r="6"
                  fill={node.color}
                  opacity="0.8"
                />
                <circle
                  cx={node.x}
                  cy={node.y}
                  r="12"
                  fill="none"
                  stroke={node.color}
                  strokeWidth="0.5"
                  opacity="0.3"
                />
                <text
                  x={node.x}
                  y={node.y + 24}
                  textAnchor="middle"
                  fill="#888"
                  fontSize="9"
                  fontFamily="Inter, sans-serif"
                >
                  {node.label}
                </text>
              </g>
            ))}
          </svg>
        </div>
      </div>
    </section>
  );
}
