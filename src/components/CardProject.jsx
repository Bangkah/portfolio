import React from "react";
import { Link } from "react-router-dom";
import { ExternalLink, ArrowRight, Github } from "lucide-react";
import { toSlug } from "../utils/slug";

/* =========================================================
   SHARED THEME
   Palet ini sama persis dengan yang dipakai di FullWidthTabs
   dan Certificate — jangan tambah warna baru di luar ini.

   ink     #111111  teks & border
   accent  #ffcf33  aksen kuning (badge, tombol utama)
   active  #ff5c58  aksen merah (state / dekorasi)
   surface #ffffff  background kartu
========================================================= */

/* =========================================================
   PROJECT DATA
========================================================= */

export const projects = [
  {
    value: "ATHA",
    description:
      "Lightweight workflow wrapper for pacman that improves safety, transparency, and auditability without replacing native behavior.",
    href: "https://github.com/Bangkah/Atha",
  },
  {
    value: "NetInfo",
    description:
      "Fast, minimal, and reliable Linux CLI utility for displaying network and system information. Featured on LinuxLinks.",
    href: "https://github.com/Bangkah/netinfo",
  },
  {
    value: "Bangkah Launcher",
    description:
      "Laravel starter kit scaffold for production-ready projects with Docker, Nginx, authentication, and more.",
    href: "https://github.com/Bangkah/bangkah-launcher",
  },
  {
    value: "Sentinel AI",
    description: "Open-source cybersecurity CLI tool for Linux.",
    href: "https://github.com/Bangkah",
  },
  {
    value: "Muslim Life",
    description:
      "Muslim Life adalah aplikasi web Islami berbasis React.js yang membantu umat Muslim dalam menjalani ibadah harian dengan lebih mudah, cepat, dan praktis.",
    href: "https://muslim-life.vercel.app/",
  },
  {
    value: "AegisCrypt Web",
    description:
      "AegisCrypt Web is a military-grade, browser-based encryption tool. It is designed to be Zero-Knowledge, meaning your files and passwords are processed entirely in your browser's RAM via WebAssembly / Web Crypto API and never transmitted to any server.",
    href: "https://github.com/Bangkahdev/AegisCrypt-Web",
  },
  {
    value: "Enkripsi App",
    description:
      "Aplikasi EnkripsiApp adalah program sederhana berbasis C# Windows Forms yang dibuat untuk mempelajari dan mengimplementasikan algoritma enkripsi teks. Aplikasi ini memiliki antarmuka grafis sederhana sehingga mudah digunakan untuk proses enkripsi maupun dekripsi.",
    href: "https://github.com/Bangkahdev/EnkripsiApp",
  },
];

/* =========================================================
   CARD PROJECT
========================================================= */

const CardProject = ({ value, description, href }) => {
  const slug = toSlug(value || "");
  const isGithub = href?.includes("github.com");
  const linkLabel = isGithub ? "GitHub" : "Live Demo";
  const ProjectIcon = isGithub ? Github : ExternalLink;

  return (
    <div className="w-full h-full flex flex-col">
      <div
        className="
          relative rounded-lg overflow-hidden
          flex flex-col justify-between h-full
          bg-white border-3 border-[#111111]
          shadow-[6px_6px_0px_#111111]
          hover:shadow-[9px_9px_0px_#111111]
          hover:-translate-x-0.5 hover:-translate-y-0.5
          transition-all duration-200
        "
      >
        <div className="p-5 flex flex-col h-full">
          {/* PROJECT HEADER */}
          <div
            className="
              group relative overflow-hidden rounded-md
              aspect-[16/9] flex items-center justify-center
              bg-[#ffcf33] border-3 border-[#111111]
              shadow-[3px_3px_0px_#111111]
            "
          >
            {/* Decorative shapes */}
            <div className="absolute top-4 left-4 w-5 h-5 rotate-12 bg-[#ff5c58] border-2 border-[#111111]" />
            <div className="absolute bottom-4 right-4 w-5 h-5 rotate-12 bg-white border-2 border-[#111111]" />

            {/* Project Icon */}
            <ProjectIcon
              className="
                w-20 h-20 text-[#111111] stroke-[2]
                transition-transform duration-300 group-hover:scale-110
              "
            />

            {/* Project Name Tag */}
            <div className="absolute bottom-4 left-4 px-3 py-1 rounded-md bg-white border-2 border-[#111111] shadow-[2px_2px_0px_#111111]">
              <span className="text-xs font-black uppercase tracking-wider text-[#111111]">
                {isGithub ? "Open Source" : "Web Project"}
              </span>
            </div>
          </div>

          {/* PROJECT CONTENT */}
          <div className="mt-4 flex flex-col flex-grow justify-between space-y-4">
            <div>
              <h3 className="text-xl font-black uppercase tracking-tight text-[#111111] line-clamp-1">
                {value}
              </h3>

              <p className="mt-1 text-sm font-medium leading-relaxed text-[#111111]/70 line-clamp-3">
                {description}
              </p>
            </div>

            {/* ACTIONS */}
            <div className="pt-3 mt-auto flex items-center justify-between gap-3 border-t-2 border-[#111111]/10">
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex items-center gap-1.5 px-3.5 py-2 rounded-md
                  bg-[#ffcf33] text-[#111111] border-2 border-[#111111]
                  shadow-[2px_2px_0px_#111111]
                  hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_#111111]
                  active:translate-x-[2px] active:translate-y-[2px] active:shadow-none
                  font-bold text-xs uppercase transition-all
                "
              >
                <span>{linkLabel}</span>
                <ExternalLink className="w-3.5 h-3.5 stroke-[2.5]" />
              </a>

              <Link
                to={`/project/${slug}`}
                className="
                  inline-flex items-center gap-1.5 px-3.5 py-2 rounded-md
                  bg-[#111111] text-white border-2 border-[#111111]
                  shadow-[2px_2px_0px_#ff5c58]
                  hover:bg-[#ff5c58] hover:text-[#111111] hover:shadow-[2px_2px_0px_#111111]
                  font-bold text-xs uppercase transition-all
                "
              >
                <span>Details</span>
                <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProject;