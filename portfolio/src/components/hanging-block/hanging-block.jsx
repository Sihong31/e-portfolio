import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './hanging-block.scss';

class HangingBlock extends Component {
  render() {
    return (
      <div className="hanging-block">
        <div className="hanging-block-background" style={{ backgroundColor: `${this.props.backgroundColor}` }}></div>
        <Container>
          <Row>
            <Col md={6}>
                <h4>{this.props.headline}</h4>
                <p>{this.props.body1}</p>
                <p>{this.props.body2}</p>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default HangingBlock;