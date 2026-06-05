import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ShieldCheck,
  HeartHandshake,
  Users,
  Sparkles,
  Award,
  Heart,
  Leaf,
  CheckCircle2,
  ArrowRight,
  Phone,
  MessageCircle,
  FlaskConical,
} from "lucide-react";
import consultationImg from "@/assets/consultation.jpg";
import parenthoodImg from "@/assets/parenthood.jpg";
import leavesImg from "@/assets/leaves.png";
import { PageHero, SectionHeading } from "../components/Layout";
import { useBranch } from "../hooks/useBranch";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Our Clinics — The Fertility Garden" },
      {
        name: "description",
        content:
          "Learn about our clinical staff, state-of-the-art IVF embryology laboratories, and our 10+ year history of reproductive assistance.",
      },
    ],
  }),
  component: AboutPage,
});

const values = [
  {
    icon: Heart,
    title: "Compassionate Care",
    desc: "We treat every patient with empathy, warmth and genuine care, because fertility journeys are deeply personal.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted & Confidential",
    desc: "Your privacy and trust are paramount. All consultations are completely confidential and judgment-free.",
  },
  {
    icon: Sparkles,
    title: "Personalized Approach",
    desc: "No two journeys are alike. We create individualized plans based on your unique situation and needs.",
  },
  {
    icon: Users,
    title: "Couple-Centered",
    desc: "We support both partners throughout the process, ensuring decisions are made together with clarity.",
  },
  {
    icon: HeartHandshake,
    title: "Ongoing Support",
    desc: "Our support doesn't end after a consultation. We're with you at every milestone of your journey.",
  },
  {
    icon: Award,
    title: "Expert Guidance",
    desc: "With 10+ years of experience, we provide evidence-based, expert fertility consultancy you can rely on.",
  },
];

const milestones = [
  { year: "2013", event: "Founded The Fertility Garden with a focus on couple support and IUI protocols" },
  { year: "2016", event: "Partnered with Bangkok Fertility Center to introduce advanced genetics (PGD/PGS)" },
  { year: "2019", event: "Upgraded our embryology laboratories with ISO certified cleanroom facilities" },
  { year: "2022", event: "Opened direct referral channels for international medical travel between branches" },
  { year: "2025", event: "Crossed 500+ successful pregnancies guided across both branches" },
];

