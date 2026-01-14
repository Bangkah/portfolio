import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/home-main.svg";
// import { Link } from "react-router-dom";
import Tilt from "react-parallax-tilt";


function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Perkenalkan <strong className="purple">Diri Saya</strong>
            </h1>
            <p className="home-about-body" style={{ textAlign: "justify" }}>
              Hai! Saya <span className="purple">Atha</span>.<br />
              Seorang mahasiswa yang suka ngulik <span className="purple">teknologi</span>, <span className="purple">ngoding</span>, dan membangun hal-hal baru di dunia digital.
              <br />
              <br />
              Saya percaya, belajar dan berbagi adalah kunci berkembang di dunia IT. Yuk, saling terhubung dan bertumbuh bersama!
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={myImg}
                className="img-fluid"
                alt="Muhammad Dhiyaul Atha avatar illustration"
                loading="lazy"
                decoding="async"
              />
            </Tilt>
          </Col>
        </Row>

      </Container>
    </Container>
  );
}

export default Home2;
