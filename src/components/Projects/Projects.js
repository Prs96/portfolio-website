import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Rice from "../../Assets/Projects/Rice.jpg";
import ReWiki from "../../Assets/Projects/rewiki.jpg";
import TaskMan from "../../Assets/Projects/TaskMan.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={ReWiki}
              isBlog={false}
              title="ReWiki"
              description="ReWiki is a project integrating frontend, backend and machine learning. It is a wikipedia which refuses to prove the required data to the user until they jailbreak the chatbot in the site."
              ghLink="https://github.com/Prs96/reWiki.git"
            />
          </Col>

          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={TaskMan}
              isBlog={false}
              title="TaskMan"
              description="TaskMan is a basic CRUD application that allows the user to manage their tasks. It is made using HTML, CSS and Flask."
              ghLink="https://github.com/Prs96/TaskMan.git"
            />
          </Col>

          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={Rice}
              isBlog={false}
              title="Dotfiles"
              description="My linux dotfiles for power and productivity. Based on Hyprland."
              ghLink="https://github.com/Prs96/dotfiles.git"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
