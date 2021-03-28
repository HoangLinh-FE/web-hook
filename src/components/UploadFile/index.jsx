import React from "react";
import { Container, Col, Tab, Tabs, Form, Button, FormControl } from "react-bootstrap";
import "./style.css";
import { useState } from "react";
import ViewFile from "../ViewFile";

function UploadFile() {
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
    <div className="upload__bg">
      <Container>
        <Tabs defaultActiveKey="View" className='upload__item'>
        <Tab eventKey="View" title="View Post">
            <ViewFile></ViewFile>
          </Tab>
          <Tab eventKey="Upload" title="Upload File" >
            <Form
              noValidate
              validated={validated}
              onSubmit={handleSubmit}
              className="upload__form"
            >
              <Form.Label>
                <h2 className="upload__title">Upload your File</h2>
              </Form.Label>
              <Form.Row>
                <Form.Group as={Col} controlId="validationCustom01">
                  <Form.Control
                    type="text"
                    md="4"
                    placeholder="Title"
                    required
                    className="upload__field help-block"
                    
                  />
                  <FormControl.Feedback type='invalid'>Please fill in the blanks!</FormControl.Feedback>

                </Form.Group>
                
              </Form.Row>

              <Form.Row>
              <Form.Group as={Col} >
                  <Form.Control as="textarea" placeholder="Detail" className="upload__field" required />
                  <FormControl.Feedback type='invalid'>Please fill in the blanks!</FormControl.Feedback>

                </Form.Group>
              </Form.Row>

              {/* <Form.Row>
              <Form.Group as={Col}>
                <Form.File className="upload__field" required/>
                <FormControl.Feedback type='invalid'>Please fill in the blanks!</FormControl.Feedback>

              </Form.Group>
              </Form.Row> */}

              <Button className='upload__btn' type="submit">
                Submit
              </Button>
            </Form>
          </Tab>
          
        </Tabs>
      </Container>
    </div>
  );
}

export default UploadFile;
