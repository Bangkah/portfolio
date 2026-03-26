import React from "react";
import PropTypes from 'prop-types';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import SmartImage from "../common/SmartImage";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <div className="project-image-wrapper">
        <SmartImage
          src={props.imgPath}
          srcSet={props.imgSrcSet}
          sizes={props.imgSizes}
          alt={`${props.title} preview`}
          loading="lazy"
          decoding="async"
          width={props.imgWidth || 640}
          height={props.imgHeight || 360}
          className="project-image"
        />
      </div>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        {props.ghLink && (
          <Button
            variant="dark"
            href={props.ghLink}
            target="_blank"
            rel="noreferrer"
            aria-label={`${props.title} GitHub link`}
          >
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>
        )}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            rel="noreferrer"
            aria-label={`${props.title} live demo`}
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp; Demo
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}


ProjectCards.propTypes = {
  imgPath: PropTypes.string.isRequired,
  imgSrcSet: PropTypes.string,
  imgSizes: PropTypes.string,
  imgWidth: PropTypes.number,
  imgHeight: PropTypes.number,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  ghLink: PropTypes.string,
  isBlog: PropTypes.bool,
  demoLink: PropTypes.string,
};

export default ProjectCards;
