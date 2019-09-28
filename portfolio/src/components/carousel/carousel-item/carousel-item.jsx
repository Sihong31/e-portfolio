import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

import './carousel-item.scss';

class CarouselItem extends Component {

  renderImageContent = () => {
    return (
      <div></div>
    );
  }

  renderQuoteContent = (headline, body) => {
    return (
      <Row>
        <Col xs={6} className="carousel-column-left">
          <span>“</span>
          <h2>{headline}</h2>
        </Col>
        <Col xs={6} className="carousel-column-right">
          <p>{body}</p>
        </Col>
      </Row>
    );
  }

  render() {
    return (
      <div className="item">
        { this.renderQuoteContent(this.props.headline, this.props.description ) }
      </div>
    );
  }
}


export default CarouselItem;