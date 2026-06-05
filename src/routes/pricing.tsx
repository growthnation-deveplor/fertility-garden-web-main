import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  HelpCircle,
  CheckCircle2,
  Phone,
  MessageCircle,
  ArrowRight,
  Calculator,
  Plus,
  Coins,
  ShieldCheck,
} from "lucide-react";
import { useBranch, type Branch } from "../hooks/useBranch";
import { PageHero, SectionHeading } from "../components/Layout";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Fertility Treatment Packages & Cost Calculator — The Fertility Garden" },
      {
        name: "description",
        content:
          "Transparent pricing tables for IVF, ICSI, IUI, and genetics. Use our interactive fertility cost calculator to estimate your treatment fees.",
      },
    ],
  }),
  component: PricingPage,
});

function PricingPage() {
  const { branch, details, setBranch } = useBranch();
  
  // Calculator state variables
  const [treatment, setTreatment] = useState<"ivf" | "icsi" | "iui" | "freezing">("ivf");
  const [age, setAge] = useState<"<35" | "35-39" | "40+">("<35");
  const [pgt, setPgt] = useState(false);
  const [imsi, setImsi] = useState(false);
  const [storage, setStorage] = useState(false);
  const [donor, setDonor] = useState(false);

  // Auto-recommend PGT-A chromosomal screening if age is 35 or above
  useEffect(() => {
    if (age === "35-39" || age === "40+") {
      setPgt(true);
    } else {
      setPgt(false);
    }
  }, [age]);

  // Set prices dynamically depending on selected branch
  const basePrices: Record<Branch, Record<string, number>> = {
    bangkok: {
      ivf: 95000,
      icsi: 125000,
      iui: 22000,
      freezing: 75000,
      pgt: 85000,
      imsi: 35000,
      storage: 15000,
      donor: 60000,
    },
    vadodara: {
      ivf: 150000,
      icsi: 185000,
      iui: 25000,
      freezing: 90000,
      pgt: 120000,
      imsi: 45000,
      storage: 20000,
      donor: 80000,
    }
  };

  const getExchangeRate = () => {
    // 1 USD is ~35 THB for Bangkok
    // 1 USD is ~83 INR for Vadodara
    return branch === "bangkok" ? 35 : 83.5;
  };

  const calculateTotal = () => {
    const prices = basePrices[branch];
    let total = prices[treatment];

    if (pgt && treatment !== "iui" && treatment !== "freezing") {
      total += prices.pgt;
    }
    if (imsi && (treatment === "icsi" || treatment === "ivf")) {
      total += prices.imsi;
    }
    if (storage) {
      total += prices.storage;
    }
    if (donor && treatment !== "iui") {
      total += prices.donor;
    }

    const rate = getExchangeRate();
    const totalUSD = Math.round(total / rate);
    return {
      local: total.toLocaleString(),
      usd: totalUSD.toLocaleString(),
    };
  };

  const totals = calculateTotal();
  const branchPrices = basePrices[branch];
  const symbol = details.currencySymbol;
  const curr = details.currency;

  return (
    <>
      <PageHero
        breadcrumb="Pricing"
        title={<>Transparent <span className="text-gradient-primary">Pricing</span></>}
        subtitle={`Select your location to view pricing guides and use our cost estimator calculator. Currently viewing: ${details.name}.`}
      />

      {/* Branch selector banner */}
      <section className="py-6 bg-secondary/30 border-b border-border">
        <div className="container mx-auto px-5 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
            Switch branch location to adjust prices:
          </p>
          <div className="flex gap-2">
            <button
              onClick={() => setBranch("bangkok")}
              className={`px-4 py-2 rounded-full text-xs font-bold transition border ${
                branch === "bangkok"
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-card border-border text-foreground hover:border-primary/50"
              }`}
            >
              🇹🇭 Bangkok HQ (THB / ฿)
            </button>
            <button
              onClick={() => setBranch("vadodara")}
              className={`px-4 py-2 rounded-full text-xs font-bold transition border ${
                branch === "vadodara"
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-card border-border text-foreground hover:border-primary/50"
              }`}
            >
              🇮🇳 Vadodara Branch (INR / ₹)
            </button>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-20 lg:py-28 relative">
        <div className="container mx-auto px-5 lg:px-8">
          <SectionHeading
            eyebrow="Cost Estimator"
            title={<>Interactive <span className="text-gradient-primary">Treatment Calculator</span></>}
            subtitle="Choose your baseline treatment, specify your age range, and pick optional laboratory procedures to calculate an immediate estimated price."
          />

          <div className="grid lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
            {/* Left – Controls */}
            <div className="lg:col-span-7 bg-card rounded-3xl border border-border p-6 sm:p-8 shadow-soft space-y-6">
              {/* Step 1: Base Treatment */}
              <div>
                <label className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground block mb-3">
                  Step 1: Choose Base Treatment
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { id: "ivf", label: "Standard IVF", desc: "In Vitro Fertilisation" },
                    { id: "icsi", label: "ICSI Procedure", desc: "Intracytoplasmic Sperm" },
                    { id: "iui", label: "IUI Insemination", desc: "Intrauterine placement" },
                    { id: "freezing", label: "Egg Vitrification", desc: "Preservation + Storage" },
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setTreatment(item.id as any)}
                      className={`p-4 rounded-xl border text-left transition cursor-pointer hover:border-primary/60 ${
                        treatment === item.id
                          ? "border-primary bg-primary/5 shadow-soft"
                          : "border-border bg-background/50"
                      }`}
                    >
                      <span className="text-xs font-bold block text-foreground">{item.label}</span>
                      <span className="text-[9px] text-muted-foreground block mt-0.5">{item.desc}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Patient Age */}
              <div>
                <label className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground block mb-3">
                  Step 2: Patient Maternal Age Range
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: "<35", label: "Under 35", sub: "PGT optional" },
                    { id: "35-39", label: "35 – 39", sub: "PGT recommended" },
                    { id: "40+", label: "40 and above", sub: "PGT highly recommended" },
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setAge(item.id as any)}
                      className={`p-3 rounded-xl border text-center transition cursor-pointer hover:border-primary/60 ${
                        age === item.id
                          ? "border-primary bg-primary/5"
                          : "border-border bg-background/50"
                      }`}
                    >
                      <span className="text-xs font-bold block text-foreground">{item.label}</span>
                      <span className="text-[9px] text-muted-foreground block mt-0.5">{item.sub}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Add-ons */}
              <div>
                <label className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground block mb-3">
                  Step 3: Advanced Laboratory Add-ons
                </label>
                <div className="space-y-3">
                  {/* PGT-A */}
                  <label
                    className={`flex items-start gap-4 p-4 rounded-xl border transition cursor-pointer ${
                      treatment === "iui" || treatment === "freezing" ? "opacity-45 pointer-events-none" : ""
                    } ${pgt ? "border-primary bg-primary/5" : "border-border bg-background/50"}`}
                  >
                    <input
                      type="checkbox"
                      checked={pgt}
                      disabled={treatment === "iui" || treatment === "freezing"}
                      onChange={(e) => setPgt(e.target.checked)}
                      className="mt-1 accent-primary"
                    />
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-bold text-foreground">PGT-A Chromosomal Screening</span>
                        <span className="text-xs font-bold text-primary">
                          +{symbol}
                          {branchPrices.pgt.toLocaleString()}
                        </span>
                      </div>
                      <p className="text-[10px] text-muted-foreground mt-0.5 leading-relaxed">
                        Biopsy and NGS analysis of chromosomes to prevent chromosome failure and reduce miscarriage.
                      </p>
                      {age !== "<35" && (
                        <span className="inline-block mt-2 text-[9px] bg-blush text-destructive-foreground px-2 py-0.5 rounded font-bold uppercase tracking-wider">
                          Recommended due to maternal age
                        </span>
                      )}
                    </div>
                  </label>

                  {/* IMSI */}
                  <label
                    className={`flex items-start gap-4 p-4 rounded-xl border transition cursor-pointer ${
                      treatment !== "ivf" && treatment !== "icsi" ? "opacity-45 pointer-events-none" : ""
                    } ${imsi ? "border-primary bg-primary/5" : "border-border bg-background/50"}`}
                  >
                    <input
                      type="checkbox"
                      checked={imsi}
                      disabled={treatment !== "ivf" && treatment !== "icsi"}
                      onChange={(e) => setImsi(e.target.checked)}
                      className="mt-1 accent-primary"
                    />
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-bold text-foreground">IMSI Sperm Selection (6000x Magnification)</span>
                        <span className="text-xs font-bold text-primary">
                          +{symbol}
                          {branchPrices.imsi.toLocaleString()}
                        </span>
                      </div>
                      <p className="text-[10px] text-muted-foreground mt-0.5 leading-relaxed">
                        Evaluates sperm under high digital magnification to pick ideal morphology, bypassing structural defects.
                      </p>
                    </div>
                  </label>

                  {/* Vitrification Storage */}
                  <label
                    className={`flex items-start gap-4 p-4 rounded-xl border transition cursor-pointer ${
                      storage ? "border-primary bg-primary/5" : "border-border bg-background/50"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={storage}
                      onChange={(e) => setStorage(e.target.checked)}
                      className="mt-1 accent-primary"
                    />
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-bold text-foreground">Extra Cryostorage (1 Additional Year)</span>
                        <span className="text-xs font-bold text-primary">
                          +{symbol}
                          {branchPrices.storage.toLocaleString()}
                        </span>
                      </div>
                      <p className="text-[10px] text-muted-foreground mt-0.5 leading-relaxed">
                        Ensures your remaining frozen blastocysts/gametes remain safely stored in liquid nitrogen.
                      </p>
                    </div>
                  </label>

                  {/* Donor Program */}
                  <label
                    className={`flex items-start gap-4 p-4 rounded-xl border transition cursor-pointer ${
                      treatment === "iui" ? "opacity-45 pointer-events-none" : ""
                    } ${donor ? "border-primary bg-primary/5" : "border-border bg-background/50"}`}
                  >
                    <input
                      type="checkbox"
                      checked={donor}
                      disabled={treatment === "iui"}
                      onChange={(e) => setDonor(e.target.checked)}
                      className="mt-1 accent-primary"
                    />
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-bold text-foreground">Assisted Donor Oocytes (Donor Eggs)</span>
                        <span className="text-xs font-bold text-primary">
                          +{symbol}
                          {branchPrices.donor.toLocaleString()}
                        </span>
                      </div>
                      <p className="text-[10px] text-muted-foreground mt-0.5 leading-relaxed">
                        Coordinates with our fully screened donor program for patients with poor eggs or recurrent failures.
                      </p>
                    </div>
                  </label>
                </div>
              </div>
            </div>

            {/* Right – Calculated Total Card */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-primary text-primary-foreground rounded-3xl p-6 sm:p-8 shadow-elevated text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,oklch(0.48_0.12_210),transparent_50%)]" />
                <div className="relative z-10">
                  <Calculator className="w-10 h-10 mx-auto opacity-70 mb-4" />
                  <h3 className="text-xs uppercase tracking-widest font-bold opacity-80">Estimated Package Cost</h3>

                  <div className="my-6">
                    <p className="text-4xl sm:text-5xl font-extrabold tracking-tight">
                      {symbol}
                      {totals.local}
                    </p>
                    <p className="text-xs opacity-70 mt-1 font-semibold">
                      Approx. ${totals.usd} USD (depending on exchange rate)
                    </p>
                  </div>

                  <div className="h-px bg-white/20 my-5" />

                  <ul className="text-left space-y-2 text-xs font-medium text-primary-foreground/90">
                    <li className="flex items-center justify-between">
                      <span>Base Treatment ({treatment.toUpperCase()}):</span>
                      <span className="font-bold">
                        {symbol}
                        {branchPrices[treatment].toLocaleString()}
                      </span>
                    </li>
                    {pgt && treatment !== "iui" && treatment !== "freezing" && (
                      <li className="flex items-center justify-between">
                        <span>PGT-A Screening:</span>
                        <span className="font-bold">
                          {symbol}
                          {branchPrices.pgt.toLocaleString()}
                        </span>
                      </li>
                    )}
                    {imsi && (treatment === "icsi" || treatment === "ivf") && (
                      <li className="flex items-center justify-between">
                        <span>IMSI Micromanipulation:</span>
                        <span className="font-bold">
                          {symbol}
                          {branchPrices.imsi.toLocaleString()}
                        </span>
                      </li>
                    )}
                    {storage && (
                      <li className="flex items-center justify-between">
                        <span>Extra year storage:</span>
                        <span className="font-bold">
                          {symbol}
                          {branchPrices.storage.toLocaleString()}
                        </span>
                      </li>
                    )}
                    {donor && treatment !== "iui" && (
                      <li className="flex items-center justify-between">
                        <span>Donor gametes support:</span>
                        <span className="font-bold">
                          {symbol}
                          {branchPrices.donor.toLocaleString()}
                        </span>
                      </li>
                    )}
                  </ul>

                  <Link
                    to="/contact"
                    className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-full bg-white text-primary px-5 py-3 text-xs font-bold hover:bg-primary-foreground transition shadow-soft"
                  >
                    Confirm & Book Consultation <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Note on Inclusions */}
              <div className="bg-card border border-border rounded-2xl p-6 shadow-soft space-y-4">
                <div className="flex items-center gap-2 text-primary">
                  <ShieldCheck className="w-5 h-5" />
                  <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">Package Inclusions</h4>
                </div>
                <ul className="space-y-2 text-xs text-muted-foreground font-semibold">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                    <span>All doctor consultations and monitoring scans during the cycle.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                    <span>Operating theatre fees, sedation, and embryology lab culture.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                    <span>Embryo vitrification (freezing) and first full year of storage.</span>
                  </li>
                </ul>
                <p className="text-[10px] text-muted-foreground italic leading-relaxed pt-2 border-t border-border/60">
                  *Excludes hormone stimulation injections (which are tailored to each patient's ovarian reserve and range from ₹50,000–₹90,000 / $600–$1,000).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Package Table */}
      <section className="py-20 lg:py-28 bg-gradient-soft border-t border-border">
        <div className="container mx-auto px-5 lg:px-8">
          <SectionHeading
            eyebrow="Fee Breakdown"
            title={<>Standard Treatment <span className="text-gradient-primary">Fee Guide</span></>}
            subtitle="A structured overview of baseline costs for clinics in Bangkok and Vadodara. Toggles with the active branch."
          />

          <div className="max-w-4xl mx-auto bg-card border border-border rounded-3xl overflow-hidden shadow-soft">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-primary text-primary-foreground uppercase font-bold text-[10px] tracking-wider">
                    <th className="p-4 sm:p-5">Fertility Procedure</th>
                    <th className="p-4 sm:p-5">Standard Package Price</th>
                    <th className="p-4 sm:p-5">Approx USD Equivalent</th>
                    <th className="p-4 sm:p-5">Key Inclusion Details</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border font-medium text-muted-foreground">
                  <tr>
                    <td className="p-4 sm:p-5 font-bold text-foreground">In Vitro Fertilisation (IVF)</td>
                    <td className="p-4 sm:p-5 text-primary font-bold">
                      {symbol}
                      {branchPrices.ivf.toLocaleString()} {curr}
                    </td>
                    <td className="p-4 sm:p-5">${Math.round(branchPrices.ivf / getExchangeRate()).toLocaleString()}</td>
                    <td className="p-4 sm:p-5">Stimulation monitoring, retrieval, lab culture, transfer</td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-5 font-bold text-foreground">ICSI Microinjection</td>
                    <td className="p-4 sm:p-5 text-primary font-bold">
                      {symbol}
                      {branchPrices.icsi.toLocaleString()} {curr}
                    </td>
                    <td className="p-4 sm:p-5">${Math.round(branchPrices.icsi / getExchangeRate()).toLocaleString()}</td>
                    <td className="p-4 sm:p-5">IVF cycle + single sperm selector microinjection</td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-5 font-bold text-foreground">Intrauterine Insemination (IUI)</td>
                    <td className="p-4 sm:p-5 text-primary font-bold">
                      {symbol}
                      {branchPrices.iui.toLocaleString()} {curr}
                    </td>
                    <td className="p-4 sm:p-5">${Math.round(branchPrices.iui / getExchangeRate()).toLocaleString()}</td>
                    <td className="p-4 sm:p-5">Sperm preparation, washing, and intrauterine insertion</td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-5 font-bold text-foreground">PGT-A Chromosomal Screening</td>
                    <td className="p-4 sm:p-5 text-primary font-bold">
                      {symbol}
                      {branchPrices.pgt.toLocaleString()} {curr}
                    </td>
                    <td className="p-4 sm:p-5">${Math.round(branchPrices.pgt / getExchangeRate()).toLocaleString()}</td>
                    <td className="p-4 sm:p-5">Blastocyst outer biopsy, NGS sequencing up to 5 embryos</td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-5 font-bold text-foreground">IMSI Sperm Selection</td>
                    <td className="p-4 sm:p-5 text-primary font-bold">
                      {symbol}
                      {branchPrices.imsi.toLocaleString()} {curr}
                    </td>
                    <td className="p-4 sm:p-5">${Math.round(branchPrices.imsi / getExchangeRate()).toLocaleString()}</td>
                    <td className="p-4 sm:p-5">6000x ultra-high magnification morphologic sperm screening</td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-5 font-bold text-foreground">Vitrification & Storage</td>
                    <td className="p-4 sm:p-5 text-primary font-bold">
                      {symbol}
                      {branchPrices.freezing.toLocaleString()} {curr}
                    </td>
                    <td className="p-4 sm:p-5">${Math.round(branchPrices.freezing / getExchangeRate()).toLocaleString()}</td>
                    <td className="p-4 sm:p-5">Vitrification freezing process and first year cryostorage</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-16 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="container mx-auto px-5 lg:px-8 text-center relative z-10 space-y-4">
          <Coins className="w-10 h-10 mx-auto opacity-75 mb-3" />
          <h2 className="text-2xl sm:text-3xl font-bold">Request a Tailored Financial Proposal</h2>
          <p className="text-xs text-primary-foreground/90 max-w-md mx-auto leading-relaxed font-semibold">
            Every clinical profile differs. Contact our coordinators today to receive a personalized fee structure based on your medical requirements.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white text-primary px-6 py-3 text-xs font-bold hover:bg-primary-foreground transition shadow-soft"
            >
              Get In Touch <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={details.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/45 text-primary-foreground px-6 py-3 text-xs font-bold hover:bg-white/10 transition"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
