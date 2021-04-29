// Import dependencies
import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './index.scss';

// Create and export MainNav component
export default function MainNav() {
  return (
    <Navbar variant="dark" className="mb-4">
      <Navbar.Brand href="/">Bus Call</Navbar.Brand>
      <Nav className="mr-auto">
        <NavLink className="nav-link" exact to="/">Dashboard</NavLink>
        <NavLink className="nav-link" to="/gigform">Add Gig</NavLink>
      </Nav>
    </Navbar>
  );
}