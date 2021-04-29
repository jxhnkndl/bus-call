// Import packages
import React from 'react';
import { Switch, Route, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import API from '../src/utils/API';
import MainNav from './components/MainNav';
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
      <main style={{ overflowX: 'hidden' }} className="container p-5">
        <h1>DASHBOARD</h1>
      </main>
      <Footer />
    </div>
  );
}