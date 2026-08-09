import { useEffect, useRef } from "react";
import { gsap, prefersReducedMotion } from "../lib/gsap";
import { projects, type Project } from "../data/content";
import RevealText from "../components/RevealText";
import { TechChips, ArchitectureFrame, ProductMockup } from "../components/ProjectVisual";

function CaseStudy({ project, mirrored }: { project: Project; mirrored: boolean }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) {
      const ctx = gsap.context(() => {
        gsap.set(".cs-phase", { opacity: 1, y: 0 });
      }, ref);
      return () => ctx.revert();
    }

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

  const sidebar = (
    <div className={`lg:col-span-4 flex flex-col gap-16 lg:sticky lg:top-32 h-fit ${mirrored ? "lg:order-2" : "lg:order-1"}`}>
      <div className="cs-phase flex flex-col gap-4 relative">
        <div className="absolute -left-6 top-1.5 w-2 h-2 rounded-full bg-danger" />
        <h4 className="font-mono text-xs tracking-wider uppercase text-text-primary">
          01 / The Problem
        </h4>
        <p className="text-text-secondary text-sm leading-relaxed">{project.problem}</p>
      </div>

      <div className="cs-phase flex flex-col gap-4 relative">
        <div className="absolute -left-6 top-1.5 w-2 h-2 rounded-full bg-amber" />
        <h4 className="font-mono text-xs tracking-wider uppercase text-text-primary">
          02 / Approach
        </h4>
        <p className="text-text-secondary text-sm leading-relaxed mb-2">{project.approach}</p>
        <ul className="space-y-1.5">
          {project.architecture.map((item, i) => (
            <li key={i} className="text-text-secondary text-xs flex items-start gap-2">
              <span className="mt-1.5 w-1 h-1 rounded-full bg-text-muted shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="cs-phase flex flex-col gap-4 relative">
        <div className="absolute -left-6 top-1.5 w-2 h-2 rounded-full bg-tertiary" />
        <h4 className="font-mono text-xs tracking-wider uppercase text-text-primary">
          03 / Result
        </h4>
        <p className="text-text-secondary text-sm leading-relaxed mb-2">{project.product}</p>
        <p className="text-text-secondary text-sm leading-relaxed">{project.result}</p>
        <div className="flex flex-wrap gap-2 mt-2">
          {project.capabilities.map((cap) => (
            <span key={cap} className="font-mono text-[11px] px-2.5 py-1 border border-border-light text-text-muted">
              {cap}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  const visuals = (
    <div className={`lg:col-span-8 flex flex-col gap-10 ${mirrored ? "lg:order-1" : "lg:order-2"}`}>
      <div className="cs-phase">
        <ArchitectureFrame project={project} />
      </div>
      <div className="cs-phase">
        <ProductMockup project={project} large={project.number === "01" || project.number === "02"} />
      </div>
    </div>
  );

  return (
    <div
      ref={ref}
      className="min-h-screen flex flex-col justify-center py-24 px-6 md:px-10 border-b border-border"
    >
      <div className="max-w-6xl mx-auto w-full flex flex-col gap-16">
        <div className="cs-phase flex flex-col md:flex-row justify-between items-start gap-8 border-l border-border pl-8">
          <div className="flex flex-col gap-3 max-w-xl">
            <span className="font-mono text-xs text-text-muted tracking-wider">
              CASE STUDY {project.number}
            </span>
            <h3 className="text-2xl md:text-4xl font-bold tracking-tight">{project.name}</h3>
            <p className="text-text-secondary text-sm">{project.subtitle}</p>
          </div>
          <TechChips project={project} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {sidebar}
          {visuals}
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
          Each project is a chapter. Problem, approach, result.
        </RevealText>
      </div>

      {projects.map((project, i) => (
        <CaseStudy key={project.id} project={project} mirrored={i % 2 === 1} />
      ))}
    </section>
  );
}
