// Import packages
import React from 'react';
import { Switch, Route, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import API from '../src/utils/API';
import MainNav from './components/MainNav';
import Dashboard from './components/Dashboard';
import GigForm from './components/GigForm';
import Footer from './components/Footer';
import './App.scss';

// Create and export App component
export default function App() {
  const fetchGigs = async () => {
    try {
      const gigs = await API.getGigs();
      console.log(gigs);
    } catch(err) {
      console.log(err);
    }
  }

  return (
    <div className="app-container">
      <MainNav />
      <main style={{ overflowX: 'hidden' }} className="container p-3 p-md-5">
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/create-gig" component={GigForm} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}