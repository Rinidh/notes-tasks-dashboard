import React from 'react';
import { Card } from './Card';
import '../style/CardsGrid.css';

export const CardsGrid = ({ notes, tasks, onToggleComplete, onDelete }) => {
  const cards = [...notes, ...tasks];

  return (
    <div className="cards-grid">
      {cards.map((card) => (
        <Card
          key={card.id}
          infoObj={card}
          onToggleComplete={onToggleComplete}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};
