import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

import './column-images.scss';

class ColumnImages extends Component {

  render() {
    return (
      <div className="column-images">
        <Row>
          <Col md={6} className="column-images-left">
            <img src={this.props.imageUrl1} alt="Left" />
          </Col>
          <Col md={6} className="column-images-right">
          <img src={this.props.imageUrl2} alt="Right" />
          </Col>
        </Row>
      </div>
    )
  }
}

export default ColumnImages;