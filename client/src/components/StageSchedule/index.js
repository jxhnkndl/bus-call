// Import dependencies
import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';

// Create and export StageSchedule component
export default function StageSchedule(props) {
  console.log(props.gig);

  return (
    <div className="info-container">

      {/* If the gig contains a schedule, map over it and render each block */}
      {props.gig.schedule.length ? (
        <ListGroup key="schedule" variant="flush">
          {props.gig.schedule.map((block, index) => {
            return (
              <ListGroup.Item
                key={`${index}-${block._id}`}
                className="daysheet-item"
              >
                <div className="row">
                  <div className="col-12 col-lg-12">
                    <p className="list-label pt-2 mb-1">{block.timeString}</p>
                  </div>
                  <div className="col-12 col-lg-12">
                    <p className="list-item mb-1">{block.event}</p>
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
