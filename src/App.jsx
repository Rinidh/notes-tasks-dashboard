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
    // setNotes((notes) => [
    //   {
    //     id: `note-${notes.length + 1}`,
    //     type: 'note',
    //     content: quoteObj.quote,
    //     author: quoteObj.author,
    //   },
    //   ...notes,
    // ]);
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

    // Using setState() in concise way
    // const { type, content } = newNoteTask;
    // const setState =
    //   type === 'note' ? setNotes : type === 'task' ? setTasks : null;

    // setState((items) => [
    //   {
    //     id: `${items[0].id.split('-')[0]}-${items.length + 1}`,
    //     type,
    //     content,
    //     done: false,
    //   },
    //   ...items,
    // ]);

    // Using setState() in verbose way
    // if (newNoteTask.type === 'task') {
    //   setTasks((tasks) => [
    //     {
    //       id: `task-${tasks.length + 1}`,
    //       type: newNoteTask.type,
    //       content: newNoteTask.content,
    //     },
    //     ...tasks,
    //   ]);
    // }
    // if (newNoteTask.type === 'note') {
    //   setNotes((notes) => [
    //     {
    //       id: `note-${notes.length + 1}`,
    //       type: newNoteTask.type,
    //       content: newNoteTask.content,
    //     },
    //     ...notes,
    //   ]);
    // }
  };
  const handleToggleComplete = (id) => {
    dispatchTasks({
      type: 'toggle-complete',
      id,
    });
    // setTasks((tasks) =>
    //   tasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    // );
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
    // const setState =
    //   type === 'note' ? setNotes : type === 'task' ? setTasks : null;
    // setState((items) => items.filter((i) => i.id !== id));
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
