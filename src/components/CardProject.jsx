import React from "react";
import { Link } from "react-router-dom";
import { ExternalLink, ArrowRight } from "lucide-react";

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
    <div className="group relative w-full max-w-sm mx-auto">
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-white/30 via-rose-50/20 to-pink-100/20 backdrop-blur-xl border border-white/20 shadow-xl transition-all duration-300 hover:shadow-pink-300/20 h-full flex flex-col">
        {/* overlay glow pink saat hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-300/10 via-rose-200/10 to-white/10 opacity-30 group-hover:opacity-60 transition-opacity duration-500"></div>

        <div className="relative p-5 z-10 flex flex-col h-full">
          {/* === Image Section === */}
          <div className="relative overflow-hidden rounded-lg aspect-[16/9]">
            <img src={Img} alt={Title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
          </div>

          {/* === Text Section === */}
          <div className="mt-4 flex flex-col justify-between flex-grow">
            <div className="space-y-3">
              <h3 className="text-xl font-extrabold bg-gradient-to-r from-pink-400 via-rose-400 to-pink-600 bg-clip-text text-transparent">{Title}</h3>

              <p className="text-white text-sm leading-relaxed line-clamp-2 font-medium">{Description}</p>
            </div>

            {/* === Action Buttons === */}
            <div className="pt-4 flex items-center justify-between mt-auto">
              {ProjectLink ? (
                <a href={ProjectLink} target="_blank" rel="noopener noreferrer" onClick={handleLiveDemo} className="inline-flex items-center space-x-2 text-pink-500 hover:text-pink-400 transition-colors duration-200">
                  <span className="text-sm font-semibold">Live Demo</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              ) : (
                <span className="text-gray-400 text-sm">Demo Not Available</span>
              )}

              {id ? (
                <Link
                  to={`/project/${id}`}
                  onClick={handleDetails}
                  className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-pink-100/40 hover:bg-pink-200/60 text-gray-800 font-medium transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-pink-400/50"
                >
                  <span className="text-sm font-semibold">Details</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              ) : (
                <span className="text-gray-400 text-sm">Details Not Available</span>
              )}
            </div>
          </div>

          <div className="absolute inset-0 border border-transparent group-hover:border-pink-300/40 rounded-xl transition-colors duration-300 -z-50"></div>
        </div>
      </div>
    </div>
  );
};

export default CardProject;
