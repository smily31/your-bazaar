import React from "react";
import { Spinner } from "react-bootstrap";

export default function Loader() {
  return (
    <Spinner animation="grow" variant="secondary" role="status" style={{width:'50px',height:'50px',margin:'auto',display:'block', marginTop:'250px'}}> 
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
}
