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

  return (
    <div>
      <header>
        <h1 className="heading">Notes & Tasks Dashboard</h1>
        <Create />
      </header>
      <main>
        <CardsGrid notes={notes} tasks={tasks} />
      </main>
    </div>
  );
};

export default App;
