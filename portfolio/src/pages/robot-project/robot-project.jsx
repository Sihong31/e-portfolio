import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './robot-project.scss';
import ListBlock from '../../components/list-block/list-block';


class RobotProject extends Component {
  listBlockContent1 = [
    { 
      id: 1,
      boldedCopyStart: "There is no significant difference",
      body: "There is no significant difference in the affinity and trust of the human subject across the study designs."
    },
    {
      id: 2,
      boldedCopyMiddle: "is higher",
      body: "The mean affinity towards the robot is higher for participants subject to positive feedback treatment.",
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
    }
  ]

  render() {
    return (
      <div className="robot-project">
        <Container>
          <Row>
            <Col>
              <ListBlock headline="Hypotheses" items={this.listBlockContent1} />
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default RobotProject;