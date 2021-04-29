// Import dependencies
import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import './index.scss';

// Create and export reusable card component
export default function StageSchedule(props) {
  return (
    <div className="info-container">
      <p className="dashboard-heading h5 mb-1">Daysheet</p>
      <ListGroup variant="flush">
        <ListGroup.Item className="daysheet-item">
          <div className="row">
            <div className="col-12 col-lg-5 daysheet-time">12:30 PM</div>
            <div className="col-12 col-lg-7 daysheet-item">Load In</div>
          </div>
        </ListGroup.Item>
        <ListGroup.Item className="daysheet-item">
          <div className="row">
            <div className="col-12 col-lg-5 daysheet-time">3:30 PM</div>
            <div className="col-12 col-lg-7 daysheet-item">Sound Check</div>
          </div>
        </ListGroup.Item>
        <ListGroup.Item className="daysheet-item">
          <div className="row">
            <div className="col-12 col-lg-5 daysheet-time">6:30 PM</div>
            <div className="col-12 col-lg-7 daysheet-item">Doors</div>
          </div>
        </ListGroup.Item>
        <ListGroup.Item className="daysheet-item">
          <div className="row">
            <div className="col-12 col-lg-5 daysheet-time">7:30 - 8:00 PM</div>
            <div className="col-12 col-lg-7 daysheet-item">The Bigger Lights</div>
          </div>
        </ListGroup.Item>
        <ListGroup.Item className="daysheet-item">
          <div className="row">
            <div className="col-12 col-lg-5 daysheet-time">8:15 - 8:45 PM</div>
            <div className="col-12 col-lg-7 daysheet-item">Anarbor</div>
          </div>
        </ListGroup.Item>
        <ListGroup.Item className="daysheet-item">
          <div className="row">
            <div className="col-12 col-lg-5 daysheet-time">9:00 - 9:45 PM</div>
            <div className="col-12 col-lg-7 daysheet-item">This Providence</div>
          </div>
        </ListGroup.Item>
        <ListGroup.Item className="daysheet-item">
          <div className="row">
            <div className="col-12 col-lg-5 daysheet-time">10:05 - 11:20 PM</div>
            <div className="col-12 col-lg-7 daysheet-item">Cartel</div>
          </div>
        </ListGroup.Item>
        <ListGroup.Item className="daysheet-item">
          <div className="row">
            <div className="col-12 col-lg-5 daysheet-time">2:00 AM</div>
            <div className="col-12 col-lg-7 daysheet-item">BUS CALL</div>
          </div>
        </ListGroup.Item>
        
      </ListGroup>
    </div>
  );
}