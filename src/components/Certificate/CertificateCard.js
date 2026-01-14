// src/components/Certificate/CertificateCard.js

import React from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";

function CertificateCard({ imgPath, title }) {
  return (
    <Card className="project-card-view">
      <Card.Img
        variant="top"
        src={imgPath}
        alt={title ? `Sertifikat ${title}` : "sertifikat"}
        loading="lazy"
        width={320}
        height={240}
        style={{ objectFit: "cover", background: "#fff" }}
      />
    </Card>
  );
}

CertificateCard.propTypes = {
  imgPath: PropTypes.string.isRequired,
  title: PropTypes.string,
};

export default CertificateCard;
