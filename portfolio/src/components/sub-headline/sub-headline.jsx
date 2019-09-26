import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './sub-headline.scss';

class SubHeadline extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md={6}>
            <h4>{this.props.text}</h4>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default SubHeadline;