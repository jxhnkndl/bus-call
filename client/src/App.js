// Import packages
import React, { useState, useEffect } from 'react';
import { Switch, Route, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import API from '../src/utils/API';
import MainNav from './components/MainNav';
import Dashboard from './components/Dashboard';
import GigForm from './components/GigForm';
import Footer from './components/Footer';
import GigsContext from './utils/gigsContext';
import './App.scss';

// Create and export App component
export default function App() {
  // Set state variables
  const [gigs, setGigs] = useState(null);
  const [selected, setSelected] = useState(null);
  const [upNext, setUpNext] = useState(null);
  const location = useLocation();

  // On page load
  useEffect(() => {
    fetchGigs();
  }, []);

  useEffect(() => {
    // console.log(gigs);
    // console.log(selected);
    // console.log(upNext);
  }, [gigs, selected, upNext])

  // Fetch all gigs from database
  const fetchGigs = async () => {
    try {
      const res = await API.getGigs();
      setGigs(res.data);
      setSelected(res.data[0]);
      setUpNext(res.data[1]);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <GigsContext.Provider value={{ gigs, selected, upNext }}>
      <div className="app-container">
        <MainNav />
        <main style={{ overflowX: 'hidden' }} className="container p-3 p-md-5">
          <AnimatePresence exitBeforeEnter>
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/create-gig" component={GigForm} />
            </Switch>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </GigsContext.Provider>
  );
}
