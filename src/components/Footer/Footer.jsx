// Core
import React from 'react';
// import { Button } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';

const Footer = () => (
  <div className = "footer">
    <Container fluid>
      <Row className = "contacts">
        <Col xs = "12" sm = "6"  md = "6" lg = "3">
          <img className = "logo" src = "./images/logo.png" alt="logo" />
          <span>My awesome company</span>
        </Col>
        <Col xs = "12" sm = "6"  md = "6" lg = "3">
          <i className = "icon fa fa-map-marker" />
          <span>Kyiv, Main str, 123</span>
        </Col>
        <Col xs = "12" sm = "6"  md = "6" lg = "3">
          <i className = "icon fa fa-mobile" />
          <span>+38(067)123-45-67</span>
        </Col>
        <Col xs = "12" sm = "6"  md = "6" lg = "3">
          <i className = "icon fa fa-envelope-o" />
          <span>admin@gmail.com</span>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Footer;
