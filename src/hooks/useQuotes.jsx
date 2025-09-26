import { useState, useEffect } from 'react';

const apiKey = process.env.REACT_APP_QUOTES_API_KEY;

export default function useQuotes() {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [triggerFetch, setTriggerFetch] = useState(false);

  useEffect(() => {
    const fetchQuotes = async () => {
      if (!triggerFetch) return;

      try {
        const response = await fetch('https://api.api-ninjas.com/v1/quotes', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'X-Api-Key': apiKey,
          },
        });
        const data = await response.json();

        console.log(data);
        setQuotes((prevQuotes) => [...prevQuotes, ...data]);
      } catch (err) {
        console.error('Error fetching quotes:', err);
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
