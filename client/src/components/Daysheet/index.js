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
        <p className="h2">{props.date}</p>
      </div>

      <div className="card-item">
        <p className="h5 mb-1">You are in:</p>
        <p className="h2">{`${props.city}, ${props.state}.`}</p>
      </div>

      <div className="card-item">
        <p className="h5 mb-1">Tonight:</p>
        <p className="h2">{props.venue}</p>
      </div>

      <div className="card-item">
        <p className="h5 mb-1">Address:</p>
        <p className="h5 mb-1">{props.street}</p>
        <p className="h5 mb-1">{`${props.city}, ${props.state}. ${props.zip}`}</p>
      </div>

      <div className="card-item row text-center text-lg-left">
        <div className="col-6 col-lg-4 my-2 my-lg-0 order-1">
          <p className="h6 mb-1">Capacity:</p>
          <p className="h2">{props.capacity}</p>
        </div>

        <div className="col-6 col-lg-4 my-2 my-lg-0 order-2 order-lg-4">
          <p className="h6 mb-1">Presale:</p>
          <p className="h2">{props.presale}</p>
        </div>

        <div className="col-6 col-lg-4 my-2 my-lg-0 order-3 order-lg-5">
          <p className="h6 mb-1">Rooms:</p>
          <p className="h2">{props.greenrooms ? 'Yes' : 'No'}</p>
        </div>

        <div className="col-6 col-lg-4 my-2 my-lg-0 order-4 order-lg-2">
          <p className="h6 mb-1">Catering:</p>
          <p className="h2">{props.catering ? 'Yes' : 'No'}</p>
        </div>

        <div className="col-6 col-lg-4 my-2 my-lg-0 order-5 order-lg-3">
          <p className="h6 mb-1">Internet:</p>
          <p className="h2">{props.internet ? 'Yes' : 'No'}</p>
        </div>

        <div className="col-6 col-lg-4 my-2 my-lg-0 order-6 order-lg-6 ">
          <p className="h6 mb-1">Showers:</p>
          <p className="h2">{props.presale ? 'Yes' : 'No'}</p>
        </div>
      </div>

      <div className="card-item">
        <p className="h6 mb-1">Tomorrow:</p>
        <p className="h3 mb-1">{props.nextVenue}</p>
        <p className="h5 mb-1">{`${props.nextCity}, ${props.nextState}.`}</p>
        <p className="h5">{`Distance: 315 miles`}</p>
      </div>

      <div className="card-item">
        <p className="h5 mb-1">{`${props.nextCity}, ${props.nextState}.`}</p>
        <p className="h6">{`Distance: 315 miles`}</p>
      </div>
    </div>
  );
}
