import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import { useNavigate } from "react-router-dom";
import projectsData from "./projectsData";
import Particle from "../Particle";
import SEO from "../SEO";


function Projects() {
  const navigate = useNavigate();
  return (
    <Container fluid className="project-section">
      <SEO 
        title="Proyek | Muhammad Dhiyaul Atha Portfolio"
        description="Lihat proyek web development Muhammad Dhiyaul Atha. Termasuk aplikasi React, Laravel, sistem akademik, absensi, blog Islam, AI assistant, dan banyak lagi."
        keywords="proyek web developer, portfolio projects, react projects, laravel projects, aplikasi web, sistem informasi, web applications"
        url="https://mdhiyaulatha.me/projects"
      />
      <Particle />
      <Container>
        <h1 className="project-heading">
          Proyek <strong className="purple">Terbaru</strong> Saya
        </h1>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projectsData.map((project) => (
            <Col md={4} className="project-card" key={project.slug}>
              <div style={{cursor: "pointer"}} onClick={() => navigate(`/projects/${project.slug}`)}>
                <ProjectCard
                  imgPath={project.imgPath}
                  isBlog={project.isBlog}
                  title={project.title}
                  description={project.description}
                  ghLink={project.ghLink}
                  demoLink={project.demoLink}
                />
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
