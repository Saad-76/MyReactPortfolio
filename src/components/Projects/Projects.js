import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import videoUrl from '../../Assets/react_js_card.mp4'
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
           Providing<strong className="purple"> Services </strong> In
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col sm={4} className="project-card">
            <ProjectCard
              videoUrl={videoUrl}
              isBlog={false}
              title="Website Development Using React JS"
              description={`Hello! I'm a highly skilled React.js developer with a passion for creating dynamic and interactive web applications. I have extensive experience working with React and its related technologies, such as Redux, Mobx state Tree and  MUI and I'm confident in my ability to bring your project vision to life.

              My expertise lies in building scalable, high-performance web applications that are both user-friendly and visually appealing. I'm well-versed in the latest web development best practices, and I always strive to create code that is clean, maintainable, and easily understandable.
              
              Whether you need help with a single component or a complete web application.
              
              Let's work together to create a stunning React.js web application that delivers the results you need. Contact me today to discuss your project!`}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              videoUrl={videoUrl}
              isBlog={false}
              title="Existing code bug fixes"
              description="I'm a seasoned software developer with expertise in fixing complex bugs and errors in websites and applications. My experience includes working with various programming languages and platforms, and I'm confident in my ability to quickly identify and resolve issues.

              I'm dedicated to delivering high-quality work that meets the specific needs of my clients. Whether you need a simple bug fix or a more complex solution, I'll work closely with you to ensure complete satisfaction. With my attention to detail and commitment to meeting deadlines, you can trust that your project is in good hands.
              
              Let's work together to bring your website or application up to its full potential.
              
              Contact me today to discuss your bug fixing needs!"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              videoUrl={videoUrl}
              isBlog={false}
              title="Manual Testing"
              description={`I'm an experienced manual tester with a keen eye for detail and a passion for quality assurance. My expertise lies in identifying and reporting defects in software applications, and I have a strong understanding of both functional and non-functional testing.

              I'm committed to providing thorough and comprehensive testing services to ensure that your software is free from bugs and errors. I'm proficient in various testing methodologies, such as regression testing, integration testing, and user acceptance testing, and I have experience working with a variety of testing tools and platforms.
              
              Whether you're launching a new software application or simply need a fresh set of eyes to identify potential issues, Let's work together to ensure that your software is ready for launch. Contact me today to discuss your manual testing needs!`}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
