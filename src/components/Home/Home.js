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
            <Col xs={12} md={5} className="home-hero-media d-none d-md-flex justify-content-center align-items-center mb-4 mb-md-0">
              <div className="home-profile-wrapper">
                <SmartImage
                  src={profilImg}
                  alt="Foto Profil Muhammad Dhiyaul Atha"
                  width={240}
                  height={240}
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                  className="img-fluid home-profile-image"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    background: "transparent"
                  }}
                />
              </div>
            </Col>
            <Col xs={12} md={7} className="home-hero-text d-flex flex-column align-items-center align-items-md-start justify-content-center mt-2 mt-md-0 text-center text-md-start">
              <h1 className="heading-name home-hero-title" style={{ fontWeight: 700, color: "#fff" }}>
                Hi! Saya <strong className="main-name">Muhammad Dhiyaul Atha</strong>
              </h1>
              <Type />
              <div className="home-hero-actions mt-3 d-flex gap-2 flex-wrap justify-content-center justify-content-md-start">
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
