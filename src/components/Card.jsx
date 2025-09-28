import React from 'react';
import '../style/Card.css';

export const Card = ({ infoObj }) => {
  return (
    <div className={`card ${infoObj.type}`}>
      {infoObj.author ? <em>{infoObj.content}</em> : infoObj.content}
      <br />
      <br />
      <i>{infoObj.author}</i>
    </div>
  );
};
