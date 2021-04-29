// Import dependencies
import React from 'react';
import './index.scss';

// Use environmental variables
require('dotenv').config();

// Create and export reusable card component
export default function Daysheet(props) {
  return (
    <div className="info-container">
      <div className="card-item">
        <p className="h5 mb-1">Today is:</p>
        <p className="h2">Wed. April 28, 2021</p>
      </div>
      <div className="card-item">
        <p className="h5 mb-1">You are in:</p>
        <p className="h2">Baltimore, Maryland</p>
      </div>
      <div className="card-item">
        <p className="h5 mb-1">Tonight's show:</p>
        <p className="h2">Bourbon Street Quarter</p>
        <div className="row">
          <div className="col-12 col-md-6">
            <p className="h5 mb-1">316 Guilford Avenue</p>
            <p className="h5 mb-1">Baltimore, MD 21202</p>
            <p className="h5 mb-1">(410) 528-8377</p>
          </div>
          <div className="col-12 col-md-6">
            <p className="h5 mb-1">
              <span className="inline-heading">Capacity: </span>
              450
            </p>
            <p className="h5 mb-1">
              <span className="inline-heading">Internet: </span>
              Yes
            </p>
            <p className="h5 mb-1">
              <span className="inline-heading">Catering: </span>
              Buyouts
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
