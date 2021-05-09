// Import dependencies
import React, { useState } from 'react';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import CardBody from '../CardBody';
import Dropdown from 'react-bootstrap/Dropdown';
import ConfirmModal from '../ConfirmModal';
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
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <div className="row mb-2 dashboard-nav">
      <div className="col-12">
        <CardBody
          flex={'d-flex align-items-center justify-content-between'}
          spacing={'px-4 py-3 m-2 m-md-0'}
        >
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
            </Dropdown.Menu>
          </Dropdown>
          {props.view === 'gig' && (
            <div>
              <p className="nav-icon mb-0 mr-3" onClick={props.prev}>
                <i className="fas fa-arrow-circle-left"></i>
              </p>
              <p className="nav-icon mb-0 mr-3" onClick={props.next}>
                <i className="fas fa-arrow-circle-right"></i>
              </p>
              <p
                className="nav-icon mb-0"
                onClick={(e) => props.handleView('edit')}
              >
                <i className="fas fa-edit"></i>
              </p>
            </div>
          )}

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

          {(props.view === 'add' || props.view === 'edit') && (
            <div>
              <p
                className="nav-icon mb-0"
                onClick={handleShow}
              >
                <i className="far fa-window-close"></i>
              </p>
            </div>
          )}
        </CardBody>
      </div>

      <ConfirmModal
        show={show}
        message="Are you sure you want to discard your changes?"
        confirm={{ color: 'danger', message: 'Discard' }}
        cancel={{ color: 'primary', message: 'Cancel' }}
        handleConfirm={(e) => {
          handleClose();
          props.handleView('tour');
        }}
        handleCancel={handleClose}
      />
    </div>
  );
}
