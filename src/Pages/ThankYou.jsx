import React from "react";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const ThankYouPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-[#3a2a31] relative">
      {/* Background glow lembut */}
      <div className="absolute -top-40 left-0 w-[600px] h-[600px] bg-pink-500/10 rounded-full blur-[160px]"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-pink-300/10 rounded-full blur-[160px]"></div>

      <div className="text-center max-w-md relative z-10">
        {/* Ikon */}
        <div className="flex justify-center mb-6">
          <CheckCircle className="w-16 h-16 text-pink-400 drop-shadow-sm" />
        </div>

        {/* Judul */}
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-rose-400 to-purple-400">Thank You!</h1>

        {/* Deskripsi */}
        <p className="text-gray-300 text-lg mb-8 leading-relaxed">
          Your message has been received 💌 <br />
          I’ll get back to you as soon as possible.
        </p>

        {/* Tombol */}
        <Link
          to="/"
          className="inline-flex items-center justify-center px-8 py-3 
          bg-gradient-to-r from-pink-400 via-rose-400 to-purple-400 
          text-white rounded-xl font-semibold 
          shadow-md hover:shadow-pink-200/40 
          transition-all duration-300 
          hover:scale-[1.03] active:scale-[0.97]"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ThankYouPage;
