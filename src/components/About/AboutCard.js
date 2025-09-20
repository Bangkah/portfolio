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
            Saya memiliki fokus utama dalam pengembangan website menggunakan <strong className="purple">PHP native</strong> maupun <strong className="purple">framework Laravel</strong>. Saya senang membangun aplikasi web yang bersih, efisien, responsif, dan mudah dikembangkan.

            <br />
            <br />
            Selain itu, saya aktif mengikuti perkembangan teknologi web, terus meningkatkan kemampuan fullstack, dan terbuka untuk berbagai bentuk kolaborasi, seperti:
            <ul>
              <li>📦 Proyek freelance (UMKM & individu)</li>
              <li>🌐 Kontribusi open-source</li>
              <li>👨‍💻 Kolaborasi tim pengembangan aplikasi</li>
            </ul>

            <br />
            🎯 Tujuan saya adalah menjadi seorang <strong className="purple">Full-Stack Web Developer</strong> yang kompeten, profesional, dan mampu memberikan dampak positif melalui teknologi.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
