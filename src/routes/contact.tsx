import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Phone,
  MessageCircle,
  MapPin,
  Send,
  Clock,
  Mail,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import leavesImg from "@/assets/leaves.png";
import { PageHero, SectionHeading } from "../components/Layout";
import { useBranch } from "../hooks/useBranch";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Book Appointment — The Fertility Garden" },
      {
        name: "description",
        content:
          "Book your IVF consultation, ask questions, or contact our coordinators. Online and in-clinic consultation bookings available.",
      },
    ],
  }),
  component: ContactPage,
});

const reasons = [
  "100% confidential and clinical care",
  "Remote video assessments (Zoom/WhatsApp)",
  "Transparent package details with no hidden fees",
  "Dedicated case coordinators for domestic & international patients",
];

function ContactPage() {
  const { details, branch } = useBranch();
  const [form, setForm] = useState({ name: "", phone: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const contactMethods = [
    {
      icon: Phone,
      label: "Phone Hotline",
      value: details.phone,
      sub: "Mon–Sat, 9 AM – 7 PM",
      href: `tel:${details.phoneRaw}`,
      color: "bg-primary/10 text-primary",
      hoverColor: "group-hover:bg-primary group-hover:text-primary-foreground",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp Chat",
      value: "Chat Instantly",
      sub: "Speak directly with a coordinator",
      href: details.whatsappUrl,
      color: "bg-accent text-accent-foreground",
      hoverColor: "group-hover:bg-primary group-hover:text-primary-foreground",
    },
    {
      icon: MapPin,
      label: "Clinic Address",
      value: details.location,
      sub: details.shortName,
      href: details.mapUrl,
      color: "bg-primary/10 text-primary",
      hoverColor: "group-hover:bg-primary group-hover:text-primary-foreground",
    },
    {
      icon: Clock,
      label: "Working Hours",
      value: "Mon – Sat",
      sub: "9:00 AM – 7:00 PM",
      href: null,
      color: "bg-secondary text-secondary-foreground",
      hoverColor: "",
    },
  ];

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) return;
    
    // Construct message to send to WhatsApp dynamically depending on the selected branch
    const text =
      `Hello, I'd like to book a consultation at the ${details.shortName} location.%0AName: ${encodeURIComponent(form.name)}` +
      `%0APhone: ${encodeURIComponent(form.phone)}` +
      (form.email ? `%0AEmail: ${encodeURIComponent(form.email)}` : "") +
      (form.subject ? `%0AService: ${encodeURIComponent(form.subject)}` : "") +
      (form.message ? `%0AMessage: ${encodeURIComponent(form.message)}` : "");
      
    const prefix = branch === "bangkok" ? "66812345678" : `91${details.phoneRaw}`;
    window.open(`https://wa.me/${prefix}?text=${text}`, "_blank");
    setSent(true);
  };

  return (
    <>
      <PageHero
        breadcrumb="Contact"
        title={<>Get in <span className="text-gradient-primary">Touch</span></>}
        subtitle={`Reach out to our coordinators. Currently viewing clinic details and contacts for: ${details.name}.`}
      />

      {/* Contact Cards */}
      <section className="py-16 bg-gradient-soft">
        <div className="container mx-auto px-5 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {contactMethods.map((method) => {
              const Inner = (
                <div className={`group flex flex-col items-center text-center p-7 bg-card border border-border rounded-2xl transition-all duration-300 hover:shadow-elevated hover:border-primary/40 hover:-translate-y-1 ${method.href ? "cursor-pointer" : ""}`}>
                  <span className={`w-14 h-14 rounded-2xl grid place-items-center mb-5 transition-all ${method.color} ${method.hoverColor}`}>
                    <method.icon className="w-7 h-7" />
                  </span>
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold mb-1">{method.label}</p>
                  <p className="font-bold text-base text-foreground leading-tight">{method.value}</p>
                  <p className="text-xs text-muted-foreground mt-1 font-medium">{method.sub}</p>
                </div>
              );
              return method.href ? (
                <a
                  key={method.label}
                  href={method.href}
                  target={method.href.startsWith("http") ? "_blank" : undefined}
                  rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                >
                  {Inner}
                </a>
              ) : (
                <div key={method.label}>{Inner}</div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <img src={leavesImg} alt="" aria-hidden className="absolute -bottom-10 -right-10 w-72 opacity-10 pointer-events-none" />
        <img src={leavesImg} alt="" aria-hidden className="absolute -top-10 -left-10 w-52 opacity-10 pointer-events-none -scale-x-100" />

        <div className="container mx-auto px-5 lg:px-8 grid lg:grid-cols-2 gap-12 items-start">

          {/* Left – Info */}
          <div>
            <SectionHeading
              eyebrow="Book a Consultation"
              title={<>Start your journey <span className="text-gradient-primary">today</span></>}
              subtitle={`Fill in the form to request an appointment. Our case coordinators at ${details.shortName} will reach out to you within 24 hours.`}
              center={false}
            />

            <div className="space-y-4 mb-10">
              {reasons.map((r) => (
                <div key={r} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-xs font-semibold text-foreground">{r}</span>
                </div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <a
              href={details.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-2xl border border-border bg-card hover:border-primary/40 hover:shadow-soft transition group mb-4"
            >
              <span className="w-12 h-12 rounded-xl bg-accent grid place-items-center group-hover:bg-primary transition">
                <MessageCircle className="w-5 h-5 text-accent-foreground group-hover:text-primary-foreground" />
              </span>
              <div>
                <p className="text-[10px] text-muted-foreground uppercase tracking-wider font-bold">WhatsApp Messenger</p>
                <p className="font-bold text-base text-foreground mt-0.5">Chat instantly with clinic team</p>
              </div>
              <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary ml-auto transition" />
            </a>

            <a
              href={`tel:${details.phoneRaw}`}
              className="flex items-center gap-4 p-5 rounded-2xl border border-border bg-card hover:border-primary/40 hover:shadow-soft transition group"
            >
              <span className="w-12 h-12 rounded-xl bg-primary/10 grid place-items-center group-hover:bg-primary transition">
                <Phone className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
              </span>
              <div>
                <p className="text-[10px] text-muted-foreground uppercase tracking-wider font-bold">Call Clinic Direct</p>
                <p className="font-bold text-base text-foreground mt-0.5">{details.phone}</p>
              </div>
              <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary ml-auto transition" />
            </a>
          </div>

          {/* Right – Form */}
          <div className="bg-card rounded-3xl border border-border p-8 sm:p-10 shadow-elevated">
            <h3 className="font-display text-xl font-bold text-foreground">Send an Inquiry</h3>
            <p className="text-xs text-muted-foreground mt-1 mb-8">
              Share your details below. You will be redirected to WhatsApp to submit instantly.
            </p>

            {sent ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 rounded-full bg-primary/10 grid place-items-center mx-auto mb-5">
                  <CheckCircle2 className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-lg font-bold">Message Ready to Send!</h4>
                <p className="text-muted-foreground mt-2 text-xs font-semibold">
                  You have been redirected to WhatsApp. If the tab did not open automatically, please click below.
                </p>
                <button
                  onClick={() => { setSent(false); setForm({ name: "", phone: "", email: "", subject: "", message: "" }); }}
                  className="mt-6 text-primary text-xs font-bold hover:underline"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground block mb-1.5">
                      Full Name <span className="text-destructive">*</span>
                    </label>
                    <input
                      id="name"
                      required
                      maxLength={100}
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full rounded-xl border border-border bg-background px-4 py-3 text-xs outline-none focus:border-primary transition font-medium"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground block mb-1.5">
                      Phone Number <span className="text-destructive">*</span>
                    </label>
                    <input
                      id="phone"
                      required
                      type="tel"
                      maxLength={15}
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full rounded-xl border border-border bg-background px-4 py-3 text-xs outline-none focus:border-primary transition font-medium"
                      placeholder="e.g. +91 98000 00000"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground block mb-1.5">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    maxLength={200}
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-xs outline-none focus:border-primary transition font-medium"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground block mb-1.5">
                    Treatment / Procedure Interested In
                  </label>
                  <select
                    id="subject"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-xs outline-none focus:border-primary transition font-bold"
                  >
                    <option value="">Select a treatment...</option>
                    <option>In Vitro Fertilisation (IVF)</option>
                    <option>Intracytoplasmic Sperm Injection (ICSI)</option>
                    <option>IMSI Selected Sperm Microinjection</option>
                    <option>Intrauterine Insemination (IUI)</option>
                    <option>Egg Donation Program</option>
                    <option>Egg or Embryo Freezing</option>
                    <option>Preimplantation Genetic Testing (PGD/PGT-A)</option>
                    <option>General Inquiry / consultation booking</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground block mb-1.5">
                    Message / Medical History Summary
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    maxLength={1000}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-xs outline-none focus:border-primary transition resize-none font-medium"
                    placeholder="Tell us a bit about your situation, previous cycles, or questions..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-4 text-xs font-bold hover:opacity-90 transition shadow-soft cursor-pointer"
                >
                  <Send className="w-4 h-4" /> Submit Inquiry
                </button>
                <p className="text-[10px] text-muted-foreground text-center font-medium">
                  By clicking submit, your form inquiry is formatted and loaded into WhatsApp for instant clinic messaging.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="pb-20">
        <div className="container mx-auto px-5 lg:px-8">
          <div className="rounded-3xl overflow-hidden border border-border shadow-soft bg-gradient-hero h-64 flex items-center justify-center relative">
            <img src={leavesImg} alt="" aria-hidden className="absolute right-0 top-0 w-40 opacity-10 pointer-events-none" />
            <div className="text-center relative">
              <MapPin className="w-10 h-10 text-primary mx-auto mb-3" />
              <p className="font-bold text-lg text-foreground">{details.name}</p>
              <p className="text-xs text-muted-foreground mt-1 max-w-sm mx-auto leading-relaxed">{details.fullAddress}</p>
              <a
                href={details.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-xs font-bold hover:opacity-90 transition"
              >
                Open in Google Maps <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
