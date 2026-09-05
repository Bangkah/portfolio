import React, { useState, useEffect, memo } from "react"
import { Helmet } from "react-helmet-async"
import { Github, Linkedin, Mail, ExternalLink, Instagram, Sparkles } from "lucide-react"
import AOS from 'aos'
import 'aos/dist/aos.css'

const StatusBadge = memo(() => (
  <div className="inline-block" data-aos="zoom-in" data-aos-delay="200">
    <div className="relative inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#ffcf33] text-[#111111] font-black uppercase text-xs tracking-wider border-3 border-[#111111] shadow-[3px_3px_0px_#111111] -rotate-1">
      <Sparkles className="w-4 h-4 fill-[#111111] stroke-[#111111]" />
      <span>Linux & Cloud Native</span>
    </div>
  </div>
));

const MainTitle = memo(() => (
  <div className="space-y-2" data-aos="fade-up" data-aos-delay="400">
    <h1 className="text-4xl sm:text-6xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-[#111111] leading-none">
      <span className="block bg-white px-3 py-1.5 border-4 border-[#111111] shadow-[6px_6px_0px_#111111] inline-block mb-3 rotate-1">
        DevOps &
      </span>
      <span className="block bg-[#ff5c58] text-white px-3 py-1.5 border-4 border-[#111111] shadow-[6px_6px_0px_#111111] inline-block -rotate-1">
        Linux Engineer
      </span>
    </h1>
  </div>
));

const TechStack = memo(({ tech }) => (
  <div className="px-3 py-1.5 hidden sm:block bg-white text-[#111111] font-extrabold text-xs uppercase tracking-wider border-2 border-[#111111] shadow-[2px_2px_0px_#111111] rounded-xs">
    {tech}
  </div>
));

const CTAButton = memo(({ href, text, icon: Icon }) => (
  <a href={href}>
    <button className="group relative px-6 py-3 bg-[#ffcf33] text-[#111111] font-black uppercase text-xs tracking-wider border-3 border-[#111111] shadow-[4px_4px_0px_#111111] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none active:translate-x-1 active:translate-y-1 transition-all flex items-center gap-2">
      <span>{text}</span>
      <Icon className={`w-4 h-4 stroke-[3] ${text === 'Contact' ? 'group-hover:translate-x-1' : 'group-hover:rotate-45'} transition-transform`} />
    </button>
  </a>
));

const SocialLink = memo(({ icon: Icon, link, label }) => (
  <a href={link} target="_blank" rel="noopener noreferrer" aria-label={label}>
    <button className="group relative p-2.5 bg-white text-[#111111] border-3 border-[#111111] shadow-[3px_3px_0px_#111111] hover:bg-[#ff5c58] hover:text-white hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all" aria-label={label}>
      <Icon className="w-5 h-5 stroke-[2.5]" />
    </button>
  </a>
));

const TYPING_SPEED = 100;
const ERASING_SPEED = 50;
const PAUSE_DURATION = 2000;
const WORDS = ["DevOps & Cloud Native", "Linux Systems Enthusiast", "Open Source Maintainer", "Mahasiswa Teknik Informatika"];
const TECH_STACK = ["Arch Linux", "Docker", "Nginx", "Bash Scripting", "Python", "Laravel", "Git", "MySQL", "CI/CD", "REST API"];
const SOCIAL_LINKS = [
  { icon: Github, link: "https://github.com/Bangkah", label: "GitHub Profile" },
  { icon: Linkedin, link: "https://www.linkedin.com/in/muhammad-dhyaul-atha/", label: "LinkedIn Profile" },
  { icon: Instagram, link: "https://www.instagram.com/mdhiyaulatha/", label: "Instagram Profile" }
];

