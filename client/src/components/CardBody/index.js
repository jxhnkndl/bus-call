// Import dependencies
import React from 'react';
import Card from 'react-bootstrap/Card';
import './index.scss';

// Create and export reusable card component
export default function CardBody(props) {
  return (
    <div className={`dash-card ${props.spacing}`}>
      {props.children}
    </div>
  );
}