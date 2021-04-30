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
  }

  // Click handler for cycling to next gig
  const handleNext = () => {
    if (index === gigs.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  // Click handler for cycling to previous gig
  const handlePrev = () => {
    if (index === 0) {
      setIndex(gigs.length - 1)
    } else {
      setIndex(index - 1);
    }
  }

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransitions}
    >
      <section>
        <CycleControl prev={handlePrev} next={handleNext} />
        {gigs.length ? (
          <div className="row">
            <div className="col-12 col-md-6 mb-4">
              <CardBody>
                <Daysheet 
                  date={handleDate(gigs[index].date)}
                  city={gigs[index].venue.city}
                  state={gigs[index].venue.state}
                  venue={gigs[index].venue.name}
                />
              </CardBody>
            </div>
            <div className="col-12 col-md-6 mb-4">
              <CardBody>
                <StageSchedule 
                  schedule={gigs[index].schedule}
                />
              </CardBody>
            </div>
          </div>
        ) : (
          <p className="h4">NOTHING SCHEDULED</p>
        )}
      </section>
    </motion.div>
  );
}
