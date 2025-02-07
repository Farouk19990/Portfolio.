import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import eoc2024 from "../../Assets/Projects_Images/eoc_2024.png";
import eoc2024_02 from "../../Assets/Projects_Images/eoc_2024_02.png";
import eoc2024_03 from "../../Assets/Projects_Images/eoc_2024_03.png";
import eoc2024_ob from "../../Assets/Projects_Images/eoc2024_ob_01.webp";
import mlops00 from "../../Assets/Projects_Images/mlops00.png"
import mlops01 from "../../Assets/Projects_Images/mlops01.png"
import solu from "../../Assets/Projects_Images/Solu.png"

import Mob00 from "../../Assets/Mall/Mobile App00.png";
import Mob01 from "../../Assets/Mall/Mobile App01.png";
import Mob02 from "../../Assets/Mall/Mobile App02.png";
import Mob03 from "../../Assets/Mall/Mobile App03.png";
import Mob04 from "../../Assets/Mall/Mobile App04.png";
import Mob05 from "../../Assets/Mall/Mobile App05.png";

import Auth from "../../Assets/Net Inovicing App/Auth.png";
import Dash from "../../Assets/Net Inovicing App/Dashboard.png";
import Client from "../../Assets/Net Inovicing App/Client.png";
import AddCli from "../../Assets/Net Inovicing App/AjoutClient.png";
import DelCli from "../../Assets/Net Inovicing App/SupprimerClient.png";
import Fourni from "../../Assets/Net Inovicing App/Fournisseur.png";
import Prod from "../../Assets/Net Inovicing App/Produits.png";
import Devis from "../../Assets/Net Inovicing App/Devis.png";
import ViewDevis from "../../Assets/Net Inovicing App/Consulterundevis.png";
import ImpDevis from "../../Assets/Net Inovicing App/ImpDevis.png";
import Profil from "../../Assets/Net Inovicing App/Profile.png";




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
              images= {[
                eoc2024,
                eoc2024_ob,
                eoc2024_02,
                eoc2024_03,
                mlops00,
                mlops01,
                solu
              ]}
              isBlog={false}
              title={<>
              <strong >
              Classification of vehicle types
              </strong>
              </>}
              description={
              
                 <>
 <ul style={{ paddingLeft: "20px" }}>
        <li>
          Developed a <strong style={{ color: "#f39c12" }}>vehicle detection model </strong> 
          and implemented <strong style={{ color: "#2ecc71" }}>optimization techniques </strong> 
          to improve its <strong style={{ color: "#2ecc71" }}>accuracy</strong>.
        </li>
        <li>
          Integrated the model into a <strong style={{ color: "#f39c12" }}>benchmarking application </strong> 
          to test and evaluate <strong style={{ color: "#9b59b6" }}>performance </strong>.
        </li>
        <li>
          Designed and implemented an <strong style={{ color: "#1abc9c" }}>MLOps pipeline </strong> 
          to automate model deployment and management.
        </li>
        <li>
          <strong>Technologies:</strong> <span>
            YOLO, Deep Learning, Computer Vision, .NET, MLOps, Dagshub, DVC, MLflow, Python, OpenCV, ML.NET.
          </span>
        </li>
      </ul>
    </>
 
              }
              ghLink={null} 
              demoLink={null}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              images= {[
                Mob00,
                Mob01,
                Mob02,
                Mob03,
                Mob04,
                Mob05
              ]}
              isBlog={false}
              title={<><strong>Mall of Tunisia – Mobile & Web Application</strong></>}
  description={
    <>
      <ul style={{ paddingLeft: "20px" }}>
        <li>
          Developed a <strong style={{ color: "#f39c12" }}>mobile application</strong> 
          "<strong style={{ color: "#f39c12" }}>Mall of Tunisia</strong>" and a <strong style={{ color: "#2ecc71" }}>dynamic web application</strong> 
          for store and product management.
        </li>
        <li>
          <strong style={{ color: "#1abc9c" }}>Containerized</strong> the application using 
          <strong style={{ color: "#f39c12" }}> Docker</strong> and <strong style={{ color: "#9b59b6" }}>Docker Compose</strong>.
        </li>
        <li>
          <strong>Technologies:</strong> <span>Flutter, Angular, NestJS, MySQL, Docker, Docker Compose</span>.
        </li>
      </ul>
    </>
  }
              ghLink="https://github.com/Farouk19990/PFA_Frontend"
              demoLink={false}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              images={[
                Auth,
                Dash,
                Client,
                AddCli,DelCli,Fourni,Prod,Devis,ViewDevis,ImpDevis,Profil
              ]}
              isBlog={false}
              title={<><strong>Web Invoicing Application</strong></>}
              description={
                <>
                  <ul style={{ paddingLeft: "20px" }}>
                    <li>
                      Designed and developed a comprehensive <strong style={{ color: "#f39c12" }}>web invoicing application</strong> that allows businesses to easily create, manage, and track invoices. Implemented user-friendly features with real-time data updates for improved efficiency and automation.
                    </li>
                    <li>
                      <strong>Technologies:</strong> <span>ASP.NET MVC, SQL Server, AJAX, C#, JavaScript</span>
                    </li>
                  </ul>
                </>
              }
              ghLink="https://github.com/Farouk19990/Application_Facturation"
              demoLink={false}           
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col> */}

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
