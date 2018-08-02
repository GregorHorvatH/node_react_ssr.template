// Core
import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

// Instruments
import { contacts, logo, title } from '../../metadata'

const Footer = () => (
  <div className = "footer">
    <Container fluid>
      <Row className = "contacts">
        <Col xs = "3" sm = "3"  md = "2" lg = "2" className = "info">
          <img className = "logo" src = { logo } alt = "logo" />
        </Col>

        <Col xs = "9" sm = "9"  md = "10" lg = "10">
          <Row>
            <Col xs = "12" sm = "6"  md = "6" lg = "3" className = "info">
              <Link exact to = '/about' className = 'menu-item'>
                <i className = "icon fa fa-bookmark" />
                <span>{ title }</span>
              </Link>
            </Col>
            <Col xs = "12" sm = "6"  md = "6" lg = "3" className = "info">
              <i className = "icon fa fa-map-marker" />
              <a href="https://www.google.com.ua/maps/search/Kyiv">{ contacts.address }</a>
            </Col>
            <Col xs = "12" sm = "6"  md = "6" lg = "3" className = "info">
              <i className = "icon fa fa-phone" />
              <a href = {`tel:${ contacts.email }`}>{ contacts.phone }</a>
            </Col>
            <Col xs = "12" sm = "6"  md = "6" lg = "3" className = "info">
              <i className = "icon fa fa-envelope" />
              <a href = {`mailto:${ contacts.email }`}>{ contacts.email }</a>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Footer;
