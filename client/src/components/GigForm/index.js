// Import dependencies
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { pageVariants, pageTransitions } from '../../utils/transitions';
import { emptyFormObj } from '../../utils/emptyFormObj';
import CardBody from '../CardBody';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './index.scss';

// Create and export dashboard page component
export default function GigForm() {
  const [formObj, setFormObj] = useState(emptyFormObj);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormObj({
      ...formObj,
      [name]: value,
    });
    console.log(formObj);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formObj);
    setFormObj(emptyFormObj);
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
        <div className="row">
          <div className="col-12 col-md-10 col-lg-8 mx-auto">
            <CardBody>
              <Form>
                <div className="row">
                  <div className="col-12">
                    <Form.Group controlId="formGroupVenue">
                      <Form.Label>Venue Name:</Form.Label>
                      <Form.Control
                        name="name"
                        type="text"
                        placeholder="Enter Venue"
                        value={formObj.name}
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                  </div>
                  <div className="col-6">
                    <Form.Group controlId="formGroupCity">
                      <Form.Label>City:</Form.Label>
                      <Form.Control
                        name="city"
                        type="text"
                        placeholder="Enter City"
                        value={formObj.city}
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                  </div>
                  <div className="col-6">
                    <Form.Group controlId="formGroupState">
                      <Form.Label>City:</Form.Label>
                      <Form.Control
                        name="state"
                        type="text"
                        placeholder="Enter State"
                        value={formObj.state}
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                  </div>
                  <div className="col-6">
                    <Form.Group controlId="formGroupState">
                      <Form.Label>Date:</Form.Label>
                      <Form.Control
                        name="date"
                        type="date"
                        placeholder="Enter State"
                        value={formObj.date}
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <Button
                      type="submit"
                      variant="primary"
                      className="py-2 px-3"
                      onClick={handleSubmit}
                    >
                      Add Gig
                    </Button>
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
