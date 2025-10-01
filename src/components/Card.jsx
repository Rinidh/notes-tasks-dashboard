import React from 'react';
import '../style/Card.css';

export const Card = ({ infoObj, onToggleComplete, onDelete }) => {
  const { id, type, content, author, done = false } = infoObj;

  return (
    <article
      className={`card ${type} ${done ? 'is-completed' : ''}`}
      aria-label={`${type} card`}
    >
      {author ? <em>{content}</em> : content}
      <br />
      <br />
      <em>{author && author}</em>

      {type === 'task' && (
        <button
          className="toggle-complete"
          title="toggle complete"
          onClick={() => onToggleComplete(id)}
          aria-pressed={done}
        >
          ✅
        </button>
      )}
      <button
        className="delete"
        title="delete"
        onClick={() => onDelete(id, type)}
      >
        ❌
      </button>
    </article>
  );
};
