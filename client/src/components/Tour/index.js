// Import dependencies
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { pageVariants, pageTransitions } from '../../utils/transitions';
import { toast } from 'react-toastify';
import Button from 'react-bootstrap/Button';
import CardBody from '../CardBody';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';

// Create and export Tour component
export default function Tour(props) {

  // Reset window position to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransitions}
    >
      <div className="info-container">
        <div className="row">
          <div className="col-12 mb-4">
            <CardBody spacing={'p-4 p-md-4 m-2 m-md-0'}>
              <div className="container-lg p-0">
                <h3 className="heading">Full Tour Dates</h3>
                <p>Click a date to view show details</p>

                {/* If API has returned a full gigs array to the Dashboard component */}
                {props.gigs.length ? (
                  <ListGroup key="tour">
                    {/* Map over gigs array and create a new block for each gig */}
                    {props.gigs.map((gig, index) => {
                      const timeArr = gig.schedule[3].timeString.split(' ');
                      const showtime = timeArr[0];

                      return (
                        <ListGroup.Item
                          key={`${index}-${gig._id}`}
                          className="tour-date row"
                        >
                          <div className="row">

                            {/* Date */}
                            <div className="col-12 col-md-8 mx-auto">
                              <p className="small-heading pt-2 mb-1">
                                <i className="fas fa-calendar mr-2"></i>
                                {props.handleDate(gig.date)}

                                {/* If gig has closing numbers, display green check */}
                                {gig.closed && (
                                  <i className="fas fa-check text-success ml-2"></i>
                                )}
                              </p>

                              {/* Location */}
                              <p className="list-item mb-1 d-lg-inline-block">
                                {`${gig.venue.city}, ${gig.venue.state}. `}
                                <span className="d-block d-lg-inline-block">{`@ ${gig.venue.name}`}</span>
                              </p>
                            </div>

                            {/* Time */}
                            <div className="col-12 col-md-8 mx-auto">
                              <p className="list-label mb-1">
                                {`Doors @ ${gig.schedule[2].timeString}`}
                                <span className="d-none d-md-inline-block mx-2">{`/`}</span>
                                <span className="d-block d-md-inline-block">{`Show @ ${showtime} PM`}</span>
                              </p>
                            </div>

                            {/* Artists */}
                            <div className="col-12 col-md-8 mx-auto">
                              <p className="list-label mb-1">
                                {`${gig.schedule[6].event} + ${gig.schedule[5].event} + ${gig.schedule[4].event} + ${gig.schedule[3].event}`}
                              </p>
                            </div>

                            {/* View details button */}
                            <div className="col-12 col-md-8 mx-auto">
                              <Button
                                id={gig._id}
                                variant="primary"
                                className="my-2 mr-2"
                                onClick={(event) => {
                                  if (props.gigs.length) {
                                    props.handleSelect(event);
                                  } else {
                                    toast.error(
                                      'Oh no! Something went wrong. Try again!'
                                    );
                                  }
                                }}
                              >
                                <i className="fas fa-info-circle mr-2"></i>
                                View Details
                              </Button>
                            </div>
                          </div>
                        </ListGroup.Item>
                      );
                    })}
                  </ListGroup>
                ) : (
                  <p className="h2">NO TOUR DATES TO DISPLAY</p>
                )}
              </div>
            </CardBody>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
