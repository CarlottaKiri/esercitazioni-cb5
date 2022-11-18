const GET = async (URL) => {
  const res = await fetch(URL);
  return await res.json();
};

const POST = async (URL, body) => {
  return await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
};

const DELETE = async (URL, id) => {
  return await fetch(`${URL}/${id}`, {
    method: "DELETE",
  });
};

const PATCH = async (URL, id, body) => {
  return await fetch(`${URL}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
};

export { GET, POST, DELETE, PATCH };
