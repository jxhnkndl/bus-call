// Import dependencies
import React from 'react';
import { motion } from 'framer-motion';
import { pageVariants, pageTransitions } from '../../utils/transitions';
import CardBody from '../CardBody';
import './index.scss';

// Create and export dashboard page component
export default function GigForm() {
  return (
    <section>
      <div className="row">
        <div className="col-12 col-md-6 mb-4">
          <CardBody>
            <h2>INPUT FIELDS</h2>
          </CardBody>
        </div>
        <div className="col-12 col-md-6 mb-4">
          <CardBody>
            <h2>INPUT FIELDS</h2>
          </CardBody>
        </div>
      </div>
    </section>
  );
}