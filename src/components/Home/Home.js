import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import profilImg from "../../Assets/profil.webp";
import Type from "./Type";
import SEO from "../SEO";
import SmartImage from "../common/SmartImage";
const HomeSecondary = React.lazy(() => import("./HomeSecondary"));

function Home() {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = React.useState(() => {
    if (typeof window === "undefined") {
      return false;
    }
    return window.matchMedia("(max-width: 767px)").matches;
  });

  React.useEffect(() => {
    const media = window.matchMedia("(max-width: 767px)");
    const apply = () => setIsMobile(media.matches);
    apply();
    media.addEventListener("change", apply);
    return () => media.removeEventListener("change", apply);
  }, []);

  const [showSecondarySections, setShowSecondarySections] = React.useState(false);

  React.useEffect(() => {
    const reveal = () => setShowSecondarySections(true);
    window.addEventListener("scroll", reveal, { once: true, passive: true });
    window.addEventListener("mousemove", reveal, { once: true });
    window.addEventListener("touchstart", reveal, { once: true, passive: true });
    return () => {
      window.removeEventListener("scroll", reveal);
      window.removeEventListener("mousemove", reveal);
      window.removeEventListener("touchstart", reveal);
    };
  }, []);

  return (
    // LANDMARK: Main content for accessibility & SEO
    <main role="main">
      <section>
        <SEO 
          title="Muhammad Dhiyaul Atha | Web Developer & Mahasiswa Teknik Informatika"
          description="Hi! Saya Muhammad Dhiyaul Atha, mahasiswa Teknik Informatika dan web developer dengan passion dalam pengembangan web modern. Portfolio berisi proyek React, Laravel, dan teknologi web lainnya."
          keywords="Muhammad Dhiyaul Atha, web developer Indonesia, react developer, teknik informatika, portfolio developer, frontend developer, backend developer, full stack developer"
          url="https://mdhiyaulatha.me/"
        />

        <Container fluid className="home-section px-2 px-sm-4" id="home">
          <Row className="justify-content-center align-items-center flex-column-reverse flex-md-row" style={{ minHeight: "60vh" }}>
            {!isMobile && (
            <Col xs={12} md={5} className="d-flex justify-content-center align-items-center mb-4 mb-md-0">
              <div
                style={{
                  background: "#8e44ad",
                  borderRadius: "50%",
                  border: "8px solid #fff",
                  boxShadow: "0 0 0 6px #c770f0",
                  width: "240px",
                  height: "240px",
                  aspectRatio: "1/1",
                  overflow: "hidden",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  maxWidth: "90vw",
                  minWidth: "120px"
                }}
              >
                <SmartImage
                  src={profilImg}
                  alt="Foto Profil Muhammad Dhiyaul Atha"
                  width={240}
                  height={240}
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                  className="img-fluid"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    background: "transparent"
                  }}
                />
              </div>
            </Col>
            )}
            <Col xs={12} md={7} className="d-flex flex-column align-items-center align-items-md-start justify-content-center mt-2 mt-md-0 text-center text-md-start">
              <h1 className="heading-name" style={{ fontWeight: 700, color: "#fff" }}>
                Hi! Saya <strong className="main-name">Muhammad Dhiyaul Atha</strong>
              </h1>
              <Type />
              <div className="mt-3 d-flex gap-2 flex-wrap justify-content-center justify-content-md-start">
                <Button variant="outline-light" style={{ borderColor: "#c770f0", color: "#c770f0" }} onClick={() => navigate("/projects")}>Lihat Project</Button>
                <Button variant="outline-light" style={{ borderColor: "#c770f0", color: "#c770f0" }} onClick={() => navigate("/about")}>Tentang Saya</Button>
                {!showSecondarySections && (
                  <Button variant="outline-light" style={{ borderColor: "#c770f0", color: "#c770f0" }} onClick={() => setShowSecondarySections(true)}>Tampilkan Seksi</Button>
                )}
              </div>
            </Col>
          </Row>
        </Container>

        {showSecondarySections && (
          <React.Suspense fallback={null}>
            <HomeSecondary />
          </React.Suspense>
        )}
      </section>
    </main>
  );
}

export default Home;
