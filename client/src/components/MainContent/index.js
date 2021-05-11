// Import packages
import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useAuth0 } from '@auth0/auth0-react';
import Dashboard from '../Dashboard';
import LandingPage from '../LandingPage';

// Create inline styles required to add hero image with gradient overlay
const bgImage = {
  main: {
    backgroundImage: `url(${process.env.PUBLIC_URL + '/imgs/stage.jpg'})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    overflow: 'hidden',
    position: 'relative'
  },
  overlay: {
    background: 'linear-gradient(0deg, rgba(33,33,33,1) 20%, rgba(118,118,118,0.3883928571428571) 100%)',
    position: 'absolute',
    minHeight: '100%',
    minWidth: '100vw',
    display: 'flex',
    alignItems: 'center'
  }
};

// Create and export MainContent container component
export default function MainContent() {
  const { isLoading, isAuthenticated } = useAuth0();

  // If user isn't logging/logged in, render the landing page
  if (!isAuthenticated && !isLoading) {
    return (
      <main style={bgImage.main}>
        <div style={bgImage.overlay}>
          <AnimatePresence exitBeforeEnter>
            <LandingPage />
          </AnimatePresence>
        </div>
      </main>
    );
  }

  // If user is in the process of logging in, show loading message
  if (isLoading) {
    return (
      <main style={{ overflow: 'hidden' }}>
        <AnimatePresence exitBeforeEnter>
          <h3 className="text-center">Loading dashboard...</h3>
        </AnimatePresence>
      </main>
    );
  }

  // If user is logged in, render the dashboard component
  if (isAuthenticated) {
    return (
      <main style={{ overflow: 'hidden' }}>
        <AnimatePresence exitBeforeEnter>
          <Dashboard />
        </AnimatePresence>
      </main>
    );
  }
}
