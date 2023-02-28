import React from "react";
import Card from "react-bootstrap/Card";


function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      {/* <video   autoPlay muted  loop="true">
      <source src={props.videoUrl} type="video/mp4" />
     </video> */}
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <br/>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
