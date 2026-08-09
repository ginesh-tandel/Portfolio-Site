import { useEffect, useRef } from "react";
import { gsap } from "../lib/gsap";
import { techStack } from "../data/content";
import RevealText from "../components/RevealText";

export default function TechDepth() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".tech-layer", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "center center",
          scrub: 1,
        },
        opacity: 0,
        x: -40,
        stagger: 0.1,
      });

      gsap.from(".tech-connector", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "20% 60%",
          end: "60% 40%",
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
      data-scene="6"
      className="relative min-h-screen flex flex-col justify-center py-32 px-6 md:px-10"
    >
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center">
        <div>
          <RevealText
            as="h2"
            className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6"
          >
            <span className="block">THE TECHNOLOGY CHANGES.</span>
            <span className="block text-text-secondary mt-2">
              THE ENGINEERING PRINCIPLES DON'T.
            </span>
          </RevealText>
        </div>

        <div className="relative">
          {techStack.map((layer, i) => (
            <div key={layer.layer}>
              <div className="tech-layer flex items-start gap-6 py-4">
                <span className="text-xs font-mono text-accent tracking-wider w-24 shrink-0 pt-1">
                  {layer.layer}
                </span>
                <div className="flex flex-wrap gap-2">
                  {layer.items.map((item) => (
                    <span
                      key={item}
                      className="text-sm px-3 py-1.5 border border-border-light rounded text-text-secondary hover:border-accent/40 hover:text-accent transition-colors duration-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              {i < techStack.length - 1 && (
                <div className="tech-connector w-px h-4 bg-border-light ml-[4.5rem]" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
