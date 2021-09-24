import React from "react";
import { Card } from "react-bootstrap";
import LinkContainer from "react-router-bootstrap/lib/LinkContainer";
import Rating from "../components/Rating";

export default function ProductScreen({ product }) {
  return (
    <>
      <Card className="my-3 p-2 rounded">
        <LinkContainer to={`/product/${product._id}`}>
          <Card.Img src={product.image} variant="top" />
        </LinkContainer>
        <Card.Body>
          <LinkContainer to={`/product/${product._id}`}>
            <Card.Title as="div" className="text-center">
              <strong>{product.name}</strong>
            </Card.Title>
          </LinkContainer>
          <Card.Text as="div">
            <Rating
              value={product.rating}
              text={`${product.numReviews} reviews`}
            />
          </Card.Text>
          <Card.Text as="div">${product.price}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}
