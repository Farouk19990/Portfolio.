import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiDocker ,
  SiVercel,
  SiGithub ,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <p style={{ fontSize: 20 }}>Vscode</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub  /><p style={{ fontSize: 20 }}>Github</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <p style={{ fontSize: 20 }}>Postman</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker  />
        <p style={{ fontSize: 20 }}>Docker</p>
      </Col>

    </Row>
  );
}

export default Toolstack;
