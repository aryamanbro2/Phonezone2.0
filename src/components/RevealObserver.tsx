import { useEffect } from "react";

export function RevealObserver() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.15 }
    );

    // Observe existing elements
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

    // Observe future elements
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            const el = node as HTMLElement;
            if (el.classList.contains("reveal")) {
              io.observe(el);
            }
            el.querySelectorAll(".reveal").forEach((child) => io.observe(child));
          }
        });
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      observer.disconnect();
    };
  }, []);

  return null;
}
