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
  console.log(props.final);

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
          {/* Left Column - Daysheet */}
          <div className="col-12 col-lg-6 p-2 p-md-4 mb-4">
            <h2 className="heading">Day Sheet</h2>
            <hr />
            <Daysheet {...props} />
          </div>

          {/* Right Column - Impact Report OR Stage Schedule */}
          {props.gig.closed ? (
            <div className="col-12 col-lg-6 p-2 p-md-4 mb-4">
              <h2 className="heading">Impact Report</h2>
              <hr />
              <ImpactReport {...props} />
            </div>
          ) : (
            <div className="col-12 col-lg-6 p-2 p-md-4 mb-4">
              <h2 className="heading">Schedule</h2>
              <hr />
              <StageSchedule {...props} />
            </div>
          )}
        </div>
      </CardBody>
    </motion.div>
  );
}
