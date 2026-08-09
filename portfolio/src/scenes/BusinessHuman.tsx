import { useEffect, useRef } from "react";
import { gsap } from "../lib/gsap";
import RevealText from "../components/RevealText";

const businessElements = [
  "Users",
  "Product Goals",
  "Revenue",
  "Operations",
  "Teams",
  "Deadlines",
  "Business Constraints",
];

export default function BusinessHuman() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".biz-item", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          end: "center center",
          scrub: 1,
        },
        opacity: 0,
        y: 20,
        stagger: 0.08,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      data-scene="8"
      className="relative min-h-screen flex flex-col justify-center py-32 px-6 md:px-10"
    >
      <div className="max-w-4xl mx-auto w-full text-center">
        <RevealText
          as="h2"
          className="text-3xl md:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-12"
        >
          <span className="block">BEHIND THE CODE</span>
          <span className="block text-text-secondary">IS A BUSINESS.</span>
        </RevealText>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {businessElements.map((el, i) => (
            <span
              key={i}
              className="biz-item text-sm md:text-base px-5 py-2.5 border border-border-light rounded-full text-text-muted hover:text-text-primary hover:border-accent/40 transition-colors duration-300"
            >
              {el}
            </span>
          ))}
        </div>

        <RevealText
          as="p"
          delay={0.3}
          className="text-text-muted text-sm md:text-base leading-relaxed max-w-lg mx-auto italic"
        >
          I work at the intersection of engineering, product thinking, and
          business requirements. The best software comes from understanding all
          three.
        </RevealText>
      </div>
    </section>
  );
}
