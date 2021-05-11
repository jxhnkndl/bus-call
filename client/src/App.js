// Import packages
import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ToastContainer } from 'react-toastify';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import MainNav from './components/MainNav';
import MainContent from './components/MainContent';
import './App.scss';

// Overwrite some default styles in React Toastify library
import 'react-toastify/dist/ReactToastify.css';

// Create and export App component
export default function App() {
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
