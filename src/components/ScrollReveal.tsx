"use client";

import { useEffect } from "react";

export function ScrollReveal() {
  useEffect(() => {
    // 1. Page Transitions
    requestAnimationFrame(() => {
      document.body.classList.add("page-loaded");
    });

    const handleLinkClick = (e: MouseEvent) => {
      const link = (e.target as HTMLElement).closest("a");
      if (!link) return;

      if (
        link.hostname === window.location.hostname &&
        !link.hash &&
        link.target !== "_blank" &&
        link.getAttribute("href") !== "#" &&
        !link.hasAttribute("data-no-transition") &&
        !link.href.includes("javascript:")
      ) {
        if (e.ctrlKey || e.metaKey || e.shiftKey || e.altKey) return;
        e.preventDefault();
        const href = link.href;
        document.body.classList.remove("page-loaded");
        document.body.classList.add("page-exit");
        setTimeout(() => {
          window.location.href = href;
        }, 300);
      }
    };

    document.addEventListener("click", handleLinkClick);

    // 2. Scroll Reveal Animations
    const observerOptions = {
      root: null,
      rootMargin: "0px 0px -50px 0px",
      threshold: 0.05,
    };

    const revealObserver = new IntersectionObserver((entries) => {
      const activeEntries = entries.filter((e) => e.isIntersecting && !e.target.classList.contains("is-visible"));

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (!entry.target.classList.contains("is-visible")) {
            const index = activeEntries.indexOf(entry);
            setTimeout(() => {
              entry.target.classList.add("is-visible");
            }, Math.max(0, index) * 75); // 75ms stagger
          }
        } else {
          // Remove the class when out of view so it animates again when scrolling back
          entry.target.classList.remove("is-visible");
        }
      });
    }, observerOptions);

    // Apply reveal class
    const elementsToReveal = document.querySelectorAll(
      "h1, h2, h3, .card, section p, .grid > div, table tbody tr, .bg-white.rounded-xl, .bg-darkBorder.rounded-xl, .group.flex.flex-col.cursor-pointer"
    );

    elementsToReveal.forEach((el) => {
      if (!el.closest(".modal") && !el.closest(".hidden")) {
        el.classList.add("reveal-item");
        revealObserver.observe(el);
      }
    });

    // 3. Apply micro-interaction classes dynamically
    document.querySelectorAll(".group.flex.flex-col.cursor-pointer").forEach((card) => {
      card.classList.add("hover-scale-card");
    });

    document.querySelectorAll("button:not(.fixed), .btn").forEach((btn) => {
      btn.classList.add("hover-scale-btn");
    });

    return () => {
      document.removeEventListener("click", handleLinkClick);
      revealObserver.disconnect();
    };
  }, []);

  return null;
}
