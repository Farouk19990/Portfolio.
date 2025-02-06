import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Farouk Kacem </span>
            from <span className="purple"> Sfax, Tunisia.</span>
            <br />
            <br />
            I completed my Applied Degree in Computer Technology at the Higher Institute of Technological Studies (ISET Sfax) in 2021, followed by my Engineering Degree in Software Engineering at the International Institute of Technology (IIT), which I completed in July 2024.
            <br />
            <br />
            Currently, I’m actively seeking career opportunities and working on building intelligent solutions by combining Software Development and AI/ML technologies.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Video Games 🎮 
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Chess ♟️
            </li>
            <li className="about-activity">
              <ImPointRight /> Working Out 💪
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
           "The only way to do great work is to love what you do. "{" "}
          </p>
          <footer className="blockquote-footer">Steve Jobs</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
