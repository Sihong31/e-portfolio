import React, { Component } from 'react';

import './project-hero.scss';

class ProjectHero extends Component {
  render() {
    return(
      <div className="project-hero" style={{ backgroundColor: `${this.props.backgroundColor}` }}>
        <div className="project-hero-content">
          <h4 className="project-hero-date">{this.props.date}</h4>
          <h1 className="project-hero-title">{this.props.title}</h1>
          <p className="project-hero-description">{this.props.description}</p>
        </div>
        <div className="project-hero-image">
          <img src={this.props.imageUrl} alt="Hermes"></img>
        </div>
      </div>
    )
  }
}

export default ProjectHero;