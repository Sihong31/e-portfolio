import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './project-card.scss';

class ProjectCard extends Component {
  render() {
    return (
      <div className="project-card" style={{ backgroundColor: `${this.props.backgroundColor}` }}>
        <Row>
          <Col className="project-card-image" lg={6}>
            <img src={this.props.imageUrl} />
          </Col>
          <Col className="project-card-content" lg={6}>
            <h1>{ this.props.title }</h1>
            <p>{ this.props.description }</p>
            <Link to={ this.props.link }>{ this.props.linkText }</Link>
          </Col>
        </Row>
      </div>
    )
  }
}

export default ProjectCard;