// Import dependencies
import React from 'react';
import Card from 'react-bootstrap/Card';
import './index.scss';

// Create and export reusable card component
export default function CardBody(props) {
  return (
    <div className="dash-card p-3 p-md-4 m-2 m-md-0">
      {props.children}
    </div>
  );
}