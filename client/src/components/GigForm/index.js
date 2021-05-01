// Import dependencies
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { pageVariants, pageTransitions } from '../../utils/transitions';
import { emptyFormObj } from '../../utils/emptyFormObj';
import API from '../../utils/API';
import CardBody from '../CardBody';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './index.scss';

// Create and export dashboard page component
export default function GigForm() {
  // Init state
  const [formObj, setFormObj] = useState(emptyFormObj);

  // Amenities array
  const amenities = [
    'catering',
    'internet',
    'showers',
    'greenrooms',
    'parking',
    'rider',
  ];

  const addGig = async () => {
    try {
      const res = await API.addGig(formObj);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const venue = formObj.venue;
    const schedule = formObj.schedule;

    // If input field is in a nested object inside of state
    if (
      name === 'name' ||
      name === 'street' ||
      name === 'city' ||
      name === 'state' ||
      name === 'zip' ||
      name === 'capacity' ||
      name === 'presale'
    ) {
      // Update the nested venue object in the form state object
      setFormObj({
        ...formObj,
        venue: {
          ...venue,
          [name]: value,
        },
      });
    }

    // If input field is a direct property of state
    else {
      setFormObj({
        ...formObj,
        [name]: value,
      });
    }
  };

  const handleCheck = (event) => {
    const { name, checked } = event.target;
    setFormObj({
      ...formObj,
      [name]: checked,
    });
  };

  const createLabel = (name) => {
    return name.slice(0, 1).toUpperCase() + name.slice(1);
  }  

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formObj.date) {
      // addGig();
      console.log(formObj);
      setFormObj(emptyFormObj);
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
        <div className="row">
          <div className="col-12 col-md-10 col-lg-8 mx-auto">
            <CardBody>
              <Form>
                <div className="row">




                  {/* Input: Venue */}
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

                  {/* Input: Street Address */}
                  <div className="col-12">
                    <Form.Group controlId="formGroupStreet">
                      <Form.Label>Address:</Form.Label>
                      <Form.Control
                        name="street"
                        type="text"
                        placeholder="Enter Street"
                        value={formObj.street}
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                  </div>

                  {/* Input: City */}
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

                  {/* Input: State */}
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

                  {/* Input: Zip */}
                  <div className="col-6">
                    <Form.Group controlId="formGroupZip">
                      <Form.Label>Zip:</Form.Label>
                      <Form.Control
                        name="zip"
                        type="text"
                        placeholder="Enter Zip"
                        value={formObj.zip}
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                  </div>

                  {/* Input: Date */}
                  <div className="col-6">
                    <Form.Group controlId="formGroupDate">
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

                  {/* Input: Capacity */}
                  <div className="col-6">
                    <Form.Group controlId="formGroupCapacity">
                      <Form.Label>Venue Capacity:</Form.Label>
                      <Form.Control
                        name="capacity"
                        type="text"
                        placeholder="Enter Capacity"
                        value={formObj.capacity}
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                  </div>

                  {/* Input: Presale */}
                  <div className="col-6">
                    <Form.Group controlId="formGroupPresale">
                      <Form.Label>Presale:</Form.Label>
                      <Form.Control
                        name="presale"
                        type="text"
                        placeholder="Enter Presale"
                        value={formObj.presale}
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                  </div>

                  <div className="col-12">
                    <p>Amenities (Select all that apply):</p>
                  </div>

                  {amenities.map((amenity, index) => {
                    return (
                      <div key={index} className="col-6 col-md-4">
                        <Form.Check
                          type="checkbox"
                          name={amenity}
                          label={`${createLabel(amenity)}:`}
                          checked={formObj[amenity]}
                          onChange={handleCheck}
                        />
                      </div>
                    );
                  })}

                </div>

                <div className="row pt-3">
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
