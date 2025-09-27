import React, { useState } from 'react';
import { Create } from './components/Create';
import { CardsGrid } from './components/CardsGrid';
import './style/App.css';
import './style/fonts.css';
import useQuotes from './hooks/useQuotes';
import { Dialog } from './components/Dialog';

const App = () => {
  const [notes, setNotes] = useState([
    { id: 1, type: 'note', content: 'This is a sample note/quote.' },
  ]);
  const [tasks, setTasks] = useState([
    { id: 2, type: 'task', content: 'This is a sample task.' },
  ]);
  const [isOpen, setIsOpen] = useState(false);

  const { error, quotes, loading, setTriggerFetch } = useQuotes();

  return (
    <div>
      <header>
        <h1 className="heading">Notes & Tasks Dashboard</h1>
        <Create
          onQuoteFetch={() => {
            setIsOpen(true);
            setTriggerFetch(true);
          }}
        />
      </header>
      <main>
        <CardsGrid notes={notes} tasks={tasks} />
        <Dialog
          quotes={quotes}
          isOpen={isOpen}
          onOpen={() => setIsOpen(true)}
          onClose={() => setIsOpen(false)}
          loading={loading}
          onNextQuote={() => setTriggerFetch(true)}
        />
      </main>
    </div>
  );
};

export default App;
