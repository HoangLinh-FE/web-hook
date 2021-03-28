import React, {useState} from 'react';
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

function EditTitle() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    const [title, setTitle] = useState('');

    function handleChangeTitle() {
      
    }

    return (
      <>
        <a  onClick={handleShow}>
          Edit
        </a>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Business</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form>
            <Form.Group>
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" id='newTitte' placeholder="Enter new title" />
            </Form.Group>
            </Form>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

export default EditTitle;