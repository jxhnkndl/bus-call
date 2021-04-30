// Import dependencies
import React from 'react';
import CardBody from '../CardBody';

// Create and export cycle control component
export default function CycleControl(props) {
  return (
    <div className="row">
      <div className="col-12 mb-4">
        <CardBody>
          <div className="row">
            <div className="col-2 d-flex justify-content-start align-items-center">
              <a href="#" onClick={props.prev}>
                <span className="material-icons md-48 material-icons-outlined">
                  arrow_back_ios
                </span>
              </a>
            </div>
            <div className="col-8"></div>
            <div className="col-2 d-flex justify-content-end align-items-center">
              <a href="#" onClick={props.next}>
                <span className="material-icons md-48 material-icons-outlined">
                  arrow_forward_ios
                </span>
              </a>
            </div>
          </div>
        </CardBody>
      </div>
    </div>
  );
}
