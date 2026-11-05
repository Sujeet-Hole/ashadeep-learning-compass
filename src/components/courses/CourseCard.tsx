// Course card shared by Home, Courses and category views.
// Every course picture is the same square size (1000x1000), so all cards line up.
// The whole card is clickable through one stretched link (no nested links); the course title
// is already printed on the picture, so the heading is kept for screen readers only.

import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SafeImage } from "@/components/SafeImage";


export function CourseCard({ course }: { course: Course }) {
  const Icon = course.icon;
  

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-brand has-[:focus-visible]:ring-offset-2">
      {/* Picture fills the whole frame: no padding or tinted margin around it */}
      <div className="p-2.5 pb-0">
        <div className={`relative aspect-square w-full overflow-hidden rounded-xl ${course.tint}`}>
          {/* Icon sits behind the picture so the card still looks finished if the picture is slow */}
          <span className="absolute inset-0 flex items-center justify-center" aria-hidden>
            <Icon className={`h-12 w-12 opacity-50 ${course.accent}`} />
          </span>
          <SafeImage
            src={course.image}
            alt={course.imageAlt}
            width={1000}
            height={1000}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          />
        </div>
      </div>

      <div className="flex flex-1 flex-col px-4 pb-4 pt-3">

        <h3 className="sr-only">{course.title}</h3>
        <p className="mt-2 line-clamp-2 text-[13px] leading-snug text-muted-foreground">
          {course.description}
        </p>

        <span className="mt-auto flex items-center justify-between pt-4 text-sm font-semibold text-brand">
          <Link
            to="/courses/$slug"
            params={{ slug: course.slug }}
            className="outline-none after:absolute after:inset-0 after:content-['']"
          >
            Explore Course
            <span className="sr-only">: {course.title}</span>
          </Link>
          <span
            aria-hidden
            className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand text-primary-foreground shadow-md transition-transform duration-200 group-hover:translate-x-0.5 group-hover:scale-105"
          >
            <ArrowRight className="h-4 w-4" />
          </span>
        </span>
      </div>
    </article>
  );
}
