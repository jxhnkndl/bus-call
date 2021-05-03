// Import dependencies
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { pageVariants, pageTransitions } from '../../utils/transitions';
import { emptyFormObj } from '../../utils/emptyFormObj';
import { toast } from 'react-toastify';
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

  const venueFields = [
    { name: 'name', col: 12 },
    { name: 'street', col: 12 },
    { name: 'city', col: 6 },
    { name: 'state', col: 6 },
    { name: 'zip', col: 6 },
    { name: 'date', col: 6 },
    { name: 'capacity', col: 6 },
    { name: 'presale', col: 6 },
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

  const addGig = async () => {
    try {
      const res = await API.addGig(formObj);
      console.log(res);
    } catch (err) {
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
    if (formObj.date) {
      console.log(formObj);
      addGig();
      toast('Gig created!');
      handleReset();
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
            <CardBody spacing={'p-4 p-md-4 m-2 m-md-0'}>
              <Form>
                <div className="row">
                  {/* Creates all fields for adding venue data to form object */}
                  {venueFields.map((field, index) => {
                    return (
                      <div
                        key={`inputField-${index}`}
                        className={`col-${field.col}`}
                      >
                        <Form.Group controlId={`${field.name}InputGroup`}>
                          <Form.Label>
                            {index === 0
                              ? `Venue Name:`
                              : `${createLabel(field.name)}`}
                          </Form.Label>
                          <Form.Control
                            name={field.name}
                            type={field.name === 'date' ? 'date' : 'text'}
                            placeholder={
                              field.name === 'date'
                                ? 'mm/dd/yyyy'
                                : `Enter ${createLabel(field.name)}`
                            }
                            value={formObj[field.name]}
                            onChange={handleInputChange}
                          />
                        </Form.Group>
                      </div>
                    );
                  })}

                  <div className="col-12">
                    <p>Amenities (Select all that apply):</p>
                  </div>

                  {/* Creates checkboxes for each element in the amenities array */}
                  {amenities.map((amenity, index) => {
                    return (
                      <div key={`checkbox-${index}`} className="col-6 col-md-4">
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

                  <div className="col-12 pt-3">
                    <p>Insert time strings for each block:</p>
                  </div>

                  {/* Create inputs for adding times to stage schedule events */}
                  {stageBlocks.map((block, index) => {
                    return (
                      <div key={`block-${block.event}`} className="col-12">
                        <Form.Group>
                          <Form.Label>{block.event}</Form.Label>
                          <Form.Control
                            data-index={index}
                            name={block.event}
                            type="text"
                            placeholder={`Enter ${block.event} start time`}
                            value={formObj.schedule.timeString}
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
