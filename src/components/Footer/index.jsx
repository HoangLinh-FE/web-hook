import React from "react";
import { Container, Card, ListGroup, Col, Row} from "react-bootstrap";
import './style.css';

function Footer(props) {
  return (
    <div className="footer__bg" >
      <Container>
      <Row>
    <Col>
    <Card className='footer__info'>
          <ListGroup>
            <ListGroup.Item as='a' href='/' className="footer__info-item">Home</ListGroup.Item>
            <ListGroup.Item as='a' href='/login' className="footer__info-item">Login</ListGroup.Item>
            <ListGroup.Item as='a' href='/upload' className="footer__info-item">Upload File</ListGroup.Item>
          </ListGroup>
        </Card></Col>
    <Col>
    {/* <Card className='footer__info'>
          <ListGroup>
            <ListGroup.Item className="footer__info-item">Cras justo odio</ListGroup.Item>
            <ListGroup.Item className="footer__info-item">Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item className="footer__info-item">Vestibulum at eros</ListGroup.Item>
          </ListGroup>
        </Card> */}
        </Col>
    <Col>
      <Card className='footer__info'>
          <ListGroup>
            <ListGroup.Item className="footer__info-item">Phone: 01234567891</ListGroup.Item>
            <ListGroup.Item className="footer__info-item">Email: admin@gmail.com</ListGroup.Item>
            <ListGroup.Item className="footer__info-item">Address: 142 Pham Phu Thu District 6</ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
  </Row>
        
      </Container>
    </div>
  );
}

export default Footer;
