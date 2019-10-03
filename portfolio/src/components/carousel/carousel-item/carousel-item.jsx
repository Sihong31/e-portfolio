import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

import './carousel-item.scss';

class CarouselItem extends Component {


  renderContent = () => {
    if (this.props.type === "quote") {
      return (
        <div className="carousel-quote-item">
          <Row>
            <Col md={6} className="carousel-column-left">
              <span>“</span>
              <h2>{this.props.headline}</h2>
            </Col>
            <Col md={6} className="carousel-column-right">
              <p>{this.props.description}</p>
            </Col>
          </Row>
        </div>
      );
    } else if (this.props.type === "image") {
      return (
        <div className="carousel-image-item">
          <Row>
            <Col>
              <p className="description">{this.props.description}</p>
            </Col>
          </Row>
          <Row className="carousel-image-item-content-row">
            <Col md={6} className="carousel-column-left">
              <img src={this.props.leftImage} alt="Left side imagery" />
            </Col>
            <Col md={6} className="carousel-column-right">
              <p>{this.props.rightContent}</p>
            </Col>
          </Row>
        </div>
      );
    }
    return (
      <div></div>
    );
  }

  render() {
    return (
      <div className="item">
        { this.renderContent() }
      </div>
    );
  }
}


export default CarouselItem;