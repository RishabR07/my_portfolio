import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import { FaGraduationCap } from "react-icons/fa";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        {/* About + Image */}
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>

        {/* Skillset */}
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset</strong>
        </h1>
        <Techstack />

        {/* Tools */}
        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

        {/* Education */}
        <h1 className="project-heading">
          <FaGraduationCap style={{ marginRight: "10px" }} />
          <strong className="purple">Education</strong> Qualifications
        </h1>

        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col md={8}>
            <div
              style={{
                background: "rgba(255, 255, 255, 0.05)",
                padding: "25px",
                borderRadius: "15px",
                boxShadow: "0 0 15px rgba(144, 0, 255, 0.4)",
                color: "#fff",
              }}
            >
              <h4 style={{ color: "#fca311", fontWeight: "bold" }}>
                🎓 Diploma in Computer Science
              </h4>
              <p>
                <strong>Karnataka Govt Polytechnic, Mangalore</strong><br />
                Kadri, Mangalore – <em>2023 – 2026</em>
              </p>

              <hr style={{ borderColor: "#444" }} />

              <h5 style={{ color: "#61dafb", fontWeight: "bold" }}>
                🏫 SSLC – High School
              </h5>
              <p>
                <strong>Canara High School Urwa, Mangalore Karnataka</strong><br />
                Year: <em>2022 – 2023</em>
              </p>
            </div>
          </Col>
        </Row>

        {/* GitHub */}
        <Github />
      </Container>
    </Container>
  );
}

export default About;
