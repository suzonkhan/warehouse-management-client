import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import useProducts from "../../../Hooks/useProducts";
import Product from "../Product/Product";

const Products = () => {
  const [products, setProducts] = useProducts();
  console.log(products);
  return (
    <div className="section-block">
      <Container>
        <Row>
          {products.slice(0, 6).map((product)=> <Product key={product._id} product={product}></Product>)} 
        </Row>
      </Container>
    </div>
  );
};

export default Products;
