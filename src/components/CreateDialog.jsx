import React, { useEffect, useRef, useState } from 'react';
import '../style/CreateDialog.css';

export const CreateDialog = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    // dialog.showModal()
    if (isOpen) dialog.showModal();
    else dialog.close();
  }, [isOpen]);

  return (
    <div>
      <button
        className="lato-bold new-note-btn"
        onClick={() => setIsOpen(true)}
      >
        New Note/Task
      </button>
      <dialog ref={dialogRef}>
        <button className="lato-black close-btn">&times;</button>
        <form>
          <fieldset>
            <legend>Create a Note or a Task</legend>
            <div className="type-select">
              <label htmlFor="note">
                <input type="radio" name="type" value="Note" id="note" />
                Note
              </label>
              <label htmlFor="task">
                <input type="radio" name="type" value="Task" id="task" />
                Task
              </label>
            </div>
          </fieldset>
          <fieldset>
            <textarea name="content"></textarea>
          </fieldset>

          <button>Create</button>
        </form>
      </dialog>
    </div>
  );
};
