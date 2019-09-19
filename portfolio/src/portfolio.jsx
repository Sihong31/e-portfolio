import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import './portfolio.scss';

import history from './history';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Home from './components/home/home';
import About from './components/about/about';

class Portfolio extends Component {
  render() {
    return (
      <div className="portfolio">
        <Router history={history} >
          <Header historyInfo={history} /> 
          <Container className="portfolio-container">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" exact component={About} />
            </Switch>
          </Container>
          <Footer />
        </Router>
      </div>
    )
  }
}

export default Portfolio;