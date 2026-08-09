import { useEffect, useRef } from "react";
import { gsap } from "../lib/gsap";

export default function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? scrollTop / docHeight : 0;
      gsap.set(barRef.current, { scaleX: progress, transformOrigin: "left" });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed bottom-0 left-0 right-0 h-px bg-border z-50">
      <div
        ref={barRef}
        className="h-full bg-accent w-full origin-left"
        style={{ transform: "scaleX(0)" }}
      />
    </div>
  );
}
