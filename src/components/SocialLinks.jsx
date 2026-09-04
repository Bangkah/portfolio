import { useEffect } from "react";
import {
  Linkedin,
  Github,
  Instagram,
  ExternalLink,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const socialLinks = [
  {
    name: "LinkedIn",
    displayName: "Let's Connect",
    subText: "on LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/muhammad-dhyaul-atha/",
    bgColor: "bg-[#0A66C2]",
    textColor: "text-white",
    isPrimary: true,
  },
  {
    name: "Instagram",
    displayName: "Instagram",
    subText: "@mdhiyaulatha",
    icon: Instagram,
    url: "https://www.instagram.com/mdhiyaulatha/",
    bgColor: "bg-[#ff5c58]",
    textColor: "text-[#111111]",
  },
  {
    name: "GitHub",
    displayName: "Github",
    subText: "@Bangkah",
    icon: Github,
    url: "https://github.com/Bangkah",
    bgColor: "bg-[#ffcf33]",
    textColor: "text-[#111111]",
  },
  {
    name: "DevTo",
    displayName: "Dev.to",
    subText: "@bangkah",
    icon: ({ className, ...props }) => (
      <svg
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        {...props}
      >
        <path d="M7.42 10.05c-.18-.16-.46-.23-.84-.23H6l.02 2.44.04 2.45.56-.02c.41 0 .63-.07.83-.26.24-.24.26-.36.26-2.2 0-1.91-.02-1.96-.29-2.18zM0 4.94v14.12h24V4.94H0zM8.56 15.3c-.44.58-1.06.77-2.53.77H4.71V8.53h1.4c1.67 0 2.16.18 2.64.9.27.4.29.6.29 2.54s-.02 2.14-.48 2.79zm4.73-.8l-1.68-.02V13h1.76v-1.44h-1.74v-1.55h1.74v-1.46h-3.23v7.35h3.21v-1.4zm5.83-.17L17.77 14l-1.35-4.52h-1.44L17.15 17h1.23L20.5 8.53h-1.42l-1.34 4.52z"/>
      </svg>
    ),
    url: "https://dev.to/bangkah",
    bgColor: "bg-[#4fc3f7]",
    textColor: "text-[#111111]",
  },
];

const SocialLinks = () => {
  const linkedIn = socialLinks.find((link) => link.isPrimary);
  const otherLinks = socialLinks.filter((link) => !link.isPrimary);

  useEffect(() => {
    AOS.init({
      offset: 10,
    });
  }, []);

  return (
    <div className="w-full bg-white border-3 border-[#111111] shadow-[6px_6px_0px_#111111] rounded-sm p-6 py-8">
      <h3
        className="text-xl font-black uppercase tracking-wider text-[#111111] mb-6 flex items-center gap-2"
        data-aos="fade-down"
      >
        <span className="inline-block w-4 h-4 bg-[#ff5c58] border-2 border-[#111111]"></span>
        Connect With Me
      </h3>

      <div className="flex flex-col gap-4">
        {/* LinkedIn - Primary Row Neo-Brutalist */}
        {linkedIn && (
          <a
            href={linkedIn.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-between p-4 bg-[#0A66C2] text-white border-3 border-[#111111] shadow-[4px_4px_0px_#111111] hover:shadow-[6px_6px_0px_#111111] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all duration-200 rounded-sm"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="relative flex items-center gap-4">
              <div className="p-2 bg-[#111111] text-white border-2 border-[#111111] shadow-[2px_2px_0px_#ffcf33]">
                <linkedIn.icon className="w-6 h-6 stroke-[2.5]" />
              </div>

              <div className="flex flex-col">
                <span className="text-lg font-black uppercase tracking-tight leading-none">
                  {linkedIn.displayName}
                </span>
                <span className="text-xs font-bold text-white/80 mt-1">
                  {linkedIn.subText}
                </span>
              </div>
            </div>

            <ExternalLink className="w-5 h-5 stroke-[2.5] text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        )}

        {/* Other Links Grid Neo-Brutalist */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {otherLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative flex items-center justify-between p-4 ${link.bgColor} ${link.textColor} border-3 border-[#111111] shadow-[4px_4px_0px_#111111] hover:shadow-[6px_6px_0px_#111111] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all duration-200 rounded-sm`}
              data-aos="fade-up"
              data-aos-delay={200 + index * 100}
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="p-2 bg-[#111111] text-white border-2 border-[#111111] shadow-[2px_2px_0px_#ffffff] shrink-0">
                  <link.icon className="w-5 h-5 stroke-[2.5]" />
                </div>

                <div className="flex flex-col min-w-0">
                  <span className="text-sm font-black uppercase tracking-tight truncate leading-tight">
                    {link.displayName}
                  </span>
                  <span className="text-xs font-bold text-[#111111]/80 truncate">
                    {link.subText}
                  </span>
                </div>
              </div>

              <ExternalLink className="w-4 h-4 stroke-[2.5] shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;