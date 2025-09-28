import React from 'react';
import '../style/Create.css';
import '../style/fonts.css';
import useQuotes from '../hooks/useQuotes';
import { QuoteDialog } from './QuoteDialog';
import { CreateDialog } from './CreateDialog';

export const Create = ({ onCreateQuoteNote, onCreateNoteTask }) => {
  const { error, quotes, loading, setTriggerFetch } = useQuotes();

  return (
    <div className="create">
      <QuoteDialog
        quotes={quotes}
        loading={loading}
        onNextQuote={() => setTriggerFetch(true)}
        onCreateQuoteNote={onCreateQuoteNote}
      />
      <CreateDialog onCreateNoteTask={onCreateNoteTask} />
      <hr />
    </div>
  );
};
