// Import dependencies
import React from 'react';
import CardBody from '../CardBody';
import './index.scss';

// Create and export cycle control component
export default function CycleControl(props) {
  return (
    <div className="row">
      <div className="col-12 mb-4">
        <CardBody spacing={'p-3 p-md-4 mx-2 m-md-0 align-items-center'}>
          <div className="row px-2">
            <div className="col-6 ">
              <p className="nav-icon mb-0" onClick={props.prev}>
                <i className="fas fa-arrow-circle-left"></i>
              </p>
            </div>
            <div className="col-6 text-right ">
              <p className="nav-icon mb-0" onClick={props.next}>
                <i className="fas fa-arrow-circle-right"></i>
              </p>
            </div>
          </div>
        </CardBody>
      </div>
    </div>
  );
}
