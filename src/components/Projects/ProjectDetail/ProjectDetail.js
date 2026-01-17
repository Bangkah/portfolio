import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import projectDetailsData from "../projectDetailsData";
import SEO from "../../SEO";
import Particle from "../../Particle";

function getLocalProjects() {
  try {
    const data = localStorage.getItem("projects");
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

function ProjectDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  let project = projectDetailsData[slug];

  // Jika tidak ditemukan di static, cari di localStorage
  if (!project) {
    const localProjects = getLocalProjects();
    project = localProjects.find(p => (p.slug === slug) || (`custom-${p.id}` === slug));
  }

  if (!project) {
    return (
      <Container style={{marginTop: 40, marginBottom: 40}}>
        <SEO 
          title="Project Tidak Ditemukan | Detail Project" 
          description="Project tidak ditemukan di portfolio Atha." 
          url={`https://mdhiyaulatha.me/projects/${slug}`} 
        />
        <h2>Project tidak ditemukan</h2>
        <Button 
          variant="secondary" 
          onClick={() => navigate(-1)} 
          style={{marginTop: 20}}
        >
          Kembali
        </Button>
      </Container>
    );
  }

  return (
    <Container 
      fluid 
      className="project-section" 
      style={{
        minHeight: '100vh', 
        padding: 0, 
        background: 'var(--section-background-color)'
      }}
    >
      <Particle />
      <Container style={{paddingTop: 40, paddingBottom: 40, maxWidth: 1100}}>
        <SEO
          title={`${project.title} | Detail Project | Atha (Bangkah)`}
          description={project.description}
          keywords={`project ${project.title}, ${project.slug}, portfolio Atha, Bangkah, web developer, ${project.title}`}
          url={`https://mdhiyaulatha.me/projects/${project.slug}`}
          ogImage={typeof project.imgPath === 'string' ? project.imgPath : undefined}
        />
        
        {/* Back Button */}
        <Button 
          variant="secondary" 
          onClick={() => window.location.href = '/projects'} 
          style={{
            marginBottom: 20, 
            fontWeight: 500, 
            letterSpacing: 0.5, 
            borderRadius: 8, 
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
            transition: 'all 0.3s ease',
            padding: '10px 20px'
          }}
          onMouseOver={e => {
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseOut={e => {
            e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          &larr; Kembali ke daftar project
        </Button>

        {/* Info Section */}
        <div
          style={{
            marginBottom: 32,
            background: 'rgba(30, 22, 54, 0.75)',
            padding: 32,
            borderRadius: 22,
            boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.25)',
            border: '1.5px solid rgba(108,99,255,0.18)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            transition: 'all 0.3s cubic-bezier(.4,2,.3,1)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div style={{position: 'absolute', top: 0, left: 0, width: '100%', height: 5, background: 'linear-gradient(90deg, #6c63ff 0%, #c770f0 100%)', borderTopLeftRadius: 22, borderTopRightRadius: 22, opacity: 0.7}} />
          <h2
            style={{
              marginBottom: 8,
              color: 'var(--imp-text-color)',
              fontWeight: 800,
              fontSize: 32,
              letterSpacing: 0.5,
              textShadow: '0 2px 8px rgba(108,99,255,0.10)'
            }}
          >
            {project.title}
          </h2>
          <p 
            style={{
              fontSize: 17, 
              margin: 0, 
              color: '#eee',
              lineHeight: 1.6
            }}
          >
            {project.description}
          </p>
          <div style={{margin: '18px 0 0 0', display: 'flex', flexWrap: 'wrap', gap: 10}}>
            {project.technologies && project.technologies.map((tech, i) => (
              <span key={i} style={{background: 'linear-gradient(90deg,#6c63ff 0%,#c770f0 100%)', color: '#fff', borderRadius: 8, padding: '5px 16px', fontSize: 15, fontWeight: 600, letterSpacing: 0.2, boxShadow: '0 2px 8px rgba(108,99,255,0.10)'}}>{tech}</span>
            ))}
          </div>
          <div style={{height: 2, width: '100%', background: 'linear-gradient(90deg,#6c63ff 0%,#c770f0 100%)', borderRadius: 2, margin: '22px 0 18px 0', opacity: 0.5}} />
          <div style={{marginBottom: 8}}>
            <strong style={{color: '#b39ddb', fontSize: 17}}>Fitur Utama:</strong>
            <ul style={{color: '#d1c4e9', marginBottom: 8, marginTop: 8, paddingLeft: 20, fontSize: 16, fontWeight: 500, listStyle: 'none'}}>
              {project.features && project.features.map((f, i) => (
                <li key={i} style={{display: 'flex', alignItems: 'center', marginBottom: 6}}>
                  <span style={{display: 'inline-block', width: 18, height: 18, background: 'linear-gradient(135deg,#6c63ff 60%,#c770f0 100%)', borderRadius: '50%', marginRight: 10, boxShadow: '0 1px 4px rgba(108,99,255,0.10)'}}></span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
          {project.motivation && <div style={{marginBottom: 8}}><strong style={{color: '#b39ddb', fontSize: 16}}>Motivasi:</strong> <span style={{color: '#d1c4e9', fontSize: 15, marginLeft: 6}}>{project.motivation}</span></div>}
          {project.challenges && <div style={{marginBottom: 8}}><strong style={{color: '#b39ddb', fontSize: 16}}>Tantangan:</strong> <span style={{color: '#d1c4e9', fontSize: 15, marginLeft: 6}}>{project.challenges}</span></div>}
        </div>

        {/* Main Content */}
        <Row className="align-items-center" style={{gap: 0}}>
          {/* Image Column */}
          <Col md={6} style={{marginBottom: 24}}>
            <div
              style={{
                background: 'linear-gradient(135deg, #2d1950 60%, #6c63ff 100%)',
                borderRadius: 18,
                boxShadow: '0 6px 32px 0 rgba(108,99,255,0.13)',
                border: '2.5px solid #6c63ff',
                padding: 18,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s cubic-bezier(.4,2,.3,1)',
                overflow: 'hidden',
                minHeight: 260,
                aspectRatio: '4/3',
                position: 'relative',
              }}
              onMouseOver={e => {
                e.currentTarget.style.boxShadow = '0 8px 36px 0 rgba(108,99,255,0.22)';
                e.currentTarget.style.transform = 'translateY(-6px) scale(1.01)';
              }}
              onMouseOut={e => {
                e.currentTarget.style.boxShadow = '0 6px 32px 0 rgba(108,99,255,0.13)';
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
              }}
            >
              <img
                src={project.hero}
                alt={project.title}
                width={420}
                height={315}
                style={{
                  width: '100%',
                  maxWidth: 420,
                  borderRadius: 14,
                  boxShadow: '0 4px 24px rgba(108,99,255,0.13)',
                  transition: 'transform 0.35s cubic-bezier(.4,2,.3,1)',
                  cursor: 'pointer',
                  objectFit: 'cover',
                  aspectRatio: '4/3',
                  background: '#fff',
                  border: '2px solid #c770f0',
                }}
                onMouseOver={e => e.currentTarget.style.transform = 'scale(1.07)'}
                onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
              />
            </div>
          </Col>

          {/* Details Column */}
          <Col md={6}>
            <div 
              style={{
                background: 'rgba(30, 22, 54, 0.92)', 
                borderRadius: 14, 
                boxShadow: '0 2px 16px rgba(0,0,0,0.10)', 
                border: '1px solid #2d1950', 
                padding: 24,
                transition: 'all 0.3s ease',
                height: '100%'
              }}
              onMouseOver={e => {
                e.currentTarget.style.boxShadow = '0 4px 24px rgba(108,99,255,0.20)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseOut={e => {
                e.currentTarget.style.boxShadow = '0 2px 16px rgba(0,0,0,0.10)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <h1 
                style={{
                  marginBottom: 16, 
                  color: 'var(--imp-text-color)', 
                  fontWeight: 700, 
                  fontSize: 26, 
                  letterSpacing: 0.5
                }}
              >
                {project.title}
              </h1>
              <p 
                style={{
                  fontSize: 18, 
                  color: '#eee', 
                  marginBottom: 12,
                  lineHeight: 1.7
                }}
              >
                {project.description}
              </p>
              {project.detail && (
                <div 
                  style={{
                    marginBottom: 16, 
                    color: '#d1c4e9',
                    lineHeight: 1.7
                  }} 
                  dangerouslySetInnerHTML={{__html: project.detail}} 
                />
              )}
              <div style={{marginTop: 20, display: 'flex', gap: 10, flexWrap: 'wrap'}}>
                {project.ghLink && (
                  <Button 
                    variant="dark" 
                    href={project.ghLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={{
                      fontWeight: 500, 
                      borderRadius: 8,
                      padding: '10px 24px',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
                    }}
                    onMouseOver={e => {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.25)';
                    }}
                    onMouseOut={e => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.15)';
                    }}
                  >
                    GitHub
                  </Button>
                )}
                {project.demoLink && (
                  <Button 
                    variant="primary" 
                    href={project.demoLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={{
                      fontWeight: 500, 
                      borderRadius: 8,
                      padding: '10px 24px',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 2px 8px rgba(108,99,255,0.25)'
                    }}
                    onMouseOver={e => {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0 4px 12px rgba(108,99,255,0.35)';
                    }}
                    onMouseOut={e => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 2px 8px rgba(108,99,255,0.25)';
                    }}
                  >
                    Live Demo
                  </Button>
                )}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default ProjectDetail;