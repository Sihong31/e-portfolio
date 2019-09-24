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
              <p>LEARN MORE <Link to="/about"><strong>ABOUT ME</strong></Link></p>
              <p>OR <a href="mailto:emily.f.gong@gmail.com"><strong>DROP A LINE</strong></a></p>
            </div>
          </Col>
        </Row>
        <Row className="project-cards-container">
          <Col>
            <ProjectCard 
              title="Hermes" 
              description="a mobile application that offers indoor navigation and real-time transit conditions." 
              link="/hermes" 
              linkText="View Project"
              backgroundColor="#DEEAFF" />
            <ProjectCard 
              title="Robot as Tutor" 
              description="a mobile application that offers indoor navigation and real-time transit conditions." 
              link="/robot" 
              linkText="View Project"
              backgroundColor="#C4E7E9" />
            <ProjectCard 
              title="Tradewell Playbook" 
              description="a mobile application that offers indoor navigation and real-time transit conditions." 
              link="/tradewell" 
              linkText="Coming soon"
              backgroundColor="#DFE3FE" />
          </Col>
        </Row>
      </div>
    )
  }
}

export default Home;