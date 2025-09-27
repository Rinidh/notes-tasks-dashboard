import React from 'react';
import '../style/Create.css';
import '../style/fonts.css';
import useQuotes from '../hooks/useQuotes';
import { Dialog } from './Dialog';

export const Create = () => {
  const { error, quotes, loading, setTriggerFetch } = useQuotes();

  return (
    <div className="buttons-container">
      <Dialog
        quotes={quotes}
        loading={loading}
        onNextQuote={() => setTriggerFetch(true)}
      />
      <button className="new-note-btn lato-black">New Note/Task</button>
      <hr />
    </div>
  );
};
