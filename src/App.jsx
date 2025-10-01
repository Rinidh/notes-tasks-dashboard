import React, { useEffect, useState, useReducer } from 'react';
import { Create } from './components/Create';
import { CardsGrid } from './components/CardsGrid';
import './style/App.css';
import './style/fonts.css';
import { useNotes } from './hooks/useNotes';
import { useTasks } from './hooks/useTasks';

const App = () => {
  const { notes, dispatchNotes } = useNotes();
  const { tasks, dispatchTasks } = useTasks();

  useEffect(() => {
    localStorage.setItem('noteTasksDashboard_notes', JSON.stringify(notes));
    localStorage.setItem('noteTasksDashboard_tasks', JSON.stringify(tasks));
  }, [notes, tasks]);

  const handleCreateQuoteNote = (quoteObj) => {
    dispatchNotes({
      type: 'create-quote-note',
      quoteObj: quoteObj,
    });
  };

  const handleCreateNoteTask = (newNoteTask) => {
    if (newNoteTask.type === 'note') {
      dispatchNotes({
        type: 'create-new-note',
        newNoteTask,
      });
    }
    if (newNoteTask.type === 'task') {
      dispatchTasks({
        type: 'create-new-task',
        newNoteTask,
      });
    }
  };

  const handleToggleComplete = (id) => {
    dispatchTasks({
      type: 'toggle-complete',
      id,
    });
  };

  const handleDelete = (id, type) => {
    if (type === 'note') {
      dispatchNotes({
        type: 'delete',
        id,
      });
    }
    if (type === 'task') {
      dispatchTasks({
        type: 'delete',
        id,
      });
    }
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
          onDelete={handleDelete}
        />
      </main>
    </div>
  );
};

export default App;
