import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from 'react-bootstrap/Image';
import Aldi from './Aldi.png';

export default function StoreListing() {
  return (
    <div>
      <h2>Browser stores in Houston</h2>

      <Container style={{ marginTop: "40px", textAlign: "center" }}>
        <Row style={{ borderBottom: "1px solid #E8E9EB", display: "flex", justifyContent: "space-evenly" }}>
          <Row>
            <Col xs="auto">
              <Image style={{ width: "200px" }} src={Aldi} roundedCircle />
            </Col>
            <Col>
              <h5 style={{ fontWeight: "bold" }}>ALDI</h5>
              <p>Delivery * Pickup</p>
            </Col>
          </Row>
          <Row>
            <Col xs="auto">
            <Image style={{ width: "200px" }} src={Aldi} roundedCircle />
            </Col>
            <Col>
              <h5 style={{ fontWeight: "bold" }}>ALDI</h5>
              <p>Delivery * Pickup</p>
            </Col>
          </Row>
          <Row>
            <Col xs="auto">
            <Image style={{ width: "200px" }} src={Aldi} roundedCircle />
            </Col>
            <Col>
              <h5 style={{ fontWeight: "bold" }}>ALDI</h5>
              <p>Delivery * Pickup</p>
            </Col>
          </Row>
        </Row>
      </Container>
    </div>
  );
}
