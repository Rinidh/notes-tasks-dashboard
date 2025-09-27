import { useEffect, useRef, useState } from 'react';
import '../style/Dialog.css';

export const Dialog = ({ isOpen, onClose }) => {
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
        <div className="content">content</div>
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
