import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Rishab Shetty </span>
            from <span className="purple"> Mangalore, India.</span>
            <br />
            I am currently pursuing my Diploma in Computer Science & Engg.
            <br />
            I have completed my SSLC at Canara High School Urwa , Mangalore
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing FootBall
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching cricket matches
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Micheal Jordan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
