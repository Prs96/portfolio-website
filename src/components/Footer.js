import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import dogGif from "../Assets/dog.gif";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <Container
      fluid
      className="footer py-4 "
      style={{ bottom: "0", width: "100%" }}
    >
      <Row className="align-items-center">
        {/* Social Icons Row that reorganizes on different screen sizes */}
        <Col xs={4} md={4} className="d-flex justify-content-start ps-4">
          <a
            href="https://github.com/Prs96"
            style={{ color: "white", fontSize: "1.5rem" }}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="social-icon"
          >
            <AiFillGithub />
          </a>
        </Col>
        <Col xs={4} md={4} className="d-flex justify-content-center">
          <img
            src={dogGif}
            alt="Cute Dog"
            className="img-fluid"
            style={{ maxWidth: "50px" }}
          />
        </Col>
        <Col xs={4} md={4} className="d-flex justify-content-end pe-4">
          <a
            href="https://www.linkedin.com/in/s-pranav-s/"
            style={{ color: "white", fontSize: "1.5rem" }}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="social-icon"
          >
            <FaLinkedinIn />
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
