import React from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import pdf from "../../Assets/cv-muhammad-dhiyaul-atha.pdf";
import SEO from "../SEO";

function ResumeNew() {
  return (
    <div>
      <SEO 
        title="Resume/CV | Muhammad Dhiyaul Atha"
        description="Download CV Muhammad Dhiyaul Atha - Web Developer & Mahasiswa Teknik Informatika. Lihat pengalaman, skills, dan pencapaian saya."
        keywords="CV Muhammad Dhiyaul Atha, resume web developer, download CV developer, curriculum vitae, developer resume"
        url="https://mdhiyaulatha.me/resume"
      />
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row style={{ justifyContent: "center", marginTop: "20px" }}>
          <iframe
            src={pdf}
            width="80%"
            height="1200px"
            style={{ border: "none" }}
            title="CV"
          ></iframe>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
