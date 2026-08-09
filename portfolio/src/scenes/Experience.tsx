import { useEffect, useRef } from "react";
import { gsap } from "../lib/gsap";
import { experience } from "../data/content";
import RevealText from "../components/RevealText";

export default function ExperienceTimeline() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".timeline-entry", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          end: "80% center",
          scrub: 1,
        },
        opacity: 0,
        x: -30,
        stagger: 0.2,
      });

      gsap.from(".timeline-line-fill", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          end: "80% center",
          scrub: 1,
        },
        scaleY: 0,
        transformOrigin: "top",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="experience"
      data-scene="9"
      className="relative min-h-screen flex flex-col justify-center py-32 px-6 md:px-10"
    >
      <div className="max-w-4xl mx-auto w-full">
        <RevealText
          as="h2"
          className="text-3xl md:text-5xl font-bold tracking-tight mb-16"
        >
          EXPERIENCE
        </RevealText>

        <div className="relative">
          <div className="absolute left-[3.5rem] top-0 bottom-0 w-px bg-border">
            <div className="timeline-line-fill absolute inset-0 bg-accent/30 origin-top" />
          </div>

          <div className="space-y-16">
            {experience.map((entry, i) => (
              <div key={i} className="timeline-entry relative flex gap-8">
                <div className="shrink-0 w-14 text-right">
                  <span className="font-mono text-sm text-accent">
                    {entry.year}
                  </span>
                </div>

                <div className="relative pt-0.5">
                  <div className="absolute -left-[1.35rem] top-1.5 w-2.5 h-2.5 rounded-full border-2 border-accent bg-bg-primary" />
                </div>

                <div className="pb-4">
                  <h3 className="text-lg md:text-xl font-semibold mb-2">
                    {entry.role}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed mb-3 max-w-lg">
                    {entry.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {entry.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 border border-border rounded text-text-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <RevealText
          as="h2"
          delay={0.3}
          className="text-3xl md:text-5xl font-bold tracking-tight mt-20 text-center"
        >
          <span className="block">{experience.length > 0 ? "11+" : "0"} YEARS.</span>
          <span className="block text-text-secondary">STILL BUILDING.</span>
        </RevealText>
      </div>
    </section>
  );
}
