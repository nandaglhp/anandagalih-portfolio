import React, { useState } from "react";
import { Eye, ArrowRight, ExternalLink } from "lucide-react";

const ProjectCardModal = ({ title, description, link }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Details Button */}
      <button
        className="inline-flex items-center space-x-1 px-3 py-1.5 rounded-lg 
                   bg-gradient-to-r from-rose-100 to-pink-50 
                   text-rose-600 hover:from-rose-200 hover:to-pink-100 
                   transition-all duration-300 font-medium shadow-sm"
        onClick={() => setIsOpen(true)}
      >
        <span className="text-sm">Details</span>
        <ArrowRight className="w-4 h-4" />
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm animate-fade-in" onClick={() => setIsOpen(false)}>
          {/* Modal Content */}
          <div
            className="relative w-full max-w-md rounded-2xl bg-white/80 backdrop-blur-xl 
                       shadow-2xl p-6 sm:p-8 text-gray-800 border border-rose-100/40 animate-slide-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 rounded-full p-2 hover:bg-rose-100/60 
                         text-rose-500 transition-all duration-200"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-5 w-5" />
            </button>

            {/* Title */}
            <h2 className="mb-3 text-2xl font-semibold text-rose-600">{title}</h2>

            {/* Description */}
            <p className="mb-6 text-gray-600 leading-relaxed">{description}</p>

            {/* Buttons */}
            <div className="flex justify-end space-x-4">
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-md 
                           bg-gradient-to-r from-rose-400 to-pink-500 
                           text-white px-4 py-2 font-medium shadow-md 
                           hover:from-rose-500 hover:to-pink-600 
                           transition-all duration-300"
              >
                Live Demo <ExternalLink className="ml-2 inline-block h-5 w-5" />
              </a>

              <button
                className="rounded-md border border-rose-300 text-rose-500 
                           px-4 py-2 font-medium hover:bg-rose-50 
                           transition-all duration-300"
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
