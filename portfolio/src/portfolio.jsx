import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import './portfolio.scss';

import history from './history';
import TopScroll from './components/top-scroll/top-scroll';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Home from './pages/home/home';
import About from './pages/about/about';
import HermesProject from './pages/hermes-project/hermes-project';
import RobotProject from './pages/robot-project/robot-project';
import TradewellProject from './pages/tradewell-project/tradewell-project';

class Portfolio extends Component {
  render() {
    return (
      <div className="portfolio">
        <Router history={ history } >
          <TopScroll>
            <Header historyInfo={ history } />
            <div className="portfolio-container">
              <Switch>
                <Route path="/" exact component={ Home } />
                <Route path="/about" exact component= { About } />
                <Route path="/hermes" exact component= { HermesProject } />
                <Route path="/robot" exact component= { RobotProject } />
                <Route path="/tradewell" exact component= { TradewellProject } />
                <Route component={ Home } />
              </Switch>
            </div>
            <Footer />
          </TopScroll>
        </Router>
      </div>
    )
  }
}

export default Portfolio;