import React from "react";
import { Carousel, Col, Row } from "antd";
import Slack from "../../assets/slack.png";
import Shop from "../../assets/shopify.png";

const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
  width: "500px",
  margin: 0,
};

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
