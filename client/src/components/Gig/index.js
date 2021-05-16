// Import dependencies
import React from 'react';
import { motion } from 'framer-motion';
import { pageVariants, pageTransitions } from '../../utils/transitions';
import CardBody from '../CardBody';
import Daysheet from '../Daysheet';
import ImpactReport from '../ImpactReport';
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
      className="mt-2"
    >
      <CardBody spacing={`px-5 py-3 m-2 m-md-0`}>
        <div className="row">
          {/* Daysheet container (pass props from Dashboard through) */}
          <div className="col-12 col-lg-4 p-2 p-md-4 mb-4">
            <h2 className="heading">Day Sheet</h2>
            <hr />
            <Daysheet {...props} />
          </div>

          {/* Stage schedule container (pass props from Dashboard through) */}
          <div className="col-12 col-lg-4 p-2 p-md-4 mb-4">
            <h2 className="heading">Schedule</h2>
            <hr />
            <StageSchedule {...props} />
          </div>

          {/* Test Column */}
          <div className="col-12 col-lg-4 p-2 p-md-4 mb-4">
            <h2 className="heading">Impact Report</h2>
            <hr />
            <ImpactReport {...props} />
          </div>
        </div>
      </CardBody>
    </motion.div>
  );
}
