import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
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
              PERKENALKAN <span className="purple"> DIRI </span> SAYA
            </h1>
            <p className="home-about-body">
              Saya mulai tertarik dengan dunia <b className="purple">programming</b> dan terus belajar hingga sekarang.
              <br />
              <br />Saya terbiasa menggunakan bahasa pemrograman seperti
              <i>
                <b className="purple"> JavaScript, PHP, dan C.</b>
              </i>
              <br />
              <br />
              Fokus saya saat ini adalah membangun berbagai
              <i>
                <b className="purple"> website modern </b> seperti blog pribadi, sistem absensi, dan portfolio
              </i>
              dengan menggunakan
              <i>
                <b className="purple"> React.js, PHP, dan MySQL.</b>
              </i>
              <br />
              <br />
              Saya juga menggunakan alat bantu seperti
              <i>
                <b className="purple"> Visual Studio Code, Postman, dan GitHub</b>
              </i>{" "}
              dalam pengembangan proyek.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>TEMUKAN SAYA DI</h1>
            <p>
              Jangan ragu untuk <span className="purple">terhubung</span> dengan saya
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Bangkah"
                  target="_blank"
                  rel="noreferrer"
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
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
