import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Phone,
  MessageCircle,
  CalendarHeart,
  Stethoscope,
  HeartHandshake,
  Users,
  Sparkles,
  ShieldCheck,
  Baby,
  Star,
  ArrowRight,
  HeartPulse,
  ClipboardList,
  CheckCircle2,
  TrendingUp,
  Award,
  FlaskConical,
} from "lucide-react";
import heroImg from "@/assets/hero-couple.jpg";
import consultationImg from "@/assets/consultation.jpg";
import leavesImg from "@/assets/leaves.png";
import { SectionHeading } from "../components/Layout";
import { useBranch } from "../hooks/useBranch";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Fertility Garden — Advanced IVF & Genetics Clinic" },
      {
        name: "description",
        content:
          "Providing global standards in advanced IVF treatments, ICSI, genetic screening, and compassionate couple support.",
      },
    ],
  }),
  component: Index,
});

const services = [
  { icon: Stethoscope, title: "IVF Consultancy", desc: "Expert guidance through every step of your IVF journey, from evaluation to embryo transfer.", to: "/services#ivf" },
  { icon: HeartPulse, title: "Fertility Guidance", desc: "Personalized fertility assessments and informed planning tailored to your situation.", to: "/services#fertility" },
  { icon: ClipboardList, title: "Personalized Consultation", desc: "One-on-one sessions designed around your unique needs and concerns.", to: "/services#consultation" },
  { icon: HeartHandshake, title: "Couple Support & Counseling", desc: "Emotional support and counseling for couples at every stage of the journey.", to: "/services#counseling" },
  { icon: Sparkles, title: "Treatment Guidance", desc: "Clear, compassionate advice on treatment pathways and medical decisions.", to: "/treatments" },
  { icon: Baby, title: "Family Planning", desc: "Holistic planning for a confident, informed path to parenthood.", to: "/services#planning" },
];

const testimonials = [
  { q: "Very supportive and professional guidance throughout our IVF journey. The genetic testing gave us peace of mind.", a: "Priya & Rahul", city: "Mumbai, India" },
  { q: "Helped us understand the right treatment path with complete transparency. We are forever grateful.", a: "Somsak & Naree", city: "Bangkok, Thailand" },
  { q: "Professional clinical care and compassionate psychological counseling at every difficult step.", a: "Neha & Aditya", city: "Gujarat, India" },
];

