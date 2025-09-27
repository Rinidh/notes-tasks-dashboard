import { useEffect, useRef, useState } from 'react';
import '../style/Dialog.css';

export const Dialog = ({ quotes, loading, onNextQuote, onCreateQuoteNote }) => {
  const [isOpen, setIsOpen] = useState(false);

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

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const handleOutsideClick = (e) => {
      if (e.target === dialog) setIsOpen(false);
    };
    const handleDialogClose = () => setIsOpen(false);

    document.addEventListener('click', handleOutsideClick);
    dialog.addEventListener('close', handleDialogClose);

    return () => {
      dialog.removeEventListener('close', handleDialogClose);
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const handleOpen = () => {
    setIsOpen(true);
    setPreviousCount(0);
    onNextQuote();
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
  const handleAccept = () => {
    onCreateQuoteNote(quotes[currentQuoteIndex]);
    setIsOpen(false);
  };

  return (
    <>
      <button onClick={handleOpen} className="random-quote-btn">
        Random Quote
      </button>
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
          <button className="close lato-bold" onClick={() => setIsOpen(false)}>
            Close
          </button>
          <button className="accept lato-bold" onClick={handleAccept}>
            Accept
          </button>
        </div>
      </dialog>
    </>
  );
};
