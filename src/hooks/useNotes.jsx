import { useEffect, useReducer } from 'react';

const notesReducer = (state, action) => {
  switch (action.type) {
    case 'create-quote-note': {
      return [
        {
          id: `note-${crypto?.randomUUID ? crypto.randomUUID() : Date.now()}`,
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
          id: `note-${crypto?.randomUUID ? crypto.randomUUID() : Date.now()}`,
          type: action.newNoteTask.type,
          content: action.newNoteTask.content,
        },
        ...state,
      ];
    }
    case 'delete': {
      return state.filter((note) => note.id !== action.id);
    }
  }
};

export function useNotes() {
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

  useEffect(
    () =>
      localStorage.setItem('noteTasksDashboard_notes', JSON.stringify(notes)),
    [notes]
  );

  return { notes, dispatchNotes };
}
