import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiHtml5 ,
  DiCss3,
  DiPhp 
} from "react-icons/di";
import {
  SiSpring,
  SiMysql,
  SiFirebase,
  SiNextdotjs,
  SiExpress,
  SiPostgresql,SiLaravel,SiFlutter, 
  SiMongodb
} from "react-icons/si";
import { FaAngular } from "react-icons/fa";

function Techstack() {
  return (<Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
    {/* Programming Languages Block */}
    <Col xs={12} md={3} style={{ textAlign: "center", marginBottom: "20px", padding: "20px" }}>
      <h4>Programming Languages</h4>
      <Col xs={4} md={12} className="tech-icons">
        <DiPython />
        <p style={{ fontSize: 20 }}>Python</p>
      </Col>
      <Col xs={4} md={12} className="tech-icons">
        <DiJava />
        <p style={{ fontSize: 20 }}>Java</p>
      </Col>
      <Col xs={4} md={12} className="tech-icons">
        <DiJavascript1 />
        <p style={{ fontSize: 20 }}>JavaScript</p>
      </Col>      
      
    </Col>
  
    {/* Frontend Block */}
    <Col xs={12} md={3} style={{ textAlign: "center", marginBottom: "20px", padding: "20px" }}>
      <h4>Frontend</h4>
      <Col xs={4} md={12} className="tech-icons">
        <FaAngular />
        <p style={{ fontSize: 20 }}>Angular</p>
      </Col>
      <Col xs={4} md={12} className="tech-icons">
        <DiReact />
        <p style={{ fontSize: 20 }}>React</p>
      </Col>
      <Col xs={4} md={12} className="tech-icons">
        <SiFlutter />
        <p style={{ fontSize: 20 }}>Flutter</p>
      </Col>
      <Col xs={4} md={12} className="tech-icons">
        <DiHtml5 />
        <p style={{ fontSize: 20 }}>HTML5</p>
      </Col>
      <Col xs={4} md={12} className="tech-icons">
        <DiCss3 />
        <p style={{ fontSize: 20 }}>CSS3</p>
      </Col>
    </Col>
  
    {/* Backend Block */}
    <Col xs={12} md={3} style={{ textAlign: "center", marginBottom: "20px", padding: "20px" }}>
      <h4>Backend</h4>
      <Col xs={4} md={12} className="tech-icons">
        <SiSpring />
        <p style={{ fontSize: 20 }}>Spring Boot</p>
      </Col>
      <Col xs={4} md={12} className="tech-icons">
        <SiLaravel />
        <p style={{ fontSize: 20 }}>Laravel</p>
      </Col>
      <Col xs={4} md={12} className="tech-icons">
        <DiNodejs />
        <p style={{ fontSize: 20 }}>Node.js</p>
      </Col>
      <Col xs={4} md={12} className="tech-icons">
        <SiExpress />
        <p style={{ fontSize: 20 }}>Express Js</p>
      </Col>
       
      <Col xs={4} md={12} className="tech-icons">
        <DiPhp />
        <p style={{ fontSize: 20 }}>Php</p>
      </Col>
      
    </Col>
  
    {/* Databases Block */}
    <Col xs={12} md={3} style={{ textAlign: "center", marginBottom: "20px", padding: "20px" }}>
      <h4>Databases</h4>
      <Col xs={4} md={12} className="tech-icons">
        <SiMysql />
        <p style={{ fontSize: 20 }}>My sql</p>
      </Col>
      <Col xs={4} md={12} className="tech-icons">
        <SiFirebase />
        <p style={{ fontSize: 20 }}>Firebase</p>
      </Col>
      <Col xs={4} md={12} className="tech-icons">
        <SiMongodb />
        <p style={{ fontSize: 20 }}>Mongodb</p>
      </Col>
    </Col>
  </Row>
  

  
  );
}

export default Techstack;
