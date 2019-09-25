import React, { Component } from 'react';

import './hermes-project.scss';
import heroHermes from '../../assets/images/hermes/hero-hermes.png';
import ProjectHero from '../../components/project-hero/project-hero';

class HermesProject extends Component {
  render() {
    return (
      <div className="hermes">
        <ProjectHero 
          backgroundColor="#DEEAFF"
          date="SEPTEMBER - DECEMBER  2018"
          title="Hermes"
          description="a mobile application that offers indoor navigation and real-time transit conditions."
          imageUrl={heroHermes} />
      </div>
    )
  }
}

export default HermesProject;