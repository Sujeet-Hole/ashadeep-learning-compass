// A single student review: profile photo, name and comment (from the institute's Google reviews).

import { Quote } from "lucide-react";
import { SafeImage } from "@/components/SafeImage";
import type { Testimonial } from "@/data/site";

export function ReviewCard({ review, className = "" }: { review: Testimonial; className?: string }) {
  return (
    <figure
      className={`group relative flex h-full flex-col rounded-3xl border border-border bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-xl hover:shadow-navy/10 sm:p-6 ${className}`}
    >
      <Quote
        className="absolute right-5 top-5 h-8 w-8 text-brand/15 transition-colors group-hover:text-brand/30"
        aria-hidden
      />
      <blockquote className="flex-1 pr-8 text-sm leading-relaxed text-navy/85 sm:text-base">
        “{review.quote}”
      </blockquote>
      <figcaption className="mt-5 flex items-center gap-3 border-t border-border pt-4">
        <span className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full bg-tint text-sm font-bold text-brand ring-2 ring-brand/20">
          {review.name.charAt(0)}
          <SafeImage
            src={review.photo}
            alt={`Profile photo of ${review.name}`}
            width={192}
            height={192}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </span>
        <span className="min-w-0">
          <span className="block truncate text-sm font-bold text-navy">{review.name}</span>
          <span className="block text-xs text-muted-foreground">Google review</span>
        </span>
      </figcaption>
    </figure>
  );
}
