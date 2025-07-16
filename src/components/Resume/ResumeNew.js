import React from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/cv-muhammad-dhiyaul-atha.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function ResumeNew() {
  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload /> &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume" style={{ justifyContent: "center", marginTop: "20px" }}>
          <iframe
            src={pdf}
            width="80%"
            height="800px"
            title="Resume"
            style={{ border: "none" }}
          ></iframe>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative", marginTop: "20px" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload /> &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
