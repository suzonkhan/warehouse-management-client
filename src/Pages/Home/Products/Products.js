import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import useProducts from "../../../Hooks/useProducts";
import Product from "../Product/Product";

const Products = () => {
  const [products, setProducts] = useProducts();
  return (
    <div className="section-block">
      <Container>
        <Row>
          {products.slice(0, 6).map((product) => (
            <Product key={product._id} product={product}></Product>
          ))}
        </Row>
        <Row> 
          <Col className="text-center"> 
            <Link className="btn btn-primary" to="/manage-inventories"> 
              Manage Inventories
            </Link>
          </Col> 
        </Row>
      </Container>
    </div>
  );
};

export default Products;
