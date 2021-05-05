// Import packages
import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useAuth0 } from '@auth0/auth0-react';
import LandingPage from '../LandingPage';
import Dashboard from '../Dashboard';

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

export default function MainContent() {
  const { isLoading, isAuthenticated } = useAuth0();

  if (!isAuthenticated && !isLoading) {
    return (
      <main style={bgImage.main} className="">
        <div style={bgImage.overlay}>
          <AnimatePresence exitBeforeEnter>
            <LandingPage />
          </AnimatePresence>
        </div>
      </main>
    );
  }

  if (isLoading) {
    return (
      <main style={{ overflow: 'hidden' }}>
        <AnimatePresence exitBeforeEnter>
          <h3 className="text-center">Loading dashboard...</h3>
        </AnimatePresence>
      </main>
    );
  }

  if (isAuthenticated) {
    return (
      <main style={{ overflow: 'hidden' }} className="">
        <AnimatePresence exitBeforeEnter>
          <Dashboard />
        </AnimatePresence>
      </main>
    );
  }
}
