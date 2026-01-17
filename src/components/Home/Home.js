import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import profilImg from "../../Assets/profil.jpg";
import Home2 from "./Home2";
import Type from "./Type";
import SEO from "../SEO";
import AboutCard from "../About/AboutCard";
import projectsData from "../Projects/projectsData";
import { certificates as certificatesData } from "../Certificate/Certificates";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home() {
  const navigate = useNavigate();
  // Ambil 3 project dan 3 sertifikat terbaru
  const previewProjects = projectsData.slice(0, 3);
  // Ambil 3 sertifikat terbaru dari certificates.js (array of { file })
  let previewCertificates = [];
  try {
    // certificatesData bisa berupa komponen, ambil data array jika ada
    previewCertificates = (certificatesData && certificatesData.length)
      ? certificatesData.slice(0, 3).map(cert => cert.file)
      : [];
  } catch (e) {
    previewCertificates = [];
  }
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

        <Container fluid className="home-section" id="home">
          <Row className="justify-content-center align-items-center" style={{ minHeight: "60vh" }}>
            <Col md={5} className="d-flex justify-content-center align-items-center">
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
                <img
                  src={profilImg}
                  alt="Foto Profil Muhammad Dhiyaul Atha"
                  width={240}
                  height={240}
                  loading="lazy"
                  decoding="async"
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
            <Col md={7} className="d-flex flex-column align-items-start justify-content-center mt-4 mt-md-0">
              <h1 className="heading-name" style={{ fontWeight: 700, color: "#fff" }}>
                Hi! Saya <strong className="main-name">Muhammad Dhiyaul Atha</strong>
              </h1>
              <Type />
            </Col>
          </Row>
        </Container>

        {/* Perkenalan Diri Setelah Hero, Sebelum Tentang Saya */}
        <Home2 />

        {/* About Preview */}
        <Container className="mt-5 mb-4">
          <h2 className="purple mb-3" style={{ fontWeight: 700, letterSpacing: 1 }}>Tentang Saya</h2>
          <Row>
            <Col md={8}>
              <div style={{ background: "rgba(34, 20, 51, 0.7)", borderRadius: 16, boxShadow: "0 2px 16px rgba(80,0,120,0.10)", padding: 24 }}>
                <AboutCard />
              </div>
            </Col>
            <Col md={4} className="d-flex align-items-center justify-content-center">
              <Button variant="outline-light" style={{ borderColor: "#c770f0", color: "#c770f0" }} onClick={() => navigate("/about")}>View All</Button>
            </Col>
          </Row>
        </Container>

        {/* Project Preview */}
        <Container className="mt-5 mb-4">
          <h2 className="purple mb-3" style={{ fontWeight: 700, letterSpacing: 1 }}>Project Terbaru</h2>
          <Row>
            {previewProjects.map((project) => (
              <Col md={4} key={project.slug} className="mb-3">
                <Card className="h-100 shadow-sm" style={{ background: "rgba(34, 20, 51, 0.7)", borderRadius: 16, border: "1px solid #2d1950" }}>
                  <div style={{ width: "100%", aspectRatio: "16/9", overflow: "hidden", borderTopLeftRadius: 16, borderTopRightRadius: 16 }}>
                    <img src={project.imgPath} alt={project.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                  </div>
                  <Card.Body>
                    <Card.Title style={{ color: "#c770f0", fontWeight: 600 }}>{project.title}</Card.Title>
                    <Card.Text style={{ color: "#eee" }}>{project.description}</Card.Text>
                    <Button variant="outline-light" style={{ borderColor: "#c770f0", color: "#c770f0" }} onClick={() => navigate(`/projects/${project.slug}`)}>Detail</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
            <Col md={12} className="d-flex justify-content-end mt-2">
              <Button variant="outline-light" style={{ borderColor: "#c770f0", color: "#c770f0" }} onClick={() => navigate("/projects")}>View All</Button>
            </Col>
          </Row>
        </Container>

        {/* Certificate Preview */}
        <Container className="mt-5 mb-4">
          <h2 className="purple mb-3" style={{ fontWeight: 700, letterSpacing: 1 }}>Sertifikat</h2>
          <Row>
            {previewCertificates.map((img, idx) => (
              <Col md={4} key={idx} className="mb-3">
                <Card className="h-100 shadow-sm" style={{ background: "rgba(34, 20, 51, 0.7)", borderRadius: 16, border: "1px solid #2d1950" }}>
                  <div style={{ width: "100%", aspectRatio: "4/3", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", borderTopLeftRadius: 16, borderTopRightRadius: 16 }}>
                    <img
                      src={img}
                      alt={`sertifikat-${idx}`}
                      loading="lazy"
                      decoding="async"
                      style={{ width: "100%", height: "100%", objectFit: "contain", display: "block", maxHeight: "220px", background: "#fff" }}
                    />
                  </div>
                </Card>
              </Col>
            ))}
            <Col md={12} className="d-flex justify-content-end mt-2">
              <Button variant="outline-light" style={{ borderColor: "#c770f0", color: "#c770f0" }} onClick={() => navigate("/certificates")}>View All</Button>
            </Col>
          </Row>
        </Container>

        {/* Sosial Media Section - sudah ada aria-label di semua link */}
        <Row>
          <Col md={12} className="home-about-social">
            <h2>TERHUBUNG DENGAN SAYA</h2>
            <p>
              Jangan ragu untuk <span className="purple">menghubungi</span> saya melalui media sosial berikut
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Bangkah"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub profile"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/mdhiyaulatha"  
                  target="_blank"
                  rel="noreferrer"
                  aria-label="X profile"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/muhammad-dhyaul-atha/" 
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn profile"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/mdhiyaulatha/" 
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram profile"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </section>
    </main>
  );
}

export default Home;
