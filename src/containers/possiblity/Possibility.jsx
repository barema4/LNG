import React from "react";
import {Col, Row } from "antd";

const Possibility = () => (
  <Row style={{ margin: "1rem 6rem", display: 'flex', flexDirection: 'column' }}>
    <Col
      style={{
        fontSize: "16px",
        fontWeight: "bold",
        color: "#063151",
        margin: "1rem 0",
      }}
    >
      Hall Of Fame
    </Col>
    <Col style={{height: '200px', backgroundColor: 'green'}}>
    </Col>
  </Row>
);
export default Possibility;
