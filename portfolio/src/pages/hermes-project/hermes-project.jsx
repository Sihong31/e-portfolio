import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './hermes-project.scss';
import placeholder from '../../assets/images/placeholder.svg';
import heroHermes from '../../assets/images/hermes/hero-hermes.png';
import ProjectHero from '../../components/project-hero/project-hero';
import ProjectOverview from '../../components/project-overview/project-overview';
import ContentColumns from '../../components/content-columns/content-columns';
import ProjectRoadmap from '../../components/project-roadmap/project-roadmap';

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
        <ContentColumns
          textAlignment="right"
          headline="Within-building navigation"
          body1="Having classrooms as part of the holistic route planning experience helps students pinpoint a more exact route and get there more quickly."
          body2="Providing indoor shortcuts would be the next step in leveraging indoor mapping technology."
          imageUrl={placeholder} />
        <ContentColumns 
          textAlignment="left"
          headline="Crowdsourcing Alerts"
          body1="Users will be able to easily provide direct input on travel conditions while on route to their destination."
          body2="The collected information will be used to help users be alert ahead on bus statuses, unsafe areas, and/or construction."
          imageUrl={placeholder} />
        <ProjectRoadmap 
          backgroundColor="#D5DCE7"
          imageUrl={placeholder}
          leftBody1="We practiced a mixed-methods research of both quantitative and qualitative UX research."
          leftBody2="I compared log data insights with behavioral findings from actual users. From these, my team made timely design decisions to create an approachable solution."
          rightBody1="Immersion, Competitive Research, Testing , UX Audit, Data, Contextual Inquiry, Interviews, Speed Dating, Think-Alouds, Prototyping" />
      </div>
    )
  }
}

export default HermesProject;