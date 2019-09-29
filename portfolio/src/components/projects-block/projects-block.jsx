import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

import './projects-block.scss';

class ProjectsBlock extends Component {
  render() {
    return (
      <div className="projects-block">
        <h1>More projects</h1>
        <Row>
          <Col lg={6}>
            <Link className="project-1" to={this.props.projectUrl1} style={{ backgroundColor: `${this.props.backgroundColor1}` }}>
              <Row>
                <Col className="project-image" lg={5}>
                  <img src={this.props.imageUrl1} alt="Project 1" />
                </Col>
                <Col className="project-headline" lg={7}>
                  <h1>{this.props.headline1}</h1>
                </Col>
              </Row>
            </Link>
          </Col>
          <Col lg={6}>
            <Link className="project-2" to={this.props.projectUrl2} style={{ backgroundColor: `${this.props.backgroundColor2}` }}>
              <Row>
                <Col className="project-image" lg={5}>
                  <img src={this.props.imageUrl2} alt="Project 2" />
                </Col>
                <Col className="project-headline" lg={7}>
                  <h1>{this.props.headline2}</h1>
                </Col>
              </Row>
            </Link>
          </Col>
        </Row>
      </div>
    )
  }
}

export default ProjectsBlock;