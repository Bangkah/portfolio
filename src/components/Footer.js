import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Muhammad Dhiyaul Atha</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} Atha</h3>
          <p className="footer-legal-links">
            <Link to="/privacy-policy">Privacy Policy</Link> |{" "}
            <Link to="/terms-of-service">Terms of Service</Link>
          </p>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/Bangkah"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <svg className="footer-icon-svg" viewBox="0 0 32 32" aria-hidden="true" focusable="false">
                  <text className="footer-icon-text" x="16" y="17" textAnchor="middle" dominantBaseline="middle">GH</text>
                </svg>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://x.com/mdhiyaulatha"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <svg className="footer-icon-svg" viewBox="0 0 32 32" aria-hidden="true" focusable="false">
                  <text className="footer-icon-text" x="16" y="17" textAnchor="middle" dominantBaseline="middle">X</text>
                </svg>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/muhammad-dhyaul-atha/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <svg className="footer-icon-svg" viewBox="0 0 32 32" aria-hidden="true" focusable="false">
                  <text className="footer-icon-text" x="16" y="17" textAnchor="middle" dominantBaseline="middle">in</text>
                </svg>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/mdhiyaulatha/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <svg className="footer-icon-svg" viewBox="0 0 32 32" aria-hidden="true" focusable="false">
                  <text className="footer-icon-text" x="16" y="17" textAnchor="middle" dominantBaseline="middle">IG</text>
                </svg>
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
