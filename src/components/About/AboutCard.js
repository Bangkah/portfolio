import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        {/* Foto bulat di bawah judul dihapus, hanya ilustrasi samping yang tampil */}
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Halo! Saya <b className="purple">Muhammad Dhiyaul Atha</b>, seorang <b className="purple">mahasiswa Teknik Informatika</b> yang antusias dalam dunia <b className="purple">pengembangan web</b> dan teknologi.
            <br />
            <br />
            Saya berpengalaman menggunakan berbagai bahasa pemrograman seperti <b className="purple">JavaScript, PHP, Python, dan Java</b>, serta terbiasa membangun aplikasi dan website modern dengan <b className="purple">React.js</b> dan <b className="purple">Laravel</b>.
            <br />
            <br />
            Saya senang menciptakan solusi digital yang <b className="purple">efisien, responsif, dan mudah dikembangkan</b>, mulai dari blog pribadi, sistem absensi, hingga portofolio online.
            <br />
            <br />
            Dalam setiap proyek, saya selalu mengutamakan kerapian kode, kolaborasi tim, dan pemanfaatan tools profesional seperti <b className="purple">Visual Studio Code, Postman, GitHub,</b> serta <b className="purple">Linux/Arch Linux</b> untuk menunjang produktivitas.
            <br />
            <br />
            Saya percaya bahwa pembelajaran dan adaptasi teknologi baru adalah kunci untuk terus berkembang di dunia IT. Saya terbuka untuk kolaborasi, diskusi, maupun peluang baru di bidang teknologi.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
