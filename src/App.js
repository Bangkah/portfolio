import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import ProjectDetail from "./components/Projects/ProjectDetail/ProjectDetail";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import Certificates from "./components/Certificate/Certificates";
import { Analytics } from "@vercel/analytics/react";


import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/projects" element={<Projects />} />
  <Route path="/projects/:slug" element={<ProjectDetail />} />
  <Route path="/resume" element={<Resume />} />
  <Route path="/certificates" element={<Certificates />} />

  <Route path="*" element={<Navigate to="/" />} />
</Routes>

        <Footer />
      </div>
      <Analytics />
    </Router>
  );
}

export default App;
