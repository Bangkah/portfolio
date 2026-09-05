import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import { useSwipeable } from "react-swipeable";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import CardProject, { projects } from "../components/CardProject";
import TechStackIcon from "../components/TechStackIcon";
import Certificate from "../components/Certificate";

import AOS from "aos";
import "aos/dist/aos.css";

import { Code, Award, Boxes, Github } from "lucide-react";
import { GitHubCalendar } from "react-github-calendar";

/* =========================================================
   THEME TOKENS
   Warna & shadow neobrutalist yang dipakai di seluruh section
========================================================= */

const THEME = {
  ink: "#111111",       // warna teks utama & border
  bg: "#f4f0e6",         // warna background section
  surface: "#ffffff",    // warna kartu / panel
  accent: "#ffcf33",     // kuning aksen (hover, highlight)
  active: "#ff5c58",     // merah aksen (state aktif)
};

const shadowHard = (size = 5) => `${size}px ${size}px 0px ${THEME.ink}`;

/* =========================================================
   SECTION HEADER
   Header "X total" yang dipakai di panel Projects, gayanya
   sama persis dengan header di komponen Certificate.
========================================================= */

const SectionHeader = ({ icon: Icon, title, count, countLabel }) => (
  <div className="mb-6 p-5 flex items-center gap-3 rounded-lg bg-white border-3 border-[#111111] shadow-[6px_6px_0px_#111111]">
    <div className="p-3 shrink-0 rounded-md bg-[#111111] border-2 border-[#111111] shadow-[2px_2px_0px_#ff5c58] flex items-center justify-center">
      <Icon className="w-6 h-6 text-[#ffcf33] stroke-[2.5]" />
    </div>

    <div>
      <h1 className="text-xl font-black uppercase tracking-wide text-[#111111]">
        {title}
      </h1>
      <p className="text-xs font-medium uppercase tracking-wider text-[#111111]/70">
        {count} {countLabel}
      </p>
    </div>
  </div>
);

SectionHeader.propTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  countLabel: PropTypes.string.isRequired,
};

/* =========================================================
   TOGGLE BUTTON
========================================================= */

const ToggleButton = ({ onClick, isShowingMore }) => (
  <button
    onClick={onClick}
    className="
      px-4 py-2 rounded-sm cursor-pointer
      flex items-center gap-2
      bg-[#ffcf33] text-[#111111]
      text-xs font-black uppercase tracking-wider
      border-3 border-[#111111]
      shadow-[4px_4px_0px_#111111]
      hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none
      active:translate-x-1 active:translate-y-1
      transition-all
    "
  >
    <span className="flex items-center gap-2">
      {isShowingMore ? "See Less" : "See More"}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`transition-transform duration-200 ${
          isShowingMore ? "-rotate-180" : "rotate-0"
        }`}
      >
        <polyline points="6 9 12 15 18 9" />
      </svg>
    </span>
  </button>
);

ToggleButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  isShowingMore: PropTypes.bool.isRequired,
};

/* =========================================================
   TAB PANEL
========================================================= */

function TabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: { xs: 1, sm: 3 } }}>
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

/* =========================================================
   TECH STACK
========================================================= */

