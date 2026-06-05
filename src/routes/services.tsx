import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Stethoscope,
  HeartHandshake,
  Users,
  Sparkles,
  Baby,
  HeartPulse,
  ClipboardList,
  ArrowRight,
  CheckCircle2,
  Phone,
  MessageCircle,
} from "lucide-react";
import leavesImg from "@/assets/leaves.png";
import consultationImg from "@/assets/consultation.jpg";
import { PageHero, SectionHeading } from "../components/Layout";
import { useBranch } from "../hooks/useBranch";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Our Services — The Fertility Garden" },
      {
        name: "description",
        content:
          "Explore all fertility services at our clinics — including IVF consultancy, fertility guidance, couple support, and diagnostic plans.",
      },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    id: "ivf",
    icon: Stethoscope,
    title: "IVF Consultancy",
    tagline: "Expert guidance at every step",
    desc: "Our IVF consultancy service provides comprehensive, expert guidance through every stage of your IVF journey. From initial evaluation and treatment selection to understanding procedures and navigating clinics — we're your trusted partner.",
    points: [
      "Initial fertility assessment review",
      "Explanation of IVF procedures in simple language",
      "Help choosing the right IVF clinic and schedule",
      "Guidance on medication protocols",
      "Ongoing support through each stimulation cycle",
    ],
  },
  {
    id: "fertility",
    icon: HeartPulse,
    title: "Fertility Guidance",
    tagline: "Personalized assessments & planning",
    desc: "We provide personalized fertility guidance including assessment of your fertility reports, understanding test results, and creating an informed plan tailored to your unique biological situation and goals.",
    points: [
      "Fertility report interpretation",
      "Understanding ovarian reserve and semen tests",
      "Ovulation tracking and timing guidance",
      "Lifestyle, supplement, and nutrition advice",
      "Pre-conception planning roadmap",
    ],
  },
  {
    id: "consultation",
    icon: ClipboardList,
    title: "Personalized Consultation",
    tagline: "One-on-one sessions tailored to you",
    desc: "Our one-on-one consultation sessions are fully tailored to your individual needs. Whether you're just starting out or have been through previous treatments, we provide a safe, private space to discuss your journey openly.",
    points: [
      "Private, confidential clinical sessions",
      "In-person and online consultations available",
      "Review of previous treatment failures",
      "Second opinion on IVF and genetics options",
      "Clear medical action plans going forward",
    ],
  },
  {
    id: "counseling",
    icon: HeartHandshake,
    title: "Couple Support & Counseling",
    tagline: "Strength together through every stage",
    desc: "Fertility challenges can strain even the strongest relationships. Our couple counseling services help you both communicate better, process emotions together, and stay united and positive throughout the journey.",
    points: [
      "Joint counseling sessions for couples",
      "Emotional resilience and coping strategies",
      "Communication techniques during stress",
      "Managing treatment-related anxiety",
      "Support for partners of IVF patients",
    ],
  },
  {
    id: "treatment",
    icon: Sparkles,
    title: "Treatment Guidance",
    tagline: "Clarity on your treatment pathway",
    desc: "Understanding your treatment options can be overwhelming. We provide clear, unbiased guidance on IVF, IUI, ICSI, egg donation, and other fertility treatment pathways — helping you make confident, informed decisions.",
    points: [
      "Comparative options: IVF vs IUI vs ICSI",
      "Understanding success rate statistics",
      "Guidance on donor eggs, donor sperm, and freezing",
      "Support for recovery after a failed cycle",
      "Planning next steps with complete clarity",
    ],
  },
  {
    id: "planning",
    icon: Baby,
    title: "Family Planning Consultation",
    tagline: "Holistic planning for parenthood",
    desc: "For couples who want to plan their family with confidence, our holistic family planning service covers everything from fertility preservation to timing, genetics, and long-term parenthood planning.",
    points: [
      "Fertility preservation counseling",
      "Egg and sperm freezing guidance",
      "Preimplantation genetic testing (PGT) advice",
      "Age-related fertility advice",
      "Long-term family planning strategy",
    ],
  },
];

const processSteps = [
  { n: "01", title: "Book Your Consultation", desc: "Contact us via phone, WhatsApp or our online form to schedule your first session." },
  { n: "02", title: "Initial Assessment", desc: "We review your fertility history, reports, and goals in a compassionate, private setting." },
  { n: "03", title: "Personalized Plan", desc: "We craft a clear, individualized fertility roadmap tailored specifically to you." },
  { n: "04", title: "Ongoing Guidance", desc: "We walk beside you at every step with continued support, clarity and care." },
];

