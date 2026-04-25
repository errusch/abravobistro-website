type LogoLockupProps = {
  variant?: "classic" | "fresh";
  tone?: "dark" | "light";
  compact?: boolean;
};

export default function LogoLockup({
  variant = "fresh",
  tone = "dark",
  compact = false,
}: LogoLockupProps) {
  const isClassic = variant === "classic";

  return (
    <span
      className={[
        "logo-lockup",
        `logo-lockup-${variant}`,
        `logo-lockup-${tone}`,
        compact ? "logo-lockup-compact" : "",
      ].join(" ")}
      aria-label={
        isClassic
          ? "á'Bravo, eat well...enjoy"
          : "á'Bravo Bistro, Bellevue, Wisconsin"
      }
    >
      <span className="logo-lockup-word">á&apos;Bravo</span>
      <span className="logo-lockup-tag">
        {isClassic ? "eat well...enjoy" : "Bistro · Bellevue"}
      </span>
    </span>
  );
}
