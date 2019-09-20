import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

import './header.scss';

class Header extends Component {

  render() {
    return (
      <div className="header">
        <Container>
          <Navbar expand="md">
            <Navbar.Brand>
              <Link to="/">Emily Gong</Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
              <Nav>
                <NavLink to="/" exact activeClassName="active">Home</NavLink>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavLink to="/hermes" activeClassName="active">Hermes</NavLink>
                  <NavLink to="/robot" activeClassName="active">Robot as Tutor</NavLink>
                  <NavLink to="/tradewell" activeClassName="active">Tradewell Playbook</NavLink>
                  <NavLink to="/afterlife" activeClassName="active">Afterlife</NavLink>
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