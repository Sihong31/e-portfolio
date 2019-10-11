import React, { Component } from 'react';
import { Container, Row, Col} from 'react-bootstrap';

import './tradewell-project.scss';
import thumbnailHermes from '../../assets/images/thumbnails/thumbnail-hermes.png';
import thumbnailRobot from '../../assets/images/thumbnails/thumbnail-robot.png';
import ProjectsBlock from '../../components/projects-block/projects-block';
import ProjectHero from '../../components/project-hero/project-hero';

class TradewellProject extends Component {
  render() {
    return (
      <div className="tradewell-project">
        <Container>
          <Row>
            <Col style={{ textAlign: 'center' }}>
              <h1 style={{ marginTop: '100px' }}>COMING SOON...</h1>
              <a href="https://wangqianeve.github.io/CapstoneWebsite/index.html" target="_blank" style={{ textDecoration: 'underline' }}>Click here for project details</a>
            </Col>
          </Row>
        </Container>
        <ProjectsBlock
            backgroundColor1="#deeaff"
            imageUrl1={thumbnailHermes}
            projectUrl1="/hermes"
            headline1="Hermes"
            project="hermes"
            backgroundColor2="#c4e7e9"
            imageUrl2={thumbnailRobot}
            projectUrl2="/robot"
            headline2="Robot as Tutor" />
      </div>
    )
  }
}

export default TradewellProject;