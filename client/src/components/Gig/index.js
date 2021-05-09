// Import dependencies
import React from 'react';
import { motion } from 'framer-motion';
import { pageVariants, pageTransitions } from '../../utils/transitions';
import CardBody from '../CardBody';
import Daysheet from '../Daysheet';
import StageSchedule from '../StageSchedule';
import './index.scss';

// Create and export dashboard page component
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
          <div className="col-12 col-md-6 mb-4">
            <CardBody spacing={'p-4 p-md-4 m-2 m-md-0'}>
              <Daysheet
                date={props.date}
                city={props.city}
                state={props.state}
                venue={props.venue}
                street={props.street}
                zip={props.zip}
                capacity={props.capacity}
                presale={props.presale}
                lounge={props.lounge}
                catering={props.catering}
                showers={props.showers}
                internet={props.internet}
                nextDate={props.nextDate}
                nextCity={props.nextCity}
                nextState={props.nextState}
                nextVenue={props.nextVenue}
                distance={props.distance}
              />
            </CardBody>
          </div>
          <div className="col-12 col-md-6 mb-4">
            <CardBody spacing={'p-4 p-md-4 m-2 m-md-0'}>
              <StageSchedule schedule={props.schedule} />
            </CardBody>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
