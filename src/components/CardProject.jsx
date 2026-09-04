import React from "react";
import { Link } from "react-router-dom";
import { ExternalLink, ArrowRight } from "lucide-react";
import { toSlug } from "../utils/slug";

const CardProject = ({ Img, Title, Description, Link: ProjectLink, id }) => {
  const handleLiveDemo = (e) => {
    if (!ProjectLink) {
      e.preventDefault();
      alert("Live demo link is not available");
    }
  };

  const handleDetails = (e) => {
    if (!id) {
      e.preventDefault();
      alert("Project details are not available");
    }
  };

  return (
    <div className="w-full">
      {/* Container Card Neo-Brutalist */}
      <div className="relative rounded-md bg-white border-3 border-[#111111] shadow-[6px_6px_0px_#111111] hover:shadow-[9px_9px_0px_#111111] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all duration-200">
        <div className="p-4">
          {/* Wrapper Gambar dengan Hard Border */}
          <div className="relative overflow-hidden rounded-sm border-2 border-[#111111] bg-[#ffcf33]">
            <img
              src={Img}
              alt={Title}
              className="w-full h-full object-cover aspect-[16/9] transition-transform duration-300 hover:scale-105"
            />
          </div>

          <div className="mt-4 space-y-3">
            {/* Judul dengan Teks Kontras dan Tebal */}
            <h3 className="text-xl font-extrabold text-[#111111] tracking-tight line-clamp-1">
              {Title}
            </h3>

            {/* Deskripsi */}
            <p className="text-[#111111] text-sm leading-relaxed font-medium line-clamp-2">
              {Description}
            </p>

            {/* Aksi / Tombol */}
            <div className="pt-2 flex items-center justify-between gap-2 border-t-2 border-[#111111]/20">
              {ProjectLink ? (
                <a
                  href={ProjectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleLiveDemo}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm bg-[#ffcf33] text-[#111111] border-2 border-[#111111] shadow-[2px_2px_0px_#111111] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none font-bold text-xs uppercase transition-all"
                >
                  <span>Live Demo</span>
                  <ExternalLink className="w-3.5 h-3.5 stroke-[2.5]" />
                </a>
              ) : (
                <span className="text-[#111111]/50 text-xs font-bold uppercase">
                  No Demo
                </span>
              )}

              {id ? (
                <Link
                  to={`/project/${toSlug(Title || "")}`}
                  onClick={handleDetails}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm bg-[#111111] text-white border-2 border-[#111111] shadow-[2px_2px_0px_#ff5c58] hover:bg-[#ff5c58] hover:text-[#111111] hover:shadow-[2px_2px_0px_#111111] font-bold text-xs uppercase transition-all"
                >
                  <span>Details</span>
                  <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </Link>
              ) : (
                <span className="text-[#111111]/50 text-xs font-bold uppercase">
                  No Details
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProject;