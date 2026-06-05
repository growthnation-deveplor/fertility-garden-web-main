import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Clock,
  Tag,
  ArrowRight,
  BookOpen,
  User,
  Calendar,
} from "lucide-react";
import leavesImg from "@/assets/leaves.png";
import heroImg from "@/assets/hero-couple.jpg";
import consultationImg from "@/assets/consultation.jpg";
import parenthoodImg from "@/assets/parenthood.jpg";
import { PageHero, SectionHeading } from "../components/Layout";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — The Fertility Garden | IVF Insights & Fertility Tips" },
      {
        name: "description",
        content:
          "Read expert articles on IVF, fertility treatments, emotional wellbeing, and parenthood from The Fertility Garden consultancy in Vadodara.",
      },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogPage,
});

const posts = [
  {
    id: 1,
    title: "Understanding Your IVF Journey: A Step-by-Step Guide",
    excerpt:
      "IVF can feel overwhelming at first. In this comprehensive guide, we break down each stage of the process — from stimulation to embryo transfer — so you know exactly what to expect.",
    category: "IVF Guide",
    readTime: "8 min read",
    date: "May 2025",
    author: "The Fertility Garden Team",
    featured: true,
    img: heroImg,
    tags: ["IVF", "Guide", "Treatment"],
  },
  {
    id: 2,
    title: "5 Ways to Support Your Partner Through IVF",
    excerpt:
      "Fertility treatment affects both partners deeply. Here are five meaningful ways to support your partner emotionally and practically during an IVF cycle.",
    category: "Couple Support",
    readTime: "5 min read",
    date: "April 2025",
    author: "The Fertility Garden Team",
    featured: false,
    img: consultationImg,
    tags: ["Support", "Couples", "Emotional Health"],
  },
  {
    id: 3,
    title: "IVF Success Rates: What the Numbers Really Mean",
    excerpt:
      "Clinics publish success rate statistics, but what do they actually tell you? We explain how to read and interpret IVF success data so you can set realistic expectations.",
    category: "IVF Guide",
    readTime: "6 min read",
    date: "March 2025",
    author: "The Fertility Garden Team",
    featured: false,
    img: parenthoodImg,
    tags: ["IVF", "Success Rates", "Data"],
  },
  {
    id: 4,
    title: "Nutrition & Lifestyle Tips to Boost Fertility Naturally",
    excerpt:
      "What you eat and how you live can meaningfully impact your fertility. Our consultants share evidence-based nutrition and lifestyle tips to optimise your fertility health.",
    category: "Wellness",
    readTime: "7 min read",
    date: "February 2025",
    author: "The Fertility Garden Team",
    featured: false,
    img: heroImg,
    tags: ["Nutrition", "Lifestyle", "Natural Fertility"],
  },
  {
    id: 5,
    title: "When to Seek Fertility Help: Signs You Shouldn't Ignore",
    excerpt:
      "Many couples wait too long before seeking advice. Learn the key signs that it may be time to consult a fertility specialist — and why early guidance matters.",
    category: "Fertility Awareness",
    readTime: "5 min read",
    date: "January 2025",
    author: "The Fertility Garden Team",
    featured: false,
    img: consultationImg,
    tags: ["Fertility", "Awareness", "Advice"],
  },
  {
    id: 6,
    title: "Egg Freezing: Everything You Need to Know in 2025",
    excerpt:
      "Egg freezing is increasingly popular for women who wish to preserve their fertility. This article covers the process, costs, success rates, and who it's right for.",
    category: "Treatments",
    readTime: "9 min read",
    date: "December 2024",
    author: "The Fertility Garden Team",
    featured: false,
    img: parenthoodImg,
    tags: ["Egg Freezing", "Preservation", "2025"],
  },
];

const categories = ["All", "IVF Guide", "Couple Support", "Wellness", "Fertility Awareness", "Treatments"];

function BlogPage() {
  const featured = posts.find((p) => p.featured);
  const others = posts.filter((p) => !p.featured);

  return (
    <>
      <PageHero
        breadcrumb="Blog"
        title={<>Fertility <span className="text-gradient-primary">Insights & Guidance</span></>}
        subtitle="Expert articles on IVF, fertility health, emotional wellbeing, and the path to parenthood — written for hopeful families."
      />

      <section className="py-20 lg:py-28 relative">
        <img src={leavesImg} alt="" aria-hidden className="absolute top-10 right-0 w-56 opacity-20 float-slow pointer-events-none" />

        <div className="container mx-auto px-5 lg:px-8">

          {/* Featured Post */}
          {featured && (
            <div className="mb-16">
              <p className="text-xs uppercase tracking-widest text-primary font-medium mb-6">Featured Article</p>
              <div className="group grid lg:grid-cols-2 gap-0 bg-card border border-border rounded-3xl overflow-hidden hover:shadow-elevated hover:border-primary/30 transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img
                    src={featured.img}
                    alt={featured.title}
                    className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1.5 rounded-full">
                    {featured.category}
                  </span>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground mb-4">
                    <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {featured.date}</span>
                    <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {featured.readTime}</span>
                    <span className="flex items-center gap-1.5"><User className="w-3.5 h-3.5" /> {featured.author}</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-semibold text-foreground leading-snug">{featured.title}</h2>
                  <p className="mt-4 text-muted-foreground leading-relaxed">{featured.excerpt}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {featured.tags.map((tag) => (
                      <span key={tag} className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button className="mt-6 inline-flex items-center gap-2 text-primary font-medium text-sm hover:gap-3 transition-all w-fit">
                    Read Article <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  cat === "All"
                    ? "bg-primary text-primary-foreground"
                    : "bg-card border border-border text-muted-foreground hover:border-primary hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Articles Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {others.map((post, i) => (
              <article
                key={post.id}
                className="group bg-card border border-border rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-elevated hover:border-primary/30 transition-all duration-300 reveal"
                style={{ animationDelay: `${i * 0.07}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.img}
                    alt={post.title}
                    loading="lazy"
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-card/90 backdrop-blur-sm text-primary text-xs font-semibold px-3 py-1 rounded-full border border-border">
                    {post.category}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                  </div>
                  <h3 className="font-semibold text-lg text-foreground leading-snug group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-3">{post.excerpt}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="text-xs bg-primary/8 text-primary px-2.5 py-1 rounded-full font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button className="mt-4 inline-flex items-center gap-1.5 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition">
                    Read more <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter CTA */}
          <div className="mt-20 bg-gradient-hero border border-border rounded-3xl p-10 lg:p-16 text-center relative overflow-hidden">
            <img src={leavesImg} alt="" aria-hidden className="absolute right-0 top-0 w-40 opacity-30 pointer-events-none" />
            <img src={leavesImg} alt="" aria-hidden className="absolute left-0 bottom-0 w-32 opacity-20 pointer-events-none -scale-x-100" />
            <div className="relative">
              <BookOpen className="w-12 h-12 text-primary mx-auto mb-5 opacity-60" />
              <h2 className="text-2xl sm:text-3xl font-semibold text-foreground">
                Get fertility insights straight to your inbox
              </h2>
              <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
                Join our newsletter for expert fertility tips, IVF updates, and heartfelt stories from our community.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 rounded-full border border-border bg-background px-5 py-3.5 text-sm outline-none focus:border-primary transition"
                />
                <button className="rounded-full bg-primary text-primary-foreground px-6 py-3.5 font-medium text-sm hover:opacity-90 transition whitespace-nowrap">
                  Subscribe
                </button>
              </div>
              <p className="mt-3 text-xs text-muted-foreground">No spam, unsubscribe any time.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
