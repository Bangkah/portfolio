import React, { Suspense, lazy } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SEO from "./components/SEO";

const Home = lazy(() => import("./components/Home/Home"));
const About = lazy(() => import("./components/About/About"));
const Projects = lazy(() => import("./components/Projects/Projects"));
const ProjectDetail = lazy(() => import("./components/Projects/ProjectDetail/ProjectDetail"));
const Resume = lazy(() => import("./components/Resume/ResumeNew"));
const Certificates = lazy(() => import("./components/Certificate/Certificates"));
const AdminLogin = lazy(() => import("./components/admin/AdminLogin"));
const AdminDashboard = lazy(() => import("./components/admin/AdminDashboard"));
const PrivacyPolicy = lazy(() => import("./components/Legal/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./components/Legal/TermsOfService"));

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
  const load = false;

  const adminElement = localStorage.getItem("isAdmin") === "true"
    ? <AdminDashboard />
    : <AdminLogin onLogin={() => window.location.reload()} />;

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />

        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />

            <Route
              path="/admin"
              element={(
                <>
                  <SEO
                    title="Admin Dashboard"
                    description="Halaman admin internal"
                    url="https://mdhiyaulatha.me/admin"
                    noIndex={true}
                  />
                  {adminElement}
                </>
              )}
            />

            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
