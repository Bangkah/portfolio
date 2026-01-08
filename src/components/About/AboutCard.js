import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Saya memiliki ketertarikan yang kuat dalam dunia <b className="purple">programming</b> dan terus mengembangkan kemampuan hingga saat ini.
            <br />
            <br />
            Saya terbiasa menggunakan bahasa pemrograman seperti <b className="purple">JavaScript, PHP, Python, dan Java</b>.
            <br />
            <br />
            Fokus utama saya saat ini adalah membangun berbagai <b className="purple">aplikasi dan website modern</b>, termasuk blog pribadi, sistem absensi karyawan, dan portofolio, dengan memanfaatkan <b className="purple">Laravel, React.js, dan MySQL</b>.
            <br />
            <br />
            Dalam proses pengembangan, saya juga memanfaatkan berbagai alat bantu profesional seperti <b className="purple">Visual Studio Code, Postman, GitHub, dan Linux/Arch Linux</b> untuk memastikan proyek berjalan efisien dan terstruktur.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
