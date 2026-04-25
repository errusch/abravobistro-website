"use client";

import { useEffect, useState } from "react";

function getWisconsinDateParts() {
  const now = new Date();
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Chicago",
    weekday: "short",
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  });
  const parts = formatter.formatToParts(now);
  const get = (type: string) => parts.find((p) => p.type === type)?.value;
  return {
    weekday: get("weekday")?.toLowerCase() ?? "",
    hour: parseInt(get("hour") ?? "0", 10),
    minute: parseInt(get("minute") ?? "0", 10),
  };
}

function isOpenNow(): boolean {
  const { weekday, hour, minute } = getWisconsinDateParts();
  const time = hour + minute / 60;

  // Mon–Sat: 11 AM – 9 PM
  if (["mon", "tue", "wed", "thu", "fri", "sat"].includes(weekday)) {
    return time >= 11 && time < 21;
  }
  // Sun: 10 AM – 2 PM (brunch)
  if (weekday === "sun") {
    return time >= 10 && time < 14;
  }
  return false;
}

export default function OpenStatus({
  variant = "pill",
}: {
  variant?: "pill" | "dot";
}) {
  const [open, setOpen] = useState<boolean | null>(null);

  useEffect(() => {
    const refresh = () => setOpen(isOpenNow());
    const timeout = window.setTimeout(refresh, 0);
    const interval = window.setInterval(refresh, 60000);
    return () => {
      window.clearTimeout(timeout);
      window.clearInterval(interval);
    };
  }, []);

  if (open === null) return null;

  if (variant === "dot") {
    return (
      <span
        className={`inline-block w-2 h-2 rounded-full ${
          open ? "bg-gold animate-pulse" : "bg-burgundy"
        }`}
        title={open ? "Open Now" : "Closed"}
      />
    );
  }

  return (
    <span
      className={`inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-wide uppercase px-3 py-1 rounded-full border backdrop-blur-sm ${
        open
          ? "bg-cream/75 text-burgundy border-gold/60"
          : "bg-cream/75 text-espresso-light border-burgundy/30"
      }`}
    >
      <span
        className={`w-1.5 h-1.5 rounded-full ${
          open ? "bg-gold animate-pulse" : "bg-burgundy"
        }`}
      />
      {open ? "Open Now" : "Closed"}
    </span>
  );
}
