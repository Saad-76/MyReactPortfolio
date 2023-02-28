import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaJira } from "react-icons/fa";
import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
        <p className="animate-charcter" style={{ fontSize: '14px' }}> Linux</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode fill="#4aa6ea"/>
        <p className="animate-charcter" style={{ fontSize: '14px' }}> VS Code</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman fill="#f06c38"/>
        <p className="animate-charcter" style={{ fontSize: '14px' }}> Postman</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaJira fill="#4081f6" />
        <p className="animate-charcter" style={{ fontSize: '14px' }}> Jira</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHeroku fill="#383bab"/>
        <p className="animate-charcter" style={{ fontSize: '14px' }}> Heroku</p>
      </Col>
    </Row>
  );
}

export default Toolstack;
