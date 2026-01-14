import React from "react";
import PropTypes from 'prop-types';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <div style={{ width: "100%", aspectRatio: "16/9", overflow: "hidden", borderTopLeftRadius: '0.5rem', borderTopRightRadius: '0.5rem' }}>
        <img
          src={props.imgPath}
          alt={`${props.title} preview`}
          loading="lazy"
          decoding="async"
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
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
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  ghLink: PropTypes.string,
  isBlog: PropTypes.bool,
  demoLink: PropTypes.string,
};

export default ProjectCards;
