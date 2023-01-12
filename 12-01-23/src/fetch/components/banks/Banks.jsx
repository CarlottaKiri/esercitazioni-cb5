import { useFetch } from "../../hooks/use-fetch";
import "./banks.css";
import { ENDPOINTS } from "../../constants/endpoint";

export function Banks() {
  const { data, error, loading, refetch } = useFetch(ENDPOINTS.BANKS);

  if (loading) return `Loading...`;

  if (error) return `Error`;

  return (
    <section className="banks">
      <h1 className="title">Banks</h1>
      <div className="content">
        <h2 className="bank-name">{data?.bank_name}</h2>
        <h4>{data?.id}</h4>
        <p>{data?.iban}</p>
      </div>
      <button onClick={refetch}>🔄️</button>
    </section>
  );
}
