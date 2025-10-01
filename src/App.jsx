import React, { useEffect, useState, useReducer } from 'react';
import { Create } from './components/Create';
import { CardsGrid } from './components/CardsGrid';
import './style/App.css';
import './style/fonts.css';

const notesReducer = (state, action) => {
  switch (action.type) {
    case 'create-quote-note': {
      return [
        {
          id: state.length + 1,
          type: 'note',
          content: action.quoteObj.quote,
          author: action.quoteObj.author,
        },
        ...state,
      ];
    }
    case 'create-new-note': {
      return [
        {
          id: 'note-' + state.length + 1,
          type: action.newNoteTask.type,
          content: action.newNoteTask.content,
        },
        ...state,
      ];
    }
  }
};

const tasksReducer = (state, action) => {
  switch (action.type) {
    case 'create-new-task': {
      return [
        {
          id: 'task-' + state.length + 1,
          type: action.newNoteTask.type,
          content: action.newNoteTask.content,
          done: false,
        },
        ...state,
      ];
    }
    case 'toggle-complete': {
      return state.map((t) =>
        t.id === action.id ? { ...t, done: !t.done } : t
      );
    }
  }
};

const App = () => {
  const [notes, dispatchNotes] = useReducer(
    notesReducer,
    null,
    () =>
      JSON.parse(localStorage.getItem('noteTasksDashboard_notes')) || [
        {
          id: 'note-1',
          type: 'note',
          content: 'This is a sample note/quote.',
        },
      ]
  );
  // const [notes, setNotes] = useState(
  //   () =>
  //     JSON.parse(localStorage.getItem('noteTasksDashboard_notes')) || [
  //       {
  //         id: 'note-1',
  //         type: 'note',
  //         content: 'This is a sample note/quote.',
  //       },
  //     ]
  // );

  const [tasks, dispatchTasks] = useReducer(tasksReducer, null, () => {
    return (
      JSON.parse(localStorage.getItem('noteTasksDashboard_tasks')) || [
        {
          id: 'task-1',
          type: 'task',
          content: 'This is a sample task.',
          done: false,
        },
      ]
    );
  });
  // const [tasks, setTasks] = useState(
  //   () =>
  //     JSON.parse(localStorage.getItem('noteTasksDashboard_tasks')) || [
  //       {
  //         id: 'task-1',
  //         type: 'task',
  //         content: 'This is a sample task.',
  //         done: false,
  //       },
  //     ]
  // );

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
    const setState =
      type === 'note' ? setNotes : type === 'task' ? setTasks : null;

    setState((items) => items.filter((i) => i.id !== id));
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
          // onDelete={handleDelete}
        />
      </main>
    </div>
  );
};

export default App;
