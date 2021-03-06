import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "../components/Rating";

export default function ProductScreen({ product }) {
  return (
    <>
      <Card className="my-3 p-2 rounded " style={{ height: "600px" }}>
        <Link to={`/product/${product._id}`}>
          <Card.Img src={product.image} variant="top" />
        </Link>
        <Card.Body>
          <Link to={`/product/${product._id}`}>
            <Card.Title as="div" className="text-center">
              <strong>{product.name}</strong>
            </Card.Title>
          </Link>
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
