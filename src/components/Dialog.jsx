import { useEffect, useRef, useState } from 'react';
import '../style/Dialog.css';

export const Dialog = ({ quotes, isOpen, onClose }) => {
  const openDialogRef = useRef(null);

  useEffect(() => {
    if (!isOpen) {
      openDialogRef.current.close();
    } else {
      openDialogRef.current.showModal();
    }
  }, [isOpen]);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open dialog</button>
      <dialog ref={openDialogRef}>
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
