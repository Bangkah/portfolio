import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Award, ExternalLink, ShieldCheck } from "lucide-react";

/* =========================================================
   SHARED THEME
   Palet yang sama dengan CardProject & FullWidthTabs.

   ink     #111111  teks & border
   accent  #ffcf33  aksen kuning (badge, tombol utama)
   active  #ff5c58  aksen merah (state / dekorasi)
   surface #ffffff  background kartu
========================================================= */

/* =========================================================
   CERTIFICATE DATA
========================================================= */

const CERTIFICATES_DATA = [
  {
    id: 1,
    value: "eBPF Getting Started",
    issuer: "Isovalent",
    date: "Issued December 2025",
    href: "https://www.credly.com/badges/ec2001f7-8b28-4187-8a17-e6284ccf5ad8/linked_in_profile",
  },
  {
    id: 2,
    value: "Cilium LB-IPAM & L2",
    issuer: "Isovalent",
    date: "Issued June 2026",
    href: "https://www.credly.com/badges/9710621c-945f-44a4-a695-bb2b05af26d4/linked_in_profile",
  },
  {
    id: 3,
    value: "Discovery: Platform Engineer",
    issuer: "Isovalent",
    date: "Issued December 2025",
    href: "https://www.credly.com/badges/b805ecba-1c0b-4afb-a78b-b54495a5c4dd/linked_in_profile",
  },
  {
    id: 4,
    value: "Belajar Membuat Aplikasi Web dengan React",
    issuer: "Dicoding Indonesia",
    date: "Issued June 2026",
    href: "https://www.dicoding.com/certificates/4EXG1RJ8EPRL",
  },
  {
    id: 5,
    value: "Code Generation & Optimization with IBM Granite",
    issuer: "Hacktiv8 x IBM SkillsBuild",
    date: "Issued August 2025",
    href: "https://www.credly.com/badges/af6c8d8c-da8f-4f19-a213-9e63b2f3bd93/linked_in_profile",
  },
  {
    id: 6,
    value: "Belajar Prinsip Pemrograman SOLID",
    issuer: "Dicoding Indonesia",
    date: "Issued October 2025",
    href: "https://www.dicoding.com/certificates/N9ZO2M7N6PG5",
  },
  {
    id: 7,
    value: "Introduction to Cybersecurity",
    issuer: "Cisco",
    date: "Issued April 2026",
    href: "https://www.credly.com/badges/f2705f25-3274-4c1f-ab4c-0395791532c5/linked_in_profile",
  },
  {
    id: 8,
    value: "Introduction to Information Security",
    issuer: "Cyber Academy Indonesia",
    date: "Issued September 2023",
    href: "https://www.cyberacademy.id/certificate/PKMI1109231611",
  },
  {
    id: 9,
    value: "Belajar Penerapan Data Science dengan Microsoft Fabric",
    issuer: "Dicoding Indonesia",
    date: "Issued April 2026",
    href: "https://www.dicoding.com/certificates/1OP8R4N6LZQK",
  },
  {
    id: 10,
    value: "Membangun Aplikasi Gen AI dengan Microsoft Azure",
    issuer: "Dicoding Indonesia",
    date: "Issued April 2026",
    href: "https://www.dicoding.com/certificates/QLZ99V437Z5D",
  },
  {
    id: 11,
    value: "Belajar Fundamental Deep Learning",
    issuer: "Dicoding Indonesia",
    date: "Issued August 2026",
    href: "https://www.dicoding.com/certificates/1OP8768Y1ZQK",
  },
];

/* =========================================================
   RESPONSIVE HELPER
   Jumlah sertifikat awal: 4 di mobile, 6 di desktop.
   Sama seperti aturan "See More" di panel Projects.
========================================================= */

const MOBILE_BREAKPOINT = 768;

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" && window.innerWidth < MOBILE_BREAKPOINT
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
}

/* =========================================================
   TOGGLE BUTTON
   Gaya identik dengan tombol "See More" di panel Projects.
========================================================= */

