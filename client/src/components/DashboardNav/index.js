// Import dependencies
import React, { useState } from 'react';
import CardBody from '../CardBody';
import ConfirmModal from '../ConfirmModal';
import Dropdown from 'react-bootstrap/Dropdown';
import './index.scss';

// Create and export DashboardNav component
export default function DashboardNav(props) {
  // Modal visibility state
  const [show, setShow] = useState(false);

  // Handle toggling confirmation modal's visibility
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <div className="row mb-2 dashboard-nav">
      <div className="col-12">
        <CardBody
          flex={'d-flex align-items-center justify-content-between'}
          spacing={'px-4 py-3 m-2 m-md-0'}
        >
          {/* Dropdown view options */}
          <Dropdown className="d-inline-block">
            <Dropdown.Toggle id="dropdown-basic">Options</Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onSelect={(e) => props.handleView('gig')}>
                View Gigs
              </Dropdown.Item>
              <Dropdown.Item onSelect={(e) => props.handleView('tour')}>
                View Tour
              </Dropdown.Item>
              {(props.view === 'tour' || props.view === 'gig') && (
                <Dropdown.Item onSelect={(e) => props.handleView('add')}>
                  Add Gig
                </Dropdown.Item>
              )}
              {props.view === 'gig' && (
                <Dropdown.Item onSelect={(e) => props.handleView('edit')}>
                  Edit Gig
                </Dropdown.Item>
              )}
              {props.view === 'gig' && (
                <Dropdown.Item onSelect={(e) => props.handleView('report')}>
                  Complete Gig
                </Dropdown.Item>
              )}
            </Dropdown.Menu>
          </Dropdown>

          {/* Show cycle and edit buttons when in gig view */}
          {props.view === 'gig' && (
            <div>
              <p className="nav-icon mb-0 mr-3" onClick={props.prev}>
                <i className="fas fa-arrow-circle-left"></i>
              </p>
              <p className="nav-icon mb-0 mr-3" onClick={props.next}>
                <i className="fas fa-arrow-circle-right"></i>
              </p>

              <p
                className="nav-icon mb-0 mr-3"
                onClick={(e) => props.handleView('edit')}
              >
                <i className="fas fa-edit"></i>
              </p>

              <p
                className="nav-icon mb-0"
                onClick={(e) => props.handleView('report')}
              >
                <i className="fas fa-dollar-sign"></i>
              </p>

            </div>
          )}

          {/* Show add new gig button when in tour view */}
          {props.view === 'tour' && (
            <div>
              <p
                className="nav-icon mb-0"
                onClick={(e) => props.handleView('add')}
              >
                <i className="fas fa-plus"></i>
              </p>
            </div>
          )}

          {/* Show close icon when in either add or edit view */}
          {(props.view === 'add' || props.view === 'edit') && (
            <div>
              <p className="nav-icon mb-0" onClick={handleShow}>
                <i className="far fa-window-close"></i>
              </p>
            </div>
          )}
        </CardBody>
      </div>

      {/* Confirmation modal */}
      <ConfirmModal
        show={show}
        message="Are you sure you want to discard your changes?"
        confirm={{ color: 'danger', message: 'Discard' }}
        cancel={{ color: 'dark', message: 'Cancel' }}
        handleConfirm={(e) => {
          handleClose();
          props.handleView('tour');
        }}
        handleCancel={handleClose}
      />
    </div>
  );
}
