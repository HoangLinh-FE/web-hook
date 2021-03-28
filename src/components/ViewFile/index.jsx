import React from "react";
import {
  Container,
  Col,
  Tab,
  Tabs,
  Form,
  Button,
  ListGroup,
  Breadcrumb
} from "react-bootstrap";
import "./style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload , faEdit} from '@fortawesome/free-solid-svg-icons'

function ViewFile(props) {
  return (
    <div className='viewFile__bg'>
      <Container>
        <ListGroup >
          <ListGroup.Item className='viewFile__block'>
            <ListGroup.Item as='a' className='viewFile__content flex-2' href='/detail'>The report 1</ListGroup.Item>
            <ListGroup.Item as='a' className='viewFile__content'><FontAwesomeIcon icon={faDownload} /></ListGroup.Item>
            <ListGroup.Item as='a' className='viewFile__content'><FontAwesomeIcon icon={faEdit} /></ListGroup.Item>
          </ListGroup.Item>
          <ListGroup.Item className='viewFile__block'>
            <ListGroup.Item as='a' className='viewFile__content flex-2'  href='#'>The report 2</ListGroup.Item>
            <ListGroup.Item as='a' className='viewFile__content' ><FontAwesomeIcon icon={faDownload} /></ListGroup.Item>
            <ListGroup.Item as='a' className='viewFile__content'><FontAwesomeIcon icon={faEdit} /></ListGroup.Item>
          </ListGroup.Item>
          <ListGroup.Item className='viewFile__block'>
            <ListGroup.Item as='a' className='viewFile__content flex-2' href='#'>The report 3</ListGroup.Item>
            <ListGroup.Item as='a' className='viewFile__content'><FontAwesomeIcon icon={faDownload} /></ListGroup.Item>
            <ListGroup.Item as='a' className='viewFile__content'><FontAwesomeIcon icon={faEdit} /></ListGroup.Item>
          </ListGroup.Item>
          <ListGroup.Item className='viewFile__block'>
            <ListGroup.Item as='a' className='viewFile__content flex-2' href='#'>The report 4</ListGroup.Item>
            <ListGroup.Item as='a' className='viewFile__content'><FontAwesomeIcon icon={faDownload} /></ListGroup.Item>
            <ListGroup.Item as='a' className='viewFile__content'><FontAwesomeIcon icon={faEdit} /></ListGroup.Item>
          </ListGroup.Item>
        </ListGroup>
      </Container>
    </div>
  );
}

export default ViewFile;
