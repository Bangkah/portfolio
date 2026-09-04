import React, { useEffect } from "react";
import { Download, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import cvFile from "../assets/cv/Muhammad_Dhiyaul_Atha_Modern_Clean_CV.pdf";

const CVPage = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  const cvUrl = cvFile;

  return (
    <div className="min-h-screen bg-[#f4f0e6] text-[#111111] py-20 px-[5%] md:px-[10%]">
      <div className="max-w-4xl mx-auto">
        {/* Navigation Neo-Brutalist */}
        <Link 
          to="/"
          className="inline-flex items-center gap-2 px-4 py-2 bg-white border-3 border-[#111111] shadow-[4px_4px_0px_#111111] font-black uppercase text-xs hover:bg-[#ffcf33] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all mb-8 rounded-sm"
        >
          <ArrowLeft className="w-4 h-4 stroke-[3]" />
          Kembali ke Beranda
        </Link>

        {/* Header Neo-Brutalist */}
        <div className="text-center mb-12" data-aos="fade-down">
          <div className="inline-block relative group">
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-[#111111] relative z-10">
              Curriculum Vitae
            </h1>
            {/* Dekorasi Blok Aksen di Belakang Teks */}
            <div className="absolute -bottom-2 -right-4 w-full h-1/2 bg-[#4fc3f7] -z-10 border-3 border-[#111111]" />
          </div>
          <p className="text-[#111111] font-bold uppercase tracking-widest text-sm sm:text-base mt-6 max-w-xl mx-auto bg-white border-2 border-[#111111] shadow-[4px_4px_0px_#111111] p-3 rounded-sm">
            Lihat secara langsung atau unduh salinan Curriculum Vitae saya.
          </p>
        </div>

        {/* Viewer Container Neo-Brutalist */}
        <div 
          className="relative bg-white border-4 border-[#111111] shadow-[8px_8px_0px_#111111] rounded-sm overflow-hidden mb-8"
          data-aos="fade-up" 
          data-aos-delay="100"
        >
          {/* Mac-Style Window Header berdesain Kaku */}
          <div className="flex items-center justify-between p-3 border-b-4 border-[#111111] bg-[#ffcf33]">
            <div className="flex space-x-2">
              <div className="w-4 h-4 rounded-full bg-[#ff5c58] border-2 border-[#111111] shadow-[1.5px_1.5px_0px_#111111]"></div>
              <div className="w-4 h-4 rounded-full bg-[#f4f0e6] border-2 border-[#111111] shadow-[1.5px_1.5px_0px_#111111]"></div>
              <div className="w-4 h-4 rounded-full bg-[#7bd88f] border-2 border-[#111111] shadow-[1.5px_1.5px_0px_#111111]"></div>
            </div>
            
            {/* Download Button */}
            <a 
              href={cvUrl}
              download="CV_Muhammad_Dhiyaul_Atha.pdf"
              className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#111111] text-white border-2 border-[#111111] shadow-[3px_3px_0px_#ff5c58] font-black uppercase text-xs hover:bg-[#ff5c58] hover:text-[#111111] hover:shadow-[3px_3px_0px_#111111] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-1 active:translate-y-1 active:shadow-none transition-all rounded-sm"
            >
              <Download className="w-4 h-4 stroke-[2.5]" />
              Download PDF
            </a>
          </div>

          {/* Actual PDF Viewer */}
          <div className="w-full aspect-[1/1.4] md:aspect-[16/10] bg-[#f4f0e6]">
            <iframe 
              src={`${cvUrl}#toolbar=0`} 
              className="w-full h-full"
              title="CV Viewer"
            >
              This browser does not support PDFs. Please download the PDF to view it.
            </iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CVPage;