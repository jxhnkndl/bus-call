// Import dependencies
import React from 'react';
import { motion } from 'framer-motion';
import { pageVariants, pageTransitions } from '../../utils/transitions';
import CardBody from '../CardBody';
import Daysheet from '../Daysheet';
import StageSchedule from '../StageSchedule';
import './index.scss';

// Create and export dashboard page component
export default function Dashboard() {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransitions}
    >
      <section>
        <div className="row">
          <div className="col-12 col-md-6 mb-4">
            <CardBody>
              <Daysheet />
            </CardBody>
          </div>
          <div className="col-12 col-md-6 mb-4">
            <CardBody>
              <StageSchedule />
            </CardBody>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
