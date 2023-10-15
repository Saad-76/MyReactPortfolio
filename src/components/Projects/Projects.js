import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import videoUrl from "../../Assets/react_js_card.mp4";
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
              title="Web Development Utilizing the MERN Stack"
              description={`I'm an experienced React.js and Node.js developer that is passionate about creating dynamic and engaging online experiences. I am confident that my extensive knowledge of React and its related technologies, such as Redux, Mobx State Tree, and Material-UI (MUI), will enable me to realise the goals of your project. Building scalable, high-performing online applications that blend usability and aesthetic appeal is my area of expertise. I am knowledgeable about the most recent web development standards, and I always strive to write clear, easily understandable code. Let's work together to create a stunning React.js and Node.js web application that meets your needs, regardless of whether you need help with a single component or the full project. Please get in touch with us right now to discuss your project!`}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              videoUrl={videoUrl}
              isBlog={false}
              title="Debugging and Enhancing Existing Code"
              description=" I'm a seasoned software developer specializing in the resolution of intricate bugs and errors within websites and applications. My extensive experience spans across multiple programming languages and platforms, granting me the confidence to swiftly pinpoint and rectify issues. My dedication lies in delivering top-notch solutions tailored to the unique requirements of my clients. Whether you're in need of a straightforward bug fix or a more intricate solution, I'll collaborate closely with you to ensure your complete satisfaction. With my meticulous attention to detail and unwavering commitment to meeting deadlines, you can have full confidence that your project is in capable hands. Let's join forces to elevate your website or application to its maximum potential. Feel free to reach out today to discuss your debugging and enhancement needs!"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              videoUrl={videoUrl}
              isBlog={false}
              title="Manual Quality Assurance Testing"
              description={`I'm a seasoned manual tester known for my meticulous attention to detail and an unwavering dedication to quality assurance. My area of expertise lies in the precise identification and comprehensive reporting of software application defects. I possess a strong grasp of both functional and non-functional testing, ensuring that your software remains free from bugs and errors. I excel in various testing methodologies, including but not limited to regression testing, integration testing, and user acceptance testing. With hands-on experience across diverse testing tools and platforms, I'm well-equipped to support your testing requirements. Whether you're on the verge of launching a new software application or simply seeking a fresh perspective to uncover potential issues, let's collaborate to guarantee the readiness of your software for its debut. Feel free to reach out today to discuss your manual testing needs!`}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
