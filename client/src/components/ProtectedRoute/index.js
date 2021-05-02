// Import dependencies
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

// Create and export Protected Route component
export default function ProtectedRoute({ component: Component, ...props }) {
  const { isAuthenticated } = useAuth0();

  return (
    <Route
      {...props}
      render={(props) => {
        if (isAuthenticated) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect to={{ pathname: '/', state: { from: props.location } }} />
          );
        }
      }}
    />
  );
}
