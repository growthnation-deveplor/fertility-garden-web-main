import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Plane,
  Video,
  FileText,
  Hotel,
  CheckCircle2,
  Phone,
  MessageCircle,
  ArrowRight,
  Compass,
  Calendar,
  Languages,
} from "lucide-react";
import { useBranch } from "../hooks/useBranch";
import { PageHero, SectionHeading } from "../components/Layout";

export const Route = createFileRoute("/international")({
  head: () => ({
    meta: [
      { title: "International Patients & IVF Medical Tourism — The Fertility Garden" },
      {
        name: "description",
        content:
          "Guide for patients traveling from abroad to our clinics in Bangkok or Vadodara. Online consultations, medical visa assistance, and accommodation booking.",
      },
    ],
  }),
  component: InternationalPage,
});

const travelSteps = [
  {
    icon: Video,
    title: "1. Remote Consult & Planning",
    desc: "Schedule a video consultation via Zoom or WhatsApp with our Lead Specialists. Share prior medical files and reports to determine your baseline stimulation protocol.",
  },
  {
    icon: Calendar,
    title: "2. Stimulation Prep at Home",
    desc: "Start your ovarian stimulation injections in your home country under our guidance, monitored by a local gynecologist. This minimizes your clinic visit duration.",
  },
  {
    icon: Plane,
    title: "3. Egg Retrieval (7–10 Days Travel)",
    desc: "Travel to Bangkok or Vadodara for final scans, egg retrieval, and sperm collection. Our lab processes sperm selection (IMSI/ICSI) and begins embryo culture.",
  },
  {
    icon: FileText,
    title: "4. Genetic Screening & Freeze-All",
    desc: "If running PGT-A chromosomal checks, embryos are safely vitrified (frozen) while biopsy testing occurs. This improves uterine receptivity for the future transfer.",
  },
  {
    icon: CheckCircle2,
    title: "5. Transfer Visit (3–5 Days)",
    desc: "Return to our clinic during a subsequent cycle for embryo transfer. Alternatively, select fresh transfer during your primary stay if medically suitable.",
  },
];

const medicalServices = [
  {
    title: "Visa Assistance Letters",
    desc: "We supply official clinic invitation and appointment letters necessary for securing medical visas for Thailand or India.",
    icon: FileText,
  },
  {
    title: "Airport & Transport Transfers",
    desc: "We coordinate airport pickup and drop-off, providing private transfers to your hotel or directly to our clinic.",
    icon: Plane,
  },
  {
    title: "Partner Hotel Accommodations",
    desc: "Benefit from discounted medical rates at partner hotels located within 1-2 km of our clinical facilities.",
    icon: Hotel,
  },
  {
    title: "Multilingual Coordinators",
    desc: "Our caseworkers assist you in English, Thai, Hindi, and Gujarati, ensuring clear communication at every clinical step.",
    icon: Languages,
  },
];

