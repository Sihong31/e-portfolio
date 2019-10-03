import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

import './header.scss';

class Header extends Component {
  state = { isOpen: false, firstRun: true }
  burgerToggle = React.createRef();

  handleBurgerClick = () => {
    this.setState({ isOpen: !this.state.isOpen, firstRun: false });
  }

  handleNavClick = () => {
    if (window.innerWidth < 768) {
      this.burgerToggle.current.click();
    }
  }

  render() {
    let menuClass = '';
    if (this.state.isOpen) {
      menuClass = 'activated-menu';
    } else if (!this.state.isOpen && !this.state.firstRun) {
      menuClass = 'deactivated-menu';
    }

    return (
      <header className="header">
        <Container>
          <Navbar expand="md">
            <Navbar.Brand>
              <Link to="/">emily gong</Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={this.handleBurgerClick} ref={this.burgerToggle}>
              <span className={menuClass}></span>
              <span className={menuClass}></span>
              <span className={menuClass}></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav" className={`justify-content-end ${menuClass}`}>
              <Nav>
                <NavLink to="/about" activeClassName="active" onClick={this.handleNavClick}>About</NavLink>
                <NavLink to="/" exact activeClassName="active" onClick={this.handleNavClick}>Work</NavLink>
                <a href="https://drive.google.com/file/d/1Pv4DNoXONUrIYGKvj84Oa1M6ShPPbDCc/view" target="_blank">Resume</a>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </header>
    )
  }
}

export default Header;