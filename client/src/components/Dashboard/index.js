// Import dependencies
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { pageVariants, pageTransitions } from '../../utils/transitions';
import Button from 'react-bootstrap/Button';
import CardBody from '../CardBody';
import DashboardNav from '../DashboardNav';
import DayView from '../DayView';
import FormView from '../FormView';
import API from '../../utils/API';
import dayjs from 'dayjs';
import './index.scss';

// Create and export dashboard page component
export default function Dashboard() {
  // Set initial state
  const [gigs, setGigs] = useState([]);
  const [index, setIndex] = useState(0);
  const [view, setView] = useState('day');

  // Fetch gigs from API when component mounts and whenever the view state changes
  useEffect(() => {
    fetchGigs();
  }, [view]);

  // Fetch gigs from DB
  const fetchGigs = async () => {
    console.log('fetching gigs...');
    try {
      const res = await API.getGigs();
      setGigs(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  // Handle formatting date for display
  const handleDate = (date) => {
    return dayjs(date).format('ddd. MMMM D, YYYY');
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

  // Click handler for change dashboard's view state
  const handleView = (view) => {
    setView(view);
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
            {/* Dashboard navigation controls */}
            <DashboardNav
              prev={handlePrev}
              next={handleNext}
              handleView={handleView}
            />

            {/* Daysheet and stage schedule view */}
            {view === 'day' && (
              <DayView
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
                nextDate={
                  gigs[index + 1] ? handleDate(gigs[index + 1].date) : 'N/A'
                }
                nextCity={gigs[index + 1] ? gigs[index + 1].venue.city : 'N/A'}
                nextState={
                  gigs[index + 1] ? gigs[index + 1].venue.state : 'N/A'
                }
                nextVenue={gigs[index + 1] ? gigs[index + 1].venue.name : 'N/A'}
                distance={'315 miles'}
                schedule={gigs[index].schedule}
                prev={handlePrev}
                next={handleNext}
              />
            )}

            {/* Form view for adding and editing gigs */}
            {view === 'form' && <FormView fetchGigs={fetchGigs} gigs={gigs} />}
          </div>
        ) : (
          <p className="h2">LOADING</p>
        )}
      </section>
    </motion.div>
  );
}
