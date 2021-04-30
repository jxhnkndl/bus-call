// Import dependencies
import React, { useContext } from 'react';
import GigsContext from '../../utils/gigsContext';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import './index.scss';

// Create and export reusable card component
export default function StageSchedule() {
  const { gigs, selected } = useContext(GigsContext);

  return (
    <div className="info-container">
      <p className="dashboard-heading h5 mb-1">Daysheet</p>

      {selected.schedule.length ? (
        <ListGroup key="schedule" variant="flush">
          {selected.schedule.map((block, index) => {
            return (
              <ListGroup.Item
                key={`${index}-${block._id}`}
                className="daysheet-item"
              >
                <div className="row">
                  <div className="col-12 col-lg-5 daysheet-time">
                    {block.timeString}
                  </div>
                  <div className="col-12 col-lg-7 daysheet-item">
                    {block.event}
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
