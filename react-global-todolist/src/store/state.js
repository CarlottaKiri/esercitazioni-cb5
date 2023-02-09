const initialState = {
  bookList: [
    {
      id: 1,
      content: "Pride & Prejudice",
      status: false,
    },
    {
      id: 2,
      content: "Harry Potter",
      status: false,
    },
    {
      id: 3,
      content: "The Witcher",
      status: false,
    },
  ],
  initialBookList: [
    {
      id: 1,
      content: "Pride & Prejudice",
      status: false,
    },
    {
      id: 2,
      content: "Harry Potter",
      status: false,
    },
    {
      id: 3,
      content: "The Witcher",
      status: false,
    },
  ],
  user: {
    username: localStorage.getItem("Book-app-username"),
  },
};

export default initialState;
