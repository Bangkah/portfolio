import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full mt-12 bg-[#f4f0e6]">
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Garis Pemisah Neo-Brutalist (Hard Border) */}
        <div className="border-t-3 border-[#111111] mb-6" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white border-3 border-[#111111] p-4 shadow-[4px_4px_0px_#111111] rounded-sm">
          <span className="text-sm font-bold text-[#111111] text-center sm:text-left">
            © {currentYear}{" "}
            <a
              href="https://mdhiyaulatha.me"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#ffcf33] px-2 py-0.5 border-2 border-[#111111] shadow-[2px_2px_0px_#111111] hover:bg-[#ff5c58] hover:text-white transition-all inline-block ml-1"
            >
              Bangkah™
            </a>
            . All Rights Reserved.
          </span>

          <span className="text-xs font-black uppercase tracking-widest bg-[#111111] text-[#f4f0e6] px-3 py-1 rounded-sm border-2 border-[#111111]">
            Neo-Brutalist Edition
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;