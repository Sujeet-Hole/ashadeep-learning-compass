// Course catalogue: one shared template drives the course list and detail pages.
//
// HOW TO EXTEND: every field marked optional (duration, mode, level, prerequisites,
// certification, tools, practical, faqs) is hidden on the website until you fill it in,
// so nothing is ever shown as a placeholder fact. See CONTENT_REVIEW.md for the list of
// facts we still need from the institute.

import { Code2, Megaphone, Monitor, Palette, type LucideIcon } from "lucide-react";
import { CONTACT } from "@/data/site";

// Course tiles: every image is 1000x1000 (same size and shape) so cards line up everywhere.
import tileDigitalMarketing from "@/assets/courses/tile-digital-marketing.webp";
import tileGraphicDesigning from "@/assets/courses/tile-graphic-designing.webp";
import tileFullStack from "@/assets/courses/tile-full-stack-programming.webp";
import tileMsCit from "@/assets/courses/tile-ms-cit.webp";

/** Course groupings used by the filter tabs. Only groups that contain courses are shown. */
export type CategoryId = "it" | "design-marketing";

export interface CourseCategory {
  id: CategoryId;
  label: string;
  blurb: string;
  icon: LucideIcon;
}

export const CATEGORIES: CourseCategory[] = [
  {
    id: "it",
    label: "IT & Programming",
    blurb: "Web programming and essential computer skills",
    icon: Code2,
  },
  {
    id: "design-marketing",
    label: "Design & Marketing",
    blurb: "Creative design and online business growth",
    icon: Palette,
  },
];

export interface Faq {
  q: string;
  a: string;
}

export interface Course {
  slug: string;
  title: string;
  /** One-line description shown on the course list card. */
  description: string;
  /** Subtitle shown on the detail page hero card. */
  tagline: string;
  /** Design-system classes for the pastel card background + icon color. */
  tint: string;
  accent: string;
  icon: LucideIcon;
  learn: string[];
  who: string[];
  image: string;
  imageAlt: string;
  category: CategoryId;
  /** Shown in the "Featured" row on the Home and Courses pages. */
  featured?: boolean;
  /** Longer description for the course detail page (summarises the topics below). */
  overview: string;
  /** Short skill tags, derived from the topics in `learn`. */
  skills: string[];
  /** What a learner can do after the course, drawn from the topics in `learn`. */
  outcomes: string[];
  /** Software named in the course topics. Hidden when not set. */
  tools?: string[];
  /** Practical work named in the course topics (projects, labs, case studies). Hidden when not set. */
  practical?: string[];
  /** Extra course-specific FAQs, shown before the standard ones. */
  faqs?: Faq[];
  /* ---- Facts we have not been given yet: hidden on the site until filled in ---- */
  duration?: string;
  mode?: string;
  level?: string;
  prerequisites?: string;
  certification?: string;
}

