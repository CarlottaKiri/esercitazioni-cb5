const BASE_URL = "https://dummyjson.com";

const GET = async (resource) => {
  try {
    const res = await fetch(`${BASE_URL}/${resource}`);

    if (res.status >= 400) {
      throw new Error("Error");
    }

    const data = await res.json();

    return data;
  } catch (err) {
    return { status: false };
  } finally {
  }
};

const POST = async (resource, body) => {
  const res = await fetch(`${BASE_URL}/${resource}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const data = await res.json();

  return data;
};

export { GET, POST };
