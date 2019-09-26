import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './headline-block.scss';

class HeadlineBlock extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md={6}>
            <div className="headline-block">
              <h4>{this.props.subHeadline}</h4>
              <h1>{this.props.headline}</h1>
              <h2>{this.props.description}</h2>
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default HeadlineBlock;