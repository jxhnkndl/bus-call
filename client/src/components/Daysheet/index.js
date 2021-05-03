// Import dependencies
import React, { useContext } from 'react';
import dayjs from 'dayjs';
import Badge from 'react-bootstrap/Badge';
import './index.scss';

// Create and export reusable card component
export default function Daysheet(props) {
  return (
    <div className="info-container">
      <div className="card-item">
        <p className="h5 mb-1 small-heading">Today is</p>
        <p className="h2">{props.date}</p>
      </div>

      <div className="card-item">
        <p className="h5 mb-1 small-heading">You are in</p>
        <p className="h2">{`${props.city}, ${props.state}.`}</p>
      </div>

      <div className="card-item">
        <p className="h5 mb-1 small-heading">Tonight</p>
        <p className="h2">{props.venue}</p>
        <p className="h5 mb-1">{props.street}</p>
        <p className="h5 mb-1">{`${props.city}, ${props.state}. ${props.zip}`}</p>
      </div>

      <div className="card-item">
        <p className="h5 mb-3 small-heading">Amenities</p>
        <div className="row">
          <div className="col-12">

            {/* Green Rooms */}
            <Badge className="col-12 col-lg-6 px-4 py-2">
              <div className="row amenity-badge py-4 rounded">
                <div className="col-3">
                  <i class="fas fa-couch mx-3"></i>
                </div>
                <div className="col-6">
                  <p className="mb-0">Green Room</p>
                </div>
              </div>
            </Badge>

            {/* Catering */}
            <Badge className="col-12 col-lg-6 px-4 py-2">
              <div className="row amenity-badge py-4 rounded">
                <div className="col-3">
                  <i class="fas fa-pizza-slice mx-3"></i>
                </div>
                <div className="col-6">
                  <p className="mb-0">Catering</p>
                </div>
              </div>
            </Badge>

            {/* Wifi */}
            <Badge className="col-12 col-lg-6 px-4 py-2">
              <div className="row amenity-badge py-4 rounded">
                <div className="col-3">
                  <i class="fas fa-wifi mx-3"></i>
                </div>
                <div className="col-6">
                  <p className="mb-0">Wifi</p>
                </div>
              </div>
            </Badge>

            {/* Parking */}
            <Badge className="col-12 col-lg-6 px-4 py-2">
              <div className="row amenity-badge py-4 rounded">
                <div className="col-3">
                  <i class="fas fa-parking mx-3"></i>
                </div>
                <div className="col-6">
                  <p className="mb-0">Parking</p>
                </div>
              </div>
            </Badge>

            {/*  */}
            <Badge className="col-12 col-lg-6 px-4 py-2">
              <div className="row amenity-badge py-4 rounded">
                <div className="col-3">
                  <i class="fas fa-shower mx-3"></i>
                </div>
                <div className="col-6">
                  <p className="mb-0">Shower</p>
                </div>
              </div>
            </Badge>

            {/* Rider */}
            <Badge className="col-12 col-lg-6 px-4 py-2">
              <div className="row amenity-badge py-4 rounded ">
                <div className="col-3">
                  <i class="fas fa-cocktail mx-3"></i>
                </div>
                <div className="col-6">
                  <p className="mb-0">Full Rider</p>
                </div>
              </div>
            </Badge>


          </div>
        </div>
      </div>

      {/* <div className="card-item row text-center text-lg-left">
        <div className="col-6 col-lg-4 my-2 my-lg-0 order-1">
          <p className="h6 mb-1 small-heading">Capacity</p>
          <p className="h2">{props.capacity}</p>
        </div>

        <div className="col-6 col-lg-4 my-2 my-lg-0 order-2 order-lg-4">
          <p className="h6 mb-1 small-heading">Presale</p>
          <p className="h2">{props.presale}</p>
        </div>

        <div className="col-6 col-lg-4 my-2 my-lg-0 order-3 order-lg-5">
          <p className="h6 mb-1 small-heading">Rooms</p>
          <p className="h2">{props.greenrooms ? 'Yes' : 'No'}</p>
        </div>

        <div className="col-6 col-lg-4 my-2 my-lg-0 order-4 order-lg-2">
          <p className="h6 mb-1 small-heading">Catering</p>
          <p className="h2">{props.catering ? 'Yes' : 'No'}</p>
        </div>

        <div className="col-6 col-lg-4 my-2 my-lg-0 order-5 order-lg-3">
          <p className="h6 mb-1 small-heading">Internet</p>
          <p className="h2">{props.internet ? 'Yes' : 'No'}</p>
        </div>

        <div className="col-6 col-lg-4 my-2 my-lg-0 order-6 order-lg-6 ">
          <p className="h6 mb-1 small-heading">Showers</p>
          <p className="h2">{props.presale ? 'Yes' : 'No'}</p>
        </div>
      </div> */}

      {/* <div className="card-item">
        <p className="h6 mb-1 small-heading">Tomorrow</p>
        <p className="h3 mb-1">{props.nextVenue}</p>
        <p className="h5 mb-1">{`${props.nextCity}, ${props.nextState}.`}</p>
        <p className="h5">{`Distance: 315 miles`}</p>
      </div> */}
    </div>
  );
}
