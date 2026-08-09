import { currentFocus } from "../data/content";
import RevealText from "../components/RevealText";

export default function CurrentFocus() {
  return (
    <section
      data-scene="10"
      className="relative min-h-[60vh] flex flex-col justify-center py-32 px-6 md:px-10"
    >
      <div className="max-w-4xl mx-auto w-full">
        <RevealText
          as="h2"
          className="text-2xl md:text-4xl font-bold tracking-tight mb-10"
        >
          CURRENT FOCUS
        </RevealText>

        <div className="space-y-4">
          {currentFocus.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-4 text-text-secondary text-sm md:text-base"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
