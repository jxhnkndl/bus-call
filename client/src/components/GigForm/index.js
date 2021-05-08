// Import dependencies
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { pageVariants, pageTransitions } from '../../utils/transitions';
import { emptyFormObj } from '../../utils/emptyFormObj';
import formatObj from '../../utils/formatObj';
import { toast } from 'react-toastify';
import API from '../../utils/API';
import CardBody from '../CardBody';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './index.scss';

// Create and export dashboard page component
export default function GigForm(props) {
  // Init state
  const [formObj, setFormObj] = useState(emptyFormObj);

  useEffect(() => {
    if (props.selected) {
      const gigObj = formatObj(props.selected);
      console.log(gigObj);
      setFormObj(gigObj);
    }
  }, []);

  // Amenities array
  const amenities = [
    'catering',
    'internet',
    'showers',
    'greenrooms',
    'parking',
    'rider',
  ];

  const venueFields = [
    { name: 'name', col: 12, required: true },
    { name: 'street', col: 12, required: false },
    { name: 'city', col: 6, required: true },
    { name: 'state', col: 6, required: true },
    { name: 'zip', col: 6, required: false },
    { name: 'date', col: 6, required: true },
    { name: 'capacity', col: 6, required: false },
    { name: 'presale', col: 6, required: false },
  ];

  const stageBlocks = [
    { timeString: '', event: 'Load In' },
    { timeString: '', event: 'Soundcheck' },
    { timeString: '', event: 'Doors' },
    { timeString: '', event: 'Opener' },
    { timeString: '', event: 'Second' },
    { timeString: '', event: 'Direct' },
    { timeString: '', event: 'Headliner' },
    { timeString: '', event: 'Curfew' },
    { timeString: '', event: 'Bus Call' },
  ];

  // Add gig to database
  const addGig = async () => {
    try {
      const res = await API.addGig(formObj);
      toast('Gig added!');
      console.log(res);
    } catch (err) {
      toast.error('Uh oh! Something went wrong. Please try again.');
      console.log(err);
    }
  };

  // Update gig in database
  const updateGig = async () => {
    const id = props.selected._id;
    try {
      const res = await API.updateGig(id, formObj);
      toast('Gig updated!');
      console.log(res);
    } catch (err) {
      toast.error('Uh oh! Something went wrong. Please try again.');
      console.log(err);
    }
  };

  // Handle input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const venue = formObj.venue;

    // If input is date, set field directly
    if (name === 'date') {
      setFormObj({
        ...formObj,
        [name]: value,
      });

      return;
    }

    // Otherwise, set field inside venue object
    setFormObj({
      ...formObj,
      venue: {
        ...venue,
        [name]: value,
      },
    });
  };

  // Handle updating state from checkboxes
  const handleCheck = (event) => {
    const { name, checked } = event.target;
    setFormObj({
      ...formObj,
      [name]: checked,
    });
  };

  // Handle updating state's nested schedule array
  const handleSchedule = (event) => {
    // Capture event parameters
    const { name, value } = event.target;
    const { index } = event.target.dataset;

    // Extract matching object from schedule in state
    const schedule = [...formObj.schedule];
    const currentBlock = schedule[index];

    // Update the block's and put it back in the schedule
    currentBlock.timeString = value;
    schedule.splice(index, 1, currentBlock);

    // Reset state
    setFormObj({
      ...formObj,
      schedule: schedule,
    });
  };

  // Handle resetting all input fields in UI on submit
  const handleReset = () => {
    Array.from(document.querySelectorAll('input')).forEach(
      (input) => (input.value = '')
    );

    setFormObj(emptyFormObj);
  };

  // Create a formatted input label from its name
  const createLabel = (name) => {
    return name.slice(0, 1).toUpperCase() + name.slice(1);
  };

  // Post form data to API
  const handleSubmit = (event) => {
    event.preventDefault();

    // Only submit these properties have values
    if (formObj.date) {
      console.log(formObj);

      // Send the new or updated gig to the API
      if (props.view === 'edit') {
        updateGig();
      } else if (props.view === 'add') {
        addGig();
      }

      // Reset form fields
      handleReset();

      // Delay fetching gigs from API for long enough to ensure
      // that the newly added gig has been created and can be
      // returned to the client
      setTimeout(() => {
        props.fetchGigs();
      }, 250);
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
          <div className="col-12">
            <CardBody spacing={'p-4 p-md-4 m-2 m-md-0'}>
              <p className="h2 heading">Add/Edit Gig</p>

              <Form>
                <div className="row">
                  {/* Venue Name */}
                  <div className="col-12 col-md-6">
                    <Form.Group controlId="venueInputGroup">
                      <Form.Label>Venue Name *</Form.Label>
                      <Form.Control
                        name="name"
                        type="text"
                        placeholder="Enter Venue Name"
                        value={formObj.venue.name}
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                  </div>

                  {/* Address */}
                  <div className="col-12 col-md-6">
                    <Form.Group controlId="streetInputGroup">
                      <Form.Label>Street Address</Form.Label>
                      <Form.Control
                        name="street"
                        type="text"
                        placeholder="Enter Street Address"
                        value={formObj.venue.street}
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                  </div>

                  {/* City */}
                  <div className="col-6">
                    <Form.Group controlId="cityInputGroup">
                      <Form.Label>City *</Form.Label>
                      <Form.Control
                        name="city"
                        type="text"
                        placeholder="Enter City"
                        value={formObj.venue.city}
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                  </div>

                  {/* State */}
                  <div className="col-6">
                    <Form.Group controlId="stateInputGroup">
                      <Form.Label>State *</Form.Label>
                      <Form.Control
                        name="state"
                        type="text"
                        placeholder="Enter State"
                        value={formObj.venue.state}
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                  </div>

                  {/* Zip */}
                  <div className="col-6 col-md-3">
                    <Form.Group controlId="zipInputGroup">
                      <Form.Label>Zip</Form.Label>
                      <Form.Control
                        name="zip"
                        type="text"
                        placeholder="Enter Zip"
                        value={formObj.venue.zip}
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                  </div>

                  {/* Date */}
                  <div className="col-6 col-md-3">
                    <Form.Group controlId="dateInputGroup">
                      <Form.Label>Date *</Form.Label>
                      <Form.Control
                        name="date"
                        type="date"
                        placeholder="Enter Date"
                        value={formObj.date}
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                  </div>

                  {/* Capacity */}
                  <div className="col-6 col-md-3">
                    <Form.Group controlId="capacityInputGroup">
                      <Form.Label>Capacity</Form.Label>
                      <Form.Control
                        name="capacity"
                        type="text"
                        placeholder="Enter Capacity"
                        value={formObj.venue.capacity}
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                  </div>

                  {/* Presale */}
                  <div className="col-6 col-md-3">
                    <Form.Group controlId="presaleInputGroup">
                      <Form.Label>Presale</Form.Label>
                      <Form.Control
                        name="presale"
                        type="text"
                        placeholder="Enter Presale"
                        value={formObj.venue.presale}
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                  </div>

                  <div className="col-12">
                    <p className="small-heading">
                      Amenities (Select all that apply):
                    </p>
                  </div>

                  {/* Creates checkboxes for each element in the amenities array */}
                  {amenities.map((amenity, index) => {
                    return (
                      <div key={`checkbox-${index}`} className="col-6 col-md-4">
                        <Form.Check
                          type="checkbox"
                          name={amenity}
                          label={`${createLabel(amenity)}`}
                          checked={formObj[amenity]}
                          onChange={handleCheck}
                        />
                      </div>
                    );
                  })}

                  <div className="col-12 pt-3">
                    <p className="small-heading mb-0">Update Stage Schedule</p>
                    <p>
                      You can either use the default times we've provided or
                      update them with your own.
                    </p>
                  </div>

                  {/* Create inputs for adding times to stage schedule events */}
                  {formObj.schedule.map((block, index) => {
                    return (
                      <div
                        key={`block-${block.event}`}
                        className="col-6 col-md-3"
                      >
                        <Form.Group>
                          <Form.Label>{block.event}</Form.Label>
                          <Form.Control
                            data-index={index}
                            name={block.event}
                            type="text"
                            placeholder={`Enter ${block.event} start time`}
                            value={block.timeString}
                            onChange={handleSchedule}
                            onSubmit={() =>
                              setFormObj({
                                ...formObj,
                                schedule: stageBlocks,
                              })
                            }
                          />
                        </Form.Group>
                      </div>
                    );
                  })}
                </div>

                {/* Submit */}
                <div className="row pt-3">
                  <div className="col-12">

                    {/* Add gig */}
                    {props.view === 'add' && (
                      <Button
                        type="submit"
                        variant="primary"
                        className="py-2 px-3"
                        onClick={handleSubmit}
                      >
                        <i className="fas fa-plus mr-2"></i>
                        Add Gig
                      </Button>
                    )}

                    {/* Update gig */}
                    {props.view === 'edit' && (
                      <Button
                        type="submit"
                        variant="primary"
                        className="py-2 px-3"
                        onClick={handleSubmit}
                      >
                        <i className="fas fa-edit mr-2"></i>
                        Update Gig
                      </Button>
                    )}
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
