"use client";

import { useEffect } from "react";

export function Interactions() {
  useEffect(() => {
    // Scroll-based nav state
    const nav = document.querySelector(".nav");
    const handleScroll = () => {
      if (window.scrollY > 24) {
        nav?.classList.add("scrolled");
      } else {
        nav?.classList.remove("scrolled");
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    // Intersection observer for fade-in animations
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            observer.unobserve(e.target);
          }
        }),
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));

    // Stagger children of grid containers
    document.querySelectorAll(".features-grid .feat-card, .testi-grid .testi-card, .pricing-grid .price-card").forEach((el, i) => {
      (el as HTMLElement).style.transitionDelay = `${i * 0.08}s`;
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return null;
}
