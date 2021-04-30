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

// Create and export dashboard page component
export default function Dashboard() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetchGigs();
  }, []);

  const fetchGigs = async () => {
    try {
      const res = await API.getGigs();
      setResults(res.data);
    } catch (err) {
      console.log(err);
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
      <section>
        <CycleControl />
        {results.length ? (
          <div className="row">
            <div className="col-12 col-md-6 mb-4">
              <CardBody>
                
              </CardBody>
            </div>
            <div className="col-12 col-md-6 mb-4">
              <CardBody>

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
