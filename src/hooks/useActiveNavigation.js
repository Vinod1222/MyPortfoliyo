import { useEffect, useMemo, useState } from "react";
import { getSectionId } from "../utils/sectionUtils";

export function useActiveNavigation(navItems) {
  const [activeNav, setActiveNav] = useState(navItems[0]);

  const observerOptions = useMemo(
    () => ({ rootMargin: "-40% 0px -52% 0px", threshold: 0 }),
    [],
  );

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(getSectionId(item)))
      .filter(Boolean);

    const intersection = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const label = navItems.find(
          (item) => getSectionId(item) === entry.target.id,
        );

        if (label) setActiveNav(label);
      });
    }, observerOptions);

    sections.forEach((section) => intersection.observe(section));

    return () => intersection.disconnect();
  }, [navItems, observerOptions]);

  return activeNav;
}
