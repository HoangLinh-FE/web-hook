import React, {useState} from 'react';
import {Col, Row, Button,Container, Form, FormControl } from 'react-bootstrap'

function UpdateReport(props) {
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
                <h2>Update Report</h2>
              </Form.Label>
              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Control
                    type='text'
                    md="4"
                    placeholder="Title"
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
                    type="date"
                    md="4"
                    placeholder="Deadline"
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
                    as='textarea'
                    md="4"
                    placeholder="Description"
                    name='description'
                    row='5'
                    required
                    className="Create__field help-block"
                  />
                </Form.Group>
              </Form.Row>
             
              <Button className="Create__btn" type="submit">
                Update
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}


export default UpdateReport;