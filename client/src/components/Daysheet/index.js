// Import dependencies
import React, { useContext } from 'react';
import dayjs from 'dayjs';
import './index.scss';

// Create and export reusable card component
export default function Daysheet(props) {
  return (
    <div className="info-container">
      <div className="card-item">
        <p className="h5 mb-1">Today is:</p>
        <p className="h2"></p>
      </div>

      <div className="card-item">
        <p className="h5 mb-1">You are in:</p>
        <p className="h2"></p>
      </div>

      <div className="card-item">
        <p className="h5 mb-1">Tonight's show:</p>
        <p className="h2"></p>
        <div className="row">
          <div className="col-12 col-lg-6 my-2 my-lg-0">
            <p className="h5 mb-1"></p>
            <p className="h5 mb-1"></p>
          </div>

          <div className="col-12 col-lg-6 my-2 my-lg-0">
            <p className="h5 mb-1">
              <span className="inline-heading">Capacity: </span>
              
            </p>
            <p className="h5 mb-1">
              <span className="inline-heading">Presale: </span>
              
            </p>
          </div>
        </div>
      </div>

      <div className="card-item">
        <div className="row">
          <div className="col-12 col-lg-6 my-2 my-lg-0">
            <p className="h5 mb-1">
              <span className="inline-heading">Catering: </span>
              
            </p>
            <p className="h5 mb-1">
              <span className="inline-heading">Internet: </span>
              
            </p>
          </div>
          <div className="col-12 col-lg-6 my-2 my-lg-0">
            <p className="h5 mb-1">
              <span className="inline-heading">Green Rooms: </span>
              
            </p>
            <p className="h5 mb-1">
              <span className="inline-heading">Showers: </span>
              
            </p>
          </div>
        </div>
      </div>

      <div className="card-item">
        <p className="h5 mb-1">Tomorrow:</p>
        <p className="h4 mb-1"></p>
        <p className="h5 mb-1"></p>
        <p className="h5 mb-1"></p>
      </div>

    </div>
  );
}
