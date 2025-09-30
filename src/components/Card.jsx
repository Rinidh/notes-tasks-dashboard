import React from 'react';
import '../style/Card.css';

export const Card = ({ infoObj, onToggleComplete, onDelete }) => {
  const { id, type, content, author, done = false } = infoObj;

  return (
    <div className={`card ${type} ${done ? 'is-completed' : ''}`}>
      {author ? <em>{content}</em> : content}
      <br />
      <br />
      <em>{author && author}</em>

      {type === 'task' && (
        <div
          className="toggle-complete"
          title="toggle complete"
          onClick={() => onToggleComplete(id)}
        >
          ✅
        </div>
      )}
      <div className="delete" title="delete" onClick={() => onDelete(id, type)}>
        ❌
      </div>
    </div>
  );
};
