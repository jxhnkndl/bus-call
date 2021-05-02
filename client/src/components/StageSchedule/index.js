// Import dependencies
import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import './index.scss';

// Create and export reusable card component
export default function StageSchedule(props) {
  return (
    <div className="info-container">
      <p className="dashboard-heading small-heading h5 mb-2">Day Schedule</p>

      {props.schedule.length ? (
        <ListGroup key="schedule" variant="flush">
          {props.schedule.map((block, index) => {
            return (
              <ListGroup.Item
                key={`${index}-${block._id}`}
                className="daysheet-item"
              >
                <div className="row">
                  <div className="col-12 col-lg-12 daysheet-time">
                    <p className="block-time pt-2 mb-1">{block.timeString}</p>
                  </div>
                  <div className="col-12 col-lg-12 daysheet-item">
                    <p className="block-event mb-1">{block.event}</p>
                  </div>
                </div>
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      ) : (
        <p className="h2">NOTHING SCHEDULED</p>
      )}
    </div>
  );
}
