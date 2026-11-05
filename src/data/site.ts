// Central site content: contact details, navigation, images, gallery and testimonials.
// All photography is real (the institute's own photos), bundled locally.

import {
  Award,
  BadgeCheck,
  HeartHandshake,
  Laptop,
  Target,
  Users,
  type LucideIcon,
} from "lucide-react";
// Real photos of the institute (shop front, classroom, lab, team). Crops are 4:3 for the gallery grid.
import heroBanner from "@/assets/real/hero-banner.jpg";
import heroClassroom from "@/assets/real/hero-classroom.jpg";
import teachStudents from "@/assets/real/teach-students.jpg";
import galleryClassroomStudents from "@/assets/real/gallery-classroom-students.jpg";
import typingWide from "@/assets/real/typing-wide.jpg";
import galleryTyping from "@/assets/real/gallery-typing.jpg";
import typingFull from "@/assets/real/typing-full.jpg";
import storefrontPoster from "@/assets/real/storefront-poster.jpg";
import galleryEntrance from "@/assets/real/gallery-entrance.jpg";
import storefrontFull from "@/assets/real/storefront-full.jpg";
import teamWide from "@/assets/real/team-wide.jpg";
import teamCelebration from "@/assets/real/team-celebration.jpg";
import labWorkstations from "@/assets/real/lab-workstations.jpg";
import founderPhoto from "@/assets/real/founder.jpg";
// Profile photos of the Google reviewers (cropped from their public review screenshots).
import avatarAnup from "@/assets/reviews/anup-jadhav.jpg";
import avatarNandini from "@/assets/reviews/nandini-valanju.jpg";
import avatarSayali from "@/assets/reviews/sayali-gore.jpg";
import avatarAarti from "@/assets/reviews/aarti-gavali.jpg";
import avatarShankar from "@/assets/reviews/shankar-roge.jpg";
import avatarKetaki from "@/assets/reviews/ketaki-sawant.jpg";
import avatarShrenik from "@/assets/reviews/shrenik-jagdev.jpg";
import avatarTrupti from "@/assets/reviews/londhe-trupti.jpg";

export const SITE_NAME = "Ashadeep Computer Institute";
export const TAGLINE = "Learn Today. Build Your Future.";

/** Google rating of the institute, shown in the hero and on the testimonials sections. */
export const GOOGLE_RATING = { score: "4.9", outOf: "5" };

export const CONTACT = {
  address:
    "Shop No. 06, Hit Niketan Co-operative Housing Society, near Jaoli Bank, Kokan Nagar, Bhandup West, Mumbai, Maharashtra",
  /** Shorter form of `address` for the footer and FAQs. */
  addressShort: "Shop No. 06, Hit Niketan CHS, Kokan Nagar, Bhandup West, Mumbai",
  /** Mobile / WhatsApp number printed on the institute signboard. */
  phoneDisplay: "+91 98701 43014",
  phoneHref: "tel:+919870143014",
  /** Landline printed on the signboard. */
  landlineDisplay: "022-25941650",
  landlineHref: "tel:+912225941650",
  email: "info@ashadeepinstitute.in",
  emailHref: "mailto:info@ashadeepinstitute.in",
  hours: "Mon – Sat: 9:00 AM – 8:00 PM",
  whatsapp: "https://wa.me/919870143014",
  /** Pre-filled message used by the floating WhatsApp button. */
  whatsappFloat:
    "https://wa.me/919870143014?text=Hello%20Ashadeep%20Computer%20Institute%2C%20I%20would%20like%20to%20know%20more%20about%20your%20courses.",
  instagram: "https://www.instagram.com/ashadeep_computer_institute",
  facebook: "https://www.facebook.com/share/1HtMUmQAyg/",
  /** Google Maps listing (short link) opened by "Open in Google Maps" / "Get directions". */
  mapLink: "https://maps.app.goo.gl/qpbTHvfdP53AHyBx7",
  /** Embedded map for the exact Google Maps listing of the institute. */
  mapEmbed:
    "https://www.google.com/maps?q=Ashadeep+Computer+Institute,+Hit+Niketan+Co-operative+Housing+Society,+Kokan+Nagar,+Bhandup+West,+Mumbai+400078&z=17&output=embed",
};

/** Route paths used across the site (kept as a union so <Link> type-checks). */
export type AppRoute =
  "/" | "/about" | "/courses" | "/mkcl" | "/gallery" | "/testimonials" | "/contact";

export const NAV_LINKS: { label: string; to: AppRoute }[] = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Courses", to: "/courses" },
  { label: "MKCL", to: "/mkcl" },
  { label: "Gallery", to: "/gallery" },
  { label: "Testimonials", to: "/testimonials" },
  { label: "Contact", to: "/contact" },
];

export const IMAGES = {
  /** Wide banner: student at a laptop, navy space on the left for the headline (home hero). */
  hero: heroBanner,
  /** Students practising on lab computers (home page, beside the intro). */
  collaboration: typingWide,
  /** Students at their workstations (About page, "How We Teach"). */
  teaching: teachStudents,
  /** Team and students together in the lab (About page story). */
  aboutClassroom: teamWide,
  /** Admission poster: GCC-TBC typing + MS-CIT, with address and phone (MKCL page). */
  ceremony: storefrontPoster,
  /** Team celebration in the lab (footer CTA background). */
  ctaBackground: teamCelebration,
  /** Founder portrait (About page). */
  founder: founderPhoto,
};

