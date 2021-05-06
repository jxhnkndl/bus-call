// Import dependencies
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import LoginBtn from '../LoginBtn';
import LogoutBtn from '../LogoutBtn';
import './index.scss';
import Dropdown from 'react-bootstrap/esm/Dropdown';

// Create and export MainNav component
export default function MainNav() {
  const { isAuthenticated, user, logout } = useAuth0();

  console.log(user);

  return (
    <Navbar variant="dark" expand="lg">
      <Navbar.Brand href="/">Bus Call</Navbar.Brand>
      <Nav className="ml-auto">
        {isAuthenticated ? (
          <DropdownButton variant="dark" menuAlign="right" title={<i class="fas fa-cog"></i>}>
            <Dropdown.Item disabled="true">
              <div>
                <i className="fas fa-user-circle mr-2"></i>
                {`Hi ${user.given_name}`}
              </div>
            </Dropdown.Item>
            <Dropdown.Item as="button" onClick={() => logout()}>
              <i className="fas fa-sign-out-alt mr-2"></i>
              Logout
            </Dropdown.Item>
          </DropdownButton>
        ) : (
          <LoginBtn />
        )}
      </Nav>
    </Navbar>
  );
}
