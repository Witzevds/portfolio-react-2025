import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function useReveal() {
  const { pathname } = useLocation();

  useEffect(() => {
    const apply = () => {
      const elements = document.querySelectorAll(".reveal:not(.is-visible)");
      if (!elements.length) return;

      if (
        typeof window === "undefined" ||
        typeof window.IntersectionObserver === "undefined"
      ) {
        elements.forEach((el) => el.classList.add("is-visible"));
        return;
      }

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
      );

      elements.forEach((el) => observer.observe(el));
      return observer;
    };

    let observer = apply();
    // Re-run shortly after to catch late-mounted elements (markdown content, etc.)
    const t1 = setTimeout(() => {
      if (observer) observer.disconnect();
      observer = apply();
    }, 100);
    const t2 = setTimeout(() => {
      if (observer) observer.disconnect();
      observer = apply();
    }, 600);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      if (observer) observer.disconnect();
    };
  }, [pathname]);
}