function InternationalPage() {
  const { details } = useBranch();

  return (
    <>
      <PageHero
        breadcrumb="International"
        title={<>International <span className="text-gradient-primary">Patients</span></>}
        subtitle={`Guidance for global and out-of-town patients traveling to our advanced genetics and IVF clinics. Currently viewing: ${details.name}.`}
      />

      {/* Intro Section */}
      <section className="py-20 bg-gradient-soft">
        <div className="container mx-auto px-5 lg:px-8 grid lg:grid-cols-2 gap-12 items-center max-w-5xl">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-primary font-bold">Global Care</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">
              IVF Medical Tourism Made <span className="text-gradient-primary">Simple & Seamless</span>
            </h2>
            <p className="mt-6 text-muted-foreground text-sm leading-relaxed font-medium">
              Every year, hundreds of hopeful parents travel across borders to seek advanced reproductive technologies. In affiliation with Bangkok Fertility Center, we offer state-of-the-art laboratory embryology, PGT genetics, and specialized male-factor selection (IMSI) at competitive pricing.
            </p>
            <p className="mt-4 text-muted-foreground text-sm leading-relaxed font-medium">
              We structure your medical travel so that you spend minimal time away from home. By coordinating monitoring scans and baseline medications locally, you only need to travel for critical clinical procedures (egg retrieval and embryo transfer).
            </p>
          </div>
          <div className="bg-card border border-border rounded-3xl p-8 shadow-soft space-y-6">
            <h3 className="text-base font-bold text-foreground flex items-center gap-2">
              <Compass className="w-5 h-5 text-primary" />
              <span>International Referral Program</span>
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed font-medium">
              Our patients benefit from referral pathways between our clinics. You can undergo initial consultations and local cycle preparation at **The Fertility Garden (Vadodara)**, and opt to travel to **Bangkok Fertility Center (Thailand)** for specialized genetic screenings or advanced embryology before returning home.
            </p>
            <div className="h-px bg-border" />
            <a
              href={details.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary font-bold text-xs hover:gap-3 transition-all"
            >
              Consult an International Coordinator <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Medical Travel Timeline */}
      <section className="py-20 lg:py-28 bg-card border-y border-border">
        <div className="container mx-auto px-5 lg:px-8">
          <SectionHeading
            eyebrow="Travel Protocol"
            title={<>Your Treatment <span className="text-gradient-primary">Journey Timeline</span></>}
            subtitle="An overview of how we coordinate your medical cycle from remote intake to successful pregnancy check."
          />

          <div className="max-w-3xl mx-auto space-y-8 relative before:absolute before:left-6 before:top-4 before:bottom-4 before:w-0.5 before:bg-primary/20">
            {travelSteps.map((step) => (
              <div key={step.title} className="flex gap-6 relative group">
                <div className="w-12 h-12 rounded-full bg-primary/10 border-2 border-primary/20 text-primary grid place-items-center shrink-0 z-10 bg-card group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-350">
                  <step.icon className="w-5 h-5" />
                </div>
                <div className="pt-2">
                  <h3 className="text-sm font-bold text-foreground">{step.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mt-1 font-medium">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Services Grid */}
      <section className="py-20 lg:py-28 bg-gradient-soft">
        <div className="container mx-auto px-5 lg:px-8">
          <SectionHeading
            eyebrow="Concierge Support"
            title={<>Coordinated Medical <span className="text-gradient-primary">Tourism Services</span></>}
            subtitle="We ensure your trip is stress-free so that you can focus entirely on your physical and emotional wellbeing."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {medicalServices.map((service) => (
              <div key={service.title} className="bg-card border border-border rounded-2xl p-6 shadow-soft hover:shadow-elevated hover:border-primary/35 transition duration-300">
                <div className="w-10 h-10 rounded-xl bg-primary/10 grid place-items-center text-primary mb-4">
                  <service.icon className="w-5 h-5" />
                </div>
                <h4 className="text-xs font-bold text-foreground uppercase tracking-wider mb-2">{service.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed font-medium">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coordinator CTA */}
      <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,oklch(0.48_0.12_210),transparent_60%)]" />
        <div className="container mx-auto px-5 lg:px-8 text-center relative z-10 space-y-4">
          <Video className="w-10 h-10 mx-auto opacity-75 mb-3 animate-pulse" />
          <h2 className="text-2xl sm:text-3xl font-bold">Book a Zoom Video Consultation</h2>
          <p className="text-xs text-primary-foreground/90 max-w-md mx-auto leading-relaxed font-semibold">
            Talk directly to our doctors from the comfort of your home. We will review scans and draft your stimulation strategy.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white text-primary px-6 py-3 text-xs font-bold hover:bg-primary-foreground transition shadow-soft"
            >
              Schedule Video Call <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={details.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/45 text-primary-foreground px-6 py-3 text-xs font-bold hover:bg-white/10 transition"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp Coordinator
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
