// Import dependencies
import React, { useContext } from 'react';
import GigsContext from '../../utils/gigsContext';
import dayjs from 'dayjs';
import './index.scss';

// Use environmental variables
require('dotenv').config();

// Create and export reusable card component
export default function Daysheet(props) {
  const { gigs, selected, upNext } = useContext(GigsContext);

  return (
    <div className="info-container">
      <div className="card-item">
        <p className="h5 mb-1">Today is:</p>
        <p className="h2">{dayjs(selected.date).format('dddd MMM. D, YYYY')}</p>
      </div>

      <div className="card-item">
        <p className="h5 mb-1">You are in:</p>
        <p className="h2">{`${selected.venue.city}, ${selected.venue.state}.`}</p>
      </div>

      <div className="card-item">
        <p className="h5 mb-1">Tonight's show:</p>
        <p className="h2">{selected.venue.name}</p>
        <div className="row">
          <div className="col-12 col-lg-6 my-2 my-lg-0">
            <p className="h5 mb-1">{selected.venue.street}</p>
            <p className="h5 mb-1">{`${selected.venue.city}, ${selected.venue.state}.`}</p>
          </div>

          <div className="col-12 col-lg-6 my-2 my-lg-0">
            <p className="h5 mb-1">
              <span className="inline-heading">Capacity: </span>
              {selected.venue.capacity}
            </p>
            <p className="h5 mb-1">
              <span className="inline-heading">Presale: </span>
              {selected.presale}
            </p>
          </div>
        </div>
      </div>

      <div className="card-item">
        <div className="row">
          <div className="col-12 col-lg-6 my-2 my-lg-0">
            <p className="h5 mb-1">
              <span className="inline-heading">Catering: </span>
              {selected.catering}
            </p>
            <p className="h5 mb-1">
              <span className="inline-heading">Internet: </span>
              {selected.internet ? 'Yes' : 'No'}
            </p>
          </div>
          <div className="col-12 col-lg-6 my-2 my-lg-0">
            <p className="h5 mb-1">
              <span className="inline-heading">Green Rooms: </span>
              {selected.greenrooms}
            </p>
            <p className="h5 mb-1">
              <span className="inline-heading">Showers: </span>
              {selected.showers ? 'Yes' : 'No'}
            </p>
          </div>
        </div>
      </div>

      {upNext && (
        <div className="card-item">
          <p className="h5 mb-1">Tomorrow:</p>
          <p className="h4 mb-1">
            {dayjs(upNext.date).format('dddd MMM. D, YYYY')}
          </p>
          <p className="h5 mb-1">{`${upNext.venue.city}, ${upNext.venue.state}.`}</p>
          <p className="h5 mb-1">{`@ ${upNext.venue.name}`}</p>
        </div>
      )}
    </div>
  );
}
