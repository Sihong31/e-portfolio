import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

import './header.scss';

class Header extends Component {

  render() {
    return (
      <div className="header">
        <Container>
          <Navbar expand="lg">
            <Navbar.Brand>
              <Link to="/">Emily Gong</Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
              <Nav>
                <NavLink to="/" activeClassName="active">Home</NavLink>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavLink to="/" activeClassName="active">Project1</NavLink>
                  <NavLink to="/" activeClassName="active">Project1</NavLink>
                  <NavLink to="/" activeClassName="active">Project1</NavLink>
                </NavDropdown>
                <NavLink to="/about" activeClassName="active">About</NavLink>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </div>
    )
  }
}

export default Header;