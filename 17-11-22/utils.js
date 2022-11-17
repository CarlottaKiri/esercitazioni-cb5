export const qs = (type) => document.querySelector(type);

export const ce = (type) => document.createElement(type);

export const GET = async (BASE_URL) =>
  await fetch(BASE_URL)
    .then((res) => res.json())
    .then((data) => data);

export const POST = async (URL, body) => {
  return await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
};
