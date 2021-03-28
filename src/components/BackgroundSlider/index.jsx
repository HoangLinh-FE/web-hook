import React from "react";
import { Card, Button } from "react-bootstrap";
import "./style.css";

function Slider() {
  return (
    <div className="bg-home">
      <div className="opacity-home">
        <Card className="bg-content">
          <Card.Body>
            <Card.Title>
              <h2 className="title">Greenwich of University</h2>
            </Card.Title>
            <Card.Title>
              <span className="slogan">
                Genius without education is like silver in the mine
              </span>
            </Card.Title>
            
            <Button className='btn-apply'>Apply Now</Button>
          </Card.Body>
        </Card>
      </div>
    </div>

    /* <Carousel className="slider">
        <Carousel.Item>
          <img className="" src={Bg} alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="" src={Bg} alt="First slide" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel> */
  );
}

export default Slider;
