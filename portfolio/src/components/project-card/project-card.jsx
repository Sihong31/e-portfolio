import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './project-card.scss';

class ProjectCard extends Component {
  renderCard = () => {
    if (this.props.tradewell) {
      return (
        <a href={ this.props.link } target="_blank">
          <div className="project-card" style={{ backgroundColor: `${this.props.backgroundColor}` }}>
            <Row>
              <Col className="project-card-image" lg={6}>
                <img src={this.props.imageUrl} />
              </Col>
              <Col className="project-card-content" lg={6}>
                <h1>{ this.props.title }</h1>
                <p>{ this.props.description }</p>
                <p>{ this.props.linkText } { this.props.linkText === "View Project" ? <>&rarr;</> : ''}</p>
                <span className="project-card-content-caption">{this.props.caption}</span>
              </Col>
            </Row>
          </div>
        </a>
      );
    }
    return (
      <Link className="project-card" to={ this.props.link } style={{ backgroundColor: `${this.props.backgroundColor}` }}>
        <Row>
          <Col className="project-card-image" lg={6}>
            <img src={this.props.imageUrl} />
          </Col>
          <Col className="project-card-content" lg={6}>
            <h1>{ this.props.title }</h1>
            <p>{ this.props.description }</p>
            <p>{ this.props.linkText } { this.props.linkText === "View Project" ? <>&rarr;</> : ''}</p>
            <span className="project-card-content-caption">{this.props.caption}</span>
          </Col>
        </Row>
      </Link>
    );
  }

  render() {
    return (
      <>
        {this.renderCard()}
      </>
    )
  }
}

export default ProjectCard;