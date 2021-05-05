// Import dependencies
import React, { useContext } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import dayjs from 'dayjs';
import './index.scss';

// Create and export reusable card component
export default function Daysheet(props) {
  // Create amenities array from props for rendering
  const amenities = [
    { name: 'Lounge', icon: 'fas fa-couch', value: props.greenrooms },
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
        <p className="h5 mb-1 small-heading">
          <i className="far fa-calendar mr-2"></i>
          Today is
        </p>
        <p className="h2">{props.date}</p>
      </div>

      {/* Location */}
      <div className="card-item">
        <p className="h5 mb-1 small-heading">
          <i className="fas fa-map-marker-alt mr-2"></i>
          You are in
        </p>
        <p className="h2">{`${props.city}, ${props.state}.`}</p>
      </div>

      {/* Tonight's show */}
      <div className="card-item">
        <p className="h5 mb-1 small-heading">
          <i className="fas fa-headphones-alt mr-2"></i>
          Tonight's show
        </p>
        <p className="h2">{props.venue}</p>
        <p className="h5 mb-1">{props.street}</p>
        <p className="h5 mb-1">{`${props.city}, ${props.state}. ${props.zip}`}</p>
      </div>

      {/* Tickets */}
      <div className="card-item">
        <p className="h5 mb-1 small-heading">
          <i className="fas fa-ticket-alt mr-2"></i>
          Presale / Capacity
        </p>
        <p className="h2">
          {props.presale} / {props.capacity}
        </p>
      </div>

      {/* Amenities badges */}
      <div className="card-item">
        <p className="h5 mb-3 small-heading">Amenities</p>
        <div className="row">
          <div className="col-12">
            <ListGroup key="amenities" variant="flush">
              {/* Map over amenities and render only those that evaluate to true */}
              {amenities.map((amenity, index) => {
                if (amenity.value) {
                  return (
                    <ListGroup.Item
                      key={`${index}-${amenity.name}`}
                      className="daysheet-item"
                    >
                      <div className="row">
                        <div className="col-3 col-md-2">
                          <p className="list-item text-center mb-1">
                            <i
                              className={`amenity-icon mr-2 ${amenity.icon}`}
                            ></i>
                          </p>
                        </div>
                        <div className="col-9 col-md-10 daysheet-item">
                          <p className="list-item mb-1">{amenity.name}</p>
                        </div>
                      </div>
                    </ListGroup.Item>
                  );
                }
              })}
            </ListGroup>
          </div>
        </div>
      </div>

      {/* Next Up */}
      <div className="card-item">
        <p className="h5 mb-1 small-heading">
          <i className="fas fa-road mr-2"></i>
          Next up
        </p>
        <p className="h2 mb-1">{props.nextVenue}</p>
        <p className="h5 mb-1">{props.nextDate}</p>
        <p className="h5 mb-1">{`${props.nextCity}, ${props.nextState}.`}</p>
        <p className="h4 mb-1">{props.distance}</p>
      </div>
    </div>
  );
}
