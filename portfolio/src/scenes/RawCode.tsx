import { useEffect, useRef } from "react";
import { gsap, prefersReducedMotion } from "../lib/gsap";
import RevealText from "../components/RevealText";

const codeFragments = [
  {
    lines: [
      '<span class="text-code-purple">public async</span> <span class="text-code-blue">Task</span><span class="text-code-orange">&lt;Product&gt;</span> <span class="text-code-green">BuildAsync</span>(',
      '    <span class="text-code-comment">// understand the problem</span>',
      '    <span class="text-code-comment">// design the system</span>',
      '    <span class="text-code-comment">// build the solution</span>',
      ')',
    ],
  },
  {
    lines: [
      '<span class="text-code-purple">public</span> <span class="text-code-blue">IActionResult</span> <span class="text-code-green">Create</span>(',
      '    [<span class="text-code-orange">FromBody</span>] <span class="text-code-blue">CreateRequest</span> request)',
      '{',
      '    <span class="text-code-purple">var</span> result = <span class="text-code-blue">await</span> _service.<span class="text-code-green">ProcessAsync</span>(request);',
      '    <span class="text-code-purple">return</span> <span class="text-code-green">Ok</span>(result);',
      '}',
    ],
  },
  {
    lines: [
      '<span class="text-code-purple">public class</span> <span class="text-code-blue">LeadService</span> : <span class="text-code-orange">ILeadService</span>',
      '{',
      '    <span class="text-code-purple">public async</span> <span class="text-code-blue">Task</span><span class="text-code-orange">&lt;Lead&gt;</span> <span class="text-code-green">EnrichAsync</span>(',
      '        <span class="text-code-blue">Lead</span> lead)',
      '    {',
      '        <span class="text-code-comment">// score, enrich, route</span>',
      '    }',
      '}',
    ],
  },
];

export default function RawCode() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const codeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) {
      const ctx = gsap.context(() => {
        gsap.set(".code-fragment", { opacity: 1, y: 0 });
        gsap.set(".code-line-highlight", { scaleX: 1 });
      }, sectionRef);
      return () => ctx.revert();
    }

    const ctx = gsap.context(() => {
      gsap.from(".code-fragment", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "center center",
          scrub: 1,
        },
        opacity: 0,
        y: 60,
        stagger: 0.2,
      });

      gsap.from(".code-line-highlight", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "40% 50%",
          end: "70% 50%",
          scrub: 1,
        },
        scaleX: 0,
        transformOrigin: "left",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      data-scene="2"
      className="relative min-h-screen flex flex-col justify-center py-32 px-6 md:px-10"
    >
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center">
        <div ref={codeRef} className="space-y-6">
          {codeFragments.map((frag, i) => (
            <div
              key={i}
              className="code-fragment font-mono text-xs md:text-sm leading-relaxed bg-code-bg border border-border rounded-lg p-5 overflow-hidden"
            >
              {frag.lines.map((line, j) => (
                <div key={j} className="relative">
                  <span
                    className="code-line-highlight absolute inset-0 bg-accent/5 -mx-5 px-5"
                  />
                  <span dangerouslySetInnerHTML={{ __html: line }} />
                </div>
              ))}
            </div>
          ))}
        </div>

        <div>
          <RevealText
            as="h2"
            className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6"
          >
            <span className="block">CODE IS ONLY</span>
            <span className="block text-text-secondary">THE BEGINNING.</span>
          </RevealText>
          <RevealText
            as="p"
            delay={0.2}
            className="text-text-muted text-sm md:text-base leading-relaxed max-w-md"
          >
            Every product starts with code. But raw code is just the first layer
            of a much deeper system.
          </RevealText>
        </div>
      </div>
    </section>
  );
}
