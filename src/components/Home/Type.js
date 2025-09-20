import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
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