const Home = () => {
  const [text, setText] = useState("")
  const [isTyping, setIsTyping] = useState(true)
  const [wordIndex, setWordIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const initAOS = () => {
      AOS.init({
        once: true,
        offset: 10,
        duration: 800,
      });
    };

    initAOS();
    window.addEventListener('resize', initAOS);
    return () => window.removeEventListener('resize', initAOS);
  }, []);

  useEffect(() => {
    setIsLoaded(true);
    return () => setIsLoaded(false);
  }, []);

  useEffect(() => {
    if (isTyping) {
      if (charIndex < WORDS[wordIndex].length) {
        const timeout = setTimeout(() => {
          setText((prev) => prev + WORDS[wordIndex][charIndex]);
          setCharIndex((prev) => prev + 1);
        }, TYPING_SPEED);

        return () => clearTimeout(timeout);
      }

      const timeout = setTimeout(() => setIsTyping(false), PAUSE_DURATION);
      return () => clearTimeout(timeout);
    }

    if (charIndex > 0) {
      const timeout = setTimeout(() => {
        setText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      }, ERASING_SPEED);

      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(() => {
      setWordIndex((prev) => (prev + 1) % WORDS.length);
      setIsTyping(true);
    }, ERASING_SPEED);

    return () => clearTimeout(timeout);
  }, [charIndex, isTyping, wordIndex]);

  return (
    <>
      <Helmet>
        <title>Muhammad Dhiyaul Atha — DevOps & Linux Engineer</title>
        <meta name="description" content="Website resmi Muhammad Dhiyaul Atha, DevOps & Linux Enthusiast serta Mahasiswa Teknik Informatika dari Aceh, Indonesia. Fokus pada pengelolaan sistem Linux, Docker, otomasi, dan pengembangan proyek open-source." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://mdhiyaulatha.me" />
        <meta property="og:title" content="Muhammad Dhiyaul Atha — DevOps & Linux Engineer" />
        <meta property="og:description" content="Website resmi dan portofolio Muhammad Dhiyaul Atha, DevOps & Linux Engineer." />
        <meta property="og:url" content="https://mdhiyaulatha.me" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-[#f4f0e6] text-[#111111] overflow-hidden px-[5%] sm:px-[5%] lg:px-[10%] pt-16" id="Home">
        <div className={`relative z-10 transition-all duration-500 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
          <div className="container mx-auto min-h-screen flex items-center">
            <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-12 lg:gap-16 py-12">
              
              {/* Left Column */}
              <div className="w-full lg:w-1/2 space-y-6 text-left" data-aos="fade-right" data-aos-delay="200">
                <div className="space-y-4">
                  <StatusBadge />
                  <MainTitle />

                  {/* Typing Effect Box */}
                  <div className="h-10 flex items-center" data-aos="fade-up" data-aos-delay="600">
                    <div className="inline-block bg-white px-3 py-1.5 border-2 border-[#111111] shadow-[3px_3px_0px_#111111]">
                      <span className="text-base md:text-lg font-black uppercase text-[#111111]">
                        {text}
                      </span>
                      <span className="w-2.5 h-4 bg-[#111111] ml-1.5 inline-block animate-pulse"></span>
                    </div>
                  </div>

                  {/* Description Box */}
                  <div className="bg-white border-3 border-[#111111] shadow-[5px_5px_0px_#111111] p-5 rounded-sm" data-aos="fade-up" data-aos-delay="800">
                    <p className="text-sm md:text-base font-semibold leading-relaxed text-[#111111]">
                      Hai! Saya Atha. Mahasiswa Teknik Informatika yang antusias dengan sistem Linux, kontainerisasi, dan otomatisasi infrastruktur. Suka ngulik environment Arch Linux, membangun CLI tools open-source, dan merancang sistem backend yang andal.
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 pt-2" data-aos="fade-up" data-aos-delay="1000">
                    {TECH_STACK.map((tech, index) => (
                      <TechStack key={index} tech={tech} />
                    ))}
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-row gap-4 w-full justify-start pt-2" data-aos="fade-up" data-aos-delay="1200">
                    <CTAButton href="#Portofolio" text="Projects" icon={ExternalLink} />
                    <CTAButton href="#Contact" text="Contact" icon={Mail} />
                  </div>

                  {/* Social Links */}
                  <div className="hidden sm:flex gap-3 justify-start pt-2" data-aos="fade-up" data-aos-delay="1400">
                    {SOCIAL_LINKS.map((social, index) => (
                      <SocialLink key={index} {...social} />
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column - Illustration / GIF Frame */}
              <div className="w-full lg:w-1/2 flex items-center justify-center" data-aos="fade-left" data-aos-delay="400">
                <div className="relative w-full max-w-md">
                  {/* Hard Drop Shadow Background Frame */}
                  <div className="absolute inset-0 bg-[#4fc3f7] border-4 border-[#111111] shadow-[10px_10px_0px_#111111] translate-x-3 translate-y-3" />
                  
                  {/* Main Image Container */}
                  <div className="relative bg-white border-4 border-[#111111] p-4 z-10">
                    <img
                      src="photo2.jpg"
                      alt="Developer photo"
                      className="w-full h-full object-contain filter contrast-125"
                    />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Home);