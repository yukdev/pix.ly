import React from 'react';
import { NavLink } from 'react-router-dom';

import Container from 'react-bootstrap/esm/Container';
import Nav from 'react-bootstrap/esm/Nav';
import NavBar from 'react-bootstrap/esm/Navbar';

/** Navigation: Renders navigation bar
 *
 * Props: none
 * State: none
 *
 * App -> Navigation
 *
 * */
function Navigation() {
  return (
    <div className="Navigation">
      <NavBar fixed="top" bg="dark" variant="dark" expand="lg">
        <Container>
          <NavLink className="navbar-brand" to="/">
            Pix.ly
          </NavLink>
          <NavBar.Toggle aria-controls="basic-navbar-nav" />
          <NavBar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLink className="nav-link" to="/photos/gallery">
                Gallery
              </NavLink>
              <NavLink className="nav-link" to="/photos/add">
                Add Photo
              </NavLink>
            </Nav>
          </NavBar.Collapse>
        </Container>
      </NavBar>
    </div>
  );
}

export default Navigation;
