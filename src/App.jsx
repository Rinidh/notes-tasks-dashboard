import React, { useEffect, useState } from 'react';
import { Create } from './components/Create';
import { CardsGrid } from './components/CardsGrid';
import './style/App.css';
import './style/fonts.css';

const App = () => {
  const [notes, setNotes] = useState(
    () =>
      JSON.parse(localStorage.getItem('noteTasksDashboard_notes')) || [
        {
          id: 'note-1',
          type: 'note',
          content: 'This is a sample note/quote.',
        },
      ]
  );
  const [tasks, setTasks] = useState(
    () =>
      JSON.parse(localStorage.getItem('noteTasksDashboard_tasks')) || [
        {
          id: 'task-1',
          type: 'task',
          content: 'This is a sample task.',
          done: false,
        },
      ]
  );

  useEffect(() => {
    localStorage.setItem('noteTasksDashboard_notes', JSON.stringify(notes));
    localStorage.setItem('noteTasksDashboard_tasks', JSON.stringify(tasks));
  }, [notes, tasks]);

  const handleCreateQuoteNote = (quoteObj) => {
    setNotes((notes) => [
      {
        id: `note-${notes.length + 1}`,
        type: 'note',
        content: quoteObj.quote,
        author: quoteObj.author,
      },
      ...notes,
    ]);
  };
  const handleCreateNoteTask = (newNoteTask) => {
    if (newNoteTask.type === 'task') {
      setTasks((tasks) => [
        {
          id: `task-${tasks.length + 1}`,
          type: newNoteTask.type,
          content: newNoteTask.content,
        },
        ...tasks,
      ]);
    }
    if (newNoteTask.type === 'note') {
      setNotes((notes) => [
        {
          id: `note-${notes.length + 1}`,
          type: newNoteTask.type,
          content: newNoteTask.content,
        },
        ...notes,
      ]);
    }
  };
  const handleToggleComplete = (id) => {
    setTasks((tasks) =>
      tasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    );
  };

  return (
    <div className="app">
      <header>
        <h1 className="heading">Notes & Tasks Dashboard</h1>
        <Create
          onCreateQuoteNote={handleCreateQuoteNote}
          onCreateNoteTask={handleCreateNoteTask}
        />
      </header>
      <main>
        <CardsGrid
          notes={notes}
          tasks={tasks}
          onToggleComplete={handleToggleComplete}
        />
      </main>
    </div>
  );
};

export default App;
