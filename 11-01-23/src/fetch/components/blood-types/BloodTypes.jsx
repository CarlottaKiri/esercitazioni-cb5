import { useFetch } from "../../hooks/use-fetch";

import { ENDPOINTS } from "../../constants/endpoint";

export function BloodTypes() {
  const { data, error, loading, refetch } = useFetch(ENDPOINTS.BLOOD_TYPES);

  if (loading) return `Loading...`;

  if (error) return `Error`;

  return (
    <section className="blood-types">
      <h1 className="title">Blood Types</h1>
      <div className="content">
        <h2>{data?.type}</h2>
        <h4>{data?.rh_factor}</h4>
        <p>{data?.group}</p>
      </div>
      <button onClick={refetch}>🔄️</button>
    </section>
  );
}
