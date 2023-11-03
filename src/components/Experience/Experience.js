import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import ExperienceCard from "./ExperienceCard";
// import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import ExperienceCard from "./ExperienceCard";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          <strong className="purple">Work Experience </strong> 
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
           <Col md={12} className="project-card">
            <ExperienceCard
              imgPath={chatify}
              isBlog={false}
              companyName="Agrostar"
              duration="May 2022 - Oct 2023"
              title="SDE I"
              role={["Led UI projects, collaborating with diverse teams to create user-friendly interfaces",
                "Worked on internal and external projects.",
                "Migrated one project from AngularJS to ReactJS, and extra features were added to improve the user interface and make it mobile responsive.",
               " Worked on a B2B user app where we developed e-commerce capabilities and integrated critical functionality for our client, including bulk image upload, order return, user complaints flow, etc.",
                "Worked with the team that handles production issues, which requires analyzing the problems and, based on priority, releasing hotfixes for them.",
                "Integrated CleverTap to monitor users’ actions and Sentry to receive alerts for issues from web applications.",
                "Implemented a JavaScript bridge that allows communication between Android apps and Web View."
                ]}
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
