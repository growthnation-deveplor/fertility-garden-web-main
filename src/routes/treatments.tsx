import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Microscope,
  Dna,
  Heart,
  Baby,
  Snowflake,
  FlaskConical,
  CheckCircle2,
  ArrowRight,
  HelpCircle,
  Phone,
  Settings,
} from "lucide-react";
import leavesImg from "@/assets/leaves.png";
import { PageHero, SectionHeading } from "../components/Layout";
import { useBranch } from "../hooks/useBranch";

export const Route = createFileRoute("/treatments")({
  head: () => ({
    meta: [
      { title: "Fertility Treatments & Advanced Genetics — The Fertility Garden" },
      {
        name: "description",
        content:
          "Learn about our clinical treatments: IVF, ICSI, IUI, PGD/PGT-A screening, IMSI, egg donation, and vitrification cryostorage.",
      },
    ],
  }),
  component: TreatmentsPage,
});

const treatments = [
  {
    id: "ivf",
    icon: Microscope,
    title: "In Vitro Fertilisation (IVF)",
    tagline: "The most widely used assisted reproduction technology",
    desc: "IVF involves stimulating the ovaries to produce multiple eggs, retrieving them, fertilising them in a laboratory with sperm, and transferring the resulting embryo(s) back into the uterus. It is one of the most effective treatments for a wide range of fertility issues.",
    steps: [
      "Ovarian stimulation with hormonal injections",
      "Egg retrieval under light sedation",
      "Fertilisation in the laboratory",
      "Embryo culture for 3–5 days (Blastocyst stage)",
      "Embryo transfer into the uterus",
      "Pregnancy test after 2 weeks",
    ],
    suitable: "Blocked tubes, unexplained infertility, low ovarian reserve, repeated conventional cycle failures",
  },
  {
    id: "icsi",
    icon: Dna,
    title: "ICSI — Intracytoplasmic Sperm Injection",
    tagline: "Advanced fertilisation for male factor infertility",
    desc: "ICSI is a specialised form of IVF where a single selected sperm is directly injected into each mature egg. It is the recommended treatment when there are issues with sperm count, motility, or morphology, greatly increasing fertilisation rates.",
    steps: [
      "Ovarian stimulation and egg retrieval",
      "Individual sperm selection under high magnification",
      "Direct micro-injection of one sperm into the egg cytoplasm",
      "Embryo monitoring and culture",
      "Embryo transfer and progesterone support",
    ],
    suitable: "Low sperm count, poor sperm motility, high sperm DNA fragmentation, previous failed fertilisation cycles",
  },
  {
    id: "imsi",
    icon: Settings,
    title: "IMSI — Selected Sperm Microinjection",
    tagline: "Ultra-high magnification sperm selection",
    desc: "IMSI (Intracytoplasmic Morphologically Selected Sperm Injection) utilizes a powerful microscope magnifying sperm up to 6,000 times (compared to 400 times in conventional ICSI). This allows embryologists to detect structural defects in the sperm head, selecting only the healthiest sperm for injection.",
    steps: [
      "Egg retrieval process",
      "Sperm sample preparation",
      "Analysis of sperm under 6000x digital magnification",
      "Selection of sperm with optimal shape and structure",
      "Direct microinjection into the egg cytoplasm",
    ],
    suitable: "Recurrent miscarriage, severe male factor infertility, unexplained fertilisation failure, advanced paternal age",
  },
  {
    id: "iui",
    icon: Heart,
    title: "IUI — Intrauterine Insemination",
    tagline: "A simpler first-line fertility treatment",
    desc: "IUI involves placing washed, concentrated sperm directly into the uterus around the time of ovulation. It is a less invasive, more affordable first step for many couples before considering IVF.",
    steps: [
      "Monitoring ovulation with ultrasound tracking",
      "Sperm preparation and chemical washing in laboratory",
      "Catheter-guided insertion of concentrated sperm into the uterus",
      "Luteal support and pregnancy test",
    ],
    suitable: "Mild male factor, unexplained infertility, mild cervical issues, ovulation disorders",
  },
  {
    id: "egg-donation",
    icon: Baby,
    title: "Egg Donation Programs",
    tagline: "Building families with screened donors",
    desc: "Using eggs from a thoroughly screened donor, fertilised with the partner's (or donor) sperm, and transferring the resulting healthy embryos. Highly recommended for patients with low ovarian reserve or genetic anomalies.",
    steps: [
      "Donor matching, screening, and legal clearance",
      "Recipient uterine lining preparation",
      "Egg retrieval from donor and fertilisation",
      "Embryo culture and blastocyst selection",
      "Embryo transfer to the recipient's uterus",
    ],
    suitable: "Premature ovarian failure, poor egg quality, advanced maternal age, repeated IVF failures",
  },
  {
    id: "freezing",
    icon: Snowflake,
    title: "Vitrification (Egg & Embryo Freezing)",
    tagline: "Preserving your fertility for the future",
    desc: "Vitrification (flash-freezing) technology allows eggs and embryos to be frozen and stored indefinitely. This maintains the cells in a stable state with survival rates exceeding 95% upon thawing.",
    steps: [
      "Ovarian stimulation and egg retrieval",
      "Vitrification (ultra-rapid freezing) of eggs or embryos",
      "Secure storage in liquid nitrogen canisters",
      "Thawing and laboratory preparation when ready",
    ],
    suitable: "Delaying parenthood, cancer treatment preservation, storing excess viable embryos from an IVF cycle",
  },
  {
    id: "pgt",
    icon: FlaskConical,
    title: "Preimplantation Genetic Testing (PGT-A / PGT-M)",
    tagline: "Selecting the healthiest chromosomal embryos",
    desc: "PGT involves performing a minor biopsy on blastocyst embryos to test for chromosomal abnormalities (PGT-A) or specific genetic mutations (PGT-M) before implantation. This significantly reduces miscarriage risk and increases successful live births.",
    steps: [
      "IVF/ICSI cycle to develop blastocysts (Day 5/6)",
      "Safe biopsy of outer trophectoderm cells (does not harm the embryo)",
      "Cryopreservation of blastocysts while genetic testing is run",
      "Next Generation Sequencing (NGS) of chromosomes",
      "Frozen embryo transfer of selected normal embryo",
    ],
    suitable: "Recurrent pregnancy loss, advanced maternal age (35+), history of genetic disorders, repeated embryo transfer failure",
  },
];

