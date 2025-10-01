import { useEffect, useReducer } from 'react';

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
    case 'delete': {
      return state.filter((task) => task.id !== action.id);
    }
  }
};

export function useTasks() {
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

  useEffect(
    () =>
      localStorage.setItem('noteTasksDashboard_tasks', JSON.stringify(tasks)),
    [tasks]
  );

  return { tasks, dispatchTasks };
}
