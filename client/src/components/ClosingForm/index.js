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
  const [formObj, setFormObj] = useState([]);

  // Configure the form for updating values on the selected gig
  useEffect(() => {
    const gigObj = formatObj(props.selected);
    setFormObj(gigObj);
  }, [])

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

  // Handle input changes
  const handleInputChange = (event) => {
    const closingNumbers = formObj.closingNumbers;
    const { name, value } = event.target;

    
    setFormObj({
      ...formObj,
      closingNumbers: {
        ...closingNumbers,
        [name]: value,
      }
    });
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


            </CardBody>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
