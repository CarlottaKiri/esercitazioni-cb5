import { useState, useEffect } from "react";

export function useFetch(urlToFetch) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const fetchData = () => {
    setData(null);
    setError(null);
    setLoading(true);

    fetch(urlToFetch)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  };
  useEffect(() => {
    fetchData();
  }, [urlToFetch]);

  return { data, error, loading, refetch: fetchData };
}
