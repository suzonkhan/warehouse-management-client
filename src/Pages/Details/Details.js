import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  Container,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import './Details.css';

const Details = () => {
  const axios = require("axios").default;
  const { id } = useParams();
  //   console.log(id);
  const [product, setProduct] = useState({});
  useEffect(() => {
    axios.get(`http://localhost:5000/product/${id}`).then(function (response) {
      setProduct(response.data);
    });
  }, []);
  const updateProductData = (newProduct) => {
    const url = `http://localhost:5000/product/${id}`;
    fetch(url, {
      method: "PUT", // or 'POST'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
    .then((response) => response.json())
    .then((data) => {
    
    if (data.modifiedCount > 0) {
        alert("Update Successfully!");
        setProduct(newProduct);
    }
    });
  }
  const delivered = () => {
    // console.log("I a m decrising... ");
    const { stock, ...restData } = product;
    const updatedStock = stock - 1;
    const newProduct = { stock: updatedStock, ...restData };
    updateProductData(newProduct);
  };
  const addStock = (event) => {
    //   console.log("I a m adding... ");
      event.preventDefault();
      const inputStock = parseInt(event.target.stock.value);
      const { stock, ...restData } = product;
      const updatedStock =  stock + inputStock; 
      const newProduct = { stock: updatedStock, ...restData };
      updateProductData(newProduct); 
      event.target.reset();
  }
  return (
    <div className="section-block bg-white">
      <Container>
        <Row>
          <Col xs={12} sm={12} md={6}>
            <img src={product.img} alt="" />
          </Col>
          <Col xs={12} sm={12} md={6}>
            <h2>{product.name}</h2>
            <p>Supplier:{product.supplier}</p>
            <p>{product.decs}</p>
            <h5>Price : {product.price} Taka </h5>
            <p className="product-qty">Stock Quantity : {product.stock} </p>
            <Button onClick={delivered}>Delivered</Button>
            <form className="add-stock-form" onSubmit={addStock}>
              <InputGroup className="my-5">
                <FormControl
                  placeholder="Add stock"
                  aria-label="Add stock"
                  aria-describedby="basic-addon2"
                  name="stock"
                  type="number"
                  required
                />
                <Button type="submit" variant="secondary" id="button-addon2">
                  Button
                </Button>
              </InputGroup>
            </form>
            <Link className="btn btn-info" to='/manage-inventories'> Manage Inventories </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Details;
