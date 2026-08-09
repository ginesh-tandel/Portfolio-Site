import { useEffect, useRef } from "react";
import { gsap, prefersReducedMotion } from "../lib/gsap";
import { problems } from "../data/content";
import RevealText from "../components/RevealText";

const icons = ["history", "trending_up", "speed", "hub", "construction", "help"];

export default function ProblemSolving() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) {
      const ctx = gsap.context(() => {
        gsap.set(".problem-item", { opacity: 1, y: 0 });
      }, sectionRef);
      return () => ctx.revert();
    }

    const ctx = gsap.context(() => {
      gsap.from(".problem-item", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 65%",
          end: "70% center",
          scrub: 1,
        },
        opacity: 0,
        y: 40,
        stagger: 0.1,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      data-scene="7"
      className="relative min-h-screen flex flex-col justify-center py-32 px-6 md:px-10"
    >
      <div className="max-w-6xl mx-auto w-full mb-16">
        <span className="font-mono text-xs tracking-widest uppercase text-text-secondary block mb-6">
          07 / Constraints &amp; Resolution
        </span>
        <RevealText
          as="h2"
          className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.1] max-w-2xl"
        >
          <span className="block">I DON'T JUST BUILD FEATURES.</span>
          <span className="block">
            I SOLVE THE <span className="text-accent">CONSTRAINTS</span> AROUND THEM.
          </span>
        </RevealText>
      </div>

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-3 gap-6">
        {problems.map((problem, i) => (
          <div
            key={problem.title}
            className="problem-item group relative flex flex-col gap-6 p-8 bg-surface-container-low hover:bg-surface-container border border-transparent hover:border-border-light transition-all duration-300 rounded-xl"
          >
            <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-100 transition-opacity">
              <span className="font-icon text-text-primary" style={{ fontSize: 32 }}>
                {icons[i % icons.length]}
              </span>
            </div>
            <h3 className="text-xl font-bold tracking-tight text-text-secondary group-hover:text-accent transition-colors duration-300">
              {problem.title.replace(/\.$/, "")}
            </h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-3">
                <span className="font-mono text-[10px] text-danger mt-1 w-10 shrink-0">PROB:</span>
                <p className="text-text-secondary text-sm leading-relaxed">{problem.description}</p>
              </div>
              <div className="w-full h-px bg-border" />
              <div className="flex items-start gap-3">
                <span className="font-mono text-[10px] text-tertiary mt-1 w-10 shrink-0">RSLT:</span>
                <p className="text-text-primary text-sm leading-relaxed">{problem.transformation}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
