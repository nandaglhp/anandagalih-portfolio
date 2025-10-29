import React from "react";

const TechStackIcon = ({ TechStackIcon, Language }) => {
  return (
    <div className="group p-6 rounded-2xl bg-pink-50/[0.05] hover:bg-pink-100/[0.08] transition-all duration-300 ease-in-out flex flex-col items-center justify-center gap-3 hover:scale-105 cursor-pointer shadow-lg hover:shadow-xl">
      <div className="relative">
        {/* Glow ring saat hover */}
        <div className="absolute -inset-1 bg-gradient-to-r from-pink-300 to-rose-400 rounded-full opacity-0 group-hover:opacity-50 blur transition duration-300"></div>

        <img src={TechStackIcon} alt={`${Language} icon`} className="relative h-16 w-16 md:h-20 md:w-20 transform transition-transform duration-300 group-hover:scale-105" />
      </div>

      {/* Nama bahasa / tech */}
      <span className="text-pink-100 font-semibold text-sm md:text-base tracking-wide group-hover:text-white transition-colors duration-300">{Language}</span>
    </div>
  );
};

export default TechStackIcon;
