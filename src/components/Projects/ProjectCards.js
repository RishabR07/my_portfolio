import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";

function ProjectCards(props) {
  const [showDescription, setShowDescription] = useState(false);

  const handleToggleDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>

        {/* Toggle Description Button */}
        <Button variant="info" onClick={handleToggleDescription}>
          {showDescription ? "Hide Description" : "Show Description"}
        </Button>

        {/* Conditionally Rendered Description */}
        {showDescription && (
          <Card.Text style={{ textAlign: "justify", marginTop: "10px" }}>
            {props.description}
          </Card.Text>
        )}

        {/* Optional Demo Link */}
        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginTop: "10px", marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
