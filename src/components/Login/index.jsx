import React from "react";
import { Form, Button, Spinner } from "react-bootstrap";
import "./style.css";

function LoginPage() {
  return (
    <div className="bg" id='login_page'>
      <div className="opacity">
      <div className='form-box'>
      <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label><h2 className='title'>Sign In</h2></Form.Label>
            <Form.Control type="email" placeholder="Enter email" className='input-field' />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" className='input-field' />
          </Form.Group>
          <Button className='submitLogin' type="submit">
            Submit <Spinner animation="border" />
          </Button>
        </Form>
      </div>
      </div>
    </div>
  );
}

export default LoginPage;
