import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './content-columns.scss';

class ContentColumns extends Component {
  renderColumns = () => {
    if (this.props.textAlignment === "left") {
      return (
        <Row>
          <Col md={8} className="text-left column-left">
            <h2>{this.props.headline}</h2>
            <p>{this.props.body1}</p>
            <p>{this.props.body2}</p>
          </Col>
          <Col md={4} className="text-left column-right">
            <img src={this.props.imageUrl} alt="content" />
          </Col>
        </Row>
      );
    } else if (this.props.textAlignment === "right") {
      return (
        <Row>
          <Col md={4} className="text-right column-left">
            <img src={this.props.imageUrl} alt="content" />
          </Col>
          <Col md={8} className="text-right column-right">
            <h2>{this.props.headline}</h2>
            <p>{this.props.body1}</p>
            <p>{this.props.body2}</p>
          </Col>
        </Row>
      );
    }
  }

  render() {
    return(
      <Container className="content-columns">
        { this.renderColumns() }
      </Container>
    )
  }
}

export default ContentColumns;