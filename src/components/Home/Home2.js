import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
// import { Link } from "react-router-dom";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              PERKENALKAN <span className="purple">DIRI</span> SAYA
            </h1>
            <p className="home-about-body">
              Saya memiliki ketertarikan yang kuat dalam dunia <b className="purple">programming</b> dan terus mengembangkan kemampuan hingga saat ini.
              <br />
              <br />Saya terbiasa menggunakan bahasa pemrograman seperti
              <i>
                <b className="purple"> JavaScript, PHP, C, dan Java.</b>
              </i>
              <br />
              <br />
              Fokus utama saya saat ini adalah membangun berbagai
              <i>
                <b className="purple"> aplikasi dan website modern</b>
              </i>
              , termasuk blog pribadi, sistem absensi karyawan, dan portofolio, dengan memanfaatkan
              <i>
                <b className="purple"> Laravel, React.js, dan MySQL.</b>
              </i>
              <br />
              <br />
              Dalam proses pengembangan, saya juga memanfaatkan berbagai alat bantu profesional seperti
              <i>
                <b className="purple"> Visual Studio Code, Postman, GitHub, dan Linux/Arch Linux.</b>
              </i>{" "}
              untuk memastikan proyek berjalan efisien dan terstruktur.
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
        <Row>
          <Col md={12} className="home-about-social">
            <h1>TERHUBUNG DENGAN SAYA</h1>
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
            {/* <div className="home-internal-links" style={{ marginTop: "1rem" }}>
              <Link to="/projects" className="btn btn-primary" style={{ marginRight: "0.5rem", marginBottom: "0.5rem" }}>
                Lihat Proyek
              </Link>
              <Link to="/about" className="btn btn-outline-light" style={{ marginRight: "0.5rem", marginBottom: "0.5rem" }}>
                Tentang Saya
              </Link>
              <Link to="/certificates" className="btn btn-outline-light" style={{ marginRight: "0.5rem", marginBottom: "0.5rem" }}>
                Sertifikat
              </Link>
              <Link to="/resume" className="btn btn-outline-light" style={{ marginBottom: "0.5rem" }}>
                Unduh CV
              </Link>
            </div> */}
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
