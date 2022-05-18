import { useState } from 'react';

function useFetch(url, onReceived) {
  const [error, setError] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const performFetch = () => {
    setError(false);
    setIsLoading(true);

    const callFetch = async () => {
      const response = await fetch(url);
      if (!response.ok) {
        console.error(response);
        setError(true);
      }
      const data = await response.json();
      onReceived(data);
      setIsLoading(false);
    };

    try {
      callFetch();
    } catch (error) {
      console.error(error);
      setError(true);
      setIsLoading(false);
    }
  };

  return [isLoading, error, performFetch];
}

export default useFetch;
