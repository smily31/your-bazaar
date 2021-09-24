import React from "react";
import { products } from "../products";
import { Row, Col } from "react-bootstrap";
import ProductScreen from "./ProductScreen";

export default function HomeScreen() {
  return (
    <>
      <Row>
        {products.map((product) => (
          <Col key={product._id} md={3}>
            <ProductScreen product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
}
