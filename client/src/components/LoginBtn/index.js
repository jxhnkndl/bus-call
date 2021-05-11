// Import dependencies
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Button from 'react-bootstrap/Button';

// Create and export LoginButton component
export default function LoginBtn() {
  const { loginWithRedirect } = useAuth0();

  return (
    <Button
      className="m-2 px-4 py-2"
      variant="primary"
      onClick={() => loginWithRedirect()}
    >
      <i className="fas fa-sign-in-alt mr-2"></i>
      Log In
    </Button>
  );
}
