// Import dependencies
import React from 'react';
import dayjs from 'dayjs';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import './index.scss';

// Create and export Daysheet component
export default function Daysheet(props) {
  const { gig, nextGig } = props;

  // Create amenities array from props for rendering
  const amenities = [
    { name: 'Lounge', icon: 'fas fa-couch', value: gig.lounge },
    { name: 'Catering', icon: 'fas fa-pizza-slice', value: gig.catering },
    { name: 'Internet', icon: 'fas fa-wifi', value: gig.internet },
    { name: 'Parking', icon: 'fas fa-parking', value: gig.parking },
    { name: 'Showers', icon: 'fas fa-shower', value: gig.showers },
    { name: 'Full Rider', icon: 'fas fa-cocktail', value: gig.rider },
  ];

  // Determine whether to render amenities or not
  const hasNoAmenities = amenities.every((amenity) => !amenity.value);

  // Create query string for making request to Google Maps API
  const mapQuery = `${gig.street} ${gig.city}, ${gig.state} ${gig.zip}`;

  return (
    <div className="info-container">
      {/* Date */}
      <div className="info-item">
        <p className="h5 mb-1 small-heading">
          {/* <i className="far fa-calendar mr-2"></i> */}
          Today
        </p>
        <p className="info-text-main">{props.handleDate(gig.date)}</p>
      </div>

      {/* Location */}
      <div className="info-item">
        <p className="h5 mb-1 small-heading">
          {/* <i className="fas fa-map-marker-alt mr-2"></i> */}
          Location
        </p>
        <p className="info-text-main">{`${gig.venue.city}, ${gig.venue.state}.`}</p>
      </div>

      {/* Tonight's show and location */}
      <div className="info-item">
        <p className="h5 mb-1 small-heading">
          {/* <i className="fas fa-headphones-alt mr-2"></i> */}
          Venue
        </p>
        <p className="info-text-main mb-1">{gig.venue.name}</p>
        <p className="info-text-sub mb-1">{gig.venue.street}</p>
        <p className="info-text-sub mb-1">{`${gig.venue.city}, ${gig.venue.state}. ${gig.venue.zip}`}</p>
        <iframe
          className="map rounded mt-3"
          loading="lazy"
          src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_GOOGLE_API_KEY}
        &q=${mapQuery}`}
        ></iframe>
      </div>

      {/* Promoter + Contact Email */}
      <div className="info-item">
        <p className="h5 mb-1 small-heading">
          {/* <i className="fas fa-headphones-alt mr-2"></i> */}
          Promoter
        </p>
        <p className="info-text-main mb-1">{gig.venue.promoter}</p>
        <a className="info-text-sub info-link mb-1" href={`mailto:${gig.venue.email}`}>{gig.venue.email}</a>
      </div>

      {/* Amenity badges */}
      <div className="info-item">
        <p className="h5 mb-3 small-heading">Amenities</p>
        <div className="row">
          <div className="col-12">
            <ListGroup key="amenities" variant="flush">
              {/* If venue provides no amenities, notify user */}
              {/* Otherwise, map over amenities and render only those that evaluate to true */}
              {hasNoAmenities ? (
                <p className="info-text-main mb-1">No Amenities Guaranteed</p>
              ) : (
                <div>
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
                </div>
              )}
            </ListGroup>
          </div>
        </div>
      </div>
    </div>
  );
}
