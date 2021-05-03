// Import dependencies
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { pageVariants, pageTransitions } from '../../utils/transitions';
import CardBody from '../CardBody';
import CycleControl from '../CycleControl';
import Daysheet from '../Daysheet';
import StageSchedule from '../StageSchedule';
import API from '../../utils/API';
import './index.scss';
import dayjs from 'dayjs';

// Create and export dashboard page component
export default function Dashboard() {
  const [gigs, setGigs] = useState([]);
  let [index, setIndex] = useState(0);

  // On load
  useEffect(() => {
    fetchGigs();
  }, []);

  // Fetch gigs from DB
  const fetchGigs = async () => {
    try {
      const res = await API.getGigs();
      setGigs(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  // Handle formatting date for display
  const handleDate = (date) => {
    return dayjs(date).format('dddd MMM. D, YYYY');
  };

  // Click handler for cycling to next gig
  const handleNext = () => {
    if (index === gigs.length - 1) {
      setIndex(0);
    } else {
      console.log(gigs);
      setIndex(index + 1);
    }
  };

  // Click handler for cycling to previous gig
  const handlePrev = () => {
    if (index === 0) {
      setIndex(gigs.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransitions}
    >
      <section className="p-2 px-md-4 px-lg-5">
        {gigs.length ? (
          <div>
            <CycleControl
              spacing={'p-4 p-md-4 m-2 m-md-0'}
              prev={handlePrev}
              next={handleNext}
            />
            <div className="row">
              <div className="col-12 col-md-6 mb-4">
                <CardBody spacing={'p-4 p-md-4 m-2 m-md-0'}>
                  <Daysheet
                    date={handleDate(gigs[index].date)}
                    city={gigs[index].venue.city}
                    state={gigs[index].venue.state}
                    venue={gigs[index].venue.name}
                    street={gigs[index].venue.street}
                    zip={gigs[index].venue.zip}
                    capacity={gigs[index].venue.capacity}
                    presale={gigs[index].venue.presale}
                    greenrooms={gigs[index].greenrooms}
                    catering={gigs[index].catering}
                    showers={gigs[index].showers}
                    internet={gigs[index].internet}
                    nextDate={gigs[index + 1] ? gigs[index + 1].date : 'N/A'}
                    nextCity={
                      gigs[index + 1] ? gigs[index + 1].venue.city : 'N/A'
                    }
                    nextState={
                      gigs[index + 1] ? gigs[index + 1].venue.state : 'N/A'
                    }
                    nextVenue={
                      gigs[index + 1] ? gigs[index + 1].venue.name : 'N/A'
                    }
                  />
                </CardBody>
              </div>
              <div className="col-12 col-md-6 mb-4">
                <CardBody spacing={'p-4 p-md-4 m-2 m-md-0'}>
                  <StageSchedule schedule={gigs[index].schedule} />
                </CardBody>
              </div>
            </div>
          </div>
        ) : (
          <p className="h4">NOTHING SCHEDULED</p>
        )}
      </section>
    </motion.div>
  );
}
