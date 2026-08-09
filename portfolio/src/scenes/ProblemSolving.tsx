import { useEffect, useRef } from "react";
import { gsap, prefersReducedMotion } from "../lib/gsap";
import { problems } from "../data/content";
import RevealText from "../components/RevealText";

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
          start: "top 60%",
          end: "80% center",
          scrub: 1,
        },
        opacity: 0,
        y: 40,
        stagger: 0.15,
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
      <div className="max-w-4xl mx-auto w-full">
        <div className="space-y-16 md:space-y-24 mb-24">
          {problems.map((problem, i) => (
            <div key={i} className="problem-item">
              <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
                {problem.title}
              </h3>
              <p className="text-text-muted text-sm md:text-base mb-4 max-w-2xl">
                {problem.description}
              </p>
              <div className="text-xs font-mono text-accent/70 tracking-wide">
                {problem.transformation}
              </div>
            </div>
          ))}
        </div>

        <RevealText
          as="h2"
          className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]"
        >
          <span className="block">I DON'T JUST BUILD FEATURES.</span>
          <span className="block text-text-secondary mt-2">
            I SOLVE THE CONSTRAINTS
          </span>
          <span className="block text-text-secondary">AROUND THEM.</span>
        </RevealText>
      </div>
    </section>
  );
}