/* ---------------------------------- Founder --------------------------------- */

/** Founder details for the About page. */
export const FOUNDER: {
  name: string;
  role: string;
  photo: string;
  quote: string;
  bio: string[];
  highlights: { value: string; label: string }[];
} = {
  name: "Sujal Hole",
  role: "Founder, Ashadeep Computer Institute",
  photo: IMAGES.founder,
  quote: "The right skills open doors to new opportunities.",
  bio: [
    "For the past 15 years, Ashadeep Computer Institute has helped students and aspiring professionals in Bhandup West, Mumbai build practical, career-oriented computer skills.",
    "Our founder started the institute with a simple belief: the right skills open doors to new opportunities, and learning should be accessible, structured and supportive. As an official MKCL partner, the institute continues to bring that vision to every batch.",
  ],
  highlights: [
    { value: "MKCL", label: "Official partner" },
    { value: "Bhandup", label: "Mumbai" },
  ],
};

/* ---------------------------------- Gallery --------------------------------- */

export type GalleryCategory = "Classroom" | "Students" | "Activities" | "Institute";

export interface GalleryPhoto {
  /** 4:3 crop shown in the grid. */
  src: string;
  /** Uncropped version shown in the lightbox (defaults to `src`). */
  full?: string;
  alt: string;
  category: GalleryCategory;
  /** Show the whole picture (no cropping) inside the 4:3 frame, e.g. for posters. */
  contain?: boolean;
}

export const GALLERY_FILTERS = ["All", "Classroom", "Students", "Activities", "Institute"] as const;

export const GALLERY: GalleryPhoto[] = [
  {
    src: galleryClassroomStudents,
    full: heroClassroom,
    alt: "Students working at computers in the Ashadeep Computer Institute lab",
    category: "Classroom",
  },
  {
    src: galleryEntrance,
    full: storefrontFull,
    alt: "Entrance of Ashadeep Computer Institute with MS-CIT and typing admission posters",
    category: "Institute",
  },
  {
    src: galleryTyping,
    full: typingFull,
    alt: "Students practising typing on lab computers",
    category: "Students",
  },
  {
    src: teamCelebration,
    alt: "Team and students celebrating a birthday together in the computer lab",
    category: "Activities",
  },
  {
    src: labWorkstations,
    alt: "Row of computer workstations in the Ashadeep computer lab",
    category: "Classroom",
  },
  {
    src: storefrontPoster,
    alt: "Ashadeep Computer Institute admission poster for GCC-TBC typing and MS-CIT courses",
    category: "Institute",
    contain: true,
  },
];

/* -------------------------------- Testimonials ------------------------------- */

export interface Testimonial {
  name: string;
  quote: string;
  photo: string;
}

/** Real Google reviews (reviewers with a profile photo and a written comment). */
export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Anup Jadhav",
    quote: "Best class for learning Computer courses with great facilities and best teaching staff.",
    photo: avatarAnup,
  },
  {
    name: "Nandini Valanju",
    quote: "I'll suggest everyone to join this computer institute as it has many courses.",
    photo: avatarNandini,
  },
  {
    name: "Sayali Gore",
    quote: "This institute helped me gain more knowledge.",
    photo: avatarSayali,
  },
  {
    name: "Aarti Gavali",
    quote: "The best way to learn is through personal attention.",
    photo: avatarAarti,
  },
  {
    name: "Shankar Roge",
    quote: "Best practice is personal attention.",
    photo: avatarShankar,
  },
  {
    name: "Ketaki Sawant",
    quote: "Good teaching.",
    photo: avatarKetaki,
  },
  {
    name: "Shrenik Jagdev",
    quote: "Nice class and good teaching.",
    photo: avatarShrenik,
  },
  {
    name: "Londhe Trupti",
    quote: "Good.",
    photo: avatarTrupti,
  },
];

/* ------------------------- Shared "why us" and process ------------------------- */

/** Strengths already stated on the About page, reused on the Home page. */
export const WHY_US: { icon: LucideIcon; label: string }[] = [
  { icon: Award, label: "15 Years of Experience" },
  { icon: BadgeCheck, label: "Official MKCL Partnership" },
  { icon: Users, label: "Expert Teachers and Trainers" },
  { icon: Laptop, label: "Practical Skill-Based Learning" },
  { icon: Target, label: "Career-Oriented Training Programs" },
  { icon: HeartHandshake, label: "Supportive Learning Environment" },
];

/** How a learner gets started, following the site's own enquiry flow. */
export const GETTING_STARTED: { title: string; text: string }[] = [
  { title: "Explore courses", text: "Browse by category and read what each course covers." },
  {
    title: "Send an enquiry",
    text: "Use the enquiry form, call or WhatsApp us, or visit the institute.",
  },
  { title: "Talk to our team", text: "We contact you with the course details." },
  { title: "Start learning", text: "Build practical skills with guidance from our teachers." },
];
