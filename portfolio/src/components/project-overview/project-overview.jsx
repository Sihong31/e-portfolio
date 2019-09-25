import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './project-overview.scss';

class ProjectOverview extends Component {
  render() {
    return(
      <Container className="project-overview">
        <Row>
          <Col className="project-overview-left" md={8}>
            <h1>Project Overview</h1>
            <h2>{this.props.body1}</h2>
            <h2>{this.props.body2}</h2>
          </Col>
          <Col className="project-overview-right" md={4}>
            <div className="project-overview-description-group">
              <h4>ROLE</h4>
              <p>{this.props.roleDescription}</p>
            </div>
            <div className="project-overview-description-group">
              <h4>DURATION</h4>
              <p>{this.props.durationDescription}</p>
            </div>
            <div className="project-overview-description-group">
              <h4>MEMBERS</h4>
              <p>{this.props.membersDescription}</p>
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default ProjectOverview;