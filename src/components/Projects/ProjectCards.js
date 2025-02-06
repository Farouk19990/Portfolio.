import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function ProjectCards(props) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  // Ensure images is always an array or set a default image if undefined
  const images = Array.isArray(props.images) && props.images.length > 0 ? props.images : ["/default-image.png"];

  return (
    <Card className="project-card-view">
      {/* Image Slideshow */}
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index}>
            <Card.Img variant="top" src={img} alt={`Slide ${index}`} style={{  objectFit: 'contain',  height: 'auto' }} />
          </div>
        ))}
      </Slider>

      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        {/* GitHub Link Button - Only show if ghLink exists */}
        {props.ghLink && (
          <Button variant="primary" href={props.ghLink} target="_blank">
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>
        )}

        {/* Demo Link Button - Only show if demoLink exists */}
        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp; Demo
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
