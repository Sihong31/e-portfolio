import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './hermes-project.scss';
import holisticRoute from '../../assets/images/hermes/holistic_route_planning.png';
import crowdSourcingAlert from '../../assets/images/hermes/crowdsourcing_alert.png';
import buildingNavigation from '../../assets/images/hermes/within_building_navigation.png';
import projectRoadmapImage from '../../assets/images/hermes/project-roadmap.png';
import keyApp from '../../assets/images/hermes/key_findings_the_app.png';
import keyRide from '../../assets/images/hermes/key_findings_the_ride.png';
import iconBulb from '../../assets/images/icons/icon-bulb.png';
import iconWarning from '../../assets/images/icons/icon-warning.png';
import heroHermes from '../../assets/images/hermes/hero-hermes.png';
import ProjectHero from '../../components/project-hero/project-hero';
import ProjectOverview from '../../components/project-overview/project-overview';
import ContentColumns from '../../components/content-columns/content-columns';
import ProjectRoadmap from '../../components/project-roadmap/project-roadmap';
import HeadlineBlock from '../../components/headline-block/headline-block';
import ContentBlock from '../../components/content-block/content-block';
import SubHeadline from '../../components/sub-headline/sub-headline';
import SingleAccordion from '../../components/single-accordion/single-accordion';
import FullImage from '../../components/full-image/full-image';
import IconTab from '../../components/icon-tab/icon-tab';

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
        <Container>
          <ProjectOverview 
            body1="Graduate students want to stay on schedule with their classes and activities. But their commutes rely on bus shuttles with unreliable timings. Routes are always changing with construction and traffic."
            body2="CMU's Graduate Student Association (GSA) tasked our team to improve their CMU Shuttle and Escort Services and their existing online resources."
            roleDescription="UX Research, UX/UI Design"
            durationDescription="3 months"
            membersDescription="Annette Hong, June Byeon, Gabrielle Gayles, Daniela Marmolejos, Emily Gong" />
          <SubHeadline text="FEATURES SUMMARY" />
          <ContentColumns 
            textAlignment="left"
            headline="Holistic Route Planning"
            body1="Users can easily navigate the start-to-end to their transit iterinary with conditional information on public buses, shuttles and within-building navigation at their fingertips."
            body2="This all-in-one approach helps new arrivals travel around and on campus with ease."
            imageUrl={holisticRoute} />
          <ContentColumns
            textAlignment="right"
            headline="Within-building navigation"
            body1="Having classrooms as part of the holistic route planning experience helps students pinpoint a more exact route and get there more quickly."
            body2="Providing indoor shortcuts would be the next step in leveraging indoor mapping technology."
            imageUrl={buildingNavigation} />
          <ContentColumns 
            textAlignment="left"
            headline="Crowdsourcing Alerts"
            body1="Users will be able to easily provide direct input on travel conditions while on route to their destination."
            body2="The collected information will be used to help users be alert ahead on bus statuses, unsafe areas, and/or construction."
            imageUrl={crowdSourcingAlert} />
        </Container>
        <ProjectRoadmap 
          backgroundColor="#D5DCE7"
          imageUrl={projectRoadmapImage}
          leftBody1="We practiced a mixed-methods research of both quantitative and qualitative UX research."
          leftBody2="I compared log data insights with behavioral findings from actual users. From these, my team made timely design decisions to create an approachable solution."
          rightBody1="Immersion, Competitive Research, Testing , UX Audit, Data, Contextual Inquiry, Interviews, Speed Dating, Think-Alouds, Prototyping" />
        <Container>
          <Row>
            <Col md={6}>
              <HeadlineBlock
                headline="Discovery"
                subHeadline="DOING THE RESEARCH"
                description="In this phase, our team primarily worked through learning more about the current state of the CMU transportation landscape." />
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <ContentBlock
                headline="Figuring out how people use the current app"
                subHeadline="STEPS IN EXPLORATORY RESEARCH"
                body1="We used data and evaluative think-alouds to better identify current ridership trends on the CMU shuttle and to gather key information from CMU students about when they used RideSystems, the current existing CMU transit app."
                url="https://drive.google.com/open?id=1PjeCiVqzqfDdTRLQVHfYiAyVXfVELIgBM9PhEYxgKLc"
                urlDescription="Check out our interview script >" />
            </Col>
          </Row>
          <SubHeadline text="KEY FINDINGS" />
          <Row>
            <Col md={8}>
              <SingleAccordion 
                headline="People have been using RideSystems more despite less people riding on the CMU shuttles." 
                content="4006 new RideSystem users logged in in the past two years but a 2.7% declined in ridership numbers."
                backgroundColor="#D5DCE7" />
            </Col>
          </Row>
          <Row>
            <Col md={8}>
            <SingleAccordion 
              headline="Getting familiar with an unfamiliar route on the RideSystems app is difficult." 
              content="The app provided no holistic visual overview of available shuttle routes on the map. The app also did not provide any landmarks or previous known searches on the map to help users understand what they were seeing." 
              backgroundColor="#D5DCE7" />
            </Col>
          </Row>
          <Row>
            <Col md={8} className="portfolio-content-group">
            <SingleAccordion 
              headline="Using the application requires working with other applications." 
              content="Users were unable to understand the timelines of the shuttle or escort services without turning to additional CMU web map services. They also had to switch between the app and Google Maps to figure out the exact start and finish of a route." 
              backgroundColor="#D5DCE7" />
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <ContentBlock
                headline="Understanding the current commute"
                body1="We also kicked off the project by immersing in a start-to-end round-trip from our homes to the CMU campus."
                body2="We paired the ride experience of taking the CMU Shuttle with the RideSystems app and Pittsburgh Port Authority buses with a companion app Transit." />
            </Col>
          </Row>
          <SubHeadline text="KEY FINDINGS" />
          <Row>
            <Col>
              <FullImage imageUrl={keyRide} altText="Key Ride" />
            </Col>
          </Row>
          <Row>
            <Col style={{ marginBottom: '50px' }}>
              <FullImage imageUrl={keyApp} altText="Key App" />
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <ContentBlock
                headline="Mapping out the relationships between taking and providing transportation"
                body1="GSA provided us with pre-recorded interview data that gave us an insider's perspective on all the available transit options available to the CMU community."
                body2="We used flow and sequence models to visualize the relationships among the different departments in charge of providing various transportation means around CMU."
                url="https://drive.google.com/open?id=1B1_rVc7roSNAm35s1vqlyPjW6DamWF7afCsceZBJI1A"
                urlDescription="Check out the flow model >" />
            </Col>
          </Row>
          <SubHeadline text="KEY FINDINGS" />
          <Row>
            <Col md={8}>
              <IconTab 
                backgroundColor="#D5DCE7"
                headline="Students were the main reason behind shuttle service use as faculty were not as inclined to use it."
                icon={iconBulb} />
            </Col>
          </Row>
          <Row>
            <Col md={8} className="portfolio-content-group">
              <IconTab 
                  backgroundColor="#D5DCE7"
                  headline="Students chose to use quicker modes of transportation like Uber over the CMU shuttle."
                  icon={iconWarning} />
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <ContentBlock
                headline="Pinpointing pain points in existing CMU-specific apps"
                body1="We were also interested in finding out why exactly existing transit apps like Tiramisu were not more pervasive among students."
                body2="We used Think-Aloud interviews with undergraduate and graduate students to better identify what possible breakdowns users had when using the app."
                url="https://drive.google.com/open?id=1S4LnmhW_o6gKVxfrMpXnDj3ie-JpE23XQ-oalVmIo6g"
                urlDescription="Check out the interview script >" />
            </Col>
          </Row>
          <SubHeadline text="KEY FINDINGS" />
          <Row>
            <Col md={8}>
              <IconTab 
                backgroundColor="#D5DCE7"
                headline="CMU-specific apps like Tiramisu had similar limits around holistic route planning as RideSystems."
                icon={iconBulb} />
            </Col>
          </Row>
          <Row>
            <Col md={8} className="portfolio-content-group">
              <IconTab 
                backgroundColor="#D5DCE7"
                headline="The app showcased only the specific transportation options rather than searched transit routes."
                icon={iconWarning} />
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default HermesProject;