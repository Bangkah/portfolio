import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import { useSwipeable } from "react-swipeable";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CardProject from "../components/CardProject";
import TechStackIcon from "../components/TechStackIcon";
import AOS from "aos";
import "aos/dist/aos.css";
import Certificate from "../components/Certificate";
import { Code, Award, Boxes, Github } from "lucide-react";
import { GitHubCalendar } from "react-github-calendar";

const ToggleButton = ({ onClick, isShowingMore }) => (
  <button
    onClick={onClick}
    className="
      px-4 py-2
      bg-[#ffcf33] 
      text-[#111111] 
      text-xs 
      font-black 
      uppercase 
      tracking-wider
      border-3 
      border-[#111111] 
      shadow-[4px_4px_0px_#111111] 
      hover:translate-x-0.5 
      hover:translate-y-0.5 
      hover:shadow-none 
      active:translate-x-1 
      active:translate-y-1 
      transition-all 
      flex 
      items-center 
      gap-2 
      rounded-sm
      cursor-pointer
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
        className={`transition-transform duration-200 ${isShowingMore ? "-rotate-180" : "rotate-0"}`}
      >
        <polyline points="6 9 12 15 18 9"></polyline>
      </svg>
    </span>
  </button>
);

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

const techStacks = [
  { icon: "html.svg", language: "HTML" },
  { icon: "css.svg", language: "CSS" },
  { icon: "javascript.svg", language: "JavaScript" },
  { icon: "tailwind.svg", language: "Tailwind CSS" },
  { icon: "reactjs.svg", language: "ReactJS" },
  { icon: "vite.svg", language: "Vite" },
  { icon: "nodejs.svg", language: "Node JS" },
  { icon: "bootstrap.svg", language: "Bootstrap" },
  { icon: "firebase.svg", language: "Firebase" },
  { icon: "MUI.svg", language: "Material UI" },
  { icon: "vercel.svg", language: "Vercel" },
  { icon: "SweetAlert.svg", language: "SweetAlert2" },
];

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const [projects, setProjects] = useState([]);
  const [certificates, setCertificates] = useState([]);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [showAllCertificates, setShowAllCertificates] = useState(false);
  const isMobile = window.innerWidth < 768;
  const initialItems = isMobile ? 4 : 6;

  useEffect(() => {
    AOS.init({
      once: false,
    });
  }, []);

  useEffect(() => {
    try {
      setProjects(JSON.parse(localStorage.getItem('projects') || '[]'));
      setCertificates(JSON.parse(localStorage.getItem('certificates') || '[]'));
    } catch (error) {
      console.warn('Failed to read local portfolio data:', error);
    }
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const toggleShowMore = useCallback((type) => {
    if (type === 'projects') {
      setShowAllProjects(prev => !prev);
    } else {
      setShowAllCertificates(prev => !prev);
    }
  }, []);

  const displayedProjects = showAllProjects ? projects : projects.slice(0, initialItems);
  const displayedCertificates = showAllCertificates ? certificates : certificates.slice(0, initialItems);

  return (
    <div className="md:px-[10%] px-[5%] w-full sm:mt-0 mt-[3rem] bg-[#f4f0e6] text-[#111111] overflow-hidden py-12" id="Portofolio">
      {/* Header Section */}
      <div className="text-center pb-12" data-aos="fade-up">
        <div className="inline-block relative group mb-3">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-[#111111] relative z-10">
            Portfolio Showcase
          </h2>
          <div className="absolute -bottom-1 -right-3 w-full h-1/2 bg-[#ffcf33] -z-10 border-2 border-[#111111]" />
        </div>
        <p className="text-[#111111] font-bold uppercase tracking-wider text-sm md:text-base max-w-2xl mx-auto">
          Explore my journey through projects, certifications, and technical expertise. 
          Each section represents a milestone in my continuous learning path.
        </p>
      </div>

      <Box sx={{ width: "100%" }}>
        {/* AppBar & Tabs Styling */}
        <AppBar
          position="static"
          elevation={0}
          sx={{
            bgcolor: "#ffffff",
            border: "3px solid #111111",
            borderRadius: "4px",
            boxShadow: "5px 5px 0px #111111",
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
                fontWeight: "900",
                color: "#111111",
                textTransform: "uppercase",
                fontFamily: "inherit",
                transition: "all 0.2s ease",
                padding: "16px 0",
                zIndex: 1,
                margin: "6px",
                borderRadius: "2px",
                border: "2px solid transparent",
                "&:hover": {
                  backgroundColor: "#ffcf33",
                  borderColor: "#111111",
                },
                "&.Mui-selected": {
                  color: "#111111",
                  backgroundColor: "#ff5c58",
                  borderColor: "#111111",
                  boxShadow: "2px 2px 0px #111111",
                },
              },
              "& .MuiTabs-indicator": {
                display: "none",
              },
              "& .MuiTabs-flexContainer": {
                gap: "4px",
              },
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

        <div {...useSwipeable({
          onSwipedLeft: () => setValue((v) => Math.min(2, v + 1)),
          onSwipedRight: () => setValue((v) => Math.max(0, v - 1)),
          trackMouse: true,
        })}>
          {/* Projects Panel */}
          <TabPanel value={value} index={0} dir={theme.direction}>
            <div className="container mx-auto flex justify-center items-center overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 gap-6 w-full">
                {displayedProjects.map((project, index) => (
                  <div
                    key={project.id || index}
                    data-aos="fade-up"
                  >
                    <CardProject
                      Img={project.Img}
                      Title={project.Title}
                      Description={project.Description}
                      Link={project.Link}
                      id={project.id}
                    />
                  </div>
                ))}
              </div>
            </div>
            {projects.length > initialItems && (
              <div className="mt-8 w-full flex justify-start">
                <ToggleButton
                  onClick={() => toggleShowMore('projects')}
                  isShowingMore={showAllProjects}
                />
              </div>
            )}
          </TabPanel>

          {/* Certificates Panel */}
          <TabPanel value={value} index={1} dir={theme.direction}>
            <div className="container mx-auto flex justify-center items-center overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                {displayedCertificates.map((certificate, index) => (
                  <div
                    key={certificate.id || index}
                    data-aos="fade-up"
                  >
                    <Certificate ImgSertif={certificate.Img} />
                  </div>
                ))}
              </div>
            </div>
            {certificates.length > initialItems && (
              <div className="mt-8 w-full flex justify-start">
                <ToggleButton
                  onClick={() => toggleShowMore('certificates')}
                  isShowingMore={showAllCertificates}
                />
              </div>
            )}
          </TabPanel>

          {/* Tech Stack & GitHub Contributions Panel */}
          <TabPanel value={value} index={2} dir={theme.direction}>
            <div className="container mx-auto flex justify-center items-center overflow-hidden pb-8">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 lg:gap-6 gap-4 w-full">
                {techStacks.map((stack, index) => (
                  <div
                    key={index}
                    data-aos="fade-up"
                  >
                    <TechStackIcon TechStackIcon={stack.icon} Language={stack.language} />
                  </div>
                ))}
              </div>
            </div>
            
            {/* GitHub Activity Section */}
            <div className="container mx-auto flex justify-center items-center overflow-hidden pb-4" data-aos="fade-up">
              <div className="w-full flex justify-center mt-6">
                <div className="p-6 md:p-8 bg-white border-4 border-[#111111] shadow-[8px_8px_0px_#111111] rounded-sm w-full max-w-4xl flex flex-col items-center">
                  <h3 className="text-xl md:text-2xl font-black uppercase text-[#111111] mb-6 flex items-center gap-3">
                    <Github className="w-6 h-6 text-[#111111] stroke-[2.5]" />
                    GitHub Contributions
                  </h3>
                  <div className="overflow-x-auto w-full flex justify-center p-2 bg-[#f4f0e6] border-2 border-[#111111]">
                    <GitHubCalendar 
                      username="Bangkah" 
                      colorScheme="light" 
                      blockSize={14}
                      blockMargin={5}
                      fontSize={14}
                    />
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