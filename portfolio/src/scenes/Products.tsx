import { useEffect, useRef } from "react";
import { gsap } from "../lib/gsap";
import { projects, type Project } from "../data/content";
import RevealText from "../components/RevealText";

function CaseStudy({ project }: { project: Project }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".cs-phase", {
        scrollTrigger: {
          trigger: ref.current,
          start: "top 70%",
          end: "center center",
          scrub: 1,
        },
        opacity: 0,
        y: 30,
        stagger: 0.15,
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={ref}
      className="min-h-screen flex flex-col justify-center py-24 px-6 md:px-10 border-b border-border"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex items-baseline gap-4 mb-12">
          <span className="font-mono text-xs text-text-muted">
            {project.number}
          </span>
          <h3 className="text-2xl md:text-4xl font-bold tracking-tight">
            {project.name}
          </h3>
          <span className="text-xs text-text-muted hidden md:inline">
            — {project.subtitle}
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="cs-phase">
              <span className="text-xs font-mono text-accent tracking-wider">
                01 — PROBLEM
              </span>
              <p className="mt-3 text-text-secondary text-sm leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="cs-phase">
              <span className="text-xs font-mono text-accent tracking-wider">
                02 — APPROACH
              </span>
              <p className="mt-3 text-text-secondary text-sm leading-relaxed">
                {project.approach}
              </p>
            </div>

            <div className="cs-phase">
              <span className="text-xs font-mono text-accent tracking-wider">
                03 — ARCHITECTURE
              </span>
              <ul className="mt-3 space-y-1.5">
                {project.architecture.map((item, i) => (
                  <li
                    key={i}
                    className="text-text-secondary text-sm flex items-start gap-2"
                  >
                    <span className="text-accent mt-1.5 w-1 h-1 rounded-full bg-accent shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-8">
            <div className="cs-phase">
              <span className="text-xs font-mono text-accent tracking-wider">
                04 — PRODUCT
              </span>
              <p className="mt-3 text-text-secondary text-sm leading-relaxed">
                {project.product}
              </p>
            </div>

            <div className="cs-phase">
              <span className="text-xs font-mono text-accent tracking-wider">
                05 — RESULT
              </span>
              <p className="mt-3 text-text-secondary text-sm leading-relaxed">
                {project.result}
              </p>
            </div>

            <div className="cs-phase">
              <span className="text-xs font-mono text-accent tracking-wider">
                CAPABILITIES
              </span>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.capabilities.map((cap, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1.5 border border-border-light rounded-full text-text-muted"
                  >
                    {cap}
                  </span>
                ))}
              </div>
            </div>

            <div className="cs-phase">
              <span className="text-xs font-mono text-accent tracking-wider">
                TECH
              </span>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1.5 bg-bg-elevated border border-border rounded text-text-secondary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Products() {
  return (
    <section id="work" data-scene="5">
      <div className="pt-32 pb-8 px-6 md:px-10 max-w-6xl mx-auto">
        <RevealText
          as="h2"
          className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
        >
          SELECTED WORK
        </RevealText>
        <RevealText
          as="p"
          delay={0.1}
          className="text-text-muted text-sm max-w-md"
        >
          Each project is a chapter. Problem, architecture, product, result.
        </RevealText>
      </div>

      {projects.map((project) => (
        <CaseStudy key={project.id} project={project} />
      ))}
    </section>
  );
}
