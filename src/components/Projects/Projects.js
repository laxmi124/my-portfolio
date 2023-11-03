import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import amazonPrime from "../../Assets/Projects/amazonPrimeSS.png";
import imdb from "../../Assets/Projects/ImdbSS.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={imdb}
              isBlog={false}
              title="IMDb Clone"
              description="Tech stack used are React.js, Redux, Material UI, BootStrap, Styled-components,Debouncing, Node.js, all data used are taken from Tmdb
              API, and fetched using Axios, Switch language, Carousel,react-YouTube, Authentication "
              ghLink="https://github.com/laxmi124/imdb"
              demoLink="https://imdb-masai.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={amazonPrime}
              isBlog={false}
              title="Amazon Prime Clone"
              description="Tech Stack: React, Redux, Bootstrap, MUI, React,Styled-components. Features: Signup, Sign in, log in, Dynamic Banner,
              Carousel, Tmdb API, Movie cards, react-YouTube,
              YouTube-trailer, all data used are taken from Tmdb
              API, and fetched using Axios"
              ghLink="https://github.com/icyflame21/Amazon-Prime-Clone"
              demoLink="https://amazonprime-clone.netlify.app/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