function AboutPage() {
  const { details } = useBranch();
  
  return (
    <>
      <PageHero
        breadcrumb="About Us"
        title={<>About <span className="text-gradient-primary">The Fertility Garden</span></>}
        subtitle={`A premier reproductive group offering advanced clinical fertility solutions. Currently viewing the ${details.name}.`}
      />

      {/* Mission Section */}
      <section className="py-20 lg:py-28 bg-gradient-soft">
        <div className="container mx-auto px-5 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
          <div className="relative">
            <img
              src={consultationImg}
              alt="Fertility consultation session"
              loading="lazy"
              className="rounded-[2rem] shadow-elevated w-full object-cover h-[420px] lg:h-[520px]"
            />
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground rounded-2xl px-6 py-5 shadow-elevated hidden sm:block">
              <p className="font-display text-3xl font-extrabold">10+</p>
              <p className="text-xs opacity-90 font-bold uppercase tracking-wider">Years of trusted guidance</p>
            </div>
            <img
              src={leavesImg}
              alt=""
              aria-hidden
              className="absolute -top-8 -left-8 w-32 opacity-40 float-slow pointer-events-none"
            />
          </div>
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-primary font-bold">Our Philosophy</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold leading-tight">
              Guiding You Towards the <span className="text-gradient-primary">Joy of Parenthood</span>
            </h2>
            <p className="mt-6 text-muted-foreground text-sm leading-relaxed font-medium">
              At our clinic, we recognize that infertility is both a medical challenge and an emotional crossroads. In partnership with Bangkok Fertility Center, we combine advanced genetic screening techniques, state-of-the-art embryology labs, and highly personalized clinical protocols to give you the highest chance of a healthy pregnancy.
            </p>
            <p className="mt-4 text-muted-foreground text-sm leading-relaxed font-medium">
              Our mission is to replace anxiety with clarity and detail. We provide transparent fee guides, realistic success statistics, and ongoing couple counseling. Whether you are consulting remotely or visiting us in person, we are committed to providing the same standard of clinical care.
            </p>
            <div className="mt-8 space-y-3 font-semibold text-xs text-foreground">
              {[
                "Advanced genetic testing & embryo selection (PGT-A/PGT-M)",
                "ISO certified class-10,000 cleanrooms and air filters",
                "Personalized treatment protocols for PCOS and low reserve",
                "Fully confidential clinical consultations and counseling",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Facilities & Equipment Section */}
      <section className="py-20 lg:py-28 bg-card border-y border-border">
        <div className="container mx-auto px-5 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs uppercase tracking-[0.2em] text-primary font-bold">Our Laboratory</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold">State-of-the-Art Embryology Infrastructure</h2>
            <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
              We believe a clinic's success is defined by its laboratory quality. Our facilities operate under strict medical standards.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "ISO Cleanrooms",
                desc: "Equipped with positive air pressure, HEPA filtration systems, and strict environmental control to protect embryos from VOCs and pollutants.",
                icon: FlaskConical
              },
              {
                title: "Micro-manipulators",
                desc: "High-magnification microscopes for IMSI and ICSI, allowing our embryologists to select and inject sperm with maximum accuracy.",
                icon: ShieldCheck
              },
              {
                title: "Vitrification Tanks",
                desc: "Cryopreservation systems utilizing rapid liquid nitrogen cooling for safe, long-term preservation of eggs, sperm, and embryos.",
                icon: Sparkles
              }
            ].map((facility) => (
              <div key={facility.title} className="p-6 rounded-2xl border border-border bg-background/50 shadow-soft">
                <div className="w-10 h-10 rounded-xl bg-primary/10 grid place-items-center text-primary mb-4">
                  <facility.icon className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-foreground mb-2">{facility.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{facility.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-5 lg:px-8">
          <SectionHeading
            eyebrow="Our Values"
            title={<>What drives <span className="text-gradient-primary">everything we do</span></>}
            subtitle="Our core values shape every clinical decision, every consultation, and every moment of patient care we provide."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <div
                key={v.title}
                className="group bg-card border border-border rounded-2xl p-7 hover:-translate-y-1 hover:shadow-elevated hover:border-primary/40 transition-all duration-300 reveal"
                style={{ animationDelay: `${i * 0.07}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 grid place-items-center group-hover:bg-primary transition">
                  <v.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                </div>
                <h3 className="mt-5 text-lg font-bold">{v.title}</h3>
                <p className="mt-2 text-muted-foreground text-xs leading-relaxed font-medium">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey / Timeline */}
      <section className="py-20 lg:py-28 bg-gradient-soft relative overflow-hidden">
        <img src={leavesImg} alt="" aria-hidden className="absolute right-0 top-0 w-64 opacity-10 pointer-events-none" />
        <div className="container mx-auto px-5 lg:px-8">
          <SectionHeading
            eyebrow="Our Story"
            title={<>A decade of <span className="text-gradient-primary">dedication</span></>}
            subtitle="How we grew from a local consultancy to a clinical partner of international stature."
          />
          <div className="max-w-2xl mx-auto">
            {milestones.map((m, i) => (
              <div key={m.year} className="flex gap-6 mb-8 last:mb-0 group">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 border-2 border-primary/30 grid place-items-center group-hover:bg-primary group-hover:border-primary transition shrink-0">
                    <Leaf className="w-5 h-5 text-primary group-hover:text-primary-foreground transition" />
                  </div>
                  {i < milestones.length - 1 && (
                    <div className="w-0.5 flex-1 bg-gradient-to-b from-primary/30 to-transparent mt-2" />
                  )}
                </div>
                <div className="pb-8 last:pb-0">
                  <span className="text-xs font-bold text-primary uppercase tracking-widest">{m.year}</span>
                  <p className="mt-1 font-bold text-foreground text-sm">{m.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-5 lg:px-8">
          <SectionHeading
            eyebrow="Our Specialists"
            title={<>The clinical experts <span className="text-gradient-primary">behind your journey</span></>}
            subtitle={`Meet our experienced team of doctors, embryologists and clinical counselors at the ${details.shortName} location.`}
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {details.doctors.map((member) => (
              <div key={member.name} className="group bg-card border border-border rounded-2xl p-8 text-center hover:shadow-elevated hover:border-primary/40 transition">
                <div className="w-24 h-24 rounded-full bg-primary/10 border-4 border-primary/20 grid place-items-center mx-auto text-primary font-display text-2xl font-bold group-hover:bg-primary group-hover:text-primary-foreground transition">
                  {member.initials}
                </div>
                <h3 className="mt-5 font-bold text-lg">{member.name}</h3>
                <p className="text-primary text-xs font-bold mt-1">{member.role}</p>
                <p className="text-muted-foreground text-[11px] font-medium mt-2">{member.exp}</p>
                <p className="text-muted-foreground text-xs leading-relaxed mt-4 pt-4 border-t border-border/50">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Image CTA */}
      <section className="py-20 lg:py-28 bg-gradient-soft relative">
        <div className="container mx-auto px-5 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-primary font-bold">Start Today</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold leading-tight">
              Ready to begin your <span className="text-gradient-primary">parenthood journey?</span>
            </h2>
            <p className="mt-5 text-muted-foreground text-sm leading-relaxed font-medium">
              We invite you to book an initial assessment. Our specialists will review your clinical history and suggest a tailored stimulation or genetic monitoring plan.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3.5 text-sm font-bold hover:opacity-90 transition shadow-soft"
              >
                Book Consultation <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={`tel:${details.phoneRaw}`}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card text-foreground px-6 py-3.5 text-sm font-bold hover:border-primary hover:text-primary transition shadow-soft"
              >
                <Phone className="w-4 h-4" /> {details.phone}
              </a>
            </div>
          </div>
          <div className="relative">
            <img
              src={parenthoodImg}
              alt="Happy parents holding baby"
              loading="lazy"
              className="rounded-[2rem] shadow-elevated w-full object-cover h-[380px]"
            />
          </div>
        </div>
      </section>
    </>
  );
}
