import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './content-block.scss';

class ContentBlock extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md={6}>
            <div className="content-block">
                <h4>{this.props.subHeadline}</h4>
                <h2>{this.props.headline}</h2>
                <p>{this.props.body1}</p>
                <p>{this.props.body2}</p>
                <a href={this.props.url} target="_blank">{this.props.urlDescription}</a>
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default ContentBlock;