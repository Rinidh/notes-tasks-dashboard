import React, { useEffect, useRef, useState } from 'react';
import '../style/CreateDialog.css';

export const CreateDialog = ({ onCreateNoteTask }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [newNoteTask, setNewNoteTask] = useState({ type: 'note', content: '' }); //newNoteTask means new note or new task
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    dialog.showModal();
    if (isOpen) {
      dialog.showModal();
      setNewNoteTask({ type: 'note', content: '' });
    } else dialog.close();
  }, [isOpen]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const handleOutsideClick = (e) => {
      if (e.target === dialog) setIsOpen(false); // don't dialog.close() from here as it would not update the state
    };
    const handleDialogClose = () => setIsOpen(false);

    document.addEventListener('click', handleOutsideClick);
    dialog.addEventListener('close', handleDialogClose);

    return () => {
      dialog.removeEventListener('close', handleDialogClose);
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <div className="create-dialog">
      <button className="lato-bold" onClick={() => setIsOpen(true)}>
        New Note/Task
      </button>
      <dialog ref={dialogRef}>
        <button
          className="lato-black close-btn"
          onClick={() => setIsOpen(false)}
        >
          &times;
        </button>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onCreateNoteTask(newNoteTask);
            setIsOpen(false);
          }}
        >
          <fieldset>
            <legend>Create a Note or a Task</legend>
            <div className="type-select">
              <label htmlFor="note">
                <input
                  type="radio"
                  name="type"
                  value="Note"
                  id="note"
                  onChange={() =>
                    setNewNoteTask((v) => ({ ...v, type: 'note' }))
                  }
                  checked={newNoteTask.type === 'note' ? true : false}
                />
                Note
              </label>
              <label htmlFor="task">
                <input
                  type="radio"
                  name="type"
                  value="Task"
                  id="task"
                  onChange={() =>
                    setNewNoteTask((v) => ({ ...v, type: 'task' }))
                  }
                  checked={newNoteTask.type === 'task' ? true : false}
                />
                Task
              </label>
            </div>
          </fieldset>
          <fieldset>
            <textarea
              name="content"
              value={newNoteTask.content}
              onChange={function (e) {
                setNewNoteTask((v) => ({ ...v, content: e.target.value }));
              }}
            ></textarea>
          </fieldset>

          <div className="buttons">
            <button type="submit" className="submit-btn">
              Create
            </button>
          </div>
        </form>
      </dialog>
    </div>
  );
};
