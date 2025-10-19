import React from "react";
import { Container } from "react-bootstrap";

function Footer() {
  return (
    <footer className="footer bg-dark text-light py-5 text-center">
      <Container>
        <p className="mb-0">
          © {new Date().getFullYear()} <span className="violet-text">Rishab Shetty</span>. All Rights Reserved.
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
