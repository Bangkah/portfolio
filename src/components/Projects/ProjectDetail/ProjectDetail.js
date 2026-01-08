import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import projectsData from "../projectsData";
import SEO from "../../SEO";

function ProjectDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return (
      <Container style={{marginTop: 40, marginBottom: 40}}>
        <SEO title="Project Tidak Ditemukan | Detail Project" description="Project tidak ditemukan di portfolio Atha." url={`https://mdhiyaulatha.me/projects/${slug}`} />
        <h2>Project tidak ditemukan</h2>
        <Button variant="secondary" onClick={() => navigate(-1)} style={{marginTop: 20}}>Kembali</Button>
      </Container>
    );
  }

  return (
    <Container className="project-detail-section" style={{marginTop: 40, marginBottom: 40}}>
      <SEO
        title={`${project.title} | Detail Project | Atha (Bangkah)`}
        description={project.description}
        keywords={`project ${project.title}, ${project.slug}, portfolio Atha, Bangkah, web developer, ${project.title}`}
        url={`https://mdhiyaulatha.me/projects/${project.slug}`}
        ogImage={typeof project.imgPath === 'string' ? project.imgPath : undefined}
      />
      <Button variant="secondary" onClick={() => navigate(-1)} style={{marginBottom: 20}}>&larr; Kembali ke daftar project</Button>
      <Row>
        <Col md={6}>
          <img src={project.imgPath} alt={project.title} style={{width: "100%", borderRadius: 8, boxShadow: "0 2px 16px rgba(0,0,0,0.12)"}} />
        </Col>
        <Col md={6}>
          <h1 style={{marginBottom: 16}}>{project.title}</h1>
          <p style={{fontSize: 18}}>{project.description}</p>
          {project.detail && <div style={{marginBottom: 16}} dangerouslySetInnerHTML={{__html: project.detail}} />}
          <div style={{marginTop: 20}}>
            {project.ghLink && <Button variant="dark" href={project.ghLink} target="_blank" rel="noopener noreferrer">GitHub</Button>}
            {project.demoLink && <Button variant="primary" href={project.demoLink} target="_blank" rel="noopener noreferrer" style={{marginLeft: 10}}>Live Demo</Button>}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ProjectDetail;
