import { useEffect, useRef, useState } from 'react';
import '../style/Dialog.css';

export const Dialog = ({ quotes, isOpen, onOpen, onClose }) => {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (!isOpen) {
      dialog.close();
    } else {
      dialog.showModal();
    }
  }, [isOpen]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const handleOutsideClick = (e) => {
      if (e.target === dialog) onClose();
    };
    const handleDialogClose = (e) => onClose();

    document.addEventListener('click', handleOutsideClick);
    dialog.addEventListener('close', handleDialogClose);

    return () => {
      dialog.removeEventListener('close', handleDialogClose);
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <>
      <button onClick={onOpen}>Open dialog</button>
      <dialog ref={dialogRef}>
        <div className="content">
          <h2>Random Quote</h2>
          <p className="quote">{quotes[0]?.quote}</p>
          <p className="author">{quotes[0]?.author}</p>
        </div>
        <div className="buttons">
          <button className="close lato-bold" onClick={onClose}>
            Close
          </button>
          <button className="accept lato-bold">Accept</button>
        </div>
      </dialog>
    </>
  );
};
