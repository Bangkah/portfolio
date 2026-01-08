import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
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
              Halo! Saya <span className="purple">Muhammad Dhiyaul Atha</span>, seorang <span className="purple">mahasiswa Teknik Informatika</span> di Politeknik Negeri Lhokseumawe.
              <br />
              <br />
              Saya memiliki fokus utama dalam pengembangan website menggunakan <strong className="purple">PHP native</strong> maupun <strong className="purple">framework Laravel</strong>. Saya senang membangun aplikasi web yang bersih, efisien, responsif, dan mudah dikembangkan.
              <br />
              <br />
              Selain itu, saya aktif mengikuti perkembangan teknologi web, terus meningkatkan kemampuan fullstack, dan terbuka untuk berbagai bentuk kolaborasi, seperti:
              <ul>
                <li>📦 Proyek freelance (UMKM & individu)</li>
                <li>🌐 Kontribusi open-source</li>
                <li>👨‍💻 Kolaborasi tim pengembangan aplikasi</li>
              </ul>
              <br />
              🎯 Tujuan saya adalah menjadi seorang <strong className="purple">Full-Stack Web Developer</strong> yang kompeten, profesional, dan mampu memberikan dampak positif melalui teknologi.
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
