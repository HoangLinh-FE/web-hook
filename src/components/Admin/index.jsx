import React from "react";
import {
  Container,
  Card,
  InputGroup,
  Col,
  Row,
  Button,
  FormControl,
  Image,
} from "react-bootstrap";
import EditTitle from '../EditTitle';
import "./style.css";

function AdminPage(props) {
  return (
    <div className='Admin__bg'>
      <Container>
      <h2 className='Admin__title'>List of report</h2>
        <Row>
        
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Business</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Card.Link href="/detail" target='_blank'>Read more</Card.Link>
                <Card.Link href="#"><EditTitle></EditTitle></Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Business</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Card.Link href="/detail" target='_blank'>Read more</Card.Link>
                <Card.Link href="#"><EditTitle></EditTitle></Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Business</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Card.Link href="/detail" target='_blank'>Read more</Card.Link>
                <Card.Link href="#"><EditTitle></EditTitle></Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Business</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Card.Link href="/detail" target='_blank'>Read more</Card.Link>
                <Card.Link href="#"><EditTitle></EditTitle></Card.Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AdminPage;
