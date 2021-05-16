// Import dependencies
import React from 'react';
import { motion } from 'framer-motion';
import { pageVariants, pageTransitions } from '../../utils/transitions';
import CardBody from '../CardBody';
import Daysheet from '../Daysheet';
import StageSchedule from '../StageSchedule';

// Create and export Gig component
export default function Gig(props) {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransitions}
    >
      <div>
        <div className="row">

          {/* Daysheet container (pass props from Dashboard through) */}
          <div className="col-12 col-md-6 mb-4">
            <CardBody spacing={'p-4 p-md-4 m-2 m-md-0'}>
              <Daysheet {...props} />
            </CardBody>
          </div>

          {/* Stage schedule container (pass props from Dashboard through) */}
          <div className="col-12 col-md-6 mb-4">
            <CardBody spacing={'p-4 p-md-4 m-2 m-md-0'}>
              <StageSchedule {...props} />
            </CardBody>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
