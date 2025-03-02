import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Pranav S </span>
            from <span className="purple"> Kerala, India.</span>
            <br />I am currently pursuing my{" "}
            <span className="purple">
              B.Tech in Computer Science and Engineering
            </span>{" "}
            from{" "}
            <span className="purple">College of Engineering Trivandrum.</span>
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            “Growth and comfort do not coexist.”{" "}
          </p>
          <footer className="blockquote-footer">Ginni Rommetty</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
