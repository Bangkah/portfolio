import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiPhp,
  DiGit,
  DiHtml5,
  DiCss3,
  DiMysql,
  DiLaravel,
} from "react-icons/di";
import { SiBootstrap, SiMicrosoftaccess, SiVisualstudiocode, SiXampp, SiC } from "react-icons/si";
import { FaLinux, FaNodeJs } from "react-icons/fa";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Bahasa Pemrograman */}
      <Col xs={4} md={2} className="tech-icons" title="JavaScript"><DiJavascript1 /></Col>
      <Col xs={4} md={2} className="tech-icons" title="PHP"><DiPhp /></Col>
      <Col xs={4} md={2} className="tech-icons" title="C"><SiC /></Col>
      <Col xs={4} md={2} className="tech-icons" title="HTML"><DiHtml5 /></Col>
      <Col xs={4} md={2} className="tech-icons" title="CSS"><DiCss3 /></Col>

      {/* Framework dan Library */}
      <Col xs={4} md={2} className="tech-icons" title="React.js"><DiReact /></Col>
      <Col xs={4} md={2} className="tech-icons" title="Bootstrap"><SiBootstrap /></Col>
      <Col xs={4} md={2} className="tech-icons" title="Laravel"><DiLaravel /></Col>

      {/* Database */}
      <Col xs={4} md={2} className="tech-icons" title="MySQL"><DiMysql /></Col>
      <Col xs={4} md={2} className="tech-icons" title="Microsoft Access"><SiMicrosoftaccess /></Col>

      {/* Tools */}
      <Col xs={4} md={2} className="tech-icons" title="Git"><DiGit /></Col>
      <Col xs={4} md={2} className="tech-icons" title="VS Code"><SiVisualstudiocode /></Col>
      <Col xs={4} md={2} className="tech-icons" title="XAMPP"><SiXampp /></Col>
      <Col xs={4} md={2} className="tech-icons" title="Node.js"><FaNodeJs /></Col>
      <Col xs={4} md={2} className="tech-icons" title="Linux"><FaLinux /></Col>
    </Row>
  );
}

export default Techstack;
