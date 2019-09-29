import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './final-design.scss';
import iconTechnologist from '../../assets/images/icons/icon-technologist.png';
import FullImage from '../full-image/full-image';

class FinalDesign extends Component {

  render() {
    return (
      <div className="final-design" style={{ backgroundColor: `${this.props.backgroundColor}` }}>
        <Container>
          <Row>
            <Col>
              <div className="final-design-content-1">
                <h4>{this.props.fd1Subheadline}</h4>
                <h1>{this.props.fd1Headline}</h1>
                <p>{this.props.fd1Body1}</p>
                <a href={this.props.fd1Url} target="_blank">{this.props.fd1UrlDescription}</a>
              </div>
              {this.props.imageUrl ? <FullImage imageUrl={this.props.imageUrl} altText="Final Outcome" /> : ''}
              <div className="final-design-content-2">
                <h4>{this.props.fd2Subheadline}</h4>
                <h1>{this.props.fd2Headline}</h1>
                <h3>{this.props.fd2Title1}</h3>
                <p>{this.props.fd2Body1}</p>
                <h3>{this.props.fd2Title2}</h3>
                <p>{this.props.fd2Body2}</p>
              </div>
            </Col>
          </Row>
        </Container>
        <span className="final-design-icon">
          <img src={iconTechnologist} alt="Technologist Icon" />
        </span>
      </div>
    )
  }
}

export default FinalDesign;