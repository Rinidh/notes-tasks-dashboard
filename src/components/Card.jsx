import React from 'react';
import '../style/Card.css';

export const Card = ({ infoObj, onToggleComplete }) => {
  const { id, type, content, author } = infoObj;

  return (
    <div className={`card ${type}`}>
      {author ? <em>{content}</em> : content}
      <br />
      <br />
      <i>{author && author}</i>

      {type === 'task' && (
        <div
          className="toggle-complete"
          title="toggle complete"
          onClick={() => onToggleComplete(id)}
        >
          ✅
        </div>
      )}
      <div className="delete" title="delete">
        ❌
      </div>
    </div>
  );
};
