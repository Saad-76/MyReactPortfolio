import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Main from "./main";
function ProjectsDone() {
  return (
    <Container fluid className="projects-section">
      <Particle />
      <Main />
    </Container>
  );
}

export default ProjectsDone;
