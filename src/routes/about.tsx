// About Us page: story with classroom photo, mission and approach, stats, what we offer,
// why choose us, who we teach and a closing call-to-action.
// Only facts already present in the project are used; see CONTENT_REVIEW.md for open questions.

import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  BookOpen,
  GraduationCap,
  Laptop,
  Quote,
  Target,
  ThumbsUp,
  Users,
  type LucideIcon,
} from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CtaBand } from "@/components/CtaBand";
import { CATEGORIES_IN_USE, COURSES } from "@/data/courses";
import { FOUNDER, IMAGES, WHY_US } from "@/data/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Ashadeep Computer Institute" },
      {
        name: "description",
        content:
          "Empowering students through computer education for 15 years. 5000+ students trained, official MKCL partner in Bhandup West, Mumbai.",
      },
      { property: "og:title", content: "About Us — Ashadeep Computer Institute" },
      {
        property: "og:description",
        content:
          "Empowering students through computer education for 15 years in Bhandup West, Mumbai.",
      },
      { property: "og:url", content: "/about" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const STATS: { icon: LucideIcon; value: string; label: string }[] = [
  { icon: GraduationCap, value: "5000+", label: "Students Trained" },
  { icon: Award, value: "15+", label: "Years of Experience" },
  { icon: BookOpen, value: String(COURSES.length), label: "Courses Available" },
  { icon: ThumbsUp, value: "95%", label: "Student Satisfaction" },
];

/** Learner groups named across the course pages. */
const WHO_WE_TEACH = [...new Set(COURSES.flatMap((c) => c.who))].filter(
  (w) => !w.toLowerCase().startsWith("anyone"),
);

function AboutPage() {
  return (
    <>
      <PageHero title="About Us" crumbs={[{ label: "Home", to: "/" }, { label: "About Us" }]} />

      {/* ---- Story ---- */}
      <section className="container-site section-y">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <Reveal direction="left">
            <img
              src={IMAGES.aboutClassroom}
              alt="Team and students together in the Ashadeep Computer Institute computer lab"
              loading="lazy"
              width={1920}
              height={1080}
              className="aspect-video w-full rounded-3xl object-cover shadow-xl shadow-navy/10"
            />
          </Reveal>
          <Reveal direction="right" delay={100}>
            <h2 className="section-title">
              Empowering Students Through Computer Education for{" "}
              <span className="text-brand">15 Years</span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              At Ashadeep Computer Institute, we believe that the right skills can open doors to new
              opportunities. For the past 15 years, we have been helping students and aspiring
              professionals strengthen their computer knowledge and develop practical,
              career-oriented skills.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
              We are based in Bhandup West, Mumbai, and are an official partner of MKCL (Maharashtra
              Knowledge Corporation Limited).
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---- Founder ---- */}
      <section
        aria-labelledby="founder-title"
        className="relative overflow-hidden bg-navy text-white"
      >
        {/* Decorative background: soft glows and a dotted grid */}
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-brand/25 blur-3xl" />
          <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-brand-glow/15 blur-3xl" />
          <div className="absolute inset-0 opacity-[0.07] [background-image:radial-gradient(circle,#fff_1px,transparent_1px)] [background-size:24px_24px]" />
        </div>

        <div className="container-site section-y relative grid items-center gap-14 py-14 sm:py-16 lg:grid-cols-[minmax(0,26rem)_minmax(0,1fr)] lg:gap-20 lg:py-20">
          <Reveal direction="left">
            <div className="relative mx-auto w-full max-w-sm pb-6">
              {/* Offset outline frame */}
              <div
                aria-hidden
                className="absolute -right-4 top-4 h-[calc(100%-1.5rem)] w-full rounded-[2rem] border-2 border-brand-glow/50"
              />
              <div className="relative overflow-hidden rounded-[2rem] bg-white shadow-2xl shadow-black/40">
                <img
                  src={FOUNDER.photo}
                  alt={`${FOUNDER.name}, founder of Ashadeep Computer Institute`}
                  width={1000}
                  height={1000}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover object-top"
                />
              </div>
              {/* Floating name badge */}
              <div className="anim-float absolute bottom-0 left-4 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 text-navy shadow-2xl shadow-black/30 sm:-left-6">
                <span className="icon-circle h-10 w-10 bg-brand text-primary-foreground">
                  <GraduationCap className="h-5 w-5" aria-hidden />
                </span>
                <span className="leading-tight">
                  <span className="block text-sm font-extrabold">{FOUNDER.name}</span>
                  <span className="block text-xs font-medium text-navy/60">Founder</span>
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal direction="right" delay={100}>
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand-glow">
              <span className="h-px w-8 bg-brand-glow" aria-hidden />
              Meet Our Founder
            </p>
            <h2
              id="founder-title"
              className="mt-3 font-extrabold tracking-tight [font-size:clamp(2rem,1.4rem+2.6vw,3.25rem)] leading-[1.1]"
            >
              {FOUNDER.name}
            </h2>
            <p className="mt-2 text-sm font-semibold text-brand-glow sm:text-base">{FOUNDER.role}</p>

            <blockquote className="relative mt-6 rounded-2xl border-l-4 border-brand-glow bg-white/5 px-5 py-4 backdrop-blur-sm sm:px-6">
              <Quote className="absolute right-4 top-3 h-7 w-7 text-brand-glow/30" aria-hidden />
              <p className="pr-8 text-lg font-semibold italic leading-snug text-white sm:text-xl">
                “{FOUNDER.quote}”
              </p>
            </blockquote>

            {FOUNDER.bio.map((para) => (
              <p key={para} className="mt-4 text-sm leading-relaxed text-white/80 sm:text-base">
                {para}
              </p>
            ))}

            <dl className="mt-7 grid max-w-sm grid-cols-2 gap-3">
              {FOUNDER.highlights.map((h, i) => (
                <Reveal key={h.label} direction="up" delay={200 + i * 90}>
                  <div className="rounded-2xl border border-white/10 bg-white/10 p-3 text-center sm:p-4">
                    <dd className="text-xl font-extrabold text-brand-glow sm:text-2xl">{h.value}</dd>
                    <dt className="mt-0.5 text-[11px] font-medium text-white/70 sm:text-xs">{h.label}</dt>
                  </div>
                </Reveal>
              ))}
            </dl>

            <Link to="/contact" search={{ course: "" }} className="btn-primary mt-8">
              Talk to Our Team
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ---- Mission + approach ---- */}
      <section aria-label="Our mission and approach" className="bg-muted">
        <div className="container-site section-y grid gap-5 md:grid-cols-2">
          <Reveal direction="up" className="h-full">
            <div className="h-full rounded-3xl bg-white p-6 shadow-sm sm:p-8">
              <span className="icon-circle bg-tint text-brand">
                <Target className="h-5 w-5" aria-hidden />
              </span>
              <h2 className="subsection-title mt-4">Our Mission</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                To help students build practical computer skills for education, employment and
                career growth, and to make learning accessible and structured.
              </p>
            </div>
          </Reveal>
          <Reveal direction="up" delay={80} className="h-full">
            <div className="h-full rounded-3xl bg-white p-6 shadow-sm sm:p-8">
              <img
                src={IMAGES.teaching}
                alt="Students working at their computers during a practical class"
                width={1200}
                height={900}
                loading="lazy"
                className="mb-5 aspect-[16/9] w-full rounded-2xl object-cover"
              />
              <span className="icon-circle bg-tint text-brand">
                <Laptop className="h-5 w-5" aria-hidden />
              </span>
              <h2 className="subsection-title mt-4">How We Teach</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                Our teaching is practical and skill-based. Expert teachers and trainers guide
                learners in a supportive environment, with a focus on career-oriented training
                programs.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---- Stats ---- */}
      <section className="container-site section-y" aria-label="Institute highlights">
        <Reveal direction="zoom">
          <dl className="grid grid-cols-2 gap-5 rounded-3xl bg-tint p-5 sm:p-8 lg:grid-cols-4">
            {STATS.map((stat) => (
              <div key={stat.label} className="flex items-center gap-3 sm:gap-4">
                <span className="icon-circle bg-white text-brand shadow-sm">
                  <stat.icon className="h-5 w-5" aria-hidden />
                </span>
                <div className="min-w-0">
                  <dd className="text-xl font-extrabold text-brand sm:text-3xl">{stat.value}</dd>
                  <dt className="text-xs font-medium text-navy/80 sm:text-sm">{stat.label}</dt>
                </div>
              </div>
            ))}
          </dl>
        </Reveal>
      </section>

      {/* ---- What we offer ---- */}
      <section aria-labelledby="offer-title" className="container-site pb-10 sm:pb-12">
        <Reveal direction="up">
          <h2 id="offer-title" className="section-title">
            What We <span className="text-brand">Offer</span>
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-muted-foreground sm:text-base">
            {COURSES.length} courses across {CATEGORIES_IN_USE.length} areas, plus official MKCL
            programs.
          </p>
        </Reveal>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2">
          {CATEGORIES_IN_USE.map((cat, i) => (
            <li key={cat.id}>
              <Reveal delay={i * 60} direction="up" className="h-full">
                <Link
                  to="/courses"
                  search={{ category: cat.id }}
                  className="group flex h-full flex-col rounded-3xl border border-border bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
                >
                  <span className="icon-circle bg-tint text-brand">
                    <cat.icon className="h-5 w-5" aria-hidden />
                  </span>
                  <span className="mt-3 text-base font-bold text-navy">{cat.label}</span>
                  <span className="mt-1 text-sm text-muted-foreground">
                    {COURSES.filter((c) => c.category === cat.id)
                      .map((c) => c.title)
                      .join(", ")}
                  </span>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
        <Link
          to="/mkcl"
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand hover:underline"
        >
          Learn about our MKCL partnership
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </section>

      {/* ---- Why choose us ---- */}
      <section aria-labelledby="why-title" className="bg-tint">
        <div className="container-site section-y">
          <Reveal direction="up">
            <h2 id="why-title" className="section-title">
              Why Choose Us?
            </h2>
          </Reveal>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_US.map((item, i) => (
              <li key={item.label}>
                <Reveal delay={i * 50} direction="up" className="h-full">
                  <div className="flex h-full items-center gap-4 rounded-2xl bg-white p-4 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg sm:p-5">
                    <span className="icon-circle bg-tint text-brand">
                      <item.icon className="h-5 w-5" aria-hidden />
                    </span>
                    <p className="text-sm font-semibold text-navy sm:text-base">{item.label}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---- Who we teach ---- */}
      <section aria-labelledby="who-title" className="container-site section-y">
        <Reveal direction="up">
          <h2 id="who-title" className="section-title flex items-center gap-3">
            <Users className="h-6 w-6 shrink-0 text-brand" aria-hidden />
            Who We Teach
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-muted-foreground sm:text-base">
            Our courses are designed for these learners, and for anyone interested in building a new
            skill.
          </p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {WHO_WE_TEACH.map((who) => (
              <li key={who} className="chip !px-4 !py-1.5 !text-sm">
                {who}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <CtaBand
        title={
          <>
            Learn with us in <span className="text-brand-glow">Bhandup, Mumbai.</span>
          </>
        }
        text="Visit the institute, call us or send an enquiry, and we will guide you to the right course."
      />
    </>
  );
}
