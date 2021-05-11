// Import dependencies
import React from 'react';
import './index.scss';

// Create and export CardBody component
export default function CardBody(props) {
  return (
    <div className={`dash-card ${props.spacing} ${props.flex}`}>
      {props.children}
    </div>
  );
}