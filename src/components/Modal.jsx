import React, { useState } from 'react';
import { X, ArrowRight, ExternalLink } from 'lucide-react';

const ProjectCardModal = ({ title, description, link }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Trigger Button Neo-Brutalist */}
      <button
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm bg-[#111111] text-white border-2 border-[#111111] shadow-[2px_2px_0px_#ff5c58] hover:bg-[#ff5c58] hover:text-[#111111] hover:shadow-[2px_2px_0px_#111111] font-bold text-xs uppercase transition-all"
        onClick={() => setIsOpen(true)}
      >
        <span>Details</span>
        <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
      </button>

      {/* Modal Backdrop & Content */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#111111]/75 backdrop-blur-sm p-4"
          onClick={() => setIsOpen(false)}
        >
          {/* Modal Container Neo-Brutalist */}
          <div
            className="relative w-full max-w-md rounded-sm bg-white border-4 border-[#111111] p-6 shadow-[10px_10px_0px_#111111] text-[#111111] sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button Neo-Brutalist (Ikon X menggantikan Eye agar lebih intuitif) */}
            <button
              className="absolute -top-4 -right-4 rounded-sm bg-[#ff5c58] p-2 text-[#111111] border-3 border-[#111111] shadow-[3px_3px_0px_#111111] hover:bg-[#ff3b30] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all"
              onClick={() => setIsOpen(false)}
              aria-label="Close modal"
            >
              <X className="h-5 w-5 stroke-[3]" />
            </button>

            {/* Modal Title */}
            <h2 className="mb-3 text-2xl font-black uppercase tracking-tight text-[#111111]">
              {title}
            </h2>

            {/* Separator Line */}
            <div className="border-b-3 border-[#111111] mb-4" />

            {/* Modal Description */}
            <p className="mb-6 text-sm font-semibold leading-relaxed text-[#111111]/90">
              {description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-end gap-3 pt-2">
              {link && (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-sm bg-[#ffcf33] px-4 py-2 font-black uppercase text-xs text-[#111111] border-2 border-[#111111] shadow-[3px_3px_0px_#111111] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all"
                >
                  <span>Live Demo</span>
                  <ExternalLink className="h-4 w-4 stroke-[2.5]" />
                </a>
              )}
              <button
                className="rounded-sm bg-[#f4f0e6] px-4 py-2 font-black uppercase text-xs text-[#111111] border-2 border-[#111111] shadow-[3px_3px_0px_#111111] hover:bg-white hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all"
                onClick={() => setIsOpen(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCardModal;