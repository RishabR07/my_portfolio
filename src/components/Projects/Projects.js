import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>

        <Row className="justify-content-center" style={{ paddingBottom: "30px" }}>
          {/* WEATHER APP PROJECT */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Weather App"
              description="A simple weather forecasting app built using Python, OpenWeatherMap API, and basic CSS for UI."
              websiteLink="https://your-weather-app-url.vercel.app/"
            />
          </Col>

          {/* PETROL PUMP WEBSITE PROJECT */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Petrol Pump Website"
              description="A modern and interactive website for Saptagiri Enterprises Petrol Pump, showcasing services, fuel prices, and safety measures."
              websiteLink="https://sapthagiri-enterprise-indianoil.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
