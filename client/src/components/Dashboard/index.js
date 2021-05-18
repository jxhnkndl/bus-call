// Import dependencies
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { pageVariants, pageTransitions } from '../../utils/transitions';
import { toast } from 'react-toastify';
import API from '../../utils/API';
import Button from 'react-bootstrap/Button';
import ClosingForm from '../ClosingForm';
import DashboardNav from '../DashboardNav';
import dayjs from 'dayjs';
import Gig from '../Gig';
import GigForm from '../GigForm';
import Tour from '../Tour';
import './index.scss';

// Create and export Dashboard component
export default function Dashboard() {
  // Init state
  const [gigs, setGigs] = useState([]);
  const [index, setIndex] = useState(0);
  const [view, setView] = useState('tour');

  // Fetch gigs from API when component mounts and whenever the view state changes
  useEffect(() => {
    fetchGigs();
  }, []);

  // Fetch gigs from DB
  const fetchGigs = async () => {
    console.log('Fetching gigs...');
    try {
      const res = await API.getGigs();
      setGigs(res.data);
    } catch (err) {
      toast.error('Uh oh! Something went wrong. Try again! 🧐');
      console.log(err);
    }
  };

  // Handle formatting date for display
  const handleDate = (date) => {
    return dayjs(date).add(1, 'day').format('ddd. MMMM D, YYYY');
  };

  // Handle finding and rendering matching show details from click event in tour view
  const handleSelect = (event) => {
    event.preventDefault();

    // Figure out which gig the user wants to see
    const { id } = event.target;
    const index = gigs.findIndex((gig) => gig._id === id);

    // If the specified gig can't be found, notify the user
    // and log the error
    if (index === -1) {
      toast.error(`Uh oh! We can't find that gig. Try again! 🧐`);
      console.log(event.target);
      return;
    } else {
      console.log('Accessing gig...');

      // Update index state to render selected show
      setIndex(index);

      // Update view state to switch back to gig view
      setView('gig');
      window.scrollTo(0, 0);
    }
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
              gig={gigs[index]}
              prev={handlePrev}
              next={handleNext}
              view={view}
              handleView={handleView}
            />

            {/* View gig details, day sheet, and stage schedule */}
            {view === 'gig' && (
              <Gig
                gig={gigs[index]}
                nextGig={gigs[index + 1] ? gigs[index + 1] : false}
                handleDate={handleDate}
                prev={handlePrev}
                next={handleNext}
              />
            )}

            {/* Tour view for displaying full tour routing */}
            {view === 'tour' && (
              <Tour
                gigs={gigs}
                handleDate={handleDate}
                handleSelect={handleSelect}
              />
            )}

            {/* Form view with state configured for adding new gigs */}
            {view === 'add' && (
              <GigForm
                view={view}
                handleView={handleView}
                fetchGigs={fetchGigs}
              />
            )}

            {/* Form view with state configured to edit/delete selected gig */}
            {view === 'edit' && (
              <GigForm
                view={view}
                handleView={handleView}
                setIndex={setIndex}
                selected={gigs[index]}
                fetchGigs={fetchGigs}
              />
            )}

            {/* Closing form view with state configured to add closing numbers to selected gig */}
            {view === 'report' && (
              <ClosingForm 
                view={view}
                handleView={handleView}
                setIndex={setIndex}
                selected={gigs[index]}
                fetchGigs={fetchGigs}
              />
            )}
          </div>
        ) : (
          <p className="h2">LOADING...</p>
        )}
      </section>
    </motion.div>
  );
}
