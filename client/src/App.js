// Import packages
import React, { useState, useEffect } from 'react';
import { Switch, Route, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import API from '../src/utils/API';
import MainNav from './components/MainNav';
import Dashboard from './components/Dashboard';
import GigForm from './components/GigForm';
import Footer from './components/Footer';
import './App.scss';

// Create and export App component
export default function App() {
  return (
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
