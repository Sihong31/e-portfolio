import React, { Component } from 'react';
import { Container, Row, Col} from 'react-bootstrap';

import './footer.scss';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <Container className="footer-container">
          <Row>
            <Col xs={12} md={6}>
              <h5>
                FUN "ME" FACTS
              </h5>
            </Col>
            <Col xs={12} md={6}>
              <h5>
                  CONTACT ME
              </h5>
            </Col>
          </Row>
        </Container>
      </footer>
    )
  }
}

export default Footer;