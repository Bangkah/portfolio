import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Halo! Saya <span className="purple">Muhammad Dhiyaul Atha</span>, seorang <span className="purple">mahasiswa Teknik Informatika</span> di Politeknik Negeri Lhokseumawe.

            <br />
            <br />
            Saya fokus dalam pengembangan website menggunakan <strong className="purple">PHP native</strong> maupun <strong className="purple">framework Laravel</strong>. Saya senang membangun aplikasi web yang bersih, efisien, dan mudah dikembangkan.

            <br />
            <br />
            Selain itu, saya aktif mengikuti perkembangan teknologi web, belajar membangun aplikasi fullstack, dan terbuka untuk berbagai kolaborasi seperti:
            <ul>
              <li>📦 Proyek freelance (UMKM & individu)</li>
              <li>🌐 Kolaborasi open-source</li>
              <li>👨‍💻 Tim pengembang aplikasi</li>
            </ul>

            <br />
            🎯 Tujuan saya adalah menjadi seorang <strong className="purple">Full-Stack Web Developer</strong> yang berkualitas, profesional, dan memberikan dampak nyata melalui teknologi.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
