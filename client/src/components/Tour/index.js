// Import dependencies
import React from 'react';
import { motion } from 'framer-motion';
import { pageVariants, pageTransitions } from '../../utils/transitions';
import CardBody from '../CardBody';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import './index.scss';

// Create and export dashboard page component
export default function Tour(props) {
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

                {props.gigs.length ? (
                  <ListGroup key="tour" variant="">
                    {/* Map over gigs array and create tour routing table */}
                    {props.gigs.map((gig, index) => {
                      const timeArr = gig.schedule[3].timeString.split(' ');
                      const showtime = timeArr[0];

                      return (
                        <ListGroup.Item
                          key={`${index}-${gig._id}`}
                          className="tour-date"
                          onClick={props.handleSelect}
                        >
                          <div id={gig._id} className="row">
                            <div className="col-12 col-md-8 mx-auto">
                              <p className="small-heading pt-2 mb-1">
                                <i className="fas fa-calendar mr-2"></i>
                                {props.handleDate(gig.date)}
                              </p>
                              <p className="list-item mb-1 d-lg-inline-block">
                                {`${gig.venue.city}, ${gig.venue.state}. `}
                                <span className="d-block d-lg-inline-block">{`@ ${gig.venue.name}`}</span>
                              </p>
                            </div>
                            <div className="col-12 col-md-8 mx-auto">
                              <p className="list-label mb-1">
                                {`Doors @ ${gig.schedule[2].timeString}`}
                                <span className="d-none d-md-inline-block mx-2">{`/`}</span>
                                <span className="d-block d-md-inline-block">{`Show @ ${showtime} PM`}</span>
                              </p>
                            </div>
                            <div className="col-12 col-md-8 mx-auto">
                              <p className="list-label mb-1">
                                {`w/ Cartel, This Providence, Anarbor`}
                              </p>
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
