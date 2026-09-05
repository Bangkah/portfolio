import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React, { useState, lazy, Suspense } from "react";
import { HelmetProvider } from "react-helmet-async";
import "./index.css";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import AnimatedBackground from "./components/Background";
import { AnimatePresence } from "framer-motion";
import Footer from "./components/Footer";
import ThankYouPage from "./Pages/ThankYou";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";

const Portofolio = lazy(() => import("./Pages/Portofolio"));
const ContactPage = lazy(() => import("./Pages/Contact"));
const ProjectDetails = lazy(() => import("./components/ProjectDetail"));
const WelcomeScreen = lazy(() => import("./Pages/WelcomeScreen"));
const NotFoundPage = lazy(() => import("./Pages/404"));
const CVPage = lazy(() => import("./Pages/CV"));

const LandingPage = ({ showWelcome, setShowWelcome }) => {
  return (
    <>
      <AnimatePresence mode="wait">
        {showWelcome && (
          <Suspense fallback={null}>
            <WelcomeScreen onLoadingComplete={() => setShowWelcome(false)} />
          </Suspense>
        )}
      </AnimatePresence>

      {!showWelcome && (
        <>
          <Navbar />
      
          <Home />
          <About />
          <Suspense fallback={<div className="h-20" />}>
            <Portofolio />
            <ContactPage />
          </Suspense>
          <Footer />
        </>
      )}
    </>
  );
};

const ProjectPageLayout = () => (
  <>
    <Suspense fallback={<div className="min-h-screen" />}>
      <ProjectDetails />
    </Suspense>
    <Footer />
  </>
);

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  return (
    <HelmetProvider>
      <div className="pointer-events-none">
        <AnimatedBackground />
      </div>
      <RouterProvider
        router={createBrowserRouter(
          [
            {
              path: "/",
              element: (
                <LandingPage
                  showWelcome={showWelcome}
                  setShowWelcome={setShowWelcome}
                />
              ),
            },
            { path: "/thank-you", element: <ThankYouPage /> },
            { path: "/project/:slug", element: <ProjectPageLayout /> },
            { path: "/cv", element: <Suspense fallback={<div className="h-screen bg-[#030014]"/>}><CVPage /></Suspense> },
            { path: "/login", element: <Login /> },
            {
              path: "/dashboard/*",
              element: (
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              ),
            },
            { path: "*", element: <Suspense fallback={null}><NotFoundPage /></Suspense> },
          ],
          {
            future: {
              v7_startTransition: true,
              v7_fetcherPersist: true,
              v7_normalizeFormMethod: true,
              v7_partialHydration: true,
              v7_skipActionErrorRevalidation: true,
              v7_relativeSplatPath: true,
            },
          }
        )}
      />
    </HelmetProvider>
  );
}

export default App;