import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Particle from "../Particle";
import {
  AiFillGithub,
  AiFillInstagram,
  AiOutlineMail,
  AiFillYoutube,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import "./Contact.css"; // custom styling

function Contact() {
  return (
    <Container fluid className="contact-section" id="contact">
      <Particle />
      <Container className="contact-content text-center">
        <h1 className="heading">
  Contact <span className="violet-text">Me</span>
</h1>
 <p>Have a question or want to connect? I’m just a click away.</p>

        <Row className="justify-content-center mt-4 g-3">
          <Col md="auto">
            <Button
              href="mailto:rishab@example.com"
              target="_blank"
              className="contact-btn email-btn"
            >
              <AiOutlineMail size={20} style={{ marginRight: "8px" }} />
              Email
            </Button>
          </Col>

          <Col md="auto">
            <Button
              href="https://www.linkedin.com/in/"
              target="_blank"
              className="contact-btn linkedin-btn"
            >
              <FaLinkedinIn size={20} style={{ marginRight: "8px" }} />
              LinkedIn
            </Button>
          </Col>

          <Col md="auto">
            <Button
              href="https://github.com/RishabR07"
              target="_blank"
              className="contact-btn github-btn"
            >
              <AiFillGithub size={20} style={{ marginRight: "8px" }} />
              GitHub
            </Button>
          </Col>

          <Col md="auto">
            <Button
              href="https://www.instagram.com/rishabshettyofficial"
              target="_blank"
              className="contact-btn instagram-btn"
            >
              <AiFillInstagram size={20} style={{ marginRight: "8px" }} />
              Instagram
            </Button>
          </Col>

          <Col md="auto">
            <Button
              href="https://www.youtube.com/"
              target="_blank"
              className="contact-btn youtube-btn"
            >
              <AiFillYoutube size={20} style={{ marginRight: "8px" }} />
              YouTube
            </Button>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact;
