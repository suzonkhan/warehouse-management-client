import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
const axios = require('axios').default;

const AddNew = () => {
    const [user, loading, error] = useAuthState(auth);
    const handleAddProduct = event => {
        event.preventDefault();
        const userName = event.target.userName.value;
        const userEmail = event.target.userEmail.value;
        const img = event.target.productPhoto.value;
        const name = event.target.productName.value;
        const decs = event.target.productDescription.value;
        const price = event.target.productPrice.value;
        const stock = event.target.productStock.value;
        const supplier = event.target.productSupplier.value;
        const newProduct = {
            userName, 
            userEmail, 
            img,
            name,
            decs,
            price,
            stock,
            supplier
        }
        console.log(newProduct);
        axios.post('https://vast-lowlands-94702.herokuapp.com/product', newProduct)
          .then(function (response) {
            // console.log(response);
            toast("Product added successfully!");
            event.target.reset();
          })
          .catch(function (error) {
            console.log(error);
          });
    }
  return (
    <div className="section-block">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} sm={12} md={6}>
            <Form onSubmit={handleAddProduct}>
              <Form.Group className="mb-3" controlId="userName">
                <Form.Label>User Name</Form.Label>
                <Form.Control type="text" value={user?.displayName} name="userName" placeholder="Name" readOnly />
              </Form.Group>

              <Form.Group className="mb-3" controlId="userEmail">
                <Form.Label>User Email</Form.Label>
                <Form.Control type="email" value={user?.email} name="userEmail" placeholder="Email" readOnly />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="productPhoto">
                <Form.Label>Product Photo</Form.Label>
                <Form.Control type="url" name="productPhoto" placeholder="Product Photo" required />
                <Form.Text className="text-muted">
                 Please insert a hosted photo URL here.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="productName">
                <Form.Label>Product Name</Form.Label>
                <Form.Control type="text" name="productName" placeholder="Product Name" required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="productDescription">
                <Form.Label>Product Description</Form.Label>
                <Form.Control type="text" name="productDescription" placeholder="Product Description" required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="productPrice">
                <Form.Label>Product Price</Form.Label>
                <Form.Control type="number" name="productPrice" placeholder="Product Price" required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="productSupplier">
                <Form.Label>Product Supplier</Form.Label>
                <Form.Control type="Text" name="productSupplier" placeholder="Product Supplier" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="productStock">
                <Form.Label>Product Stock</Form.Label>
                <Form.Control type="number" name="productStock" placeholder="Product Stock" />
              </Form.Group>

              <Button className="w-100" variant="primary" type="submit">
                Add new product
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AddNew;
