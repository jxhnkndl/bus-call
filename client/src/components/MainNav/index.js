// Import dependencies
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LoginBtn from '../LoginBtn';
import LogoutBtn from '../LogoutBtn';
import './index.scss';

// Create and export MainNav component
export default function MainNav() {
  const { isAuthenticated, user, logout } = useAuth0();

  return (
    <Navbar variant="dark" expand="lg">
      <Navbar.Brand href="/">Bus Call</Navbar.Brand>

      {/* Conditionally render navbar components based on user's login status */}
      <Nav className="ml-auto">
        {isAuthenticated ? (
          <div className="media">
            {user.picture && (
              <img
                src={user.picture}
                className="avatar mr-3 rounded-circle d-none d-md-inline-block"
                alt="Profile image"
              />
            )}
            {user.given_name && (
              <div className="media-body mr-3 d-none d-md-inline-block">
                <p className="h6 my-0">{`Hi ${user.given_name}!`}</p>
              </div>
            )}
            <LogoutBtn />
          </div>
        ) : (
          <LoginBtn />
        )}
      </Nav>
    </Navbar>
  );
}
