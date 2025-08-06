import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const certificates = [
  {
    file: require("../../Assets/Certificates/Certificate-of-Completion-Introduction-to-Information-Security_page-0001.jpg"),
  },
  {
    file: require("../../Assets/Certificates/Completion Certificate _ SkillsBuild_page-0001.jpg"),
  },
  {
    file: require("../../Assets/Certificates/Completion Certificate2 _ SkillsBuild_page-0001.jpg"),
  },
  {
    file: require("../../Assets/Certificates/muhammad-dhyaul-atha-certificate-completion-damc_page-0001.jpg"),
  },
  {
    file: require("../../Assets/Certificates/empowering-women-in-tech-breaking-barriers-building-careers-certificate_page-0001.jpg"),
  },
  {
    file: require("../../Assets/Certificates/google-cloud-arcade-fasilitator-2025-program-overview-deep-dive-certificate_page-0001.jpg"),
  },
  {
    file: require("../../Assets/Certificates/mastering-solid-principles-to-boost-engineering-career-certificate_page-0001.jpg"),
  },
  {
    file: require("../../Assets/Certificates/Muhammad Dhyaul Atha Sertifikat Webinar IT Cyber Security 25 Juli 2025_page-0001.jpg"),
  },
  {
    file: require("../../Assets/Certificates/Muhammad Dhyaul Atha_page-0001.jpg"),
  },
  {
    file: require("../../Assets/Certificates/MUHAMMAD DHYAUL ATHA_SOFTWARE TESTER CERTIFICATE_GROWIA_page-0001.jpg"),
  },
  {
    file: require("../../Assets/Certificates/Salinan E Sertifikat _Muhammad Dhiyaul Atha_page-0001.jpg"),
  },
  {
    file: require("../../Assets/Certificates/sertifikat_page-0001.jpg"),
  },
];

function Certificates() {
  const [hovered, setHovered] = React.useState(null);

  return (
    <Container fluid className="project-section">
      <h1 className="project-heading">
        <strong className="purple">Sertifikat</strong> Saya
      </h1>
      <Row style={{ justifyContent: "center", paddingBottom: "20px" }}>
        {certificates.map((cert, idx) => (
          <Col md={4} className="project-card" key={idx}>
            <div
              className="certificate-img-card"
              style={{ textAlign: "center", marginBottom: "20px" }}
            >
              <Image
                src={cert.file}
                alt={`certificate-${idx}`}
                fluid
                className="shadow"
                style={{
                  maxHeight: "400px",
                  objectFit: "contain",
                  marginBottom: "10px",
                  transition: "transform 0.3s, box-shadow 0.3s",
                  transform: hovered === idx ? "scale(1.05)" : "scale(1)",
                  boxShadow:
                    hovered === idx
                      ? "0 8px 32px rgba(80,0,120,0.25)"
                      : undefined,
                  zIndex: hovered === idx ? 2 : 1,
                }}
                onMouseEnter={() => setHovered(idx)}
                onMouseLeave={() => setHovered(null)}
              />
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Certificates;
