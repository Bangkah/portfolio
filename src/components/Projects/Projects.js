import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// Gambar proyek (pastikan semua gambar tersedia di folder ini)
import muslimlifeImg from "../../Assets/Projects/muslimlife.png";
import akademikImg from "../../Assets/Projects/akademik.png";
import jekyllblogImg from "../../Assets/Projects/jekyllblog.png";
import portfolioImg from "../../Assets/Projects/portfolio.png";
import gudangtugasImg from "../../Assets/Projects/gudangtugas.png";
import topupImg from "../../Assets/Projects/topup.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Proyek <strong className="purple">Terbaru</strong> Saya
        </h1>
        <p style={{ color: "white" }}>
          Berikut adalah beberapa proyek yang telah saya kerjakan:
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* Muslim Life */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={muslimlifeImg}
              isBlog={false}
              title="Website Muslim Life"
              description="Website Muslim Life berisi fitur-fitur Islami seperti jadwal shalat, Al-Qur'an digital, dan doa harian. Dibuat menggunakan HTML, CSS, dan JavaScript."
              
            />
          </Col>

          {/* Akademik Kampus */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={akademikImg}
              isBlog={false}
              title="Aplikasi Akademik Kampus"
              description="Sistem informasi akademik kampus berbasis web untuk manajemen data mahasiswa, dosen, kelas, dan prodi. Dibuat dengan PHP dan MySQL."
              
            />
          </Col>

          {/* Blog Jekyll */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jekyllblogImg}
              isBlog={false}
              title="Blog Pribadi dengan Jekyll"
              description="Blog pribadi statis menggunakan Jekyll dan GitHub Pages. Menyediakan artikel teknologi dan dokumentasi proyek open source."
              
            />
          </Col>

          {/* Portofolio */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolioImg}
              isBlog={false}
              title="Website Portofolio"
              description="Portofolio pribadi yang dibangun menggunakan React.js, Bootstrap, dan di-deploy ke Vercel."
              
            />
          </Col>

          {/* Gudang Tugas */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gudangtugasImg}
              isBlog={false}
              title="Gudang Tugas"
              description="Situs web untuk menyimpan dan berbagi tugas-tugas kuliah. Dibuat dengan PHP dan MySQL."
              
            />
          </Col>

          {/* Top Up Game Online */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={topupImg}
              isBlog={false}
              title="Top Up Game Online"
              description="Website layanan top up game seperti Mobile Legends dan Free Fire. Dibuat dengan HTML, CSS, dan JavaScript tanpa backend."
              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
