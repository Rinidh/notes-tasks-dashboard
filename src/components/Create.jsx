import React from 'react';
import '../style/Create.css';
import '../style/fonts.css';

export const Create = ({ onQuoteFetch }) => {
  return (
    <div className="buttons-container">
      <button onClick={onQuoteFetch}>Random Quote</button>
      <button className="lato-black">New Note/Task</button>
      <hr />
    </div>
  );
};
