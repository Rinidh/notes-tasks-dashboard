import React from 'react';
import '../style/Card.css';

export const Card = ({ type, children }) => {
  return <div className={`card ${type}`}>{children}</div>;
};
