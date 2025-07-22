import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiVercel,
  SiNetlify,
  SiGit,
  SiWindows,
} from "react-icons/si";

function Toolstack() {
  const tools = [
    { icon: <SiWindows />, name: "Windows", color: "#00A4EF" },
    { icon: <SiVisualstudiocode />, name: "VS Code", color: "#007ACC" },
    { icon: <SiGit />, name: "Git", color: "#F05032" },
    { icon: <SiVercel />, name: "Vercel", color: "#bcb5b5ff" },
    { icon: <SiNetlify />, name: "Netlify", color: "#00C7B7" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map((tool, idx) => (
        <Col key={idx} xs={4} md={2} className="tech-icons text-center">
          <div style={{ fontSize: "4rem", color: tool.color }}>{tool.icon}</div>
          <div
            style={{
              marginTop: "10px",
              fontSize: "1rem",
              fontWeight: "bold",
              color: tool.color,
            }}
          >
            {tool.name}
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
