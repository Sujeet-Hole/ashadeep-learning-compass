// "4.9 out of 5 on Google" badge: Google mark, five stars and the score.
// Two looks: "dark" for the navy hero, "light" for white / grey sections.

import { Star } from "lucide-react";
import { GoogleIcon } from "@/components/icons";
import { GOOGLE_RATING } from "@/data/site";

export function GoogleRating({
  variant = "light",
  className = "",
}: {
  variant?: "light" | "dark";
  className?: string;
}) {
  const dark = variant === "dark";
  return (
    <div
      className={`inline-flex items-center gap-3 rounded-full px-4 py-2 ${
        dark
          ? "border border-white/20 bg-white/10 text-white backdrop-blur-sm"
          : "border border-border bg-white text-navy shadow-sm"
      } ${className}`}
      aria-label={`Rated ${GOOGLE_RATING.score} out of ${GOOGLE_RATING.outOf} stars on Google`}
    >
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white shadow-sm">
        <GoogleIcon className="h-4 w-4" />
      </span>
      <span className="flex items-center gap-0.5" aria-hidden>
        {[0, 1, 2, 3, 4].map((i) => (
          <Star key={i} className="h-4 w-4 fill-[#FBBC05] text-[#FBBC05]" />
        ))}
      </span>
      <span className="text-sm leading-none">
        <strong className="font-extrabold">{GOOGLE_RATING.score}</strong>
        <span className={dark ? "text-white/80" : "text-navy/70"}>
          {" "}
          out of {GOOGLE_RATING.outOf} on Google
        </span>
      </span>
    </div>
  );
}
