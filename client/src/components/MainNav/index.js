// Import dependencies
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import LoginBtn from '../LoginBtn';
import LogoutBtn from '../LogoutBtn';
import './index.scss';

// Create and export MainNav component
export default function MainNav() {
  const { isAuthenticated } = useAuth0();

  return (
    <Navbar variant="dark" expand="lg" className="mb-4">
      <Navbar.Brand href="/">Bus Call</Navbar.Brand>
      <Navbar.Toggle aria-controls="nav-drawer" />
      <Navbar.Collapse id="nav-drawer">
        <Nav className="mr-auto">
          <NavLink className="nav-link" exact to="/dashboard">
            Dashboard
          </NavLink>
          <NavLink className="nav-link" exact to="/create-gig">
            Add Gig
          </NavLink>
        </Nav>
        <Nav>{isAuthenticated ? <LogoutBtn /> : <LoginBtn />}</Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
