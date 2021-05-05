// Import packages
import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useAuth0 } from '@auth0/auth0-react';
import LandingPage from '../LandingPage';
import Dashboard from '../Dashboard';

export default function MainContent() {
  const { isLoading, isAuthenticated } = useAuth0();

  if (isLoading) {
    return (
      <main style={{ overflow: 'hidden' }}>
        <AnimatePresence exitBeforeEnter>
          <h3 className="text-center">Loading dashboard...</h3>
        </AnimatePresence>
      </main>
    );
  }

  return (
    <main style={{ overflow: 'hidden' }} className="">
      <AnimatePresence exitBeforeEnter>
        {isAuthenticated ? <Dashboard /> : <LandingPage />}
      </AnimatePresence>
    </main>
  );
}
