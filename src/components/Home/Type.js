import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  const isMobile = typeof window !== "undefined" && window.matchMedia("(max-width: 767px)").matches;

  if (isMobile) {
    return <span className="Typewriter__wrapper">Fullstack Web Developer</span>;
  }

  return (
    <Typewriter
      options={{
        strings: [
          "PHP & Laravel Developer",
          "Linux & Open Source Enthusiast",
          "Fullstack Web Developer",
          "React.js & Frontend Specialist",
          "Professional Portfolio Builder",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
