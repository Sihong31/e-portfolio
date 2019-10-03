import React, { Component } from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';

import iconBalloon from '../../assets/images/icons/icon-balloon.png';

import './footer.scss';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <Container className="footer-container">
          <Row>
            <Col xs={12} md={6}>
              <p>
                FUN "ME" FACTS
              </p>
              <div className="footer-left-content">
                <h2>I am ambidextrous.</h2>
                <h2>I keep trying to speak more than two languages.</h2>
                <h2>I don't like chocolate.</h2>
              </div>
              <p>MORE <Link to="/about"><strong>ABOUT ME</strong></Link></p>
            </Col>
            <Col xs={12} md={6}>
              <p className="contact-me">
                CONTACT ME
              </p>
              <div className="footer-right-content">
                <div className="footer-right-social-content">
                  <a href="mailto:emily.f.gong@gmail.com"><i className="fas fa-envelope-square"></i></a>
                  <a href="https://www.linkedin.com/in/emilyfgong/" target="_blank"><i className="fab fa-linkedin"></i></a>
                  <a href="https://medium.com/@emilygwrites" target="_blank"><i className="fab fa-medium"></i></a>
                </div>
                <h2>
                  Drop me a line at <a href="mailto:emily.f.gong@gmail.com"><strong>emily.f.gong@gmail.com</strong></a> to
                  chat or work on something cool together!
                </h2>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="footer-copyright">Designed with <span><img src={iconBalloon} alt="balloon" /></span> by Emily Gong 2019</p>
            </Col>
          </Row>
        </Container>
      </footer>
    )
  }
}

export default Footer;