import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

import './content-columns.scss';

class ContentColumns extends Component {
  renderColumns = () => {
    if (this.props.textAlignment === "left") {
      return (
        <Row>
          <Col md={this.props.colSizeLeft} className="column-text-left column-left">
            <h2>{this.props.headline}</h2>
            <p>{this.props.body1}</p>
            <p>{this.props.body2}</p>
          </Col>
          <Col md={this.props.colSizeRight} className="column-text-left column-right">
            <img src={this.props.imageUrl} alt="content" />
          </Col>
        </Row>
      );
    } else if (this.props.textAlignment === "right") {
      return (
        <Row>
          <Col xs={{ span: 12, order: 2 }} md={{ span: this.props.colSizeRight, order: 1 }} className="column-text-right column-left">
            <img src={this.props.imageUrl} alt="content" />
          </Col>
          <Col xs={{ span: 12, order: 1 }} md={{ span: this.props.colSizeLeft, order: 2 }} className="column-text-right column-right">
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
      <div className="content-columns">
        { this.renderColumns() }
      </div>
    )
  }
}

export default ContentColumns;