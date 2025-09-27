import React from 'react';
import '../style/Create.css';
import '../style/fonts.css';
import useQuotes from '../hooks/useQuotes';
import { Dialog } from './Dialog';

export const Create = ({ onCreateQuoteNote }) => {
  const { error, quotes, loading, setTriggerFetch } = useQuotes();

  return (
    <div className="buttons-container">
      <Dialog
        quotes={quotes}
        loading={loading}
        onNextQuote={() => setTriggerFetch(true)}
        onCreateQuoteNote={onCreateQuoteNote}
      />
      <button className="new-note-btn lato-black">New Note/Task</button>
      <hr />
    </div>
  );
};
