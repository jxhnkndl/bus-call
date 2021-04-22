// Import packages
import React from 'react';
import API from '../src/utils/API';
import Button from 'react-bootstrap/Button';

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
    <div className="p-5 text-center">
      <h1>I'M ONLINE!</h1>
      <Button variant="info" onClick={fetchGigs}>GET GIGS</Button>{' '}
    </div>
  );
}