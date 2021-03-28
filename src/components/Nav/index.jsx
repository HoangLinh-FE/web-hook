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
      <Nav.Link href="/admin">Admin</Nav.Link>
      <Nav.Link href="/createUser">Create User</Nav.Link>
    </Nav>
  </Navbar>
  </div>
  );
}

export default NavBar;
