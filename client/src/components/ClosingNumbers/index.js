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

  // Init calculated insights
  const totalAttendance = presale + doors;
  const venueCut = getVenueCut();
  const netMerch = gross - venueCut;

  // Set decimal places
  function getDecimals(num) {
    return num.toFixed(2);
  }

  // Convert to percentage
  function getPercentage(num1, num2) {
    let rawPercent;

    if (num1 && num2) {
      rawPercent = (num1 / num2) * 100;
    } else {
      rawPercent = num1 * 100;
    }

    return rawPercent.toFixed(0);
  };

  // Calculate percentage of merch sales taken by venue
  function getVenueCut() {
    let venueSplit = (1 - split).toFixed(2);
    let venueCut = (gross * venueSplit).toFixed(2);
    return venueCut;
  }



  return (
    <div>
      {/* Attendance Breakdown */}
      <div className="info-item row">
        <div className="col-12">
          <p className="h5 mb-1 small-heading">Attendance</p>
        </div>

        {/* Figures */}
        <div className="col-8">
          <p className="info-text-main mb-0">Capacity</p>
          <p className="info-text-main mb-0">Presale</p>
          <p className="info-text-main mb-0">Doors</p>
          <p className="info-text-main mb-0">Comps</p>
        </div>
        <div className="col-4">
          <p className="info-text-main mb-0">{props.gig.venue.capacity}</p>
          <p className="info-text-main mb-0">{presale}</p>
          <p className="info-text-main mb-0">{doors}</p>
          <p className="info-text-main mb-0">{comps}</p>
          <hr />
        </div>

        {/* Insights */}
        <div className="col-8">
          <p className="info-text-main mb-0">Total</p>
          <p className="info-text-main mb-0">% Cap</p>
        </div>
        <div className="col-4">
          <p className="info-text-main mb-0">{totalAttendance}</p>
          <p className="info-text-main mb-0">{`${getPercentage(
            totalAttendance,
            capacity
          )}%`}</p>
        </div>
      </div>

      {/* Merch Revenue */}
      <div className="info-item row">
        <div className="col-12">
          <p className="h5 mb-1 small-heading">Merchandise</p>
        </div>

        {/* Merch Revenue Breakdown */}
        <div className="col-8">
          <p className="info-text-main mb-0">Artist Split</p>
          <p className="info-text-main mb-0">Gross Sales</p>
          <p className="info-text-main mb-0">Venue Cut</p>
        </div>
        <div className="col-4">
          <p className="info-text-main mb-0">{`${getPercentage(split)}%`}</p>
          <p className="info-text-main mb-0">{`$${getDecimals(gross)}`}</p>
          <p className="info-text-main mb-0">{`$${venueCut}`}</p>
          <hr />
        </div>

        {/* Net Merch Revenue */}
        <div className="col-8">
          <p className="info-text-main mb-0">Net Revenue</p>
          <p className="info-text-main mb-0">Per Head</p>
        </div>
        <div className="col-4">
          <p className="info-text-main mb-0">{`$${getDecimals(netMerch)}`}</p>
          <p className="info-text-main mb-0">{`$${getDecimals(netMerch / totalAttendance)}`}</p>
        </div>
      </div>

      {/* Closing Numbers */}
      <div className="info-item row">
        <div className="col-12">
          <p className="h5 mb-1 small-heading">Closing</p>
        </div>

        <div className="col-8">
          <p className="info-text-main mb-0">Guarantee</p>
          <p className="info-text-main mb-0">Net Merch</p>
          <p className="info-text-main mb-0">Bonus</p>
        </div>
        <div className="col-4">
          <p className="info-text-main mb-0">$1000</p>
          <p className="info-text-main mb-0">$700</p>
          <p className="info-text-main mb-0">$0</p>
          <hr />
        </div>

        {/* Takaway */}
        <div className="col-8">
          <p className="info-text-main mb-0">Takeaway</p>
        </div>
        <div className="col-4">
          <p className="info-text-main mb-0">$1700</p>
        </div>
      </div>
    </div>
  );
}
