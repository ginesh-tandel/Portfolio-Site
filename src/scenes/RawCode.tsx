import { useEffect, useRef } from "react";
import { gsap, prefersReducedMotion } from "../lib/gsap";
import RevealText from "../components/RevealText";

const codeFragments = [
  {
    filename: "Domain.cs",
    position: "md:absolute md:top-0 md:left-0 md:w-[360px] z-30",
    lines: [
      '<span class="text-code-purple">public async</span> <span class="text-code-blue">Task</span><span class="text-code-orange">&lt;Product&gt;</span> <span class="text-code-green">BuildAsync</span>(',
      '    <span class="text-code-comment">// understand the problem</span>',
      '    <span class="text-code-comment">// design the system</span>',
      '    <span class="text-code-comment">// build the solution</span>',
      ')',
    ],
  },
  {
    filename: "Infrastructure.cs",
    position: "md:absolute md:top-20 md:left-[28%] md:w-[420px] z-20",
    lines: [
      '<span class="text-code-purple">services</span>.<span class="text-code-green">AddInfrastructure</span>(cfg =&gt; {',
      '    cfg.<span class="text-code-blue">UsePostgres</span>(connString)',
      '       .<span class="text-code-blue">AddDistributedCache</span>()',
      '       .<span class="text-code-blue">AddMessageBus</span>();',
      '});',
    ],
  },
  {
    filename: "Api.cs",
    position: "md:absolute md:top-40 md:right-0 md:w-[340px] z-40",
    lines: [
      '<span class="text-code-purple">app</span>.<span class="text-code-green">MapGet</span>(<span class="text-code-orange">"/api/v1/leads"</span>,',
      '    <span class="text-code-blue">async</span> (ILeadService svc) =&gt;',
      '    <span class="text-code-blue">await</span> svc.<span class="text-code-green">EnrichAsync</span>());',
    ],
  },
];

export default function RawCode() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) {
      const ctx = gsap.context(() => {
        gsap.set(".code-fragment", { opacity: 1, y: 0 });
      }, sectionRef);
      return () => ctx.revert();
    }

    const ctx = gsap.context(() => {
      gsap.from(".code-headline", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          end: "top 40%",
          scrub: 1,
        },
        opacity: 0,
        y: 30,
      });

      gsap.from(".code-fragment", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 65%",
          end: "center center",
          scrub: 1,
        },
        opacity: 0,
        y: 60,
        stagger: 0.2,
      });

      gsap.from(".code-link", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "60% center",
          scrub: 1,
        },
        opacity: 0,
        scale: 0.85,
        stagger: 0.15,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      data-scene="2"
      className="relative min-h-screen flex flex-col justify-center py-32 px-6 md:px-10 bg-surface"
    >
      <div className="max-w-6xl mx-auto w-full flex flex-col gap-16 md:gap-24">
        <div className="code-headline max-w-xl">
          <RevealText
            as="h2"
            className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-6"
          >
            <span className="block">CODE IS ONLY</span>
            <span className="block text-text-secondary">THE BEGINNING.</span>
          </RevealText>
          <RevealText
            as="p"
            delay={0.15}
            className="text-text-secondary text-sm md:text-base leading-relaxed"
          >
            Writing code is the baseline. The true craft lies in assembling
            these fragments into robust, scalable systems that solve actual
            business problems.
          </RevealText>
        </div>

        <div className="relative flex flex-col gap-6 md:gap-0 md:h-[520px]">
          <div className="absolute inset-0 pointer-events-none">
            <div className="code-link absolute left-[18%] top-[24%] w-12 h-px bg-accent/30" />
            <div className="code-link absolute left-[50%] top-[45%] w-16 h-px bg-secondary/30" />
            <div className="code-link absolute right-[10%] top-[30%] h-px w-14 bg-accent/20" />
          </div>

          {codeFragments.map((frag) => (
            <div
              key={frag.filename}
              className={`code-fragment relative ${frag.position} bg-bg-elevated/95 border border-border-light shadow-2xl rounded-3xl overflow-hidden backdrop-blur-sm`}
            >
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-bg-secondary/70">
                <span className="w-2 h-2 rounded-full bg-surface-container-highest" />
                <span className="w-2 h-2 rounded-full bg-surface-container-highest" />
                <span className="w-2 h-2 rounded-full bg-surface-container-highest" />
                <span className="ml-auto font-mono text-[10px] text-text-muted tracking-wide">
                  {frag.filename}
                </span>
              </div>
              <div className="p-5 font-mono text-xs md:text-[13px] leading-relaxed text-text-secondary">
                {frag.lines.map((line, j) => (
                  <div key={j} dangerouslySetInnerHTML={{ __html: line }} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
