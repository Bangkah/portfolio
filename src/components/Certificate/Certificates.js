import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CertificateCard from "./CertificateCard";
import certif1 from "../../Assets/Certificates/sertifikat1.png";
import certif2 from "../../Assets/Certificates/sertifikat2.png";
import certif3 from "../../Assets/Certificates/sertifikat3.png";
import certif4 from "../../Assets/Certificates/sertifikat4.png";
import certif5 from "../../Assets/Certificates/sertifikat5.png";
import certif6 from "../../Assets/Certificates/sertifikat6.png";
import certif7 from "../../Assets/Certificates/sertifikat7.png";
import certif8 from "../../Assets/Certificates/sertifikat8.png";

function Certificates() {
  return (
    <Container fluid className="project-section">
      <h1 className="project-heading">
        <strong className="purple">Sertifikat</strong> Saya
      </h1>
      <Row style={{ justifyContent: "center", paddingBottom: "20px" }}>
        <Col md={4} className="project-card">
          <CertificateCard imgPath={certif1} />
        </Col>
        <Col md={4} className="project-card">
          <CertificateCard imgPath={certif2} />
        </Col>
        <Col md={4} className="project-card">
          <CertificateCard imgPath={certif3} />
        </Col>
        <Col md={4} className="project-card">
          <CertificateCard imgPath={certif4} />
        </Col>
        <Col md={4} className="project-card">
          <CertificateCard imgPath={certif5} />
        </Col>
        <Col md={4} className="project-card">
          <CertificateCard imgPath={certif6} />
        </Col>
        <Col md={4} className="project-card">
          <CertificateCard imgPath={certif7} />
        </Col>
        <Col md={4} className="project-card">
          <CertificateCard imgPath={certif8} />
        </Col>
      </Row>
    </Container>
  );
}

export default Certificates;
