import { useFetch } from "../../hooks/use-fetch";

import { ENDPOINTS } from "../../constants/endpoint";

export function Beers() {
  const { data, error, loading, refetch } = useFetch(ENDPOINTS.BEERS);

  if (loading) return `Loading...`;

  if (error) return `Error`;

  return (
    <section className="beers">
      <h1 className="title">Beers</h1>
      <div className="content">
        <h2>{data?.name}</h2>
        <h4>{data?.brand}</h4>
        <p>{data?.alcohol}</p>
      </div>
      <button onClick={refetch}>🔄️</button>
    </section>
  );
}
