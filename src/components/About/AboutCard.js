import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I am <span className="purple">Laxmi Dutta </span>
            from <span className="purple"> West Bengal, India.</span>
            <br />Dedicated software developer with 1.5 years of hands-on experience crafting user-centric and dynamic web
            applications. I'm passionate about tackling challenges
            and staying on the cutting edge of industry trends. I'm
            eager to use my experience in a demanding web
            development position that supports organizational
            objectives.
            <br />
          </p>
         
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
