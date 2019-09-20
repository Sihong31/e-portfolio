import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './project-card.scss';

class ProjectCard extends Component {
  render() {
    return (
      <div className="project-card">
        <Row>
          <Col className="content" md={{ offset: 6 }}>
            <h3>{ this.props.title }</h3>
            <p>{ this.props.description }</p>
            <Link to={ this.props.link }>{ this.props.linkText }</Link>
          </Col>
        </Row>
      </div>
    )
  }
}

export default ProjectCard;