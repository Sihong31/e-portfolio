import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './robot-project.scss';
import thumbnailHermes from '../../assets/images/thumbnails/thumbnail-hermes.png';
import thumbnailTradewell from '../../assets/images/thumbnails/thumbnail-tradewell.png';
import affinityGraph from '../../assets/images/robot/affinity_graph.png';
import manipulationGraph from '../../assets/images/robot/manipulation_check_graph.png';
import trustGraph from '../../assets/images/robot/trust_graph.png';
import robotFeedback from '../../assets/images/robot/computer_robot_feedback.png';
import stepByStep from '../../assets/images/robot/step_by_step.png';
import littleRobot from '../../assets/images/robot/little_robot.png';
import studyMatrix from '../../assets/images/robot/study_matrix.png';
import projectRoadmapImage from '../../assets/images/robot/project_roadmap.png';
import relayEmotion from '../../assets/images/robot/relay_emotion_through_motion.png';
import robotEducators from '../../assets/images/robot/robot_educators.png';
import heroRobot from '../../assets/images/robot/hero_robot.png';
import ListBlock from '../../components/list-block/list-block';
import ProjectsBlock from '../../components/projects-block/projects-block';
import ProjectHero from '../../components/project-hero/project-hero';
import ProjectOverview from '../../components/project-overview/project-overview';
import ContentBlock from '../../components/content-block/content-block';
import ContentColumns from '../../components/content-columns/content-columns';
import ProjectRoadmap from '../../components/project-roadmap/project-roadmap';
import SubHeadline from '../../components/sub-headline/sub-headline';
import FullImage from '../../components/full-image/full-image';
import HeadlineBlock from '../../components/headline-block/headline-block';
import HangingBlock from '../../components/hanging-block/hanging-block';
import FinalDesign from '../../components/final-design/final-design';
import SingleAccordion from '../../components/single-accordion/single-accordion';
import CarouselComponent from '../../components/carousel/carousel-component';


class RobotProject extends Component {
  listBlockContent1 = [
    { 
      id: 1,
      boldedCopyStart: "The role of robots in education is not yet hard set",
      body: "The role of robots in education is not yet hard set and more research must be done to understand the impact."
    },
    {
      id: 2,
      boldedCopyMiddle: "a non-peer teacher or tutor as helpers",
      body: "Students often prefer a non-peer teacher or tutor as helpers that will better facilitate their learning and not judge them as inadequate.",
    },
    {
      id: 3,
      boldedCopyEnd: "shortage of quality teachers and resources, an area where robot tutors could help.",
      body: "The higher education space is currently dealing with shortage of quality teachers and resources, an area where robot tutors could help."
    },
  ]
  listBlockContent2 = [
    {
      id: 1,
      boldedCopyStart: "There is no significant difference",
      body: "There is no significant difference in the affinity and trust of the human subject across the study designs."
    },
    {
      id: 2,
      boldedCopyMiddle: "is higher",
      body: "The mean affinity towards the robot is higher for participants subject to positive feedback treatment."
    },
    {
      id: 3,
      boldedCopyMiddle: "is lower",
      body: "The mean affinity towards the robot is lower for participants subject to negative feedback treatment."
    },
    {
      id: 4,
      boldedCopyStart: "The mean trust towards the robot is lower for participants subject to conflicting feedback treatment",
      body: "The mean trust towards the robot is lower for participants subject to conflicting feedback treatment when compared to participants subject to non-conflicting feedback treatment."
    },
    {
      id: 5,
      boldedCopyStart: "The mean affinity towards the robot is lower for participants subject to conflicting feedback treatment",
      body: "The mean affinity towards the robot is lower for participants subject to conflicting feedback treatment when compared to participants subject to non-conflicting feedback treatment."
    },
  ];
  carousel1Content = [
    {
      description: "What happened to the affinity among participants in the user study?",
      leftImage: affinityGraph,
      rightContent: "The mean score of affinity scores are very high among all study designs."
    },
    {
      description: "What happened to the trust among participants in the user study?",
      leftImage: trustGraph,
      rightContent: "The mean trust in conflicting feedback treatments are lower than non-conflicting treatment."
    },
    {
      description: "Did our selection on robot reactions validate the results of our study?",
      leftImage: manipulationGraph,
      rightContent: "Our choice of robot reactions is valid given the p-value (0.000002) check of significance."
    }
  ];

