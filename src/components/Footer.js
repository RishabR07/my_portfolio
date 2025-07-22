import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer bg-dark text-light py-4">
      <Container>
        <Row className="align-items-center text-center text-md-left">
          <Col md={4} className="mb-3 mb-md-0">
            <h5 className="mb-0">Designed & Developed by <strong>Rishab Shetty</strong></h5>
          </Col>
          <Col md={4} className="mb-3 mb-md-0">
            <h6 className="mb-0">© {year} Rishab Shetty. All rights reserved.</h6>
          </Col>
          <Col md={4}>
            <ul className="list-inline mb-0 d-flex justify-content-center justify-content-md-end gap-3">
              <li className="list-inline-item">
                <a
                  href="https://github.com/RishabR07"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  style={{ color: "white", fontSize: "1.5rem" }}
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  style={{ color: "white", fontSize: "1.5rem" }}
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  href="https://www.linkedin.com/in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  style={{ color: "white", fontSize: "1.5rem" }}
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  href="https://www.instagram.com/rishabshettyofficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  style={{ color: "white", fontSize: "1.5rem" }}
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
