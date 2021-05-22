// Import dependencies
import React from 'react';
import dayjs from 'dayjs';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import './index.scss';

// Create and export ClosingNumbers component
export default function ClosingNumbers(props) {
  const { presale, doors, comps, guarantee } = props.gig.closingNumbers;
  const { gross, split, soundscan } = props.gig.closingNumbers.merch;
  const { capacity } = props.gig.venue;

  // Calculate attendance insights
  const totalAttendance = presale + doors + comps;
  const totalTickets = presale + doors;
  const percentCap = getPercentage(totalTickets, capacity);

  // Add semantic color class based to percent cap figure
  function colorPercentCap() {
    if (percentCap >= 80) {
      return 'bg-success text-dark rounded';
    } else if (percentCap < 80 && percentCap >= 50) {
      return 'bg-warning text-dark rounded';
    } else if (percentCap < 50) {
      return 'bg-danger rounded';
    }
  }

  // Calculate merch insights
  const venueCut = getVenueCut();
  const netMerch = gross - venueCut;
  const merchPerHead = netMerch / totalAttendance;

  // Add semantic color class to per head figure
  function colorPerHead() {
    if (merchPerHead >= 1) {
      return 'bg-success text-dark rounded';
    } else if (merchPerHead < 1 && merchPerHead > 0.75) {
      return 'bg-warning text-dark rounded';
    } else if (percentCap < 0.75) {
      return 'bg-danger rounded';
    }
  }

  // Calculate net revnue
  const netRevenue = guarantee + netMerch;

  // Helper -> Calculate venue's cut of merch revenue
  function getVenueCut() {
    let venueSplit = (1 - split).toFixed(2);
    let venueCut = (gross * venueSplit).toFixed(2);
    return venueCut;
  }

  // Helper -> Set decimal places
  function getDecimals(num) {
    return num.toFixed(2);
  }

  // Helper -> Get percentage
  function getPercentage(num1, num2) {
    let rawPercent;

    if (num1 && num2) {
      rawPercent = (num1 / num2) * 100;
    } else {
      rawPercent = num1 * 100;
    }

    return rawPercent.toFixed(0);
  }

  return (
    <div>
      {/* Attendance Breakdown */}
      <div className="info-item row pb-5">
        <div className="col-12">
          <p className="h5 mb-1 small-heading">
            <i className="fas fa-users mr-2"></i>
            Attendance
          </p>
        </div>

        {/* Labels */}
        <div className="col-7">
          <p className="info-text-main mb-0">Capacity</p>
          <p className="info-text-main mb-0">Presale</p>
          <p className="info-text-main mb-0">Doors</p>
          <p className="info-text-main mb-0">Comps</p>
        </div>

        {/* Values */}
        <div className="col-5">
          <p className="info-text-main px-2 mb-0">{props.gig.venue.capacity}</p>
          <p className="info-text-main px-2 mb-0">{presale}</p>
          <p className="info-text-main px-2 mb-0">{doors}</p>
          <p className="info-text-main px-2 mb-0">{comps}</p>
          <hr />
        </div>

        {/* Insights */}
        <div className="col-7">
          <p className="info-text-main mb-0">Total</p>
          <p className="info-text-main mb-0">% Cap</p>
        </div>
        <div className="col-5">
          <p className="info-text-main px-2 mb-0">{totalAttendance}</p>
          <p
            className={`info-text-main px-2 mb-0 ${colorPercentCap()}`}
          >{`${percentCap}%`}</p>
        </div>
      </div>

      {/* Merch Revenue */}
      <div className="info-item row pb-5">
        <div className="col-12">
          <p className="h5 mb-1 small-heading">
            <i className="fas fa-record-vinyl mr-2"></i>
            Merchandise
          </p>
        </div>

        {/* Labels */}
        <div className="col-7">
          <p className="info-text-main mb-0">Artist Split</p>
          <p className="info-text-main mb-0">Gross Sales</p>
          <p className="info-text-main mb-0">Venue Cut</p>
        </div>

        {/* Values */}
        <div className="col-5">
          <p className="info-text-main px-2 mb-0">{`${getPercentage(
            split
          )}%`}</p>
          <p className="info-text-main px-2 mb-0">{`$${getDecimals(gross)}`}</p>
          <p className="info-text-main px-2 mb-0">{`$${venueCut}`}</p>
          <hr />
        </div>

        {/* Insights */}
        <div className="col-7">
          <p className="info-text-main mb-0">Net Revenue</p>
          <p className="info-text-main mb-0">Per Head</p>
        </div>
        <div className="col-5">
          <p className="info-text-main px-2 mb-0">{`$${getDecimals(
            netMerch
          )}`}</p>
          <p
            className={`info-text-main px-2 mb-0 ${colorPerHead()}`}
          >{`$${getDecimals(merchPerHead)}`}</p>
        </div>
      </div>

      {/* Net Revenue */}
      <div className="info-item row pb-5">
        <div className="col-12">
          <p className="h5 mb-1 small-heading">
            <i class="fas fa-comment-dollar mr-2"></i>
            Net Revenue
          </p>
        </div>

        {/* Labels */}
        <div className="col-7">
          <p className="info-text-main mb-0">Guarantee</p>
          <p className="info-text-main mb-0">Net Merch</p>
          <p className="info-text-main mb-0">Bonus</p>
        </div>

        {/* Values */}
        <div className="col-5">
          <p className="info-text-main px-2 mb-0">{`$${getDecimals(
            guarantee
          )}`}</p>
          <p className="info-text-main px-2 mb-0">{`$${getDecimals(
            netMerch
          )}`}</p>
          <p className="info-text-main px-2 mb-0">$0.00</p>
          <hr />
        </div>

        {/* Insights */}
        <div className="col-7">
          <p className="info-text-main mb-0">Net Revenue</p>
        </div>
        <div className="col-5">
          <p className="info-text-main px-2 mb-0">{`$${getDecimals(
            netRevenue
          )}`}</p>
        </div>
      </div>
    </div>
  );
}
