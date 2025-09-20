import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import muslimlifeImg from "../../Assets/Projects/muslimlife.png";
import akademikImg from "../../Assets/Projects/akademik.png";
import absensiImg from "../../Assets/Projects/absensi.png";
import islamicblogImg from "../../Assets/Projects/islamicblog.png";
import mantapaiImg from "../../Assets/Projects/mantapai.png";
import gudangtugasImg from "../../Assets/Projects/gudangtugas.png";
import jekyllblogImg from "../../Assets/Projects/jekyllblog.png";
import portfolioImg from "../../Assets/Projects/portfolio.png";
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

          {/* Website Muslim Life */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={muslimlifeImg}
              isBlog={false}
              title="Website Muslim Life"
              description="Platform Islami lengkap dengan jadwal shalat, Al-Qur'an digital, dan doa harian. Dibangun dengan HTML, CSS, dan JavaScript untuk pengalaman pengguna yang intuitif."
            />
          </Col>

          {/* Akademik Kampus */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={akademikImg}
              isBlog={false}
              title="Aplikasi Akademik Kampus"
              description="Sistem informasi akademik berbasis web untuk manajemen data mahasiswa, dosen, kelas, dan prodi. Dibuat menggunakan PHP & MySQL untuk efisiensi administrasi kampus."
            />
          </Col>

          {/* Absensi Karyawan */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={absensiImg}
              isBlog={false}
              title="Aplikasi Absensi Karyawan"
              description="Sistem absensi berbasis web dengan fitur QR Code, absensi manual, manajemen izin, dan laporan lengkap. Dibangun menggunakan Laravel 10 untuk perusahaan skala menengah."
            />
          </Col>

          {/* Blog Islam */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={islamicblogImg}
              isBlog={false}
              title="Aplikasi Blog Islam"
              description="Platform blogging Islami dengan CRUD konten dan API terintegrasi. Dirancang responsif agar pengguna dapat mengakses artikel dari perangkat apapun."
            />
          </Col>

          {/* Mantap AI */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mantapaiImg}
              isBlog={false}
              title="Mantap AI"
              description="Aplikasi web untuk menjalankan AI Assistant berbasis LLM lokal dan Ollama. Backend dibuat dengan Node.js & Express, menyediakan interaksi AI real-time."
            />
          </Col>

          {/* Gudang Tugas */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gudangtugasImg}
              isBlog={false}
              title="Gudang Tugas"
              description="Situs web untuk menyimpan dan berbagi tugas kuliah secara terstruktur. Dibangun dengan PHP & MySQL untuk kemudahan pengelolaan dokumen akademik."
            />
          </Col>

          {/* Blog Pribadi dengan Jekyll */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jekyllblogImg}
              isBlog={false}
              title="Blog Pribadi dengan Jekyll"
              description="Blog statis dengan Jekyll dan GitHub Pages, menampilkan artikel teknologi dan dokumentasi proyek open source secara terorganisir."
            />
          </Col>

          {/* Website Portofolio */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolioImg}
              isBlog={false}
              title="Website Portofolio"
              description="Portofolio pribadi interaktif menggunakan React.js & Bootstrap, menampilkan proyek dan kemampuan teknis. Dideploy ke Vercel untuk akses global."
            />
          </Col>

          {/* Top Up Game Online */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={topupImg}
              isBlog={false}
              title="Top Up Game Online"
              description="Website layanan top up game seperti Mobile Legends & Free Fire. Dibuat dengan HTML, CSS, dan JavaScript untuk transaksi digital yang cepat dan mudah."
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
