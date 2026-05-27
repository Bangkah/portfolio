import React, { useEffect } from "react";
import { Copy, Download, ArrowLeft } from "lucide-react";
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
    <div className="min-h-screen bg-[#030014] text-white py-20 px-[5%] md:px-[10%]">
      <div className="max-w-4xl mx-auto">
        {/* Navigation */}
        <Link 
          to="/"
          className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-sm text-gray-300 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Kembali ke Beranda
        </Link>

        {/* Header */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h1 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#6366f1] to-[#a855f7] mb-4">
            Curriculum Vitae
          </h1>
          <p className="text-gray-400">
            Lihat secara langsung atau unduh salinan Curriculum Vitae saya.
          </p>
        </div>

        {/* Viewer Container */}
        <div 
          className="relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden mb-8 shadow-2xl"
          data-aos="fade-up" 
          data-aos-delay="200"
        >
          <div className="flex items-center justify-between p-4 border-b border-white/10 bg-black/20">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            
            {/* Download Button */}
            <a 
              href={cvUrl}
              download="CV_Muhammad_Dhiyaul_Atha.pdf"
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-lg text-sm font-medium transition-all hover:scale-105"
            >
              <Download className="w-4 h-4" />
              Download PDF
            </a>
          </div>

          {/* Actual PDF Viewer */}
          <div className="w-full aspect-[1/1.4] md:aspect-[16/10] bg-black/40">
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
