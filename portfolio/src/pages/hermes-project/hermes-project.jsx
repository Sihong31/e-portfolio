import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './hermes-project.scss';

import affinityDiagram1 from '../../assets/images/hermes/affinity_diagram_1.png';
import affinityDiagram2 from '../../assets/images/hermes/affinity_diagram_2.png';
import keyFindings1 from '../../assets/images/hermes/key_findings_ideation_1.png';
import keyFindings2 from '../../assets/images/hermes/key_findings_ideation_2.png';
import keyFindings3 from '../../assets/images/hermes/key_findings_ideation_3.png';
import paperPrototypeScreens from '../../assets/images/hermes/paper_prototypes_screens.png';
import finalUserFlows from '../../assets/images/hermes/final_user_flows.png';
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
import HangingBlock from '../../components/hanging-block/hanging-block';
import ColumnImages from '../../components/column-images/column-images';
import CarouselComponent from '../../components/carousel/carousel-component';
import Standout from '../../components/standout/standout';

class HermesProject extends Component {
  carousel1Content = [
    {
      headline: "I just learn through experience how to travel to and around campus",
      description: "Students do not rely on any of the existing transit apps to navigate classroom locations and buildings on campus because none of the existing apps provide that information"
    },
    {
      headline: "I never really know if a bus is going to pass me or let me on...I can never tell if it's full.",
      description: "Students have no identifying resource that helps them relate what exactly is affecting their commute, i.e. construction, buses full, or traffic."
    },
    {
      headline: "It wasn't until my junior year that I learned all the shortcuts on campus.",
      description: "Students generally learn about on-campus shortcuts through word-of-mouth from classmates/friends gradually over the time they are here."
    },
    {
      headline: "I would definitely share shortcuts with other students. We are all suffering together!",
      description: "Students generally wanted to pass on the knowledge they learned from others about campus shortcuts and other tips to newcomers."
    },
    {
      headline: "I'll use a different more dangerous route if that means I can get to class faster.",
      description: "Students want to get to and from classes as fast as they can on and off campus."
    }
  ];
  carousel2Content = [
    {
      description: "How might we help students get to class quickly? Share shortcuts with other students?",
      leftImage: keyFindings1,
      rightContent: "Students were enthusiastic about sharing shortcuts with other people as well as updates around weather"
    },
    {
      description: "How might we help students navigate holistic route planning?",
      leftImage: keyFindings2,
      rightContent: "Students found a holistic route planning feature intuitive to help them with their real-time travel needs"
    },
    {
      description: "How might we help students locate indoor amenities?",
      leftImage: keyFindings3,
      rightContent: "Students wanted routes to include within-building navigation and identify classrooms"
    }
  ];

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
        <HangingBlock
          backgroundColor="#DEEAFF"
          headline="RESEARCH HIGHLIGHTS"
          body1="Our research revealed that it was mostly students that used the application far more than anyone else in the community."
          body2="The current transit applications that supplied CMU specific transit information were lacking in answering to what students needed." />
        <Container>
          <Row>
            <Col md={6}>
              <HeadlineBlock
                headline="Defining Needs"
                subHeadline="FOCUSING ON USERS"
                description="Having figured out our end user, our team concentrated next on getting a deep dive into how exactly undergraduate and graduate students navigated transportation for school." />
            </Col>
          </Row>
          <SubHeadline text="STEPS IN GENERATIVE RESEARCH" />
          <Row>
            <Col md={6}>
              <ContentBlock
                headline="Digging deeper into why students commute the way they do"
                body1="We interviewed two rounds of contextual inquiries and semi-structured interviews with undergraduate and graduate students to tease out what were high priority concerns that they considered when commuting."
                body2="We then synthesized our collective findings through affinity diagramming."
                url="https://drive.google.com/open?id=1Cciqg62mzFnFZZ_zNiojgqazPtV4-Sg5AeBnfBD_MR0"
                urlDescription="Check out our affinity notes >" />
            </Col>
          </Row>
          <div style={{ marginTop: '-70px' }}>
            <ColumnImages
              imageUrl1={affinityDiagram1}
              imageUrl2={affinityDiagram2} />
          </div>
          <SubHeadline text="KEY FINDINGS" />
          <CarouselComponent carouselType="quote" content={this.carousel1Content} />
          <Row>
            <Col md={6}>
              <ContentBlock
                headline="Understanding how users get information on the fly through think-alouds"
                body1="We looked into crowdsourcing as a possible solution to have current CMU students provide transit information, i.e. road conditions, traffic, bus full, to other students."
                body2="We conducted a round of Think-Alouds on Waze, an app currently crowdsourcing related transit information around the CMU community. This was done alongside our contextual inquiries and interviews to learn how students would want related travel alerts or informational tips to appear and how they would want to use them."
                url="https://docs.google.com/document/d/1Wgcb4wUDr330wj3dBE_3Vr4i6DjHlnN4qUhOD2JFDQg/edit?usp=sharing"
                urlDescription="Check out the interview script >" />
            </Col>
          </Row>
          <SubHeadline text="KEY FINDINGS" />
          <Row>
            <Col md={8}>
            <IconTab 
                backgroundColor="#D5DCE7"
                headline="It is useful to filter information so that users can only see what is relevant in the current moment."
                icon={iconBulb} />
            </Col>
          </Row>
          <Row>
            <Col md={8} className="portfolio-content-group">
            <IconTab 
                backgroundColor="#D5DCE7"
                headline="Having too much information show up on a map interface  make it difficult to complete routes."
                icon={iconWarning} />
            </Col>
          </Row>
        </Container>
        <HangingBlock
          backgroundColor="#DEEAFF"
          headline="RESEARCH HIGHLIGHTS"
          body1="Having talked to our users first-hand, the strongest pain points were in getting information around campus navigation, speed, and unpredictable transport conditions."
          body2="Apps that currently crowdsource transit information are too cluttered and difficult to use to effectively navigate the campus." />
        <Container>
          <Row>
            <Col md={6}>
              <HeadlineBlock
                subHeadline="NARROWING THE FOCUS"
                headline="Defining Scope"
                description="After analyzing our data and coming up with our insights, we realized that students came to not use the CMU shuttle because it failed to provide students with accessible information around how to best plan out routes around campus-related transit and conditions." />
            </Col>
          </Row>
          <SubHeadline text="PROBLEM STATEMENT" />
          <Row>
            <Col md={10}>
            <Standout
              headline="Our research showed that ---"
              content="Graduate students want to stay on schedule with their classes and activities but current apps fail to offer them the immediate and best responsive routes to and fro and around campus."
              color="#DEEAFF" />
            </Col>
          </Row>
        </Container>
        <HangingBlock
          backgroundColor="#D5DCE7"
          headline="MIDPOINT"
          body1="We can now focus on trying to reduce the gap around information accessibility for students in our design solutions, particularly ideas around what information students need and how to present it." />
        <Container>
          <Row>
            <Col md={6}>
              <HeadlineBlock
                subHeadline="DRILLING DOWN THE CONCEPT"
                headline="Ideation"
                description="Taking our research insights into account, the team began brainstorming ideas we should approach to help us narrow in more about what information and how to show the information students needed." />
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <ContentBlock
                subHeadline="BRAINSTORMING"
                headline="Digging deeper into why students commute the way they do through speed dating"
                body1="With our research to guide us, we brainstormed a number of HWE (How Might We) statements coupled with corresponding storyboards. Each storyboards was drawn to elicit user feedback on edge scenarios for their corresponding use case."
                body2="We presented each storyboard to users through a speed dating exercise where we asked them qualitative question how accurate each storyboard was to their own experiences. The top three that received positive feedback were:" />
            </Col>
          </Row>
          <SubHeadline text="KEY FINDINGS" />
          <CarouselComponent carouselType="image" content={this.carousel2Content} />
          <SubHeadline text="DESIGN FOCUS" />
          <Row>
            <Col md={10}>
              <Standout
                color="#DEEAFF"
                headline="From our ideation phase, we worked out a direction --"
                content="An all-in-one transportation application that integrates all CMU related transit information and offered input features for real-time crowdsourced updates" />
            </Col>
          </Row>
        </Container>
        <HangingBlock
          backgroundColor="#DEEAFF"
          headline="DESIGN HIGHLIGHTS"
          body1="Through ideating different use case scenarios, we were able to recognize an all-around design direction that resonated most with how users want to travel." />
        <Container>
          <Row>
            <Col md={6}>
              <HeadlineBlock
                subHeadline="EVALUATING DESIGN IDEAS"
                headline="Iteration"
                description="To create the final design concept around the mobile app, the team worked through multiple iterations of low-fidelity to high-fidelity prototypes. We evaluated our designs with Think-Aloud user testing so we could improve on the functionality, use, and concept of the application." />
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <ContentBlock
                subHeadline="REFINING THE DESIGN"
                headline="Cultivating a responsive navigation experience through paper prototyping and think-alouds"
                body1="We approached designing first with a paper prototype that was structured around answering how students would best record and share how they best navigate the campus with an in-app community."
                body2="We conducted Think-Alouds with CMU students to gauge their response to this form of navigation." />
            </Col>
          </Row>
          <SubHeadline text="PAPER PROTOTYPE SCREENS" />
          <FullImage imageUrl={paperPrototypeScreens} altText="Paper prototype screens" />
          <Row>
            <Col md={6}>
              <ContentBlock
                headline="Revisiting the user flow"
                body1="After receiving feedback that users wanted a more minimalized approach towards being able to stream shortcut routes and road conditions, we worked through a streamlined prototype with relevant information showcased as part of the displayed route." />
            </Col>
          </Row>
          <SubHeadline text="FINAL USER FLOWS" />
          <FullImage imageUrl={finalUserFlows} altText="Final user flows" />
          <Standout
            color="#DEEAFF"
            content="“Including the CMU shuttle in generated routes and class locations is great. Other apps don’t do this. I’ll always know this way how to get to where I need to go.”"
            caption="Graduate Student upon using our second iteration" />
        </Container>
      </div>
    )
  }
}

export default HermesProject;