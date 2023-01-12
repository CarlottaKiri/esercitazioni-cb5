import { useFetch } from "../../hooks/use-fetch";

import { ENDPOINTS } from "../../constants/endpoint";

export function Users() {
  const { data, error, loading, refetch } = useFetch(ENDPOINTS.USERS);

  if (loading) return `Loading...`;

  if (error) return `Error`;

  return (
    <section className="users">
      <h1 className="title">Users</h1>
      <div className="content">
        <h2>
          {data?.first_name}
          {data?.last_name}
        </h2>
        <h4>{data?.username}</h4>
        <p>{data?.email}</p>
      </div>
      <button onClick={refetch}>🔄️</button>
    </section>
  );
}
