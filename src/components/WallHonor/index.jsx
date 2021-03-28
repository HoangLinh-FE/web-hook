import React from "react";
import { Container, Row, Col, Figure } from "react-bootstrap";
import Icon from '../../Image/Icon-user.jpg';
import './style.css';

function Honor() {
  return (
    <div className='honor'>
      <Container>
      <h2 className='honor__title'>Wall of Honor</h2>
        <Row>
          <Col>
            <Figure>
              <Figure.Image
                className='honor__icon'
                alt="171x1100"
                src={Icon}
              />
              <Figure.Caption>
                User 1
              </Figure.Caption>
            </Figure>
          </Col>
          <Col>
            <Figure>
              <Figure.Image
                className='honor__icon'
                alt="171x180"
                src={Icon}
              />
              <Figure.Caption>
              User 2
              </Figure.Caption>
            </Figure>
          </Col>
          <Col>
            <Figure>
              <Figure.Image
                className='honor__icon'
                alt="171x180"
                src={Icon}
              />
              <Figure.Caption>
              User 3
              </Figure.Caption>
            </Figure>
          </Col>
          <Col>
            <Figure>
              <Figure.Image
                className='honor__icon'
                alt="171x180"
                src={Icon}
              />
              <Figure.Caption>
              User 4
              </Figure.Caption>
            </Figure>
          </Col>
          <Col>
            <Figure>
              <Figure.Image
                className='honor__icon'
                alt="171x180"
                src={Icon}
              />
              <Figure.Caption>
              User 5
              </Figure.Caption>
            </Figure>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Honor;