  render() {
    return (
      <div className="robot-project">
        <ProjectHero 
          backgroundColor="#c4e7e9"
          date="SEPTEMBER - DECEMBER  2018"
          title="Robot as Tutor"
          description="a study around the role of robots as educators in one-to-one tutoring spaces"
          projectType="robot"
          imageUrl={heroRobot} />
        <Container>
          <ProjectOverview
            body1="The landscape around quality education is changing more than ever today with the introduction of technologies such as robots to serve as learning companions."
            body2="We sought to find out if robots were able to serve as a reliable teacher proxy in a one-on-one setting for students who rely on steady and relevant feedback for their performances."
            roleDescription="Human-Robot Interaction Research Study"
            durationDescription="3 months"
            membersDescription="Kunal Bhuwalka, Nur Icel, Emily Gong" />
          <Row>
            <Col md={6}>
              <ContentBlock 
                subHeadline="OUR CHALLENGE"
                headline="Robots are still a new entry into the educational space."
                body1="Students want to have personalized tutoring but their access to such services are limited due to it being expensive and inaccessible." />
            </Col>
          </Row>
          <Row>
            <Col>
              <ListBlock headline="Why does it matter?" items={this.listBlockContent1} />
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <ContentBlock 
                subHeadline="SOLUTION SUMMARY"
                headline="A set of design guidelines when it comes to designing the best educational robot." />
            </Col>
          </Row>
          <ContentColumns
            textAlignment="right"
            colSizeLeft="6"
            colSizeRight="6"
            headline="Robots as educators need to be authorative"
            body1="92% of participants trusted the computer screen more in terms of accuracy for test results. "
            imageUrl={robotEducators} />
          <ContentColumns
            textAlignment="left"
            colSizeLeft="6"
            colSizeRight="6"
            headline="Robots should show distinct, clear emotions reactions to help understanding"
            body1="45% of participants were still unsure of the type of reaction Cozmo was eliciting, especially due to conflation with the computer screen."
            imageUrl={relayEmotion} />
          <ContentColumns 
            textAlignment="right"
            colSizeLeft="6"
            colSizeRight="6"
            headline="Robots should possess anthromorphic traits as this allows for more positive affinity."
            body1="53% of participants used “cute” to describe Cozmo in a positive context, with high affinity scores."
            imageUrl={littleRobot} />
        </Container>
        <ProjectRoadmap
          backgroundColor="#c9dadb"
          imageUrl={projectRoadmapImage}
          leftBody1="We practiced a standard lab research format with getting the results of this study."
          leftBody2="We setup two controlled user studies measuring two separate variables, affinity and trust, with a robot responding to user feedback."
          rightBody1="Literature Review, Moderated User Studies, ANOVA Analysis" />
        <Container>
          <Row>
            <Col md={6}>
              <HeadlineBlock
                headline="Study Design"
                subHeadline="SETTING UP THE EXPERIMENT"
                description="Our study required us to figure out a way to independently measure the human response to the robot and coordinate the experiment to generate the best results." />
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <ContentBlock
                headline="Building out our hypotheses through literature reviews"
                subHeadline="OUR STUDIES"
                body1="We learned from previous work done in the field that robots have been effective in delivering instructions to students and provide students the non-judgmental feedback that helps learning thrive."
                body2="We were able to draw out five hypotheses after settling for a factorial study design with the robot and the human feedback as independent variables."
                body3="Subjects in two of the studies would receive conflicting feedback from the robot and the computer while subjects in the two other studies would receive the same feedback from the robot and the computer." />
            </Col>
          </Row>
          <SubHeadline text="STUDY MATRIX" />
          <div style={{ marginBottom: '100px' }}>
            <FullImage imageUrl={studyMatrix} altText="Study Matrix" />
          </div>
          <Row>
            <Col>
              <ListBlock headline="Hypotheses" items={this.listBlockContent2} />
            </Col>
          </Row>
        </Container>
        <HangingBlock
          backgroundColor="#c4e7e9"
          headline="HIGHLIGHTS"
          body1="We ran a pilot test before proceeding with a final study run with this study design. Throughout the entire process, we iterated the study design many times to minimize cases of false positives."
          body2="We moved ahead on tweaks to what exact robotic motions we’d display and the exact material shown on the computer." />
        <Container>
          <Row>
            <Col md={6}>
              <HeadlineBlock
                subHeadline="TESTING IN PROGRESS"
                headline="User Testing"
                description="At this stage, we assembled 24 participants to gauge their feedback on the robot feedback within the constraints of our study design." />
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <ContentBlock
                subHeadline="THE PROCESS"
                headline="Going through our study with moderated user studies"
                body1="We walked each participant through a quick demo that included sample questions and a demo of the robot reactions to prevent people from being startled."
                body2="Participants then filled out a demographic survey which asked their overall affinity to the robot. They then walked through a set of cognitive test questions. Once they finish, the computer screen will show a result and the robot will react simultaneously. A feedback survey follows with questions about their experience with the robot post-study." />
            </Col>
          </Row>
          <SubHeadline text="STEP BY STEP" />
          <div style={{ margin: '100px 0' }}>
            <FullImage imageUrl={stepByStep} altText="Step By Step" /> 
          </div>
          <SubHeadline text="COMPUTER/ ROBOT FEEDBACK" />
          <FullImage imageUrl={robotFeedback} altText="Robot Feedback" />
        </Container>
        <HangingBlock
          backgroundColor="#c4e7e9"
          headline="HIGHLIGHTS"
          body1="We had a total of 44 participants in our final study, a recruitment process that lasted two weeks and was ahead of a Thanksgiving break."
          body2="We bootstrapped a recruitment process of flyers and word-of-mouth throughout our program pool and the general CMU population to get past 30 participants to attempt for statistical significance." />
        <Container>
          <Row>
            <Col md={6}>
              <HeadlineBlock
                subHeadline="SYNTHESIS"
                headline="Analysis"
                description="Post-study, we analyzed our data with a one-way ANOVA test to see if any of our hypotheses were correct." />
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <ContentBlock
                subHeadline="RESULTS IN THE DATA"
                headline="Robot feedback does affect affiniity and trust (but with a caveat)"
                body1="We conducted one-way ANOVA tests for each of the dependent variables - affinity (statistic: 0.80, p-value: 0.51) and trust (statistic: 1.51, p-value: 0.24)."
                body2="While we were able to observe that robot feedback did affect mean trust and affinity among participants, neither test achieved confidence threshold of 0.05."
                body3="All four hypothese are rejected; further testing with a larger pool of participants are required." />
            </Col>
          </Row>
          <SubHeadline text="KEY FINDINGS" />
          <CarouselComponent carouselType="image" content={this.carousel1Content} />
          <Row>
            <Col md={6}>
              <ContentBlock
                headline="Students require a authoritative, emotional intelligent robot"
                body1="While we were unable to accept any of our hypotheses from our data, we synthesized some key traits for educational robots through our qualitiative research."
                body2="From the results of 44 participants in both the pilot and final user studies, they responded to how they felt about the robot prior and after the study. From their feedback, we recognized that robots did have a role to play in learning  when they exhibit the following characteristics." />
            </Col>
          </Row>
          <SubHeadline text="KEY FINDINGS" />
          <Row>
            <Col md={8}>
              <SingleAccordion 
                headline="Robots should be introduced as an authority." 
                content="92% of participants trusted the computer screen more in terms of accuracy for test results."
                backgroundColor="#c9dadb" />
            </Col>
          </Row>
          <Row>
            <Col md={8}>
              <SingleAccordion
                headline="Robots should possess anthromorphic traits as this allows for more positive affinity." 
                content="53% of participants used “cute” to describe Cozmo in a positive context, with high affinity scores."
                backgroundColor="#c9dadb" />
            </Col>
          </Row>
          <Row>
            <Col md={8} style={{ marginBottom: '100px' }}>
              <SingleAccordion 
                headline="Robots should show distinct, clear emotion reactions to help users understand." 
                content="45% of participants were still unsure of the type of reaction Cozmo was eliciting, especially due to conflation with the computer screen."
                backgroundColor="#c9dadb" />
            </Col>
          </Row>
        </Container>
        <FinalDesign
          backgroundColor="#c9dadb"
          fd1Subheadline="FUTURE WORK"
          fd1Headline="Next Steps"
          fd1Body1="While we touched upon some important things that greatly define what human-robot interaction can be in education, we can take further steps to clarify the exact significance of affinity and trust for human learners towards robots with a greater pools of participants."
          fd1Body2="If our hypotheses prove to be correct, it would be a prime opportunity for us to see how well robot-student interaction could go in real-time."
          fd1Url="https://drive.google.com/file/d/1j9GPcsWH1sWjJuSKGlzpzWna4hPdODgn/view?usp=sharing"
          fd1UrlDescription="Read the full paper here >"
          fd2Subheadline="POST-MORTEM"
          fd2Headline="Reflections on This Project"
          fd2Title1="Coming up with a plan begets great work."
          fd2Body1="We were able to accomplish an oustanding stack of readings, tallying recruitment, programming robots, and performing analysis due to prior buffering and timecasting of each step and our commitment to work within the timeline."
          fd2Title2="Constraints are there to challenge, not defeat."
          fd2Body2="A large hurdle in this project was the study design where we had to consider the multiple variables we needed to minimize and measure in order to proceed with our study.  We worked through this through continuous iteration and accepting team decisions over our individual whims." />
        <ProjectsBlock
          backgroundColor1="#dfe3fe"
          imageUrl1={thumbnailTradewell}
          projectUrl1="/tradewell"
          headline1="TradeWell Playbook"
          backgroundColor2="#deeaff"
          imageUrl2={thumbnailHermes}
          projectUrl2="/hermes"
          headline2="Hermes"
          project="hermes" />
      </div>
    )
  }
}

export default RobotProject;