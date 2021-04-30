// Import dependencies
import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { pageVariants, pageTransitions } from '../../utils/transitions';
import CardBody from '../CardBody';
import Daysheet from '../Daysheet';
import StageSchedule from '../StageSchedule';
import GigsContext from '../../utils/gigsContext';
import './index.scss';

// Create and export dashboard page component
export default function Dashboard() {
  const { gigs, selected } = useContext(GigsContext);

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
              {selected ? <Daysheet /> : 'LOADING GIGS'}
            </CardBody>
          </div>
          <div className="col-12 col-md-6 mb-4">
            <CardBody>
              {selected ? <StageSchedule /> : 'LOADING SCHEDULE' }
            </CardBody>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
