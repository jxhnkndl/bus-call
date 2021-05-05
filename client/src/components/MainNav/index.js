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
  const { isAuthenticated, user } = useAuth0();

  console.log(user);

  return (
    <Navbar variant="dark" expand="lg">
      <Navbar.Brand href="/">Bus Call</Navbar.Brand>
      <Nav className="ml-auto">
        {isAuthenticated ? (
          <div class="media">
            <img src={user.picture} class="avatar mr-3 rounded-circle" alt="Profile image" />
            <div class="media-body mr-3">
              <p class="h6 my-0">{`Hi ${user.given_name}!`}</p>
            </div>
            <LogoutBtn />
          </div>
        ) : (
          <LoginBtn />
        )}
      </Nav>
    </Navbar>
  );
}
