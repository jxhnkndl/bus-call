// Import dependencies
import React from 'react';
import { motion } from 'framer-motion';
import { pageVariants, pageTransitions } from '../../utils/transitions';
import CardBody from '../CardBody';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './index.scss';

// Create and export dashboard page component
export default function GigForm() {
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
          <div className="col-12 col-md-10 col-lg-8 mx-auto">
            <CardBody>
              <Form>
                <div className="row">
                  <div className="col-12">
                    <Form.Group controlId="formGroupVenue">
                      <Form.Label>Venue Name:</Form.Label>
                      <Form.Control type="text" placeholder="Enter Venue" />
                    </Form.Group>
                  </div>
                  <div className="col-6">
                    <Form.Group controlId="formGroupCity">
                      <Form.Label>City:</Form.Label>
                      <Form.Control type="text" placeholder="Enter City" />
                    </Form.Group>
                  </div>
                  <div className="col-6">
                    <Form.Group controlId="formGroupState">
                      <Form.Label>City:</Form.Label>
                      <Form.Control type="text" placeholder="Enter State" />
                    </Form.Group>
                  </div>
                  <div className="col-6">
                    <Form.Group controlId="formGroupState">
                      <Form.Label>Date:</Form.Label>
                      <Form.Control type="date" placeholder="Enter State" />
                    </Form.Group>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <Button variant="primary" className="py-2 px-3">Add Gig</Button>
                  </div>
                </div>
              </Form>
            </CardBody>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
