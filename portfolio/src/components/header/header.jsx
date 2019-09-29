import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

import './header.scss';

class Header extends Component {
  state = { isOpen: false, firstRun: true }

  handleClick = () => {
    this.setState({ isOpen: !this.state.isOpen, firstRun: false });
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
            <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={this.handleClick}>
              <span className={menuClass}></span>
              <span className={menuClass}></span>
              <span className={menuClass}></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav" className={`justify-content-end ${menuClass}`}>
              <Nav>
                <NavLink to="/about" activeClassName="active">About</NavLink>
                <NavLink to="/" exact activeClassName="active">Work</NavLink>
                <a href="https://drive.google.com/file/d/17JacAQP4abWF6ycw3gKvdamvF8gvWw6I/view" target="_blank">Resume</a>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </header>
    )
  }
}

export default Header;