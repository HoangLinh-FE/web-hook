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

function EditContent(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
         
    const datatest = 'hello hi';
  return (
    <>
      <a onClick={handleShow}>Edit</a>
      <Modal
        size='lg'
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Business</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Group>
            <Form.Control as="textarea" rows={3} >
            </Form.Control>
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

export default EditContent;
