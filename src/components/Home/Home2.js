import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/home-main.svg";
// import { Link } from "react-router-dom";
import Tilt from "react-parallax-tilt";


function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row className="flex-column-reverse flex-md-row align-items-center">
          <Col xs={12} md={8} className="home-about-description text-center text-md-start mb-4 mb-md-0">
            <h1 style={{ fontSize: "1.5em", paddingBottom: "12px" }}>
              Perkenalkan <strong className="purple">Diri Saya</strong>
            </h1>
            <p className="home-about-body" style={{ textAlign: "center" }}>
              Hai! Saya <span className="purple">Atha</span>.<br />
              Seorang mahasiswa yang suka ngulik <span className="purple">teknologi</span>, <span className="purple">ngoding</span>, dan membangun hal-hal baru di dunia digital.<br /><br />
              Saya percaya, belajar dan berbagi adalah kunci berkembang di dunia IT. Yuk, saling terhubung dan bertumbuh bersama!
            </p>
          </Col>
          <Col xs={12} md={4} className="myAvtar d-flex justify-content-center mb-3 mb-md-0">
            <Tilt>
              <img
                src={myImg}
                className="img-fluid"
                alt="Muhammad Dhiyaul Atha avatar illustration"
                loading="lazy"
                decoding="async"
                style={{ maxWidth: "220px", width: "100%" }}
              />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
