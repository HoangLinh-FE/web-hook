import React, { useState } from "react";
import {
  Container,
  Form,
  InputGroup,
  Col,
  Row,
  Button,
  FormControl,
  Modal,
} from "react-bootstrap";

function AddImage(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <a onClick={handleShow}>Add Image</a>
      <Modal
        size="sm"
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>The Report 1</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form>
              <Form.Group>
                <Form.File id="#"/>
              </Form.Group>
            </Form>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Save Changes</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddImage;