function ServicesPage() {
  const { details } = useBranch();
  
  return (
    <>
      <PageHero
        breadcrumb="Services"
        title={<>Our <span className="text-gradient-primary">Fertility Services</span></>}
        subtitle={`Comprehensive IVF clinical support and expert guidance, tailored specifically to your branch location: ${details.name}.`}
      />

      {/* Services Grid */}
      <section className="py-20 lg:py-28 relative">
        <img src={leavesImg} alt="" aria-hidden className="absolute top-20 right-0 w-56 opacity-10 float-slow pointer-events-none" />
        <div className="container mx-auto px-5 lg:px-8">
          <SectionHeading
            eyebrow="What We Offer"
            title={<>Care that nurtures every <span className="text-gradient-primary">step</span></>}
            subtitle="From clinical assessments to genetics consultation and counseling — we offer end-to-end guidance."
          />
          <div className="space-y-8">
            {services.map((s, i) => (
              <div
                key={s.id}
                id={s.id}
                className={`group grid lg:grid-cols-2 gap-10 items-center bg-card border border-border rounded-3xl p-8 lg:p-12 hover:shadow-elevated hover:border-primary/30 transition-all duration-300 reveal ${i % 2 === 1 ? "lg:grid-flow-dense" : ""}`}
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className={i % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 grid place-items-center group-hover:bg-primary transition mb-6">
                    <s.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition" />
                  </div>
                  <span className="text-xs uppercase tracking-widest text-primary font-bold">{s.tagline}</span>
                  <h2 className="mt-2 text-2xl sm:text-3xl font-bold">{s.title}</h2>
                  <p className="mt-4 text-muted-foreground text-xs leading-relaxed font-medium">{s.desc}</p>
                  <Link
                    to="/contact"
                    className="mt-6 inline-flex items-center gap-2 text-primary font-bold text-xs hover:gap-3 transition-all"
                  >
                    Inquire about this service <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className={`space-y-3 ${i % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                  <p className="text-xs font-bold text-foreground mb-4 uppercase tracking-wider">What's included:</p>
                  {s.points.map((point) => (
                    <div key={point} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-xs text-muted-foreground font-medium">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 lg:py-28 bg-gradient-soft relative overflow-hidden">
        <img src={leavesImg} alt="" aria-hidden className="absolute left-0 bottom-0 w-48 opacity-10 pointer-events-none" />
        <div className="container mx-auto px-5 lg:px-8">
          <SectionHeading
            eyebrow="How It Works"
            title={<>Your journey <span className="text-gradient-primary">in 4 simple steps</span></>}
            subtitle="Getting started with your fertility assessment is straightforward. Here is the process:"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, i) => (
              <div key={step.n} className="relative group">
                <div className="bg-card border border-border rounded-2xl p-7 hover:shadow-elevated hover:border-primary/40 transition h-full">
                  <span className="font-display text-5xl text-primary/20 font-bold group-hover:text-primary/40 transition">{step.n}</span>
                  <h3 className="mt-3 font-bold text-base">{step.title}</h3>
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed font-medium">{step.desc}</p>
                </div>
                {i < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-primary/30 z-10" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20">
        <div className="container mx-auto px-5 lg:px-8">
          <div className="bg-primary rounded-3xl p-10 lg:p-16 grid lg:grid-cols-2 gap-10 items-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,oklch(0.48_0.12_210),transparent_60%)]" />
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground leading-tight">
                Ready to start your fertility journey?
              </h2>
              <p className="mt-4 text-xs text-primary-foreground/85 leading-relaxed font-medium">
                Get in touch with {details.shortName} coordinators today to schedule your remote or in-clinic review.
              </p>
            </div>
            <div className="relative z-10 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white text-primary px-7 py-4 text-sm font-bold hover:bg-primary-foreground transition shadow-elevated"
              >
                Book Consultation <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href={`tel:${details.phoneRaw}`}
                className="inline-flex items-center gap-2 rounded-full border-2 border-primary-foreground/40 text-primary-foreground px-7 py-4 text-sm font-bold hover:bg-primary-foreground/10 transition"
              >
                <Phone className="w-5 h-5" /> Call Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