export const COURSES: Course[] = [
  {
    slug: "graphic-designing",
    title: "Graphic Designing",
    description: "Creative design skills for branding and digital media",
    tagline: "Turn creative ideas into professional designs for print and digital media.",
    tint: "bg-tint-orange",
    accent: "text-accent-orange",
    icon: Palette,
    learn: [
      "Design Principles & Color Theory",
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Logo & Branding Design",
      "Social Media Creative Design",
      "Typography & Layout Design",
      "Portfolio-Building Projects",
    ],
    who: [
      "Students",
      "Creative Enthusiasts",
      "Job Seekers",
      "Freelancers",
      "Anyone interested in design",
    ],
    image: tileGraphicDesigning,
    imageAlt:
      "Graphic Designing course illustration: design monitor with a pen tool and colour palette",
    category: "design-marketing",
    featured: true,
    overview:
      "Learn the principles behind good design and apply them in professional design software. Topics include color theory, Adobe Photoshop, Adobe Illustrator, logo and branding design, social media creatives, and typography and layout, finishing with portfolio-building projects.",
    skills: [
      "Design Principles",
      "Color Theory",
      "Photoshop",
      "Illustrator",
      "Logo & Branding",
      "Typography & Layout",
    ],
    outcomes: [
      "Turn creative ideas into designs for print and digital media",
      "Design logos and social media creatives",
      "Build a portfolio through course projects",
    ],
    tools: ["Adobe Photoshop", "Adobe Illustrator"],
    practical: ["Portfolio-Building Projects"],
    faqs: [
      {
        q: "Which design software is covered?",
        a: "The course topics include Adobe Photoshop and Adobe Illustrator.",
      },
    ],
  },
  {
    slug: "full-stack-programming",
    title: "Full Stack Programming",
    description: "Build complete websites and web apps, from front end to back end",
    tagline:
      "Learn to build complete web applications: the screens users see, the server behind them and the database that stores the data.",
    tint: "bg-tint-blue",
    accent: "text-accent-blue",
    icon: Code2,
    learn: [
      "HTML, CSS & JavaScript Fundamentals",
      "Responsive Web Design",
      "Front-End Development with React",
      "Back-End Development with Node.js",
      "Databases & Data Handling",
      "REST APIs & Authentication",
      "Git & GitHub",
      "Real-World Projects & Deployment",
    ],
    who: [
      "Students",
      "Job Seekers",
      "Working Professionals",
      "Freelancers",
      "Anyone interested in programming",
    ],
    image: tileFullStack,
    imageAlt:
      "Full Stack Programming course illustration: browser window, code terminal, database and API badge",
    category: "it",
    featured: true,
    overview:
      "Learn how a complete web application is built. The course starts with HTML, CSS and JavaScript, moves to responsive design and front-end development with React, then covers back-end development with Node.js, databases, REST APIs and authentication, and finishes with Git, GitHub and real-world projects that you deploy online.",
    skills: [
      "HTML & CSS",
      "JavaScript",
      "React",
      "Node.js",
      "Databases",
      "REST APIs",
      "Git & GitHub",
    ],
    outcomes: [
      "Build responsive websites from scratch",
      "Create front-end and back-end parts of a web application",
      "Connect an app to a database through APIs",
      "Deploy real-world projects online",
    ],
    tools: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Git & GitHub"],
    practical: ["Real-World Projects & Deployment"],
    faqs: [
      {
        q: "Do I need coding experience before joining?",
        a: "The course begins with HTML, CSS and JavaScript fundamentals. Please contact us and our team will advise whether your current background is a good fit.",
      },
    ],
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    description: "SEO, Social Media, Google Ads, Meta Ads and more",
    tagline: "Learn how businesses grow online with practical digital marketing skills.",
    tint: "bg-tint-pink",
    accent: "text-accent-pink",
    icon: Megaphone,
    learn: [
      "SEO (Search Engine Optimization)",
      "Social Media Marketing",
      "Google Ads",
      "Meta Ads (Facebook & Instagram)",
      "Content Strategy",
      "Digital Marketing Tools",
      "Real-world Projects",
    ],
    who: [
      "Students",
      "Job Seekers",
      "Business Owners",
      "Working Professionals",
      "Anyone interested in digital marketing",
    ],
    image: tileDigitalMarketing,
    imageAlt:
      "Digital Marketing course illustration: laptop with a megaphone, social media icons and a growth chart",
    category: "design-marketing",
    featured: true,
    overview:
      "This course shows how businesses reach and grow an audience online. You work through search engine optimization, social media marketing, Google Ads and Meta Ads (Facebook and Instagram), and learn how a content strategy ties them together, using common digital marketing tools and real-world projects.",
    skills: [
      "SEO",
      "Social Media Marketing",
      "Google Ads",
      "Meta Ads",
      "Content Strategy",
      "Marketing Tools",
    ],
    outcomes: [
      "Understand how businesses grow online",
      "Work with SEO, social media, Google Ads and Meta Ads",
      "Plan content with a clear content strategy",
    ],
    tools: ["Google Ads", "Meta Ads (Facebook & Instagram)"],
    practical: ["Real-world Projects"],
    faqs: [
      {
        q: "Which advertising platforms does the course cover?",
        a: "The topics include Google Ads and Meta Ads (Facebook & Instagram), alongside SEO and social media marketing.",
      },
    ],
  },
  {
    slug: "ms-cit",
    title: "MS-CIT",
    description: "Official MKCL course: computer basics, MS Office and internet skills",
    tagline:
      "Build essential computer skills for study, work and everyday life with the MKCL MS-CIT course.",
    tint: "bg-tint-yellow",
    accent: "text-accent-yellow",
    icon: Monitor,
    learn: [
      "Computer Fundamentals",
      "Windows & File Management",
      "MS Word",
      "MS Excel",
      "MS PowerPoint",
      "Internet & Email",
      "Digital Awareness & Safety",
    ],
    who: [
      "Students",
      "Job Seekers",
      "Working Professionals",
      "Homemakers & Beginners",
      "Anyone who wants to learn computers",
    ],
    image: tileMsCit,
    imageAlt:
      "MS-CIT course illustration: computer showing Word, Excel and PowerPoint icons with a certificate",
    category: "it",
    featured: true,
    overview:
      "MS-CIT is an MKCL course that takes you from computer basics to confident everyday use. It covers computer fundamentals, Windows and file management, MS Word, MS Excel and MS PowerPoint, using the internet and email, and staying aware and safe online. Ashadeep Computer Institute is an official MKCL partner.",
    skills: [
      "Computer Basics",
      "MS Word",
      "MS Excel",
      "MS PowerPoint",
      "Internet & Email",
    ],
    outcomes: [
      "Use a computer confidently for study and work",
      "Create documents, spreadsheets and presentations",
      "Browse the internet and use email safely",
    ],
    tools: ["MS Word", "MS Excel", "MS PowerPoint"],
    certification:
      "MS-CIT is an MKCL course, and Ashadeep Computer Institute is an official MKCL partner. Please contact us for certificate details.",
  },
];

