import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
const profilImg = "/profile.webp";
const profilImg96 = "/profil-96.webp";
const profilImg160 = "/profil-160.webp";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  useEffect(() => {
    function scrollHandler() {
      if (window.scrollY >= 20) {
        updateNavbar(true);
      } else {
        updateNavbar(false);
      }
    }

    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" aria-label="Home">
          Bangkah
        </Navbar.Brand>
        <div className="navbar-mobile-profile d-md-none" aria-hidden="true">
          <img
            src={profilImg96}
            srcSet={`${profilImg96} 96w, ${profilImg160} 160w, ${profilImg} 240w`}
            sizes="34px"
            alt=""
            width={34}
            height={34}
            loading="lazy"
            decoding="async"
          />
        </div>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/projects"
                onClick={() => updateExpanded(false)}
              >
                Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/certificates"
                onClick={() => updateExpanded(false)}
              >
                Sertifikat
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}
              >
                Resume
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                href="https://dev.to/bangkah"
                target="_blank"
                rel="noopener noreferrer"
                title="Baca artikel dan tutorial saya di DEV.to"
              >
                Blog
              </Nav.Link>
            </Nav.Item>

            {/* Ganti fork ke repositorimu */}
            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/Bangkah/Portfolio"
                target="_blank"
                className="fork-btn-inner"
              >
                GitHub
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
