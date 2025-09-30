import { useState, useEffect } from 'react';

const apiKey = import.meta.env.VITE_QUOTES_API_KEY;

export default function useQuotes() {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [triggerFetch, setTriggerFetch] = useState(false);

  useEffect(() => {
    const fetchQuotes = async () => {
      if (!triggerFetch) return;

      setLoading(true);
      setError('');
      try {
        const response = await fetch('https://api.api-ninjas.com/v1/quotes', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'X-Api-Key': apiKey,
          },
        });
        const data = await response.json();

        if (data.error) {
          setError(data.error);
          console.error('Error in fetching quotes:', data.error);
        }

        // console.log(data);
        if (data instanceof Array) {
          setQuotes((prevQuotes) => [...prevQuotes, ...data]);
        }
      } catch (err) {
        console.error('Error in fetching quotes:', err);
        setError(err);
      } finally {
        setLoading(false);
        setTriggerFetch(false);
      }
    };
    fetchQuotes();
  }, [triggerFetch]);

  return { quotes, loading, error, triggerFetch, setTriggerFetch };
}
