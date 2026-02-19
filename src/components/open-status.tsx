"use client";

import { useEffect, useState } from "react";
import { isOpenNow } from "@/lib/hours";

export function OpenStatus() {
  const [open, setOpen] = useState<boolean | null>(null);

  useEffect(() => {
    setOpen(isOpenNow());
    const id = setInterval(() => setOpen(isOpenNow()), 60_000);
    return () => clearInterval(id);
  }, []);

  // Before hydration, render the closed/static version to avoid layout shift
  if (open === null) {
    return (
      <p className="hours-line">
        <span className="hours-label">Open</span>
        <span className="hours-sep">&#8212;</span>
        <span className="hours-value">Thu&ndash;Sat 19:00&ndash;02:00</span>
      </p>
    );
  }

  if (open) {
    return (
      <p className="hours-line">
        <span className="hours-dot" aria-hidden="true" />
        <span className="hours-label">Open Now</span>
        <span className="hours-sep">&#8212;</span>
        <span className="hours-value">till 02:00</span>
      </p>
    );
  }

  return (
    <p className="hours-line">
      <span className="hours-label">Open</span>
      <span className="hours-sep">&#8212;</span>
      <span className="hours-value">Thu&ndash;Sat 19:00&ndash;02:00</span>
    </p>
  );
}
