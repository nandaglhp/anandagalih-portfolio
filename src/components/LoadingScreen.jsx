import React from "react";

const LoadingScreen = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-rose-50 to-rose-100 flex items-center justify-center">
      <div className="relative">
        {/* Soft glow background */}
        <div className="absolute -inset-6 bg-gradient-to-r from-rose-200 via-pink-300 to-rose-400 rounded-full opacity-30 blur-3xl animate-pulse"></div>

        {/* Spinner & Text */}
        <div className="relative flex flex-col items-center gap-4 p-8">
          <div className="w-12 h-12 rounded-full border-4 border-t-transparent border-rose-400 animate-spin"></div>

          <div className="relative">
            {/* Subtle glow around text */}
            <div className="absolute -inset-1 bg-gradient-to-r from-rose-200 to-pink-400 rounded-xl blur opacity-25"></div>
            <span className="relative text-rose-600 font-medium text-sm tracking-wide">Loading your experience...</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
