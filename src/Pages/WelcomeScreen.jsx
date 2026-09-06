import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Github, Globe, User } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const TypewriterEffect = ({ text }) => {
  const [displayText, setDisplayText] = useState('');
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= text.length) {
        setDisplayText(text.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, [text]);

  return (
    <span className="inline-block">
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

const BackgroundEffect = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Dekorasi Grid Neo-Brutalist */}
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#11111115_1px,transparent_1px),linear-gradient(to_bottom,#11111115_1px,transparent_1px)] bg-[size:3rem_3rem]" />
  </div>
);

const IconButton = ({ Icon }) => (
  <div className="relative group">
    <div className="relative p-3 sm:p-4 bg-white text-[#111111] border-3 border-[#111111] shadow-[4px_4px_0px_#111111] group-hover:translate-x-0.5 group-hover:translate-y-0.5 group-hover:shadow-[2px_2px_0px_#111111] transition-all">
      <Icon className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-[#111111] stroke-[2.5]" />
    </div>
  </div>
);

const WelcomeScreen = ({ onLoadingComplete }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: false,
    });

    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => {
        onLoadingComplete?.();
      }, 800);
    }, 3400);
    
    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  const containerVariants = {
    exit: {
      opacity: 0,
      scale: 1.05,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const childVariants = {
    exit: {
      y: -20,
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 bg-[#f4f0e6] z-50 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit="exit"
          variants={containerVariants}
        >
          <BackgroundEffect />
          
          <div className="relative min-h-screen flex items-center justify-center px-4">
            <div className="w-full max-w-4xl mx-auto">
              
              {/* Icons Box */}
              <motion.div 
                className="flex justify-center gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-10 md:mb-12"
                variants={childVariants}
              >
                {[Code2, User, Github].map((Icon, index) => (
                  <div key={index} data-aos="fade-down" data-aos-delay={index * 150}>
                    <IconButton Icon={Icon} />
                  </div>
                ))}
              </motion.div>

              {/* Welcome Text */}
              <motion.div 
                className="text-center mb-8 sm:mb-10 md:mb-12"
                variants={childVariants}
              >
                <h1 className="text-3xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter space-y-2 sm:space-y-4 text-[#111111]">
                  <div className="flex flex-wrap justify-center gap-2 mb-2 sm:mb-4">
                    <span data-aos="fade-right" data-aos-delay="100" className="inline-block bg-white px-3 py-1 border-3 border-[#111111] shadow-[4px_4px_0px_#111111]">
                      Welcome
                    </span>
                    <span data-aos="fade-right" data-aos-delay="200" className="inline-block bg-[#ffcf33] px-3 py-1 border-3 border-[#111111] shadow-[4px_4px_0px_#111111]">
                      To
                    </span>
                    <span data-aos="fade-right" data-aos-delay="300" className="inline-block bg-white px-3 py-1 border-3 border-[#111111] shadow-[4px_4px_0px_#111111]">
                      My
                    </span>
                  </div>
                  <div className="flex flex-wrap justify-center gap-2">
                    <span data-aos="fade-up" data-aos-delay="400" className="inline-block bg-[#ff5c58] text-white px-3 py-1 border-3 border-[#111111] shadow-[4px_4px_0px_#111111]">
                      Portfolio
                    </span>
                    <span data-aos="fade-up" data-aos-delay="500" className="inline-block bg-[#4fc3f7] px-3 py-1 border-3 border-[#111111] shadow-[4px_4px_0px_#111111]">
                      Website
                    </span>
                  </div>
                </h1>
              </motion.div>

              {/* Website Link Badge */}
              <motion.div 
                className="text-center"
                variants={childVariants}
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <a
                  href="https://mdhiyaulatha.me"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#111111] border-3 border-[#111111] shadow-[6px_6px_0px_#111111] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[4px_4px_0px_#111111] transition-all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex items-center gap-2 text-base sm:text-xl md:text-2xl font-black uppercase">
                    <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-[#111111] stroke-[3]" />
                    <span className="text-[#111111]">
                      <TypewriterEffect text="MUHAMMAD DHIYAUL ATHA" />
                    </span>
                  </div>
                </a>
              </motion.div>

            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WelcomeScreen;