import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import Myresume from '../../Assets/Myresume.pdf'
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        
      <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={Myresume}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={12}>
          <Document file={Myresume} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.6 : 0.6} />
          </Document>
          </Col>
         
        </Row>

      </Container>
    </div>
  );
}

export default ResumeNew;
