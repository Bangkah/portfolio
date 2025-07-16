import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "React.js Developer",
          "PHP & Laravel Programmer",
          "Linux & Open Source Enthusiast",
          "Fullstack Web Developer",
          "Website Portofolio Builder",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
