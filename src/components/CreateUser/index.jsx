import React, { useState } from "react";

import {
  Container,
  Card,
  InputGroup,
  Col,
  Row,
  Button,
  FormControl,
  Form,
} from "react-bootstrap";
import "./style.css";

function CreateUser(props) {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <div className="Create__bg">
      <Container>
        <Row>
          <Col>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Form.Label className="Create__title">
                <h2>Register User</h2>
              </Form.Label>
              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Control
                    type="text"
                    md="4"
                    placeholder="Full Name"
                    required
                    className="Create__field help-block"
                  />
                  <FormControl.Feedback type="invalid">
                    Please fill in the blanks!
                  </FormControl.Feedback>
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Control as="select" md="4" defaultValue="Male" required
                    className="Create__field help-block">
                    <option>Male</option>
                    <option>Female</option>
                    <option>Orther...</option>
                  </Form.Control>
                  <FormControl.Feedback type="invalid">
                    Please fill in the blanks!
                  </FormControl.Feedback>
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Control
                    type="email"
                    md="4"
                    placeholder="Email"
                    required
                    className="Create__field help-block"
                  />
                  <FormControl.Feedback type="invalid">
                    Please fill in the blanks!
                  </FormControl.Feedback>
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Control
                    type="password"
                    md="4"
                    placeholder="Password"
                    required
                    className="Create__field help-block"
                  />
                  <FormControl.Feedback type="invalid">
                    Please fill in the blanks!
                  </FormControl.Feedback>
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Control
                    type="password"
                    md="4"
                    placeholder="Confirm Password"
                    required
                    className="Create__field help-block"
                  />
                  <FormControl.Feedback type="invalid">
                    Please fill in the blanks!
                  </FormControl.Feedback>
                </Form.Group>
              </Form.Row>
              <Button className="Create__btn" type="submit">
                Create
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default CreateUser;
