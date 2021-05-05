// Import dependencies
import React from 'react';
import { pageVariants, pageTransitions } from '../../utils/transitions';
import { useAuth0 } from '@auth0/auth0-react';
import Button from 'react-bootstrap/Button';
import CardBody from '../CardBody';
import './index.scss';

// Create and export LandingPage component
export default function LandingPage() {
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
            className="mt-3 px-4 py-2"
            onClick={() => loginWithRedirect()}
          >
            <i className="fas fa-headphones-alt mr-2"></i>
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
}
