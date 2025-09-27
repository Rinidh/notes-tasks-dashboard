import { useEffect, useRef, useState } from 'react';
import '../style/Dialog.css';

export const Dialog = ({
  quotes,
  isOpen,
  onOpen,
  onClose,
  loading,
  onNextQuote,
}) => {
  const [previousCount, setPreviousCount] = useState(0);
  const dialogRef = useRef(null);

  const latestQuoteIndex = quotes.length - 1 < 0 ? 0 : quotes.length - 1;
  const currentQuoteIndex = latestQuoteIndex - previousCount;

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (!isOpen) {
      dialog.close();
    } else {
      dialog.showModal();
    }
  }, [isOpen]);
  console.log(loading);

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

  const handleOpen = () => {
    onOpen();
    setPreviousCount(0);
  };
  const handleNext = () => {
    if (currentQuoteIndex === latestQuoteIndex) {
      onNextQuote();
      setPreviousCount(0);
    } else {
      setPreviousCount((c) => Math.max(0, c - 1));
    }
  };
  const handlePrevious = () => {
    setPreviousCount((c) => (currentQuoteIndex > 0 ? c + 1 : c)); // prevent stepping back more than there are items in the array
  };

  return (
    <>
      <button onClick={handleOpen}>Open dialog</button>
      <dialog ref={dialogRef}>
        <div className="content">
          <h2>Random Quote</h2>
          <div className="quote">
            <button className="lato-black" onClick={handlePrevious}>
              &lt;
            </button>
            <p>{loading ? 'Loading...' : quotes[currentQuoteIndex]?.quote}</p>
            <button className="lato-black" onClick={handleNext}>
              &gt;
            </button>
          </div>
          <p className="author">{quotes[currentQuoteIndex]?.author}</p>
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
