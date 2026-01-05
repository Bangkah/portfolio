import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import SEO from "../SEO";

import muslimlifeImg from "../../Assets/Projects/muslimlife.png";
import akademikImg from "../../Assets/Projects/akademik.png";
import absensiImg from "../../Assets/Projects/absensi.png";
import islamicblogImg from "../../Assets/Projects/islamicblog.png";
import mantapaiImg from "../../Assets/Projects/mantapai.png";
import gudangtugasImg from "../../Assets/Projects/gudangtugas.png";
import jekyllblogImg from "../../Assets/Projects/jekyllblog.png";
import portfolioImg from "../../Assets/Projects/portfolio.png";
import yourstoryImg from "../../Assets/Projects/yourstory.png";

function Projects() {
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
        <p style={{ color: "white" }}>
          Berikut adalah beberapa proyek yang telah saya kerjakan. Temukan karya terbaik <b>Atha</b>, <b>Dhiyaul</b>, <b>Bangkah</b>, dan <b>Muhammad Dhiyaul Atha</b> di bawah ini. Lihat juga <a href="/about">profil lengkap</a> dan <a href="/certificates">sertifikat</a> saya.
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

          {/* Your story portfolio */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={yourstoryImg}
              isBlog={false}
              title="Your Story Portfolio"
              description="Website portofolio profesional untuk startup Your Story, sebuah platform kreatif untuk menulis dan membaca cerita."
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
