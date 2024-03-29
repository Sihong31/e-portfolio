import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './about.scss';
import about1 from '../../assets/images/about/about-1.jpg';
import about2 from '../../assets/images/about/about-2.jpg';
import iconBook from '../../assets/images/icons/icon-book.png';
import iconPlane from '../../assets/images/icons/icon-plane.png';
import iconTea from '../../assets/images/icons/icon-tea.png';
import Image from '../../components/image/image';

class About extends Component {
  render() {
    return (
      <Container className="about">
        <Row>
          <Col md={6} className="about-images">
            <div className="about-image">
              <Image image={about1} />
            </div>
            <div className="about-image">
              <Image image={about2} />
            </div>
          </Col>
          <Col md={6} className="about-content">
            <div className="about-headline">
              <h1>Thanks for stopping by.</h1>  
            </div>
            <p>
              Hi, Emily here. Designing tech to accommodate the living dictates what I do in research, business, and design. I have experience creating answers from interpreting data, listening to people, and driving team projects.
            </p>
            <p>
              I recently received my masters’ degree in Human-Computer Interaction from Carnegie Mellon University.  Previously, I spent four years in New York and abroad working in tech, health, education, and entertainment after graduating NYU Stern School of Business.
            </p>
            <div className="fun">
              <p className="fun-headline">About fun things I've done recently --</p>
              <ul className="fun-list">
                <li className="fun-list-item"><span><img src={iconBook} alt="Book" /></span>Read Slaugterhouse Five</li>
                <li className="fun-list-item"><span><img src={iconPlane} alt="Plane" /></span>Traveled to Hawaii</li>
                <li className="fun-list-item"><span><img src={iconTea} alt="Tea" /></span>Got addicted to tea and food videos.</li>
              </ul>
            </div>
            <a href="mailto:emily.f.gong@gmail.com" className="about-contact-link"><strong>GET IN TOUCH</strong></a>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default About;