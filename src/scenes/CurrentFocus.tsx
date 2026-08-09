import { currentFocus } from "../data/content";
import RevealText from "../components/RevealText";

export default function CurrentFocus() {
  return (
    <section
      data-scene="10"
      className="relative min-h-screen flex items-center py-32 px-6 md:px-10 overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-20"
      >
        <div className="absolute top-[20%] left-[10%] w-[40vw] h-[40vw] rounded-full bg-accent/5 blur-[100px]" />
        <div className="absolute bottom-[20%] right-[10%] w-[30vw] h-[30vw] rounded-full bg-secondary/5 blur-[80px]" />
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10 grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
        <div className="md:col-span-5">
          <span className="font-mono text-xs tracking-widest uppercase text-text-secondary border border-border-light px-4 py-2 inline-block mb-6">
            Current Focus
          </span>
          <RevealText
            as="h2"
            className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]"
          >
            Shaping
            <br />
            Tomorrow.
          </RevealText>
        </div>

        <div className="md:col-span-7 flex flex-col gap-12 mt-4 md:mt-0 pl-0 md:pl-12 border-l border-border-light">
          {currentFocus.map((item, i) => (
            <div key={item.title} className="group flex flex-col md:flex-row gap-6 items-start">
              <div className="w-12 h-12 flex items-center justify-center bg-surface-container border border-border-light text-accent shrink-0 transition-transform duration-500 group-hover:scale-110">
                <span className="font-icon" style={{ fontSize: 22 }}>
                  {item.icon}
                </span>
              </div>
              <div>
                <RevealText
                  as="h3"
                  delay={i * 0.05}
                  className="text-lg md:text-xl font-semibold mb-2"
                >
                  {item.title}
                </RevealText>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
