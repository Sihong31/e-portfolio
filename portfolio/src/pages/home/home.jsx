import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './home.scss';
import thumbnailHermes from '../../assets/images/thumbnails/thumbnail-hermes.png';
import thumbnailRobot from '../../assets/images/thumbnails/thumbnail-robot.png';
import thumbnailTradewell from '../../assets/images/thumbnails/thumbnail-tradewell.png';
import ProjectCard from '../../components/project-card/project-card';

class Home extends Component {
  render() {
    return (
      <Container className="home">
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
        <Row>
          <Col className="project-cards-container">
            <ProjectCard 
              title="Hermes" 
              description="a mobile application that offers indoor navigation and real-time transit conditions." 
              link="/hermes" 
              linkText="View Project"
              backgroundColor="#DEEAFF"
              imageUrl={thumbnailHermes}
              caption="UX Research | UI Design | Transportation | Mobile" />
            <ProjectCard 
              title="Robot as Tutor" 
              description="a study around the role of robots as educators in one-to-one tutoring spaces" 
              link="/robot" 
              linkText="View Project"
              backgroundColor="#C4E7E9"
              imageUrl={thumbnailRobot}
              caption="Research | Academic Study | EdTech | Robotics " />
            <ProjectCard 
              title="Tradewell Playbook" 
              description="a set of alerting guidelines aimed to create leader advantages in the dark pool trading space" 
              link="https://wangqianeve.github.io/CapstoneWebsite/index.html" 
              linkText="Coming soon"
              tradewell={true}
              backgroundColor="#DFE3FE"
              imageUrl={thumbnailTradewell}
              caption="UX Research  | UI Design | FinTech | Desktop" />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Home;