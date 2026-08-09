import { useEffect, useRef, type ReactNode } from "react";
import { gsap } from "../lib/gsap";
import { ScrollTrigger } from "../lib/gsap";

interface RevealTextProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span" | "div";
}

export default function RevealText({
  children,
  className = "",
  delay = 0,
  as: Tag = "div",
}: RevealTextProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    gsap.set(el, { opacity: 0, y: 40 });

    ScrollTrigger.create({
      trigger: el,
      start: "top 85%",
      once: true,
      onEnter: () => {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 1,
          delay,
          ease: "power3.out",
        });
      },
    });
  }, [delay]);

  return (
    // @ts-expect-error Tag is a valid element
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
