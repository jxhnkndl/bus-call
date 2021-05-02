// Import dependencies
import React from 'react';
import Button from 'react-bootstrap/Button';
import { useAuth0 } from '@auth0/auth0-react';

// Create and export LoginButton component
export default function LogoutBtn() {
  const { logout } = useAuth0();

  return (
    <Button className="m-2 px-4 py-2" variant="primary" onClick={() => logout()}>
      Log Out
    </Button>
  );
}