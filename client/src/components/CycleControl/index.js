// Import dependencies
import React from 'react';
import CardBody from '../CardBody';
import './index.scss';

// Create and export cycle control component
export default function CycleControl(props) {
  return (
    <div className="row">
      <div className="col-12 mb-4">
        <CardBody>
          <div className="row">
            <div className="col-2 d-flex justify-content-start align-items-center">
              <p className="nav-icon mb-0" onClick={props.prev}>
                <i class="fas fa-arrow-circle-left"></i>
              </p>
            </div>
            <div className="col-8">
              
            </div>
            <div className="col-2 d-flex justify-content-end align-items-center">
              <p className="nav-icon mb-0" onClick={props.next}>
                <i class="fas fa-arrow-circle-right"></i>
              </p>
            </div>
          </div>
        </CardBody>
      </div>
    </div>
  );
}
