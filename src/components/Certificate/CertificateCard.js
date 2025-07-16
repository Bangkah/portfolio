// src/components/Certificate/CertificateCard.js

import React from "react";
import Card from "react-bootstrap/Card";

function CertificateCard({ imgPath }) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={imgPath} alt="sertifikat" />
    </Card>
  );
}

export default CertificateCard;