const faqs = [
  {
    q: "How do I know which treatment is right for me?",
    a: "The right treatment depends on your age, hormone tests, semen analysis, and medical history. Our consultants will evaluate your clinical files during the initial assessment and recommend a customized treatment pathway.",
  },
  {
    q: "What is the success rate of IVF at your clinic?",
    a: "When combined with Preimplantation Genetic Testing (PGT-A), our success rates for transferring a single normal blastocyst can exceed 70-75% for younger age brackets. Success rates vary based on individual physiological conditions.",
  },
  {
    q: "How many IVF cycles might we need?",
    a: "Many couples achieve success in 1-2 cycles. However, this varies. We assist you in calculating medication, stimulation, and embryo collection expectations so that you can make informed clinical decisions.",
  },
  {
    q: "Is the egg retrieval process painful?",
    a: "No. The retrieval procedure is conducted in our clinical operations theatre under light intravenous sedation administered by a qualified anesthesiologist, meaning you will not feel any pain.",
  },
  {
    q: "Can we book virtual consultations?",
    a: "Yes! We offer comprehensive remote consultation calls via Zoom or WhatsApp for international and out-of-town patients, allowing you to discuss reports before traveling.",
  },
];

function TreatmentsPage() {
  const { details } = useBranch();
  
  return (
    <>
      <PageHero
        breadcrumb="Treatments"
        title={<>Advanced <span className="text-gradient-primary">Treatments</span></>}
        subtitle="Explore our advanced embryology procedures, genetic diagnostics, and standard fertility care options."
      />

      {/* Intro */}
      <section className="py-16 bg-gradient-soft">
        <div className="container mx-auto px-5 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-muted-foreground leading-relaxed text-sm font-medium">
              At {details.shortName}, we maintain international protocols. We walk you through every option clearly, outlining success statistics, steps, and inclusions so that you feel confident about your next clinical step.
            </p>
          </div>
        </div>
      </section>

      {/* Treatments List */}
      <section className="py-20 lg:py-28 relative">
        <img src={leavesImg} alt="" aria-hidden className="absolute top-10 right-0 w-48 opacity-10 float-slow pointer-events-none" />
        <div className="container mx-auto px-5 lg:px-8 space-y-10">
          {treatments.map((t, i) => (
            <div
              key={t.id}
              id={t.id}
              className="group bg-card border border-border rounded-3xl p-8 lg:p-12 hover:shadow-elevated hover:border-primary/30 transition-all duration-300 reveal"
              style={{ animationDelay: `${i * 0.07}s` }}
            >
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 grid place-items-center group-hover:bg-primary transition shrink-0">
                      <t.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-primary font-bold">{t.tagline}</span>
                      <h2 className="mt-1 text-2xl font-bold">{t.title}</h2>
                    </div>
                  </div>
                  <p className="mt-5 text-muted-foreground text-xs leading-relaxed font-medium">{t.desc}</p>
                  <div className="mt-4 p-4 bg-primary/5 border border-primary/15 rounded-xl">
                    <p className="text-[10px] font-bold text-primary uppercase tracking-wider mb-1">Best suited for</p>
                    <p className="text-xs text-muted-foreground font-medium">{t.suitable}</p>
                  </div>
                </div>
                <div className="lg:border-l lg:border-border/60 lg:pl-8">
                  <p className="text-xs font-bold text-foreground mb-4 uppercase tracking-wider">Treatment workflow:</p>
                  <div className="space-y-3">
                    {t.steps.map((step, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <span className="w-5 h-5 rounded-full bg-primary/10 text-primary text-[10px] grid place-items-center shrink-0 font-bold mt-0.5">
                          {idx + 1}
                        </span>
                        <span className="text-xs text-muted-foreground font-medium">{step}</span>
                      </div>
                    ))}
                  </div>
                  <Link
                    to="/contact"
                    className="mt-6 inline-flex items-center gap-2 text-primary font-bold text-xs hover:gap-3 transition-all"
                  >
                    Inquire about {t.title} <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28 bg-gradient-soft relative overflow-hidden">
        <img src={leavesImg} alt="" aria-hidden className="absolute left-0 bottom-0 w-48 opacity-10 pointer-events-none -scale-x-100" />
        <div className="container mx-auto px-5 lg:px-8">
          <SectionHeading
            eyebrow="Common Questions"
            title={<>Frequently asked <span className="text-gradient-primary">questions</span></>}
            subtitle="Understand your fertility treatment and options better with our FAQ overview."
          />
          <div className="max-w-3xl mx-auto space-y-5">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-card border border-border rounded-2xl p-6 hover:border-primary/40 hover:shadow-soft transition">
                <div className="flex items-start gap-4">
                  <HelpCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-sm text-foreground">{faq.q}</h3>
                    <p className="mt-2 text-xs text-muted-foreground leading-relaxed font-medium">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-xs text-muted-foreground mb-5 font-semibold">Have more questions about our clinic capabilities?</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-3.5 text-xs font-bold hover:opacity-90 transition shadow-soft"
              >
                Book a Consultation <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={`tel:${details.phoneRaw}`}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card text-foreground px-7 py-3.5 text-xs font-bold hover:border-primary hover:text-primary transition shadow-soft"
              >
                <Phone className="w-4 h-4" /> {details.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
