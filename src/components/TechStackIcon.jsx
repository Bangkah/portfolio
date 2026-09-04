import React from 'react';

const TechStackIcon = ({ TechStackIcon, Language }) => {
  return (
    <div className="group relative bg-white border-3 border-[#111111] shadow-[4px_4px_0px_#111111] hover:shadow-[7px_7px_0px_#111111] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200 p-5 rounded-sm flex flex-col items-center justify-center gap-3 cursor-pointer">
      
      {/* Icon Frame dengan Hard Border & Accent Background */}
      <div className="p-3 bg-[#f4f0e6] border-2 border-[#111111] shadow-[2px_2px_0px_#111111] group-hover:bg-[#ffcf33] transition-colors duration-200 rounded-sm">
        <img 
          src={TechStackIcon} 
          alt={`${Language} icon`} 
          className="h-12 w-12 md:h-16 md:w-16 object-contain transform group-hover:scale-110 transition-transform duration-200"
        />
      </div>

      {/* Language Badge */}
      <span className="text-[#111111] font-black text-xs md:text-sm uppercase tracking-wider bg-[#f4f0e6] px-2 py-0.5 border border-[#111111] group-hover:bg-[#111111] group-hover:text-white transition-colors duration-200 rounded-xs">
        {Language}
      </span>
    </div>
  );
};

export default TechStackIcon;