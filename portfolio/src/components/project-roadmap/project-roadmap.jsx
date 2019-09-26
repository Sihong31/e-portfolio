import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './project-roadmap.scss';

class ProjectRoadmap extends Component {
  render() {
    return(
      <div className="project-roadmap" style={{ backgroundColor: `${this.props.backgroundColor}` }}>
        <Container>
          <Row>
            <Col className="project-roadmap-headlines">
              <h4>Background</h4>
              <h1>Project Roadmap</h1>
            </Col>
          </Row>
          <Row>
            <Col className="project-roadmap-image">
              <img src={this.props.imageUrl} />
            </Col>
          </Row>
          <Row>
            <Col className="project-roadmap-content-left" md={8}>
              <h4>OUR PROCESS</h4>
              <p>{this.props.leftBody1}</p>
              <p>{this.props.leftBody2}</p>
            </Col>
            <Col className="project-roadmap-content-right" md={4}>
              <h4>METHODS</h4>
              <p>{this.props.rightBody1}</p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default ProjectRoadmap;