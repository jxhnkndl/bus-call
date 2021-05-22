// Import dependencies
import React, { useState } from 'react';
import CardBody from '../CardBody';
import ConfirmModal from '../ConfirmModal';
import Dropdown from 'react-bootstrap/Dropdown';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import './index.scss';

// Create and export DashboardNav component
export default function DashboardNav(props) {
  const { handleView } = props;

  // Modal visibility state
  const [show, setShow] = useState(false);

  // Handle toggling confirmation modal's visibility
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  // Render tooltip
  const renderTooltip = (message) => (
    <Tooltip id="icon-tooltip">{message}</Tooltip>
  );

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
              {/* View tour dates */}
              <Dropdown.Item onSelect={() => handleView('tour')}>
                View Tour Dates
              </Dropdown.Item>

              {/* Add new gig */}
              {props.view === 'tour' && (
                <Dropdown.Item onSelect={() => handleView('add')}>
                  Add Gig
                </Dropdown.Item>
              )}

              {/* Edit gig details */}
              {props.view === 'gig' && (
                <Dropdown.Item onSelect={() => handleView('edit')}>
                  Edit Gig Details
                </Dropdown.Item>
              )}

              {/* Add/Edit closing numbers */}
              {props.view === 'gig' && (
                <Dropdown.Item onSelect={() => handleView('report')}>
                  {props.gig.closed
                    ? 'Edit Closing Numbers'
                    : 'Add Closing Numbers'}
                </Dropdown.Item>
              )}
            </Dropdown.Menu>
          </Dropdown>

          {/* If application is in gig view */}
          {props.view === 'gig' && (
            <div>
              {props.gig.closed && (
                <OverlayTrigger
                  placement="bottom"
                  overlay={renderTooltip('Gig has been completed')}
                >
                  <p className="nav-icon mb-0 mr-3 text-success">
                    <i className="fas fa-check"></i>
                  </p>
                </OverlayTrigger>
              )}

              {/* Nav Icon -> Edit gig details */}
              <OverlayTrigger
                placement="bottom"
                overlay={renderTooltip('Edit gig details')}
              >
                <p
                  className="nav-icon mb-0 mr-3"
                  onClick={() => handleView('edit')}
                >
                  <i className="fas fa-edit"></i>
                </p>
              </OverlayTrigger>

              {/* Nav Icon -> Edit Closing Numbers */}
              <OverlayTrigger
                placement="bottom"
                overlay={renderTooltip(
                  props.gig.closed
                    ? 'Edit closing numbers'
                    : 'Add closing numbers'
                )}
              >
                <p
                  className="nav-icon mb-0 mr-3"
                  onClick={() => handleView('report')}
                >
                  <i className="fas fa-chart-pie"></i>
                </p>
              </OverlayTrigger>

              {/* Nav Icon -> View tour dates */}
              <OverlayTrigger
                placement="bottom"
                overlay={renderTooltip('View tour dates')}
              >
                <p className="nav-icon mb-0" onClick={() => handleView('tour')}>
                  <i className="fas fa-list"></i>
                </p>
              </OverlayTrigger>
            </div>
          )}

          {/* If application is in tour view */}
          {props.view === 'tour' && (
            <div>
              {/* Nav Icon -> Add new gig */}
              <OverlayTrigger
                placement="bottom"
                overlay={renderTooltip('Add New Gig')}
              >
                <p className="nav-icon mb-0" onClick={() => handleView('add')}>
                  <i className="fas fa-plus"></i>
                </p>
              </OverlayTrigger>
            </div>
          )}

          {/* If application is in any variant of form view */}
          {(props.view === 'add' ||
            props.view === 'edit' ||
            props.view === 'report') && (
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
