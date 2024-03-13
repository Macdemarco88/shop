import React from "react";
import { Col } from "react-bootstrap";

function Grid({ record }) {
  return (
    <Col sm>
      <img src={record.image} width="80%" />
      <h4>{record.title}</h4>
      <p>{record.price}</p>
    </Col>
  );
}

export default Grid;
