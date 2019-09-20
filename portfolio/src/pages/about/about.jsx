import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

import './about.scss';
import placeholderImage from '../../assets/images/placeholder.svg';
import Image from '../../components/image/image';

class About extends Component {
  render() {
    return (
      <div className="about">
        <Row>
          <Col md={6} className="about-images">
            <div className="about-image">
              <Image image={placeholderImage} />
            </div>
            <div className="about-image">
              <Image image={placeholderImage} />
            </div>
          </Col>
          <Col md={6} className="about-content">
            <div className="about-headline">
              <h2>Thanks for stopping by.</h2>
              <p>Hi, it's Emily here.</p>
            </div>
            <p>I recently received my masters' degree in Human-Computer Interaction from Carnegie Mellon University. Previously, I spent four years in New York and abroad working in tech, health, education, and entertainment after graduting NYU Stern School of Business.</p>
            <p>Designing tech to accommodate the living dictates what I do in research, business, and design. I have experience creating answers from interpreting data, listening to people, and driving team projects.</p>
            <div className="fun">
              <p className="fun-headline">About fun things I've done recently --</p>
              <ul className="fun-list">
                <li>Read Slaugterhouse Five</li>
                <li>Traveled to Hawaii</li>
                <li>Got addicted to tea and food videos.</li>
              </ul>
            </div>
            <a className="contact-link">GET IN TOUCH</a>
          </Col>
        </Row>
      </div>
    )
  }
}

export default About;