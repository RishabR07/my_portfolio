import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import myImg from "../../Assets/rishab.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> Python, Java and basic Data Structures. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b> and
                also in areas related to{" "}
                <b className="purple">
                  Full Stack Web Development including AI in it.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Backend Frameworks</b>
              &nbsp; like
              <i>
                <b className="purple"> Node.js and Spring Boot</b>
              </i>
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={myImg}
                className="img-fluid"
                alt="avatar"
                style={{
                  width: "250px",
                  height: "250px",
                  borderRadius: "100%",
                  objectFit: "cover",
                }}
              />
            </Tilt>
          </Col>
        </Row>
 {/* ✅ Download Resume Button */}
          <div
            style={{
              marginTop: "50px",
              marginBottom: "25px",
              textAlign: "center",
              marginLeft: "10px",
            }}
          >
            <Button
              variant="primary"
              href="https://drive.google.com/file/d/14r19sye2lp9hWnwc3qSQShIiphfrKnm6/view?usp=drive_link"
              target="_blank"
              rel="noreferrer"
              style={{
                backgroundColor: "#6f42c1",
                borderColor: "#6f42c1",
                borderRadius: "30px",
                padding: "10px 25px",
                fontWeight: "500",
                letterSpacing: "0.5px",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                transition: "transform 0.2s ease",
              }}
              onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
              onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
            >
              ⬇️ View Resume
            </Button>
          </div>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/RishabR07"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/rishabshettyofficial"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>

           
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
