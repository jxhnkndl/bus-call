// Import dependencies
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Button from 'react-bootstrap/Button';
import './index.scss';

// Create and export LandingPage component
export default function LandingPage() {
  // Extract login method to add to CTA button
  const { loginWithRedirect } = useAuth0();

  return (
    <header className="container">
      <div className="row">
        <div className="col-12 col-md-10 mx-auto">
          <h1 className="headline">Never miss a beat</h1>
          <h3 className="sub-headline">
            <span className="d-block d-sm-inline-block mr-sm-2">
              You play the gigs.
            </span>
            <span className="d-block d-sm-inline-block">
              We'll handle the details.
            </span>
          </h3>
          <hr />
          <Button
            variant="primary"
            className="mt-3 px-4 py-2 shadow"
            onClick={() => loginWithRedirect()}
          >
            Get Started
            <i className="fas fa-play-circle ml-2"></i>
          </Button>
        </div>
      </div>
    </header>
  );
}
