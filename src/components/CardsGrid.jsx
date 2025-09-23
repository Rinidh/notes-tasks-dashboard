import React from 'react';
import { Card } from './Card';
import '../style/CardsGrid.css';

export const CardsGrid = ({ notes, tasks }) => {
  const cards = [...notes, ...tasks];

  return (
    <div className="cards-grid">
      {cards.map((card) => (
        <Card key={card.id} type={card.type}>
          {card.content}
        </Card>
      ))}
    </div>
  );
};
