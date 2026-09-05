import React, { useEffect, memo, useMemo } from "react"
import { Link } from "react-router-dom"
import { FileText, Code, Award, Globe, ArrowUpRight, Sparkles } from "lucide-react"
import AOS from 'aos'
import 'aos/dist/aos.css'

// Memoized Components
const Header = memo(() => (
  <div className="text-center lg:mb-12 mb-8 px-[5%]">
    <div className="inline-block relative">
      <h2 
        className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-[#111111] relative z-10" 
        data-aos="fade-down"
      >
        About Me
      </h2>
      {/* Neo-Brutalist Accent Box */}
      <div className="absolute -bottom-2 -right-4 w-full h-1/2 bg-[#ffcf33] -z-10 border-3 border-[#111111]" />
    </div>
    <p 
      className="mt-6 text-[#111111] font-bold uppercase tracking-widest text-sm sm:text-base flex items-center justify-center gap-2"
      data-aos="fade-up"
    >
      <Sparkles className="w-5 h-5 fill-[#ffcf33] stroke-[#111111] stroke-2" />
      Building Linux Tools & Cloud-Native Systems
      <Sparkles className="w-5 h-5 fill-[#ffcf33] stroke-[#111111] stroke-2" />
    </p>
  </div>
));

const ProfileImage = memo(() => (
  <div className="flex justify-center lg:justify-end items-center sm:p-8">
    <div 
      className="relative group w-64 h-64 sm:w-80 sm:h-80" 
      data-aos="zoom-in"
    >
      {/* Hard Shadow Backdrop */}
      <div className="absolute top-4 left-4 w-full h-full bg-[#ff5c58] border-4 border-[#111111] transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2" />
      
      {/* Image Container */}
      <div className="absolute inset-0 bg-white border-4 border-[#111111] overflow-hidden z-10 transition-transform duration-300 group-hover:-translate-x-2 group-hover:-translate-y-2">
        <img
          src="/Photo.jpg"
          alt="Muhammad Dhiyaul Atha"
          className="w-full h-full object-cover group-hover:grayscale-0 transition-all duration-500"
          loading="lazy"
        />
      </div>

      {/* Decorative Badge */}
      <div className="absolute -bottom-4 -left-6 bg-[#ffcf33] border-3 border-[#111111] px-4 py-2 z-20 shadow-[4px_4px_0px_#111111] -rotate-6 group-hover:rotate-0 transition-transform duration-300">
        <span className="font-black uppercase text-sm text-[#111111]">DevOps & Linux</span>
      </div>
    </div>
  </div>
));

const AboutPage = () => {
  const { totalProjects, totalCertificates, YearExperience } = useMemo(() => {
    const storedProjects = JSON.parse(localStorage.getItem("projects") || "[]");
    const storedCertificates = JSON.parse(localStorage.getItem("certificates") || "[]");
    
    const startDate = new Date("2021-11-06");
    const today = new Date();
    const experience = today.getFullYear() - startDate.getFullYear() -
      (today < new Date(today.getFullYear(), startDate.getMonth(), startDate.getDate()) ? 1 : 0);

    return {
      totalProjects: storedProjects.length,
      totalCertificates: storedCertificates.length,
      YearExperience: experience
    };
  }, []);

  useEffect(() => {
    const initAOS = () => {
      AOS.init({
        once: true, 
        duration: 800, 
      });
    };

    initAOS();
    
    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(initAOS, 250);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimer);
    };
  }, []);

  return (
    <div
      className="h-auto pb-[10%] text-[#111111] bg-[#f4f0e6] overflow-hidden px-[5%] sm:px-[5%] lg:px-[10%] pt-16" 
      id="About"
      itemScope
      itemType="https://schema.org/Person"
    >
      <Header />

      <div className="w-full mx-auto pt-8 sm:pt-12 relative">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Teks & Deskripsi */}
          <div className="space-y-6 text-center lg:text-left">
            <h2 
              className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight leading-none"
              data-aos="fade-right"
            >
              <span className="block text-[#111111]">
                Hello, I'm
              </span>
              <span 
                className="inline-block mt-2 bg-[#ffcf33] text-[#111111] px-2 py-1 border-4 border-[#111111] shadow-[4px_4px_0px_#111111]"
                itemProp="name"
              >
                Muhammad Dhiyaul Atha
              </span>
            </h2>
            
            <p 
              className="text-base sm:text-lg font-semibold text-[#111111] leading-relaxed text-justify pb-4 sm:pb-0"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              Halo! Saya Muhammad Dhiyaul Atha, mahasiswa Teknik Informatika di Politeknik Negeri Lhokseumawe sekaligus open-source enthusiast yang berfokus pada ekosistem Linux, DevOps, dan teknologi cloud-native. Saya gemar membangun utilitas sistem, perkakas CLI (seperti ATHA dan NetInfo), serta arsitektur backend yang andal menggunakan Python, Docker, Nginx, dan Laravel.
              <br/><br/>
              Melalui eksperimen mandiri di lingkungan Arch Linux dan pengembangan infrastruktur otomatisasi, saya terus memperdalam sistem jaringan modern, manajemen container, serta praktik rekayasa perangkat lunak yang aman dan terukur. Terbuka untuk kolaborasi, proyek open-source, maupun peluang di bidang DevOps dan sistem backend.
            </p>

            {/* Quote Section Neo-Brutalist */}
            <div 
              className="relative bg-white border-4 border-[#111111] shadow-[6px_6px_0px_#111111] p-6 my-8 text-left"
              data-aos="fade-up"
            >
              <div className="absolute -top-4 -left-4 bg-[#ff5c58] border-3 border-[#111111] p-2 shadow-[2px_2px_0px_#111111]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#111111" className="transform scale-x-[-1]">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                </svg>
              </div>
              <blockquote className="text-[#111111] font-black italic text-sm md:text-base pt-2 uppercase tracking-wide">
                "Automate everything, keep infrastructure transparent, and build reliable systems from the kernel up."
              </blockquote>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 lg:px-0 w-full pt-4">
              <Link to="/cv" className="w-full lg:w-auto">
                <button 
                  data-aos="fade-up"
                  className="w-full lg:w-auto px-6 py-3 bg-[#ffcf33] text-[#111111] font-black uppercase text-sm tracking-wider border-3 border-[#111111] shadow-[4px_4px_0px_#111111] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all flex items-center justify-center gap-2"
                >
                  <FileText className="w-5 h-5 stroke-[2.5]" /> View & Download CV
                </button>
              </Link>
              <a href="#Portofolio" className="w-full lg:w-auto">
                <button 
                  data-aos="fade-up"
                  data-aos-delay="100"
                  className="w-full lg:w-auto px-6 py-3 bg-white text-[#111111] font-black uppercase text-sm tracking-wider border-3 border-[#111111] shadow-[4px_4px_0px_#111111] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all flex items-center justify-center gap-2"
                >
                  <Code className="w-5 h-5 stroke-[2.5]" /> View Projects
                </button>
              </a>
            </div>
          </div>

          {/* Profile Image Section */}
          <ProfileImage />
        </div>
      </div>
    </div>
  );
};

export default memo(AboutPage);   