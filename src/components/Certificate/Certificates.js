import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SEO from "../SEO";
import img1 from "../../Assets/Certificates/Certificates-Build on BNB Chain - Course 2 _ Solidity for BNB Chain Development-Muhammad Dhiyaul Atha_page-0001.jpg";
import img2 from "../../Assets/Certificates/Certificates-Build On Stacks-Muhammad Dhiyaul Atha_page-0001.jpg";
import img3 from "../../Assets/Certificates/Muhammad Dhyaul Atha_page-0001.jpg";
import img4 from "../../Assets/Certificates/Code Generations and Optimization - Muhammad Dhiyaul Atha_page-0001.jpg";
import img5 from "../../Assets/Certificates/Certificate-of-Completion-Introduction-to-Information-Security_page-0001.jpg";
import img6 from "../../Assets/Certificates/muhammad-dhyaul-atha-certificate-completion-damc_page-0001.jpg";
import img7 from "../../Assets/Certificates/prinsip_pemograman_solid.jpg";
import img8 from "../../Assets/Certificates/sertifikat_course_653_3254278_270925161325_page-0001.jpg";
import img9 from "../../Assets/Certificates/IBMDesign20250807-32-9a1ab9_page-0001.jpg";
import img10 from "../../Assets/Certificates/UC-033844b2-044b-4ea3-966d-f97af4ced9dd.jpg";
import img11 from "../../Assets/Certificates/UC-b14f16c0-b39c-4dfb-aa2f-620ed1e43602.jpg";
import img12 from "../../Assets/Certificates/Completion Certificate _ SkillsBuild_page-0001.jpg";
import img13 from "../../Assets/Certificates/Completion Certificate2 _ SkillsBuild_page-0001.jpg";
import img14 from "../../Assets/Certificates/MDL-566_page-0001.jpg";
import img15 from "../../Assets/Certificates/mastering-solid-principles-to-boost-engineering-career-certificate_page-0001.jpg";
import img16 from "../../Assets/Certificates/google-cloud-arcade-fasilitator-2025-program-overview-deep-dive-certificate_page-0001.jpg";
import img17 from "../../Assets/Certificates/idcamp-alumni-dialogue-6-beyond-automation-timeless-skills-in-the-age-of-ai-certificate_page-0001.jpg";
import img18 from "../../Assets/Certificates/empowering-women-in-tech-breaking-barriers-building-careers-certificate_page-0001.jpg";
import img19 from "../../Assets/Certificates/MUHAMMAD DHYAUL ATHA_SOFTWARE TESTER CERTIFICATE_GROWIA_page-0001.jpg";
import img20 from "../../Assets/Certificates/Salinan E Sertifikat _Muhammad Dhiyaul Atha_page-0001.jpg";
import img21 from "../../Assets/Certificates/Muhammad Dhyaul Atha Sertifikat Webinar IT Cyber Security 25 Juli 2025_page-0001.jpg";
import img22 from "../../Assets/Certificates/sertifikat_page-0001.jpg";

export const certificates = [
  { file: img1 },
  { file: img2 },
  { file: img3 },
  { file: img4 },
  { file: img5 },
  { file: img6 },
  { file: img7 },
  { file: img8 },
  { file: img9 },
  { file: img10 },
  { file: img11 },
  { file: img12 },
  { file: img13 },
  { file: img14 },
  { file: img15 },
  { file: img16 },
  { file: img17 },
  { file: img18 },
  { file: img19 },
  { file: img20 },
  { file: img21 },
  { file: img22 },
];

function Certificates() {
  const [hovered, setHovered] = React.useState(null);

  return (
    <Container fluid className="project-section">
      <SEO 
        title="Sertifikat | Muhammad Dhiyaul Atha"
        description="Lihat koleksi sertifikat dan pencapaian Muhammad Dhiyaul Atha dalam bidang web development, programming, cloud computing, cybersecurity, dan teknologi lainnya."
        keywords="sertifikat web developer, programming certificates, cloud computing certification, tech certifications, achievement portfolio"
        url="https://mdhiyaulatha.me/certificates"
      />
      <h1 className="project-heading">
        <strong className="purple">Sertifikat</strong> 
      </h1>
      <Row style={{ justifyContent: "center", paddingBottom: "10px", rowGap: 16 }}>
        {certificates.map((cert, idx) => (
          <Col xs={6} sm={6} md={4} className="project-card" key={idx} style={{ marginBottom: 12 }}>
            <div
              className="certificate-img-card"
              style={{ textAlign: "center" }}
            >
                <div style={{ width: "100%", aspectRatio: "4/3", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", borderRadius: '0.5rem', boxShadow: hovered === idx ? "0 8px 32px rgba(80,0,120,0.25)" : undefined, transition: "transform 0.3s, box-shadow 0.3s", transform: hovered === idx ? "scale(1.05)" : "scale(1)", zIndex: hovered === idx ? 2 : 1 }}
                  onMouseEnter={() => setHovered(idx)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <img
                    src={cert.file}
                    alt={`certificate-${idx}`}
                    loading="lazy"
                    decoding="async"
                    width={320}
                    height={240}
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", background: "#fff" }}
                  />
                </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Certificates;
