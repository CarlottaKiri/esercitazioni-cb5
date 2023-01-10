import "./bank.scss";
import { useEffect, useState } from "react";

const API = {
  url: `https://random-data-api.com/api/v2/banks`,
};

function RandomBank() {
  const [bank, setBank] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchBank = () => {
    setLoading(true);
    setError(null);

    fetch(API.url)
      .then((res) => res.json())
      .then((res) => {
        setBank(res);
      })
      .catch((error) => {
        console.log(`ERRORE: ${error}`);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchBank();
  }, []);

  return { bank, loading, setLoading, error, fetchBank };
}

export function Bank() {
  const { bank, loading, error, fetchBank } = RandomBank();

  if (loading) {
    return "Bank Loading";
  }
  if (error || !bank) {
    return "ERROR";
  }

  const { id, account_number, iban, bank_name } = bank;

  return (
    <div className="bank-content">
      <h1 className="bank-title">Bank List:</h1>

      <h2>Bank Name: {bank_name}</h2>
      <h3>ID: {id}</h3>
      <h3>Account Number: {account_number}</h3>
      <h3>IBAN: {iban}</h3>

      <button className="button" onClick={() => fetchBank()}>
        Generate New Bank
      </button>
    </div>
  );
}
