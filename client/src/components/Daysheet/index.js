// Import dependencies
import React, { useContext } from 'react';
import dayjs from 'dayjs';
import Badge from 'react-bootstrap/Badge';
import './index.scss';

// Create and export reusable card component
export default function Daysheet(props) {
  // Create amenities array from props for rendering
  const amenities = [
    { name: 'Green Rooms', icon: 'fas fa-couch', value: props.greenrooms },
    { name: 'Catering', icon: 'fas fa-pizza-slice', value: props.catering },
    { name: 'Internet', icon: 'fas fa-wifi', value: props.internet },
    { name: 'Parking', icon: 'fas fa-parking', value: props.parking },
    { name: 'Showers', icon: 'fas fa-shower', value: props.showers },
    { name: 'Full Rider', icon: 'fas fa-cocktail', value: props.rider },
  ];

  return (
    <div className="info-container">

      {/* Date */}
      <div className="card-item">
        <p className="h5 mb-1 small-heading">Today is</p>
        <p className="h2">{props.date}</p>
      </div>

      {/* Location */}
      <div className="card-item">
        <p className="h5 mb-1 small-heading">You are in</p>
        <p className="h2">{`${props.city}, ${props.state}.`}</p>
      </div>

      {/* Tonight's show */}
      <div className="card-item">
        <p className="h5 mb-1 small-heading">Tonight's show</p>
        <p className="h2">{props.venue}</p>
        <p className="h5 mb-1">{props.street}</p>
        <p className="h5 mb-1">{`${props.city}, ${props.state}. ${props.zip}`}</p>
      </div>

      {/* Tickets */}
      <div className="card-item">
        <p className="h5 mb-1 small-heading">Presale / Capacity</p>
        <p className="h2">{props.presale} / {props.capacity}</p>
      </div>

      {/* Amenities badges */}
      <div className="card-item">
        <p className="h5 mb-3 small-heading">Amenities</p>
        <div className="row">
          <div className="col-12">
            {/* Map over amenities and render only those that evaluate to true */}
            {amenities.map((amenity, index) => {
              if (amenity.value) {
                return (
                  <Badge
                    key={`${index}-${amenity.name}`}
                    className="col-12 col-lg-6 px-4 py-2"
                  >
                    <div className="row amenity-badge py-4 rounded">
                      <div className="col-3">
                        <i className={`amenity-icon mx-3 ${amenity.icon}`}></i>
                      </div>
                      <div className="col-6">
                        <p className="mb-0">{amenity.name}</p>
                      </div>
                    </div>
                  </Badge>
                );
              }
            })}
          </div>
        </div>
      </div>

      {/* Next Up */}
      <div className="card-item">
        <p className="h5 mb-1 small-heading">Next up</p>
        <p className="h2 mb-1">{props.nextVenue}</p>
        <p className="h5 mb-1">{props.nextDate}</p>
        <p className="h5 mb-1">{`${props.nextCity}, ${props.nextState}.`}</p>
        <p className="h4 mb-1">{props.distance}</p>
      </div>

    </div>
  );
}
