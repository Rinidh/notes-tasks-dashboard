import React from 'react';

export const CardsGrid = () => {
  const arr = Array(4);
  return (
    <div className="row">
      {arr.map((_, index) => {
        return <div className="col-4">{`${index + 1}`}</div>;
      })}
    </div>
  );
};
