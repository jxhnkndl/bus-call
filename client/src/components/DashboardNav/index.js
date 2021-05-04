// Import dependencies
import React from 'react';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import CardBody from '../CardBody';
import Dropdown from 'react-bootstrap/Dropdown';
import './index.scss';

// Overwrite CardBody component styles for this component only
const styles = {
  cardBody: {
    display: 'flex',
    alignItems: 'center',
  },
};

// Create and export cycle control component
export default function DashboardNav(props) {
  console.log(props);

  return (
    <div className="row mb-2 dashboard-nav">
      <div className="col-12">
        <CardBody
          flex={'d-flex align-items-center justify-content-between'}
          spacing={'px-4 py-2 m-2 m-md-0'}
        >
          <Dropdown className="d-inline-block">
            <Dropdown.Toggle id="dropdown-basic">Options</Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onSelect={(e) => props.handleView('gig')}>
                View Gigs
              </Dropdown.Item>
              <Dropdown.Item onSelect={(e) => props.handleView('gig')}>
                View Tour
              </Dropdown.Item>
              <Dropdown.Item onSelect={(e) => props.handleView('form')}>
                Add/Edit Gig
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          {props.view === 'gig' && (
            <div>
              <p className="nav-icon mb-0 mr-2" onClick={props.prev}>
                <i className="fas fa-arrow-circle-left"></i>
              </p>
              <p className="nav-icon mb-0 ml-2" onClick={props.next}>
                <i className="fas fa-arrow-circle-right"></i>
              </p>
            </div>
          )}
        </CardBody>
      </div>
    </div>
  );
}
