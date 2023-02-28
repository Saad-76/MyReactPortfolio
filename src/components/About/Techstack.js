import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiGit,
} from "react-icons/di";
import { FaVuejs } from "react-icons/fa";
import {
  SiRedux,
  SiMobxstatetree,
  SiMaterialui,
  SiApacheecharts,
  SiReduxsaga,
} from "react-icons/si";

import {
  BsFillBootstrapFill
} from "react-icons/bs";


const Techstack = () => {

  return (
    <>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons "  >
          <DiJavascript1 color="white" />
          <p className="animate-charcter" style={{ fontSize: '14px' }}>JavaScript</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiReact color="#5ad1f6" />
          <p className="animate-charcter" style={{ fontSize: '14px' }}>React JS</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons" >
          <SiRedux color="#7649be" />
          <p className="animate-charcter" style={{ fontSize: '14px' }}> React Redux</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons" >
          <SiReduxsaga color="#7649be" />
          <p className="animate-charcter" style={{ fontSize: '14px' }}> Redux Saga</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          < FaVuejs color="green" />
          <p className="animate-charcter" style={{ fontSize: '14px' }}>Vue JS</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiMobxstatetree color="#e96d03" />
          <p className="animate-charcter" style={{ fontSize: '14px' }}>Mobx</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons" >
          <SiMaterialui color="#4180ff" />
          <p className="animate-charcter" style={{ fontSize: '14px' }}>Material UI</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons" >
          <BsFillBootstrapFill color="#7911f1" />
          <p className="animate-charcter" style={{ fontSize: '14px' }}>Bootstrap</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiApacheecharts color="#dc375e" />
          <p className="animate-charcter" style={{ fontSize: '14px' }}>Apache Echarts</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons" >
          <DiGit color="#e84e31" />
          <p className="animate-charcter" style={{ fontSize: '14px' }}>GIT</p>
        </Col>
      </Row>
    </>
  );
}

export default Techstack;
