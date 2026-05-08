"use client";

import { useEffect, useRef } from "react";

/**
 * Hook that adds scroll-based reveal animations to elements with the .reveal class
 */
export function useRevealOnScroll() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    const elements = document.querySelectorAll(".reveal");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return containerRef;
}

/**
 * Component wrapper that initializes scroll reveal on mount
 */
export default function ScrollReveal({
  children,
}: {
  children: React.ReactNode;
}) {
  useRevealOnScroll();
  return <>{children}</>;
}
