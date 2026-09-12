"use client";
import { useEffect, useRef } from "react";

/**
 * Scroll-reveal wrapper — uses native IntersectionObserver.
 * No external dependencies, zero bundle overhead.
 * CSS classes: animate-section, anim-{animation}, in-view (defined in globals.css)
 */
export default function AnimateSection({
  children,
  className = "",
  delay = 0,
  animation = "fadeUp",
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.classList.add("in-view");
          }, delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`animate-section anim-${animation} ${className}`}
    >
      {children}
    </div>
  );
}
