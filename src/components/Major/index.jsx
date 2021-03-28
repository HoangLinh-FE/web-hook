import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import LoginPage from "../Login";
import "./style.css";

function Majors() {
  return (
    <div className="majors__bg">
      <Container>
      <h2 className='title'>Faculty</h2>
        <Row>
          <Col>
            <Card className='major__box'>
              <Card.Body>
                <Card.Title className='major__title'>Business</Card.Title>
                <Card.Text className='major__content'>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Card.Link href="/upload" target='_blank' className='major__button'>Apply</Card.Link>
              </Card.Body>
            </Card>
          </Col>
          {/* <Col>
            <Card className='major__box'>
              <Card.Body >
                <Card.Title className='major__title'>Graphic Design</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Deadline:
                </Card.Subtitle>
                <Card.Text className='major__content'>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Card.Link href="#" className='major__button'>Apply</Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className='major__box'>
              <Card.Body >
                <Card.Title className='major__title'>Information Technology</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Deadline:
                </Card.Subtitle>
                <Card.Text className='major__content'>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Card.Link href="#" className='major__button'>Apply</Card.Link>
              </Card.Body>
            </Card>
          </Col> */}
        </Row>
      </Container>
    </div>
  );
}

export default Majors;