const ToggleButton = ({ onClick, isShowingMore }) => (
  <button
    onClick={onClick}
    className="
      px-4 py-2 rounded-sm cursor-pointer
      flex items-center gap-2
      bg-[#ffcf33] text-[#111111]
      text-xs font-black uppercase tracking-wider
      border-3 border-[#111111]
      shadow-[4px_4px_0px_#111111]
      hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none
      active:translate-x-1 active:translate-y-1
      transition-all
    "
  >
    <span className="flex items-center gap-2">
      {isShowingMore ? "See Less" : "See More"}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`transition-transform duration-200 ${
          isShowingMore ? "-rotate-180" : "rotate-0"
        }`}
      >
        <polyline points="6 9 12 15 18 9" />
      </svg>
    </span>
  </button>
);

ToggleButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  isShowingMore: PropTypes.bool.isRequired,
};

/* =========================================================
   CERTIFICATE CARD
========================================================= */

const CertificateCard = ({ cert }) => {
  return (
    <div
      className="
        flex flex-col justify-between h-full w-full p-5 rounded-lg
        bg-white border-3 border-[#111111]
        shadow-[5px_5px_0px_#111111]
        hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[7px_7px_0px_#111111]
        transition-all
      "
    >
      <div>
        <div className="mb-4 flex items-center justify-between">
          <div className="p-2 rounded-md bg-[#ffcf33] border-2 border-[#111111] shadow-[2px_2px_0px_#111111] flex items-center justify-center">
            <ShieldCheck className="w-5 h-5 text-[#111111] stroke-[2.5]" />
          </div>

          <span className="px-3 py-1 rounded-md bg-white border-2 border-[#111111] text-xs font-black uppercase text-[#111111] shadow-[2px_2px_0px_#111111]">
            Verified
          </span>
        </div>

        <h3 className="mb-2 min-h-[48px] flex items-center text-base font-black uppercase leading-snug tracking-tight text-[#111111]">
          {cert.value}
        </h3>

        <p className="text-xs font-bold uppercase tracking-wide text-[#111111]/80">
          {cert.issuer}
        </p>
        <p className="mt-0.5 text-xs font-semibold text-[#111111]/50">
          {cert.date}
        </p>
      </div>

      {cert.href && (
        <a
          href={cert.href}
          target="_blank"
          rel="noopener noreferrer"
          className="
            mt-6 w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-md
            bg-[#ffcf33] text-[#111111] border-2 border-[#111111]
            shadow-[3px_3px_0px_#111111]
            hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_#111111]
            active:translate-x-[3px] active:translate-y-[3px] active:shadow-none
            font-black text-xs uppercase transition-all
          "
        >
          <span>Verify Credential</span>
          <ExternalLink className="w-4 h-4 stroke-[2.5]" />
        </a>
      )}
    </div>
  );
};

/* =========================================================
   CERTIFICATE LIST
========================================================= */

export default function Certificate() {
  const isMobile = useIsMobile();
  const [showAll, setShowAll] = useState(false);

  const initialItems = isMobile ? 4 : 6;
  const displayedCertificates = showAll
    ? CERTIFICATES_DATA
    : CERTIFICATES_DATA.slice(0, initialItems);

  return (
    <div className="space-y-6 w-full">
      <div className="p-5 flex items-center gap-3 rounded-lg bg-white border-3 border-[#111111] shadow-[6px_6px_0px_#111111]">
        <div className="p-3 shrink-0 rounded-md bg-[#111111] border-2 border-[#111111] shadow-[2px_2px_0px_#ff5c58] flex items-center justify-center">
          <Award className="w-6 h-6 text-[#ffcf33] stroke-[2.5]" />
        </div>

        <div>
          <h1 className="text-xl font-black uppercase tracking-wide text-[#111111]">
            Certificates
          </h1>
          <p className="text-xs font-medium uppercase tracking-wider text-[#111111]/70">
            {CERTIFICATES_DATA.length} certificates total
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedCertificates.map((cert) => (
          <div key={cert.id} className="flex">
            <CertificateCard cert={cert} />
          </div>
        ))}
      </div>

      {CERTIFICATES_DATA.length > initialItems && (
        <div className="flex justify-center pt-4">
          <ToggleButton
            onClick={() => setShowAll((prev) => !prev)}
            isShowingMore={showAll}
          />
        </div>
      )}
    </div>
  );
}