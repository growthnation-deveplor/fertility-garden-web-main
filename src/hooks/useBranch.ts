import { useState, useEffect } from "react";

export type Branch = "bangkok" | "vadodara";

export interface Doctor {
  name: string;
  role: string;
  exp: string;
  initials: string;
  description: string;
}

export interface Package {
  name: string;
  priceLocal: string;
  priceUSD: string;
  description: string;
}

export interface BranchDetails {
  id: Branch;
  name: string;
  shortName: string;
  tagline: string;
  location: string;
  fullAddress: string;
  phone: string;
  phoneRaw: string;
  whatsappUrl: string;
  email: string;
  currency: string;
  currencySymbol: string;
  mapUrl: string;
  doctors: Doctor[];
  packages: Record<string, Package>;
}

export const branchData: Record<Branch, BranchDetails> = {
  bangkok: {
    id: "bangkok",
    name: "Bangkok Fertility Center (Bangkok HQ)",
    shortName: "Bangkok Fertility",
    tagline: "Global standards in advanced reproductive medicine",
    location: "Bangkok, Thailand",
    fullAddress: "2 Soi Soonvijai 7, New Petchburi Rd, Bang Kapi, Huai Khwang, Bangkok 10310, Thailand",
    phone: "+66 2 310 3000",
    phoneRaw: "6623103000",
    whatsappUrl: `https://wa.me/66812345678?text=${encodeURIComponent(
      "Hello, I'd like to book an IVF consultation at Bangkok Fertility Center."
    )}`,
    email: "info@bangkokfertilitycenter.com",
    currency: "THB",
    currencySymbol: "฿",
    mapUrl: "https://maps.google.com/?q=Bangkok+Hospital+Huai+Khwang+Bangkok+Thailand",
    doctors: [
      {
        name: "Dr. Weena Krutsawad",
        role: "Lead Infertility & IVF Specialist",
        exp: "15+ Years Experience",
        initials: "WK",
        description: "Specialized in advanced embryology, repeated IVF failures, and preimplantation genetic testing."
      },
      {
        name: "Dr. Nisarath Soontrapa",
        role: "Obstetrician & Gynaecologist",
        exp: "12+ Years Experience",
        initials: "NS",
        description: "Expert in minimally invasive laparoscopic surgery and reproductive endocrinology."
      },
      {
        name: "Dr. Chutatip Poonsatta",
        role: "Clinical Embryology Coordinator",
        exp: "10+ Years Experience",
        initials: "CP",
        description: "Manages state-of-the-art cleanroom protocols and embryo cryopreservation."
      }
    ],
    packages: {
      ivf: {
        name: "IVF Standard Package",
        priceLocal: "95,000",
        priceUSD: "2,700",
        description: "Includes ovarian monitoring, egg retrieval under sedation, laboratory culture, and transfer."
      },
      icsi: {
        name: "Advanced ICSI Package",
        priceLocal: "125,000",
        priceUSD: "3,550",
        description: "IVF cycle combined with microscopic single sperm injection for severe male factors."
      },
      iui: {
        name: "IUI (Intrauterine Insemination)",
        priceLocal: "22,000",
        priceUSD: "630",
        description: "Sperm washing and preparation followed by direct intrauterine insemination."
      },
      pgt: {
        name: "PGT-A Genetic Screening",
        priceLocal: "85,000",
        priceUSD: "2,400",
        description: "Biopsy and chromosome screening of up to 5 blastocysts for improved implantation rates."
      },
      freezing: {
        name: "Egg/Sperm Cryopreservation",
        priceLocal: "75,000",
        priceUSD: "2,150",
        description: "Rapid vitrification and one full year of secure storage in liquid nitrogen canisters."
      }
    }
  },
  vadodara: {
    id: "vadodara",
    name: "The Fertility Garden (Vadodara Branch)",
    shortName: "Fertility Garden",
    tagline: "Where hope blossoms into parenthood",
    location: "Vadodara, Gujarat, India",
    fullAddress: "302, Healing Touch Plaza, Sampatrao Road, Alkapuri, Vadodara, Gujarat 390007, India",
    phone: "9879441983",
    phoneRaw: "9879441983",
    whatsappUrl: `https://wa.me/919879441983?text=${encodeURIComponent(
      "Hello, I'd like to book an IVF consultation at The Fertility Garden Vadodara."
    )}`,
    email: "consult@fertilitygarden.in",
    currency: "INR",
    currencySymbol: "₹",
    mapUrl: "https://maps.google.com/?q=Alkapuri,Vadodara,Gujarat,India",
    doctors: [
      {
        name: "Dr. Rohan Mehta",
        role: "Senior IVF Consultant",
        exp: "12+ Years Experience",
        initials: "RM",
        description: "Specialized in male infertility factor evaluation, customized stimulation protocols, and IUI/IVF."
      },
      {
        name: "Dr. Anjali Patel",
        role: "Fertility Specialist & Gynecologist",
        exp: "9+ Years Experience",
        initials: "AP",
        description: "Focused on PCOS management, hormonal imbalances, and recurrent pregnancy loss guidance."
      },
      {
        name: "Dr. Pooja Shah",
        role: "Clinical Psychologist & Counselor",
        exp: "8+ Years Experience",
        initials: "PS",
        description: "Provides compassionate psychological support, stress relief therapy, and couple coping techniques."
      }
    ],
    packages: {
      ivf: {
        name: "IVF Standard Package",
        priceLocal: "1,50,000",
        priceUSD: "1,800",
        description: "Includes ovarian monitoring, egg retrieval under sedation, laboratory culture, and transfer."
      },
      icsi: {
        name: "Advanced ICSI Package",
        priceLocal: "1,85,000",
        priceUSD: "2,200",
        description: "IVF cycle combined with microscopic single sperm injection for severe male factors."
      },
      iui: {
        name: "IUI (Intrauterine Insemination)",
        priceLocal: "25,000",
        priceUSD: "300",
        description: "Sperm washing and preparation followed by direct intrauterine insemination."
      },
      pgt: {
        name: "PGT-A Genetic Screening",
        priceLocal: "1,20,000",
        priceUSD: "1,450",
        description: "Biopsy and chromosome screening of up to 5 blastocysts for improved implantation rates."
      },
      freezing: {
        name: "Egg/Sperm Cryopreservation",
        priceLocal: "90,000",
        priceUSD: "1,080",
        description: "Rapid vitrification and one full year of secure storage in liquid nitrogen canisters."
      }
    }
  }
};

const BRANCH_EVENT = "branch-changed";

export function getStoredBranch(): Branch {
  if (typeof window !== "undefined") {
    const saved = localStorage.getItem("selected-branch") as Branch;
    if (saved === "bangkok" || saved === "vadodara") {
      return saved;
    }
  }
  return "bangkok"; // Default to Bangkok as requested for the reference site inspiration
}

export function useBranch() {
  const [branch, setBranchState] = useState<Branch>(getStoredBranch);

  useEffect(() => {
    const handleBranchChange = (e: CustomEvent<Branch>) => {
      setBranchState(e.detail);
    };

    window.addEventListener(BRANCH_EVENT, handleBranchChange as EventListener);
    return () => {
      window.removeEventListener(BRANCH_EVENT, handleBranchChange as EventListener);
    };
  }, []);

  const changeBranch = (newBranch: Branch) => {
    localStorage.setItem("selected-branch", newBranch);
    setBranchState(newBranch);
    const event = new CustomEvent(BRANCH_EVENT, { detail: newBranch });
    window.dispatchEvent(event);
  };

  const details = branchData[branch];

  return {
    branch,
    setBranch: changeBranch,
    details,
    allBranches: branchData
  };
}
