import React from "react";
import {
  Navbar,
  Form,
  Button,
  FormControl,
  Nav,
  
} from "react-bootstrap";


function NavBar(props) {
  return (
    <div className='sticky-top'>
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="/">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/login">Login</Nav.Link>
      <Nav.Link href="/upload" target='_blank'>Upload</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
  </div>
  );
}

export default NavBar;
