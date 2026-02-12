import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";

import Toolstack from "./Toolstack";
import SEO from "../SEO";

function About() {
  return (
    <Container fluid className="about-section">
      <SEO 
        title="Tentang Saya | Muhammad Dhiyaul Atha"
        description="Kenali Muhammad Dhiyaul Atha - mahasiswa Teknik Informatika, web developer, dan Linux enthusiast. Lihat skills, tools, dan teknologi yang saya kuasai."
        keywords="about Atha, skills web developer, react developer skills, teknologi web, programming skills, github profile"
        url="https://mdhiyaulatha.me/about"
      />
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Kenali <strong className="purple">Saya</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img
              src={laptopImg}
              alt="Muhammad Dhiyaul Atha - ilustrasi bekerja dengan laptop"
              width={400}
              height={300}
              className="img-fluid"
              loading="lazy"
              decoding="async"
            />
          </Col>
        </Row>

        <h1 className="project-heading">
          Kemampuan <strong className="purple">Teknis</strong>
        </h1>
        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> yang Saya Gunakan
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
