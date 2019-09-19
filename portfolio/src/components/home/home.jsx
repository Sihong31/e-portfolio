import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

import './home.scss';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Row>
          <Col>
            <h5 className="home-greeting">Hello</h5>
            <div className="home-caption-container">
              <h2 className="home-caption">I'm Emily, a UX Researcher & Designer.</h2>
              <h2 className="home-caption">I thrive to create meaningful work that</h2>
              <h2 className="home-caption">align well for users, businesses, and</h2>
              <h2 className="home-caption">the world.</h2>
            </div>
            <div className="home-caption-small">
              <p>LEARN MORE <strong>ABOUT ME</strong></p>
              <p>OR <strong>DROP A LINE</strong></p>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Home;