export const getCourse = (slug: string) => COURSES.find((c) => c.slug === slug);

export const getCategory = (id: CategoryId) => CATEGORIES.find((c) => c.id === id);

/** Categories that actually contain at least one course, in display order. */
export const CATEGORIES_IN_USE = CATEGORIES.filter((cat) =>
  COURSES.some((c) => c.category === cat.id),
);

export const FEATURED_COURSES = COURSES.filter((c) => c.featured);

/* --------------------------- Derived course content --------------------------- */

const joinList = (items: string[]) =>
  items.length < 2
    ? (items[0] ?? "")
    : `${items.slice(0, -1).join(", ")} and ${items[items.length - 1]}`;

/**
 * FAQs for one course: its own questions first, then standard ones. Answers only restate
 * course data or point the learner to the team; unknown facts are never guessed.
 */
export function getCourseFaqs(course: Course): Faq[] {
  const { title } = course;
  return [
    ...(course.faqs ?? []),
    ...(course.who.length > 0
      ? [
          {
            q: `Who can join ${title}?`,
            a: `The course is designed for ${joinList(course.who)}.`,
          },
        ]
      : []),
    {
      q: `What are the prerequisites for ${title}?`,
      a:
        course.prerequisites ??
        `Please contact us to confirm any prerequisites for ${title}. Our team will guide you based on your background.`,
    },
    {
      q: "Are practical projects included?",
      a: course.practical?.length
        ? `Yes. The course includes ${joinList(course.practical)}.`
        : `Our teaching is practical and skill-based. Please contact us for details of the hands-on work in ${title}.`,
    },
    {
      q: `How long is ${title}, and what are the fees?`,
      a: course.duration
        ? `${title} runs for ${course.duration}. Please contact us for current fees and batch timings.`
        : `Please contact us for the current duration, batch timings and fees for ${title}.`,
    },
    {
      q: "Is a certificate available?",
      a:
        course.certification ??
        `Ashadeep Computer Institute is an official MKCL partner. Please contact us to confirm the certification that applies to ${title}.`,
    },
    {
      q: "How can I enroll?",
      a: `Send an enquiry using the Enquire Now form, call us on ${CONTACT.phoneDisplay}, or visit us at ${CONTACT.addressShort} (${CONTACT.hours}). Our team will contact you with the course details.`,
    },
  ];
}
