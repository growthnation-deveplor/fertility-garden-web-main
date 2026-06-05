import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import {
  Phone,
  MessageCircle,
  MapPin,
  Leaf,
  Menu,
  X,
  ChevronDown,
  Globe,
  Check,
} from "lucide-react";
import { useBranch, type Branch } from "../hooks/useBranch";

export const PHONE = "9879441983";
export const WHATSAPP = `https://wa.me/91${PHONE}?text=${encodeURIComponent(
  "Hello, I'd like to book an IVF consultation at The Fertility Garden."
)}`;

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  {
    label: "Services",
    to: "/services",
    children: [
      { label: "All Services", to: "/services" },
      { label: "IVF Consultancy", to: "/services#ivf" },
      { label: "Fertility Guidance", to: "/services#fertility" },
      { label: "Couple Counseling", to: "/services#counseling" },
    ],
  },
  { label: "Treatments", to: "/treatments" },
  { label: "Pricing & Packages", to: "/pricing" },
  { label: "International Patients", to: "/international" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);
  const [showBranches, setShowBranches] = useState(false);
  const router = useRouterState();
  const currentPath = router.location.pathname;
  const { branch, setBranch, details } = useBranch();

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/90 border-b border-border/60 shadow-soft">
      <div className="container mx-auto px-5 lg:px-8 h-18 flex items-center justify-between gap-4 py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 shrink-0">
          <span className="w-10 h-10 rounded-full bg-primary/10 grid place-items-center border border-primary/20">
            <Leaf className="w-5 h-5 text-primary" />
          </span>
          <span className="font-display text-xl text-foreground leading-tight">
            The Fertility <span className="text-primary">Garden</span>
            <span className="block text-[10px] text-muted-foreground font-sans font-medium tracking-wider uppercase mt-0.5">
              {details.id === "bangkok" ? "Bangkok HQ" : "Vadodara Branch"}
            </span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) =>
            link.children ? (
              <div
                key={link.to}
                className="relative"
                onMouseEnter={() => setDropdown(link.to)}
                onMouseLeave={() => setDropdown(null)}
              >
                <button
                  className={`flex items-center gap-1 px-3 py-2 rounded-full text-xs font-semibold tracking-wide transition-colors ${
                    currentPath.startsWith(link.to)
                      ? "text-primary bg-primary/8"
                      : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                  }`}
                >
                  {link.label}
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>
                {dropdown === link.to && (
                  <div className="absolute top-full left-0 mt-1 bg-card border border-border rounded-2xl shadow-elevated py-2 w-52 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                    {link.children.map((child) => (
                      <Link
                        key={child.to}
                        to={child.to as any}
                        className="block px-5 py-2.5 text-xs font-medium text-muted-foreground hover:text-primary hover:bg-primary/5 transition-colors"
                        onClick={() => setDropdown(null)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.to}
                to={link.to as any}
                className={`px-3 py-2 rounded-full text-xs font-semibold tracking-wide transition-colors ${
                  currentPath === link.to
                    ? "text-primary bg-primary/8"
                    : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* CTAs & Branch Switcher */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          {/* Branch Switcher Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowBranches(!showBranches)}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full border border-border bg-card text-xs font-semibold hover:border-primary/50 transition cursor-pointer shadow-soft"
            >
              <Globe className="w-3.5 h-3.5 text-primary" />
              <span>{branch === "bangkok" ? "🇹🇭 Bangkok" : "🇮🇳 Vadodara"}</span>
              <ChevronDown className="w-3 h-3 text-muted-foreground" />
            </button>
            {showBranches && (
              <>
                <div className="fixed inset-0 z-40" onClick={() => setShowBranches(false)} />
                <div className="absolute right-0 top-full mt-2 w-56 bg-card border border-border rounded-2xl shadow-elevated p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="text-[10px] font-bold text-muted-foreground px-3 py-1.5 uppercase tracking-wider">
                    Select Branch Location
                  </div>
                  <button
                    onClick={() => {
                      setBranch("bangkok");
                      setShowBranches(false);
                    }}
                    className={`w-full flex items-center justify-between px-3 py-2.5 text-xs rounded-xl text-left font-medium transition cursor-pointer hover:bg-primary/5 ${
                      branch === "bangkok" ? "text-primary bg-primary/5 font-bold" : "text-foreground"
                    }`}
                  >
                    <span>🇹🇭 Bangkok HQ (Thailand)</span>
                    {branch === "bangkok" && <Check className="w-3.5 h-3.5 text-primary" />}
                  </button>
                  <button
                    onClick={() => {
                      setBranch("vadodara");
                      setShowBranches(false);
                    }}
                    className={`w-full flex items-center justify-between px-3 py-2.5 text-xs rounded-xl text-left font-medium transition cursor-pointer hover:bg-primary/5 ${
                      branch === "vadodara" ? "text-primary bg-primary/5 font-bold" : "text-foreground"
                    }`}
                  >
                    <span>🇮🇳 Vadodara Branch (India)</span>
                    {branch === "vadodara" && <Check className="w-3.5 h-3.5 text-primary" />}
                  </button>
                </div>
              </>
            )}
          </div>

          {/* Dynamic Phone Call CTA */}
          <a
            href={`tel:${details.phoneRaw}`}
            className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-4 py-2.5 text-xs font-semibold hover:opacity-90 transition shadow-soft"
          >
            <Phone className="w-3.5 h-3.5" /> {details.phone}
          </a>
        </div>

        {/* Mobile menu toggle & branch selector */}
        <div className="lg:hidden flex items-center gap-2">
          {/* Small Branch Switcher for Mobile */}
          <button
            onClick={() => setBranch(branch === "bangkok" ? "vadodara" : "bangkok")}
            className="p-2 rounded-xl border border-border bg-card text-xs font-bold shadow-soft flex items-center gap-1"
          >
            <Globe className="w-3.5 h-3.5 text-primary" />
            <span>{branch === "bangkok" ? "🇹🇭" : "🇮🇳"}</span>
          </button>

          <button
            className="p-2 rounded-xl hover:bg-muted transition"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-border bg-background/98 backdrop-blur-md">
          <div className="container mx-auto px-5 py-5 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to as any}
                onClick={() => setOpen(false)}
                className={`py-3 px-4 rounded-xl text-xs font-semibold tracking-wide transition-colors ${
                  currentPath === link.to
                    ? "text-primary bg-primary/8"
                    : "text-foreground hover:bg-muted"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`tel:${details.phoneRaw}`}
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-3 text-xs font-bold"
            >
              <Phone className="w-3.5 h-3.5" /> Call {details.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export function Footer() {
  const pages = [
    { label: "Home", to: "/" },
    { label: "About Us", to: "/about" },
    { label: "Services", to: "/services" },
    { label: "Treatments", to: "/treatments" },
    { label: "Pricing & Packages", to: "/pricing" },
    { label: "International Patients", to: "/international" },
    { label: "Blog", to: "/blog" },
    { label: "Contact", to: "/contact" },
  ];
  const { details, branch, setBranch } = useBranch();

  return (
    <footer className="bg-foreground text-background mt-16">
      <div className="container mx-auto px-5 lg:px-8 py-16 grid md:grid-cols-3 gap-12">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="w-10 h-10 rounded-full bg-background/10 grid place-items-center border border-background/20">
              <Leaf className="w-5 h-5 text-background" />
            </span>
            <span className="font-display text-xl font-bold">The Fertility Garden</span>
          </div>
          <p className="mt-4 text-xs text-background/70 leading-relaxed max-w-xs">
            Global standard reproductive and IVF clinic. Delivering world-class care, state-of-the-art genetic screening, and compassionate guidance to hopeful parents.
          </p>
          <div className="mt-6 flex flex-wrap gap-2 items-center">
            {/* Quick Switch Branch in Footer */}
            <span className="text-[10px] uppercase font-bold text-background/50 tracking-wider mr-2">Location:</span>
            <button
              onClick={() => setBranch("bangkok")}
              className={`px-3 py-1.5 rounded-full text-[10px] font-bold transition border ${
                branch === "bangkok"
                  ? "bg-background text-foreground border-background"
                  : "bg-transparent text-background/70 border-background/20 hover:text-background"
              }`}
            >
              🇹🇭 Bangkok HQ
            </button>
            <button
              onClick={() => setBranch("vadodara")}
              className={`px-3 py-1.5 rounded-full text-[10px] font-bold transition border ${
                branch === "vadodara"
                  ? "bg-background text-foreground border-background"
                  : "bg-transparent text-background/70 border-background/20 hover:text-background"
              }`}
            >
              🇮🇳 Vadodara Branch
            </button>
          </div>
          <div className="mt-6 flex gap-3">
            <a
              href={details.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-background/10 grid place-items-center hover:bg-primary transition text-background hover:text-primary-foreground"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <a
              href={`tel:${details.phoneRaw}`}
              className="w-9 h-9 rounded-full bg-background/10 grid place-items-center hover:bg-primary transition text-background hover:text-primary-foreground"
            >
              <Phone className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-sm text-background uppercase tracking-widest mb-5">Quick Links</h4>
          <ul className="space-y-3 text-xs text-background/70">
            {pages.map((p) => (
              <li key={p.to}>
                <Link
                  to={p.to as any}
                  className="hover:text-background transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/60 group-hover:bg-primary transition" />
                  {p.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-sm text-background uppercase tracking-widest mb-5">Branch Office ({details.shortName})</h4>
          <ul className="space-y-4 text-xs text-background/70">
            <li>
              <a
                href={`tel:${details.phoneRaw}`}
                className="flex items-start gap-3 hover:text-background transition"
              >
                <Phone className="w-4 h-4 mt-0.5 shrink-0" />
                <div>
                  <p className="text-[10px] text-background/50 uppercase tracking-wider mb-0.5">Phone Support</p>
                  <p className="font-semibold">{details.phone}</p>
                </div>
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
              <div>
                <p className="text-[10px] text-background/50 uppercase tracking-wider mb-0.5">Address</p>
                <p className="leading-relaxed">{details.fullAddress}</p>
              </div>
            </li>
            <li>
              <a
                href={details.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 hover:text-background transition"
              >
                <MessageCircle className="w-4 h-4 mt-0.5 shrink-0" />
                <div>
                  <p className="text-[10px] text-background/50 uppercase tracking-wider mb-0.5">WhatsApp Chat</p>
                  <p>Open Live Chat Messenger</p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-background/10">
        <div className="container mx-auto px-5 lg:px-8 py-6 text-xs text-background/50 flex flex-col sm:flex-row gap-2 justify-between">
          <span>© {new Date().getFullYear()} The Fertility Garden. In affiliation with Bangkok Fertility Center. All rights reserved.</span>
          <span>IVF & Advanced Genetics Laboratories — Bangkok & Vadodara</span>
        </div>
      </div>
    </footer>
  );
}

export function FloatingWhatsApp() {
  const { details } = useBranch();
  return (
    <a
      href={details.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-primary text-primary-foreground grid place-items-center shadow-elevated hover:scale-110 transition-transform"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
}


export function PageHero({
  title,
  subtitle,
  breadcrumb,
}: {
  title: React.ReactNode;
  subtitle?: string;
  breadcrumb?: string;
}) {
  return (
    <section className="bg-gradient-hero py-16 lg:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,oklch(0.62_0.09_160/0.12),transparent_60%)]" />
      <div className="container mx-auto px-5 lg:px-8 relative text-center">
        {breadcrumb && (
          <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground mb-4">
            <Link to="/" className="hover:text-primary transition">Home</Link>
            <span>/</span>
            <span className="text-primary">{breadcrumb}</span>
          </div>
        )}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-foreground leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = true,
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <div className={`max-w-2xl mb-14 ${center ? "mx-auto text-center" : ""}`}>
      <span className="text-xs uppercase tracking-[0.2em] text-primary font-medium">
        {eyebrow}
      </span>
      <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-muted-foreground leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
}
