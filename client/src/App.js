// Import packages
import React, { useState, useEffect } from 'react';
import { Switch, Route, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ToastContainer } from 'react-toastify';
import { useAuth0 } from '@auth0/auth0-react';
import API from '../src/utils/API';
import ProtectedRoute from './components/ProtectedRoute';
import MainNav from './components/MainNav';
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import 'react-toastify/dist/ReactToastify.css';
import './App.scss';

// Create and export App component
export default function App() {

  // Log authentication status during development
  const { isAuthenticated } = useAuth0();
  console.log(isAuthenticated);

  return (
    <div className="app-container">
      <MainNav />
      <main style={{ overflow: 'hidden' }} className="">
        <AnimatePresence exitBeforeEnter>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/dashboard" component={Dashboard} />
            {/* <ProtectedRoute exact path="/dashboard" component={Dashboard} /> */}
          </Switch>
        </AnimatePresence>
      </main>
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressionBar={false}
        newestOnTop
        closeOnClick
      />
    </div>
  );
}
