import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './hermes-project.scss';
import placeholder from '../../assets/images/placeholder.svg';
import heroHermes from '../../assets/images/hermes/hero-hermes.png';
import ProjectHero from '../../components/project-hero/project-hero';
import ProjectOverview from '../../components/project-overview/project-overview';
import ContentColumns from '../../components/content-columns/content-columns';

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
        <ProjectOverview 
          body1="Graduate students want to stay on schedule with their classes and activities. But their commutes rely on bus shuttles with unreliable timings. Routes are always changing with construction and traffic."
          body2="CMU's Graduate Student Association (GSA) tasked our team to improve their CMU Shuttle and Escort Services and their existing online resources."
          roleDescription="UX Research, UX/UI Design"
          durationDescription="3 months"
          membersDescription="Annette Hong, June Byeon, Gabrielle Gayles, Daniela Marmolejos, Emily Gong" />
        <Container id="hermes-features-summary">
          <Row>
            <Col>
              <h4>FEATURES SUMMARY</h4>
            </Col>
          </Row>
        </Container>
        <ContentColumns 
          textAlignment="left"
          headline="Holistic Route Planning"
          body1="Users can easily navigate the start-to-end to their transit iterinary with conditional information on public buses, shuttles and within-building navigation at their fingertips."
          body2="This all-in-one approach helps new arrivals travel around and on campus with ease."
          imageUrl={placeholder} />
      </div>
    )
  }
}

export default HermesProject;