import React from "react";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const ThankYouPage = () => {
  return (
    <div className="min-h-screen bg-[#f4f0e6] text-[#111111] flex items-center justify-center px-4">
      <div className="bg-white border-4 border-[#111111] shadow-[8px_8px_0px_#111111] p-8 md:p-12 text-center max-w-lg w-full rounded-sm">
        <div className="flex justify-center mb-6">
          <div className="p-3 bg-[#7bd88f] border-3 border-[#111111] shadow-[3px_3px_0px_#111111]">
            <CheckCircle className="w-12 h-12 text-[#111111] stroke-[3]" />
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4 text-[#111111]">
          Thank You!
        </h1>
        <p className="text-[#111111] font-bold text-sm md:text-base uppercase tracking-wide mb-8">
          Your message has been received. I'll get back to you as soon as possible.
        </p>
        <Link
          to="/"
          className="inline-flex items-center justify-center px-8 py-3.5 bg-[#ffcf33] text-[#111111] font-black uppercase text-sm tracking-wider border-3 border-[#111111] shadow-[4px_4px_0px_#111111] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none active:translate-x-1 active:translate-y-1 transition-all rounded-sm"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ThankYouPage;