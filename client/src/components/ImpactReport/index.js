// Import dependencies
import React from 'react';
import dayjs from 'dayjs';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import './index.scss';

// Create and export ImpactReport component
export default function ImpactReport(props) {
  return (
    <div>
      {/* Ticket Sales */}
      <div className="info-item row">
        <div className="col-6 col-md-3">
          <p className="h5 mb-1 small-heading">Presale</p>
          <p className="info-text-main">{props.capacity}</p>
        </div>
        <div className="col-6 col-md-3">
          <p className="h5 mb-1 small-heading">Doors</p>
          <p className="info-text-main">{props.presale}</p>
        </div>
        <div className="col-6 col-md-3">
          <p className="h5 mb-1 small-heading">Total</p>
          <p className="info-text-main">0</p>
        </div>
        <div className="col-6 col-md-3">
          <p className="h5 mb-1 small-heading">% Cap</p>
          <p className="info-text-main">{`${parseInt(
            (props.presale / props.capacity) * 100
          )}%`}</p>
        </div>
      </div>

      {/* Merch Sales */}
      <div className="info-item row">
        <div className="col-12">
          <p className="h5 mb-1 small-heading">Item by Item</p>
          <hr />
        </div>

        {/* Product 1 */}
        <div className="col-12">
          <div className="row">
            <div className="col-7">
              <p className="h5">Bolt Tee (Yellow)</p>
            </div>
            <div className="col-2">
              <p className="h5">8</p>
            </div>
            <div className="col-3">
              <p className="h5">$15</p>
            </div>
          </div>
          <hr />

          {/* Product 2 */}
          <div className="row">
            <div className="col-7">
              <p className="h5">Bolt Tee (Blue)</p>
            </div>
            <div className="col-2">
              <p className="h5">8</p>
            </div>
            <div className="col-3">
              <p className="h5">$15</p>
            </div>
          </div>
          <hr />

          {/* Product 3 */}
          <div className="row">
            <div className="col-7">
              <p className="h5">Stripe Tee (Black)</p>
            </div>
            <div className="col-2">
              <p className="h5">8</p>
            </div>
            <div className="col-3">
              <p className="h5">$20</p>
            </div>
          </div>
          <hr />

          {/* Product 4 */}
          <div className="row">
            <div className="col-7">
              <p className="h5">Stripe Tee (White)</p>
            </div>
            <div className="col-2">
              <p className="h5">8</p>
            </div>
            <div className="col-3">
              <p className="h5">$20</p>
            </div>
          </div>
        </div>
      </div>

      {/* Merch Revenue */}
      <div className="info-item row">
        <div className="col-12">
          <p className="h5 mb-1 small-heading">Merch Revenue</p>
        </div>

        {/* Merch Revenue Breakdown */}
        <div className="col-8">
          <p className="info-text-main mb-0">Split</p>
          <p className="info-text-main mb-0">Gross</p>
          <p className="info-text-main mb-0">Venue Cut</p>
        </div>
        <div className="col-4">
          <p className="info-text-main mb-0">80/20</p>
          <p className="info-text-main mb-0">$750</p>
          <p className="info-text-main mb-0">$700</p>
          <hr />
        </div>

        {/* Net Merch Revenue */}
        <div className="col-8">
          <p className="info-text-main mb-0">Net Merch</p>
        </div>
        <div className="col-4">
          <p className="info-text-main mb-0">$700</p>
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
