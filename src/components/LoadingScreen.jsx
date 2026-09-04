import React from 'react';

const LoadingScreen = () => {
  return (
    <div className="min-h-screen bg-[#f4f0e6] flex items-center justify-center p-4">
      {/* Box Utama Loading Neo-Brutalist */}
      <div className="relative bg-white border-4 border-[#111111] shadow-[8px_8px_0px_#111111] p-8 rounded-sm flex flex-col items-center gap-6 max-w-xs w-full text-center">
        
        {/* Decorative Badge Aksesibilitas */}
        <span className="absolute -top-4 bg-[#ff5c58] text-white text-xs font-black uppercase tracking-widest px-3 py-1 border-2 border-[#111111] shadow-[2px_2px_0px_#111111]">
          System Status
        </span>

        {/* Spinner Custom Neo-Brutalist */}
        <div className="relative w-16 h-16 flex items-center justify-center">
          {/* Outer Border Spin Box */}
          <div className="w-14 h-14 bg-[#ffcf33] border-4 border-[#111111] shadow-[3px_3px_0px_#111111] animate-spin"></div>
          {/* Inner Accent Box */}
          <div className="absolute w-6 h-6 bg-[#111111]"></div>
        </div>

        {/* Text Container */}
        <div className="space-y-1">
          <h3 className="text-xl font-extrabold uppercase tracking-tight text-[#111111]">
            Loading...
          </h3>
          <p className="text-xs font-bold text-[#111111]/70 uppercase tracking-wider">
            Preparing Workspace
          </p>
        </div>

        {/* Progress Bar Sederhana */}
        <div className="w-full bg-[#f4f0e6] border-2 border-[#111111] h-4 rounded-sm overflow-hidden relative">
          <div className="bg-[#ffcf33] border-r-2 border-[#111111] h-full w-2/3 animate-pulse"></div>
        </div>

      </div>
    </div>
  );
};

export default LoadingScreen;