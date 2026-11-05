// Testimonials page: auto-playing featured slider, then a grid of every Google review.

import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CtaBand } from "@/components/CtaBand";
import { ReviewCard } from "@/components/ReviewCard";
import { GoogleRating } from "@/components/GoogleRating";
import { TESTIMONIALS } from "@/data/site";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Testimonials — Ashadeep Computer Institute" },
      {
        name: "description",
        content:
          "Real stories from students of Ashadeep Computer Institute in Bhandup West, Mumbai — students share their experience of learning at the institute.",
      },
      { property: "og:title", content: "What Our Students Say — Ashadeep Computer Institute" },
      {
        property: "og:description",
        content: "Real Stories. Real Progress. Hear from our students in Bhandup West, Mumbai.",
      },
      { property: "og:url", content: "/testimonials" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/testimonials" }],
  }),
  component: TestimonialsPage,
});

/** The featured slider shows reviews with a full sentence; every review is still in the grid below. */
const SLIDER_REVIEWS = TESTIMONIALS.filter((t) => t.quote.trim().split(/\s+/).length >= 5);

function TestimonialsPage() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = SLIDER_REVIEWS.length;

  // Advance the slider every 5 seconds (pauses on hover); loop back to the start.
  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % total);
    }, 5000);
    return () => clearInterval(timer);
  }, [paused, total]);

  const go = (delta: number) => setIndex((i) => (i + delta + total) % total);

  return (
    <>
      <PageHero
        title="What Our Students Say"
        subtitle="Real Stories. Real Progress."
        crumbs={[{ label: "Home", to: "/" }, { label: "Testimonials" }]}
      />

      {/* ---- Featured slider ---- */}
      <section className="container-site section-y">
        <Reveal direction="up">
          <div className="mb-8 flex justify-center">
            <GoogleRating />
          </div>
        </Reveal>
        <Reveal direction="zoom">
          <div
            className="relative mx-auto max-w-3xl"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div className="overflow-hidden rounded-3xl pt-10">
              <div
                className="flex transition-transform duration-700 ease-out"
                style={{ transform: `translateX(-${index * 100}%)` }}
              >
                {SLIDER_REVIEWS.map((t, i) => (
                  <div
                    key={t.name}
                    className="w-full shrink-0 px-1"
                    aria-hidden={i !== index}
                  >
                    <figure className="relative rounded-3xl border border-border bg-white px-6 pb-8 pt-14 text-center shadow-lg shadow-navy/5 sm:px-12">
                      <span className="absolute -top-9 left-1/2 flex h-[4.5rem] w-[4.5rem] -translate-x-1/2 items-center justify-center overflow-hidden rounded-full bg-tint text-xl font-bold text-brand ring-4 ring-white drop-shadow-lg">
                        {t.name.charAt(0)}
                        <img
                          src={t.photo}
                          alt={`Profile photo of ${t.name}`}
                          width={192}
                          height={192}
                          loading={i === 0 ? "eager" : "lazy"}
                          onError={(e) => {
                            e.currentTarget.style.display = "none";
                          }}
                          className="absolute inset-0 h-full w-full object-cover"
                        />
                      </span>
                      <Quote className="mx-auto h-7 w-7 text-brand/30" aria-hidden />
                      <blockquote className="mt-3 text-base font-medium leading-relaxed text-navy sm:text-xl">
                        “{t.quote}”
                      </blockquote>
                      <figcaption className="mt-5">
                        <p className="font-bold text-navy">{t.name}</p>
                        <p className="text-xs text-muted-foreground sm:text-sm">Google review</p>
                      </figcaption>
                    </figure>
                  </div>
                ))}
              </div>
            </div>

            {/* Arrows: sit beside the card on desktop, below it on phones */}
            <button
              type="button"
              aria-label="Previous review"
              onClick={() => go(-1)}
              className="absolute left-0 top-[58%] hidden h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-navy text-brand-glow shadow-lg transition-transform hover:scale-110 lg:inline-flex"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden />
            </button>
            <button
              type="button"
              aria-label="Next review"
              onClick={() => go(1)}
              className="absolute right-0 top-[58%] hidden h-11 w-11 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full bg-navy text-brand-glow shadow-lg transition-transform hover:scale-110 lg:inline-flex"
            >
              <ChevronRight className="h-5 w-5" aria-hidden />
            </button>
          </div>
        </Reveal>

        {/* Pagination dots */}
        <Reveal direction="up" delay={150}>
          <div className="mt-6 flex justify-center gap-2">
            {SLIDER_REVIEWS.map((t, i) => (
              <button
                key={t.name}
                type="button"
                aria-label={`Show review ${i + 1} of ${total}`}
                aria-current={i === index}
                onClick={() => setIndex(i)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  i === index ? "w-7 bg-brand" : "w-2.5 bg-navy/15 hover:bg-navy/30"
                }`}
              />
            ))}
          </div>
        </Reveal>
      </section>

      {/* ---- All reviews ---- */}
      <section aria-labelledby="all-reviews-title" className="bg-muted">
        <div className="container-site section-y">
          <Reveal direction="up">
            <h2 id="all-reviews-title" className="section-title">
              Words from <span className="text-brand">Our Learners</span>
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-muted-foreground sm:text-base">
              Reviews shared by students on Google.
            </p>
          </Reveal>
          <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <li key={t.name}>
                <Reveal
                  delay={(i % 3) * 90}
                  direction={i % 3 === 0 ? "left" : i % 3 === 2 ? "right" : "up"}
                  className="h-full"
                >
                  <ReviewCard review={t} />
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand
        title={
          <>
            Start your own <span className="text-brand-glow">success story.</span>
          </>
        }
        text="Choose a course and send an enquiry. Our team will contact you with the details."
      />
    </>
  );
}