const techStacks = [
  { icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/archlinux/archlinux-original.svg", language: "Arch Linux" },
  { icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg", language: "Docker" },
  { icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nginx/nginx-original.svg", language: "Nginx" },
  { icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bash/bash-original.svg", language: "Bash Scripting" },
  { icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg", language: "Git / CI-CD" },
  
  { icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg", language: "Python" },
  { icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/laravel/laravel-original.svg", language: "Laravel" },
  { icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg", language: "MySQL" },
  { icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg", language: "Node JS" },
  
  { icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg", language: "React.js" },
  { icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg", language: "Tailwind CSS" },
  { icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vitejs/vitejs-original.svg", language: "Vite" },
];

/* =========================================================
   RESPONSIVE HELPER
   Jumlah project awal: 4 di mobile, 6 di desktop.
   Di-update saat resize supaya tetap akurat.
========================================================= */

const MOBILE_BREAKPOINT = 768;

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" && window.innerWidth < MOBILE_BREAKPOINT
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function FullWidthTabs() {
  const theme = useTheme();
  const isMobile = useIsMobile();

  const [value, setValue] = useState(0);
  const [showAllProjects, setShowAllProjects] = useState(false);

  useEffect(() => {
    AOS.init({ once: false });
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const toggleShowMoreProjects = useCallback(() => {
    setShowAllProjects((prev) => !prev);
  }, []);

  const initialProjectItems = isMobile ? 4 : 6;
  const displayedProjects = showAllProjects
    ? projects
    : projects.slice(0, initialProjectItems);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => setValue((current) => Math.min(2, current + 1)),
    onSwipedRight: () => setValue((current) => Math.max(0, current - 1)),
    trackMouse: true,
  });

  return (
    <div
      className="md:px-[10%] px-[5%] w-full sm:mt-0 mt-[3rem] overflow-hidden py-12"
      style={{ backgroundColor: THEME.bg, color: THEME.ink }}
      id="Portofolio"
    >
      {/* HEADER */}
      <div className="text-center pb-12" data-aos="fade-up">
        <div className="inline-block relative group mb-3">
          <h2
            className="text-4xl md:text-6xl font-black uppercase tracking-tighter relative z-10"
            style={{ color: THEME.ink }}
          >
            Portfolio Showcase
          </h2>

          <div
            className="absolute -bottom-1 -right-3 w-full h-1/2 -z-10 border-2"
            style={{ backgroundColor: THEME.accent, borderColor: THEME.ink }}
          />
        </div>

        <p
          className="font-bold uppercase tracking-wider text-sm md:text-base max-w-2xl mx-auto"
          style={{ color: THEME.ink }}
        >
          Explore my journey through projects, certifications, and technical
          expertise. Each section represents a milestone in my continuous
          learning path.
        </p>
      </div>

      {/* TABS */}
      <Box sx={{ width: "100%" }}>
        <AppBar
          position="static"
          elevation={0}
          sx={{
            bgcolor: THEME.surface,
            border: `3px solid ${THEME.ink}`,
            borderRadius: "4px",
            boxShadow: shadowHard(5),
            position: "relative",
            overflow: "hidden",
          }}
          className="md:px-2"
        >
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="inherit"
            indicatorColor="primary"
            variant="fullWidth"
            sx={{
              minHeight: "65px",
              "& .MuiTab-root": {
                fontSize: { xs: "0.85rem", md: "1rem" },
                fontWeight: 900,
                color: THEME.ink,
                textTransform: "uppercase",
                fontFamily: "inherit",
                transition: "all 0.2s ease",
                padding: "16px 0",
                zIndex: 1,
                margin: "6px",
                borderRadius: "2px",
                border: "2px solid transparent",
                "&:hover": {
                  backgroundColor: THEME.accent,
                  borderColor: THEME.ink,
                },
                "&.Mui-selected": {
                  color: THEME.ink,
                  backgroundColor: THEME.active,
                  borderColor: THEME.ink,
                  boxShadow: shadowHard(2),
                },
              },
              "& .MuiTabs-indicator": { display: "none" },
              "& .MuiTabs-flexContainer": { gap: "4px" },
            }}
          >
            <Tab
              icon={<Code className="mb-1 w-5 h-5 stroke-[2.5]" />}
              label="Projects"
              {...a11yProps(0)}
            />
            <Tab
              icon={<Award className="mb-1 w-5 h-5 stroke-[2.5]" />}
              label="Certificates"
              {...a11yProps(1)}
            />
            <Tab
              icon={<Boxes className="mb-1 w-5 h-5 stroke-[2.5]" />}
              label="Tech Stack"
              {...a11yProps(2)}
            />
          </Tabs>
        </AppBar>

        {/* SWIPE CONTAINER */}
        <div {...swipeHandlers}>
          {/* PROJECTS PANEL */}
          <TabPanel value={value} index={0} dir={theme.direction}>
            <div className="container mx-auto">
              <SectionHeader
                icon={Code}
                title="Projects"
                count={projects.length}
                countLabel="projects total"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                {displayedProjects.map((project, index) => (
                  <div
                    key={project.value}
                    data-aos="fade-up"
                    data-aos-delay={index * 50}
                    className="h-full"
                  >
                    <CardProject {...project} />
                  </div>
                ))}
              </div>

              {projects.length > initialProjectItems && (
                <div className="flex justify-center mt-10" data-aos="fade-up">
                  <ToggleButton
                    onClick={toggleShowMoreProjects}
                    isShowingMore={showAllProjects}
                  />
                </div>
              )}
            </div>
          </TabPanel>

          {/* CERTIFICATES PANEL */}
          <TabPanel value={value} index={1} dir={theme.direction}>
            <div className="container mx-auto">
              <Certificate />
            </div>
          </TabPanel>

          {/* TECH STACK PANEL */}
          <TabPanel value={value} index={2} dir={theme.direction}>
            <div className="container mx-auto flex justify-center items-center overflow-hidden pb-8">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 lg:gap-6 gap-4 w-full">
                {techStacks.map((stack, index) => (
                  <div
                    key={stack.language}
                    data-aos="fade-up"
                    data-aos-delay={index * 50}
                  >
                    <TechStackIcon
                      TechStackIcon={stack.icon}
                      Language={stack.language}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* GITHUB ACTIVITY */}
            <div
              className="container mx-auto flex justify-center items-center overflow-hidden pb-4"
              data-aos="fade-up"
            >
              <div className="w-full flex justify-center mt-6">
                <div
                  className="p-6 md:p-8 rounded-sm w-full max-w-4xl flex flex-col items-center border-4"
                  style={{
                    backgroundColor: THEME.surface,
                    borderColor: THEME.ink,
                    boxShadow: shadowHard(8),
                  }}
                >
                  <h3
                    className="text-xl md:text-2xl font-black uppercase mb-6 flex items-center gap-3"
                    style={{ color: THEME.ink }}
                  >
                    <Github className="w-6 h-6 stroke-[2.5]" style={{ color: THEME.ink }} />
                    GitHub Contributions
                  </h3>

                  <div
                    className="overflow-x-auto w-full flex justify-center p-2 border-2"
                    style={{ backgroundColor: THEME.bg, borderColor: THEME.ink }}
                  >
                    {/* GitHub Activity Section */}
                    <div className="container mx-auto flex justify-center items-center overflow-hidden pb-4" data-aos="fade-up">
                      <div className="w-full flex justify-center mt-6">
                        <div className="p-6 md:p-8 bg-white border-3 border-black shadow-[6px_6px_0px_0px_#000] rounded-xl w-full max-w-4xl flex flex-col items-center">
                          <h3 className="text-xl md:text-2xl font-black uppercase text-black mb-6 flex items-center gap-3 tracking-tight">
                            <Github className="w-6 h-6 text-black stroke-[2.5]" />
                            GitHub Contributions
                          </h3>
                          
                          {/* Wrapper Kalender dengan gaya Neo-Brutalist */}
                          <div className="overflow-x-auto w-full flex justify-center p-4 bg-[#f4f0e6] border-2 border-black rounded-lg shadow-[3px_3px_0px_0px_#000]">
                            <GitHubCalendar 
                              username="Bangkah" 
                              colorScheme="light" 
                              blockSize={14}
                              blockMargin={6}
                              fontSize={14}
                              theme={{
                                light: ['#ebecf0', '#ffde59', '#ff9f43', '#ff6b6b', '#111111'],
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>
        </div>
      </Box>
    </div>
  );
}