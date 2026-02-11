"use client";
import { useEffect, useState } from "react";

export function useScrollSpy(ids: string[], offset = 120) {
  const [activeId, setActiveId] = useState(ids[0]);

  useEffect(() => {
    const handler = () => {
      const scrollPos = window.scrollY + offset;

      let current = ids[0];

      ids.forEach((id) => {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPos) {
          current = id;
        }
      });

      setActiveId(current);
    };

    window.addEventListener("scroll", handler);
    handler();

    return () => window.removeEventListener("scroll", handler);
  }, [ids, offset]);

  return activeId;
}
