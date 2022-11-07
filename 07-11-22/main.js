// USERS FETCH

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((json) => {
    const users = json.map(function (info) {
      return {
        name: info.name,
        address: info.address,
        city: info.address.city,
      };
    });
    console.log(users);
  })
  .catch((error) => console.log("error:" + error))
  .finally(() => console.log("done users"));

// TODOS FETCH

fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then((json) => {
    const todos = json.map(function (info) {
      return {
        id: info.id,
        title: info.title,
      };
    });
    console.log(todos);
  })
  .catch((error) => console.log("error:" + error))
  .finally(() => console.log("done todos"));
