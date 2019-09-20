import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './home.scss';
import ProjectCard from '../../components/project-card/project-card';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Row>
          <Col>
            <h4 className="home-greeting">HELLO</h4>
            <div className="home-caption-container">
              <h2 className="home-caption">I'm Emily, a UX Researcher & Designer.</h2>
              <h2 className="home-caption">I strive to create meaningful work that</h2>
              <h2 className="home-caption">align well for users, businesses, and</h2>
              <h2 className="home-caption">the world.</h2>
            </div>
            <div className="home-caption-small">
              <h4>LEARN MORE <Link to="/about"><strong>ABOUT ME</strong></Link></h4>
              <h4>OR <strong>DROP A LINE</strong></h4>
            </div>
          </Col>
        </Row>
        <Row className="project-cards-container">
          <Col>
            <ProjectCard 
              title="Hermes" 
              description="a mobile application that offers indoor navigation and real-time transit conditions." 
              link="/hermes" 
              linkText="VIEW PROJECT" />
            <ProjectCard 
              title="Robot as Tutor" 
              description="a mobile application that offers indoor navigation and real-time transit conditions." 
              link="/robot" 
              linkText="VIEW PROJECT" />
            <ProjectCard 
              title="Tradewell Playbook" 
              description="a mobile application that offers indoor navigation and real-time transit conditions." 
              link="/tradewell" 
              linkText="VIEW PROJECT" />
            <ProjectCard 
              title="Afterlife" 
              description="a mobile application that offers indoor navigation and real-time transit conditions." 
              link="/afterlife" 
              linkText="VIEW PROJECT" />       
          </Col>
        </Row>
      </div>
    )
  }
}

export default Home;