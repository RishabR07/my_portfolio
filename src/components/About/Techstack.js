import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiJava,
  DiHtml5,
  DiCss3,
} from "react-icons/di";
import {
  SiDocker,
  SiJira,
} from "react-icons/si";

function Techstack() {
  const techs = [
    { icon: <DiHtml5 />, name: "HTML", color: "#E34F26" },
    { icon: <DiCss3 />, name: "CSS", color: "#1572B6" },
    { icon: <DiJavascript1 />, name: "JavaScript", color: "#F7DF1E" },
    { icon: <DiReact />, name: "ReactJS", color: "#61DAFB" },
    { icon: <DiNodejs />, name: "Node.js", color: "#68A063" },
    { icon: <DiMongodb />, name: "MongoDB", color: "#4DB33D" },
    { icon: <DiPython />, name: "Python", color: "#3776AB" },
    { icon: <DiJava />, name: "Java", color: "#f89820" },
    { icon: <SiDocker />, name: "Docker", color: "#0db7ed" },
    { icon: <SiJira />, name: "Jira", color: "#0052CC" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techs.map((tech, idx) => (
        <Col key={idx} xs={4} md={2} className="tech-icons text-center">
          <div style={{ fontSize: "4rem", color: tech.color }}>{tech.icon}</div>
          <div
            style={{
              marginTop: "10px",
              fontSize: "1rem",
              fontWeight: "bold",
              color: tech.color,
            }}
          >
            {tech.name}
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
