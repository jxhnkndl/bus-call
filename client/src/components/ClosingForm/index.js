// Import dependencies
import React, { useState, useEffect } from 'react';
import { emptyFormObj } from '../../utils/emptyFormObj';
import { motion } from 'framer-motion';
import { pageVariants, pageTransitions } from '../../utils/transitions';
import { toast } from 'react-toastify';
import API from '../../utils/API';
import Button from 'react-bootstrap/Button';
import CardBody from '../CardBody';
import ConfirmModal from '../ConfirmModal';
import Form from 'react-bootstrap/Form';
import formatObj from '../../utils/formatObj';
import './index.scss';

// Create and export ClosingForm component
export default function ClosingForm(props) {
  const [formObj, setFormObj] = useState(emptyFormObj);

  // Configure the form for updating values on the selected gig
  useEffect(() => {
    if (props.selected) {
      const gigObj = formatObj(props.selected, 'report');
      console.log(gigObj);
      setFormObj(gigObj);
    }
  }, []);

  // Update existing gig in database
  const updateGig = async () => {
    console.log('Adding closing numbers to gig...');
    const id = props.selected._id;
    try {
      const res = await API.updateGig(id, formObj);
      toast.success(`Gig updated! Don't forget extra strings... 🎸`);
      console.log(res);
    } catch (err) {
      toast.error('Uh oh! Something went wrong. Try again! 🧐');
      console.log(err);
    }
  };

  // Handle changes made to properties in closingNumbers
  // nested object
  const handleInputChange = (event) => {
    const closingNumbers = formObj.closingNumbers;
    const merch = formObj.closingNumbers.merch;
    const { name, value, type } = event.target;

    // Convert strings to numbers 
    if (name === 'split') {
      merch.split = value;
    }

    if (name === 'gross') {
      merch.gross = value;
    }

    if (name === 'scans') {
      merch.scans = value;
    }

    if (name === 'comped') {
      merch.comped = value;
    }

    // Reset form object with input values
    setFormObj({
      ...formObj,
      closingNumbers: {
        ...closingNumbers,
        // [name]: value * 1,
        [name]: value
      },
    });
  };

  // Submit closing numbers to API
  const handleUpdate = (event) => {
    event.preventDefault();

    // Post updated data to API
    updateGig();

    // Update gigs in state and toggle back to gig view
    setTimeout(() => {
      props.fetchGigs();
      props.handleView('gig');
    }, 250);
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
              <p className="h2 heading">Add Closing Metrics</p>

              <Form>
                <div className="row">

                  {/* Attendance  */}
                  <div className="col-12 col-md-4 pt-3">
                    <p className="small-heading mb-3">Head Counts</p>

                    <div className="row">
                      
                      {/* Presale */}
                      <div className="col-12">
                        <Form.Group controlId="presaleInputGroup">
                          <Form.Label>Presale</Form.Label>
                          <Form.Control
                            name="presale"
                            type="number"
                            tabIndex="1"
                            placeholder="Enter Presale Count"
                            value={formObj.closingNumbers.presale}
                            onChange={handleInputChange}
                          />
                        </Form.Group>
                      </div>

                      {/* Doors */}
                      <div className="col-12">
                        <Form.Group controlId="doorsInputGroup">
                          <Form.Label>Doors</Form.Label>
                          <Form.Control
                            name="doors"
                            type="number"
                            tabIndex="2"
                            placeholder="Enter Door Count"
                            value={formObj.closingNumbers.doors}
                            onChange={handleInputChange}
                          />
                        </Form.Group>
                      </div>

                      {/* Comps */}
                      <div className="col-12">
                        <Form.Group controlId="compsInputGroup">
                          <Form.Label>Comps</Form.Label>
                          <Form.Control
                            name="comps"
                            type="number"
                            tabIndex="3"
                            placeholder="Enter Comp Count"
                            value={formObj.closingNumbers.comps}
                            onChange={handleInputChange}
                          />
                        </Form.Group>
                      </div>

                    </div>
                  </div>

                  {/* Revenue */}
                  <div className="col-12 col-md-4 pt-3">
                    <p className="small-heading mb-3">Revenue Streams</p>

                    <div className="row">

                      {/* Guarantee */}
                      <div className="col-12">
                        <Form.Group controlId="guaranteeInputGroup">
                          <Form.Label>Performance Guarantee</Form.Label>
                          <Form.Control
                            name="guarantee"
                            type="number"
                            tabIndex="4"
                            placeholder="Enter Guarantee"
                            value={formObj.closingNumbers.guarantee}
                            onChange={handleInputChange}
                          />
                        </Form.Group>
                      </div>

                      {/* Gross Merch */}
                      <div className="col-12">
                        <Form.Group controlId="grossInputGroup">
                          <Form.Label>Gross Merch Revenue</Form.Label>
                          <Form.Control
                            name="gross"
                            type="number"
                            tabIndex="5"
                            placeholder="Enter Gross Merch Revenue"
                            value={formObj.closingNumbers.merch.gross}
                            onChange={handleInputChange}
                          />
                        </Form.Group>
                      </div>

                      {/* Bonus */}
                      <div className="col-12">
                        <Form.Group controlId="bonusInputGroup">
                          <Form.Label>Performance Bonus</Form.Label>
                          <Form.Control
                            name="bonus"
                            type="number"
                            tabIndex="6"
                            placeholder="Enter Bonus"
                            value={formObj.closingNumbers.bonus}
                            onChange={handleInputChange}
                          />
                        </Form.Group>
                      </div>

                    </div>
                  </div>

                  {/* Merchandise */}
                  <div className="col-12 col-md-4 pt-3">
                    <p className="small-heading mb-3">Merch</p>

                    <div className="row">

                      {/* Merch Split */}
                      <div className="col-12">
                        <Form.Group controlId="splitInputGroup">
                          <Form.Label>Artist Split</Form.Label>
                          <Form.Control
                            name="split"
                            type="number"
                            tabIndex="7"
                            placeholder="Enter Artist Split"
                            value={formObj.closingNumbers.merch.split}
                            onChange={handleInputChange}
                          />
                        </Form.Group>
                      </div>

                      {/* Comped Merch */}
                      <div className="col-12">
                        <Form.Group controlId="compedInputGroup">
                          <Form.Label>Comped Merch</Form.Label>
                          <Form.Control
                            name="comped"
                            type="number"
                            tabIndex="8"
                            placeholder="Enter Total Comped"
                            value={formObj.closingNumbers.merch.comped}
                            onChange={handleInputChange}
                          />
                        </Form.Group>
                      </div>

                      {/* Scans */}
                      <div className="col-12">
                        <Form.Group controlId="scansInputGroup">
                          <Form.Label>Soundscans</Form.Label>
                          <Form.Control
                            name="scans"
                            type="number"
                            tabIndex="9"
                            placeholder="Enter Total Scans"
                            value={formObj.closingNumbers.merch.scans}
                            onChange={handleInputChange}
                          />
                        </Form.Group>
                      </div>
                    </div>
                  </div>


                  <div className="col-12">
                    <Button
                      type="submit"
                      variant="primary"
                      className="py-2 px-3 mr-2"
                      onClick={handleUpdate}
                    >
                      <i className="fas fa-edit mr-2"></i>
                      Update Gig
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
