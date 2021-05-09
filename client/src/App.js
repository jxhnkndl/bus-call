// Import packages
import React, { useState, useEffect } from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ToastContainer } from 'react-toastify';
import { useAuth0 } from '@auth0/auth0-react';
import API from '../src/utils/API';
import ProtectedRoute from './components/ProtectedRoute';
import MainNav from './components/MainNav';
import MainContent from './components/MainContent';
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import './App.scss';

// Overwrite some default styles in React Toastify library
import 'react-toastify/dist/ReactToastify.css';

// Create and export App component
export default function App() {
  // Log authentication status during development
  const { isAuthenticated, isLoading } = useAuth0();
  console.log(isAuthenticated);

  return (
    <div className="app-container">
      <MainNav />
      <MainContent />
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressionBar={false}
        newestOnTop
        draggablePercent={60}
        closeOnClick
      />
    </div>
  );
}
