import React from "react";
import {
  Button,
  Col,
  Container,
  Form,
  Row,
} from "react-bootstrap";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import {  toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
const ForgetPassword = () => {
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);
  const submitResetPassword = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    
    await sendPasswordResetEmail(email);
    toast("Please check you mail.");
  };
  return (
    <div className="section-block bg-white">
     
      <Container>
        <div>
          <h2>Login</h2>
        </div>
        <Row className="justify-content-md-center">
          <Col xs lg="4">
            <Form onSubmit={submitResetPassword}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  required
                />
              </Form.Group>

              <Button className="w-100" variant="primary" type="submit">
                Submit
              </Button>

              <p className="my-4">
                Don't have account <Link to="/registration">Register Now.</Link>
              </p>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ForgetPassword;
