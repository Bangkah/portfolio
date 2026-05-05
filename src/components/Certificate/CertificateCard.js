// src/components/Certificate/CertificateCard.js

import React from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";

function CertificateCard({ imgPath, title }) {
  return (
    <Card className="project-card-view certificate-card-view">
      <div className="certificate-image-wrapper">
        <img
          src={imgPath}
          alt={title ? `Sertifikat ${title}` : "sertifikat"}
          loading="lazy"
          className="certificate-image"
        />
      </div>
    </Card>
  );
}

CertificateCard.propTypes = {
  imgPath: PropTypes.string.isRequired,
  title: PropTypes.string,
};

export default CertificateCard;