function Hero() {
  const { details } = useBranch();
  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      <img
        src={leavesImg}
        alt=""
        aria-hidden
        className="pointer-events-none absolute -top-10 -left-16 w-72 opacity-20 float-slow"
      />
      <img
        src={leavesImg}
        alt=""
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-0 w-80 opacity-15 -scale-x-100 float-slow"
      />
      <div className="container mx-auto px-5 lg:px-8 py-16 lg:py-28 grid lg:grid-cols-2 gap-12 items-center relative">
        <div className="reveal">
          <span className="inline-flex items-center gap-2 rounded-full bg-card/85 border border-border px-4 py-1.5 text-xs font-semibold text-primary shadow-soft">
            <Sparkles className="w-3.5 h-3.5" /> Clinical Excellence & Genetic Care
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] text-foreground">
            The Fertility{" "}
            <span className="text-gradient-primary">Garden</span>
            <span className="block mt-3 text-lg sm:text-xl text-muted-foreground font-sans font-medium tracking-wide">
              In affiliation with Bangkok Fertility Center
            </span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed font-medium">
            Guiding you towards the joy of parenthood with global standards in IVF treatment, 
            genetic diagnosis, and compassionate guidance customized for your journey.
          </p>

          {/* Location Badge */}
          <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-secondary/80 border border-secondary text-secondary-foreground text-xs font-bold">
            <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
            Active Location: {details.name}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`tel:${details.phoneRaw}`}
              className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3.5 text-sm font-bold shadow-elevated hover:-translate-y-0.5 transition cursor-pointer"
            >
              <Phone className="w-4 h-4" /> Call Clinic
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-card border border-border text-foreground px-6 py-3.5 text-sm font-bold hover:border-primary hover:text-primary transition shadow-soft"
            >
              <CalendarHeart className="w-4 h-4 text-primary" /> Book Consultation
            </Link>
            <a
              href={details.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card text-foreground px-6 py-3.5 text-sm font-bold hover:border-primary hover:text-primary transition shadow-soft"
            >
              <MessageCircle className="w-4 h-4 text-green-500" /> WhatsApp
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-6 text-xs font-bold text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-primary" /> Free Initial Consultation
            </span>
            <span className="inline-flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-primary" /> 100% Confidential Care
            </span>
            <span className="inline-flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-primary" /> International Coordination
            </span>
          </div>
        </div>

        <div className="reveal reveal-delay-2 relative">
          <div className="absolute -inset-6 bg-primary/10 blur-3xl rounded-[3rem]" />
          <div className="relative rounded-[2rem] overflow-hidden shadow-elevated border border-card/40">
            <img
              src={heroImg}
              alt="Hopeful couple expecting their first baby"
              width={1664}
              height={1216}
              className="w-full h-[440px] sm:h-[540px] object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl p-5 shadow-elevated border border-border w-60 hidden sm:block">
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-primary/10 grid place-items-center">
                <FlaskConical className="w-5 h-5 text-primary" />
              </span>
              <div>
                <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider">Lab Accreditation</p>
                <p className="text-xs font-bold text-foreground mt-0.5">ISO Certified ISO 9001 / Cleanrooms</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const { branch } = useBranch();
  
  // Custom success rates and statistics based on branch selection
  const branchStats = branch === "bangkok" ? [
    { value: "78%", label: "IVF Success Rate (PGT-A)", icon: TrendingUp },
    { value: "15+", label: "Years of Experience", icon: Award },
    { value: "1,200+", label: "International Families", icon: Users },
    { value: "100%", label: "Advanced Embryology Lab", icon: ShieldCheck },
  ] : [
    { value: "72%", label: "IVF Success Rate", icon: TrendingUp },
    { value: "10+", label: "Years of Experience", icon: Award },
    { value: "500+", label: "Gujarat Families Guided", icon: Users },
    { value: "100%", label: "Confidential Consultation", icon: ShieldCheck },
  ];

  return (
    <section className="py-12 bg-primary">
      <div className="container mx-auto px-5 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {branchStats.map((s) => (
          <div key={s.label} className="text-primary-foreground">
            <s.icon className="w-7 h-7 mx-auto opacity-70 mb-2" />
            <p className="text-3xl sm:text-4xl font-extrabold">{s.value}</p>
            <p className="text-xs font-bold uppercase tracking-wider opacity-80 mt-1">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function ServicesPreview() {
  return (
    <section className="py-20 lg:py-28 relative">
      <img src={leavesImg} alt="" aria-hidden className="absolute top-10 right-0 w-56 opacity-10 float-slow pointer-events-none" />
      <div className="container mx-auto px-5 lg:px-8">
        <SectionHeading
          eyebrow="Our Services"
          title={<>Care that nurtures every <span className="text-gradient-primary">step</span></>}
          subtitle="Comprehensive reproductive assistance and clinical guidance designed around your journey, your pace, and your peace of mind."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <Link
              key={s.title}
              to={s.to as any}
              className="group relative bg-card border border-border rounded-2xl p-7 hover:-translate-y-1 hover:shadow-elevated hover:border-primary/40 transition-all duration-300 reveal"
              style={{ animationDelay: `${i * 0.06}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 grid place-items-center group-hover:bg-primary group-hover:text-primary-foreground transition">
                <s.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
              </div>
              <h3 className="mt-5 text-lg font-bold">{s.title}</h3>
              <p className="mt-2 text-muted-foreground text-xs leading-relaxed font-medium">{s.desc}</p>
              <div className="mt-5 flex items-center gap-2 text-primary text-xs font-bold opacity-0 group-hover:opacity-100 transition">
                Learn more <ArrowRight className="w-4 h-4" />
              </div>
              <div className="mt-3 h-px bg-gradient-to-r from-primary/30 to-transparent" />
            </Link>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 rounded-full border border-primary text-primary px-8 py-3.5 text-sm font-bold hover:bg-primary hover:text-primary-foreground transition"
          >
            View All Services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function AboutPreview() {
  const { details } = useBranch();
  return (
    <section className="relative py-20 lg:py-28 bg-gradient-soft">
      <div className="container mx-auto px-5 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
        <div className="relative">
          <img
            src={consultationImg}
            alt="Fertility specialist consulting with a couple"
            loading="lazy"
            width={1280}
            height={960}
            className="rounded-[2rem] shadow-elevated w-full object-cover h-[420px] lg:h-[520px]"
          />
          <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground rounded-2xl px-6 py-5 shadow-elevated hidden sm:block">
            <p className="text-3xl font-extrabold">ISO 9001</p>
            <p className="text-[10px] font-bold uppercase tracking-wider opacity-90 mt-0.5">Certified Cleanroom Lab</p>
          </div>
        </div>
        <div>
          <span className="text-xs uppercase tracking-[0.2em] text-primary font-bold">About Our Center</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Welcome to <span className="text-gradient-primary">{details.shortName}</span>
          </h2>
          <p className="mt-6 text-muted-foreground text-sm leading-relaxed font-medium">
            At our center, we combine state-of-the-art laboratory embryology with compassionate, couple-focused care. We understand that the fertility journey is deeply emotional and complex, which is why we guide you with transparent pricing, evidence-based practices, and highly skilled specialists.
          </p>
          <p className="mt-4 text-muted-foreground text-sm leading-relaxed font-medium">
            Equipped with advanced IVF equipment from leading global partners, our laboratories run active preimplantation genetic diagnosis (PGD/PGT-A) protocols, improving success rates for older maternal age and recurrent IVF cycles.
          </p>

          <h3 className="mt-8 text-xs font-bold uppercase tracking-wider text-foreground">Featured Medical Specialists ({details.shortName}):</h3>
          <div className="mt-4 grid sm:grid-cols-2 gap-4">
            {details.doctors.slice(0, 2).map((doctor) => (
              <div
                key={doctor.name}
                className="flex items-center gap-3 bg-card border border-border rounded-xl px-4 py-3 hover:border-primary/40 transition shadow-soft"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 grid place-items-center text-primary font-bold text-xs shrink-0">
                  {doctor.initials}
                </div>
                <div>
                  <span className="text-xs font-bold block text-foreground leading-tight">{doctor.name}</span>
                  <span className="text-[10px] text-muted-foreground leading-tight mt-0.5 block">{doctor.role}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3.5 text-sm font-bold hover:opacity-90 transition shadow-soft"
            >
              Meet The Full Team <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/pricing"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card text-foreground px-6 py-3.5 text-sm font-bold hover:border-primary hover:text-primary transition shadow-soft"
            >
              Check Cost Calculator
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialsPreview() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-soft relative">
      <div className="container mx-auto px-5 lg:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title={<>Stories of <span className="text-gradient-primary">hope & gratitude</span></>}
          subtitle="Real testimonials from couples who successfully became parents through our advanced clinical treatments."
        />
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <figure
              key={i}
              className="bg-card rounded-2xl p-7 border border-border shadow-soft hover:-translate-y-1 hover:shadow-elevated transition flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-1 text-yellow-500">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-4 text-sm font-medium italic leading-relaxed text-foreground">
                  "{t.q}"
                </blockquote>
              </div>
              <figcaption className="mt-6 flex items-center gap-3 pt-4 border-t border-border/60">
                <span className="w-9 h-9 rounded-full bg-primary/10 grid place-items-center text-primary font-bold text-xs">
                  {t.a.split(" ")[0][0]}
                </span>
                <div>
                  <span className="text-xs font-bold block text-foreground">{t.a}</span>
                  <span className="text-[10px] text-muted-foreground block mt-0.5">{t.city}</span>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  const { details } = useBranch();
  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,oklch(0.48_0.12_210),transparent_60%)]" />
      <div className="container mx-auto px-5 lg:px-8 text-center relative z-10">
        <p className="text-primary-foreground/80 text-xs uppercase tracking-widest font-bold mb-4">Start Your Fertility Assessment</p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight">
          Begin Your Journey to <br className="hidden sm:block" /> Parenthood Today
        </h2>
        <p className="mt-5 text-sm text-primary-foreground/85 max-w-xl mx-auto leading-relaxed font-medium">
          Whether you want a remote video consultation or wish to visit our physical facility, we are here to support you with 100% confidentiality.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-white text-primary px-8 py-4 text-sm font-bold hover:bg-primary-foreground transition shadow-elevated"
          >
            <CalendarHeart className="w-5 h-5" /> Book Consultation
          </Link>
          <a
            href={details.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border-2 border-primary-foreground/40 text-primary-foreground px-8 py-4 text-sm font-bold hover:bg-primary-foreground/10 transition"
          >
            <MessageCircle className="w-5 h-5 text-green-300" /> WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}

function Index() {
  return (
    <>
      <Hero />
      <Stats />
      <ServicesPreview />
      <AboutPreview />
      <TestimonialsPreview />
      <CTA />
    </>
  );
}

