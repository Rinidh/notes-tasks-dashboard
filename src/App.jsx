import React, { useState } from 'react';
import { Create } from './components/Create';
import { CardsGrid } from './components/CardsGrid';
import './style/App.css';
import './style/fonts.css';

const App = () => {
  const [notes, setNotes] = useState([
    { id: 1, type: 'note', content: 'This is a sample note/quote.' },
  ]);
  const [tasks, setTasks] = useState([
    { id: 2, type: 'task', content: 'This is a sample task.' },
  ]);

  const handleCreateQuoteNote = (quoteObj) => {
    setNotes((notes) => [
      {
        id: notes.length + 1,
        type: 'note',
        content: quoteObj.quote,
        author: quoteObj.author,
      },
      ...notes,
    ]);
  };

  return (
    <div>
      <header>
        <h1 className="heading">Notes & Tasks Dashboard</h1>
        <Create onCreateQuoteNote={handleCreateQuoteNote} />
      </header>
      <main>
        <CardsGrid notes={notes} tasks={tasks} />
      </main>
    </div>
  );
};

export default App;
