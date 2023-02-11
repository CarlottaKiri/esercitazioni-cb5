import { actions } from "./actions";

const mainReducer = (state, action) => {
  switch (action.type) {
    case actions.ADD_TODO_TO_LIST:
      localStorage.setItem(
        "book-list",
        JSON.stringify([...state.bookList, action.payload])
      );
      localStorage.setItem(
        "initial-book-list",
        JSON.stringify([...state.initialBookList, action.payload])
      );
      return {
        ...state,
        bookList: [...state.bookList, action.payload],
      };
    case actions.SET_TODO_ITEM_DONE:
      return {
        ...state,
        bookList: state.bookList.map((item) =>
          item.id === action.payload
            ? {
                ...item,
                status: !item.status,
              }
            : item
        ),
      };
    case actions.REMOVE_TODO_FROM_LIST:
      return {
        ...state,
        bookList: state.bookList.filter((item) => item.id !== action.payload),
      };
    case actions.ON_SEARCH_BOOK:
      return {
        ...state,
        bookList: state.initialBookList.filter((item) =>
          item.content.toLowerCase().includes(action.payload.toLowerCase())
        ),
      };
    case actions.SET_USERNAME:
      let users = state.users;

      let currentUser = users.find((user) => user.username === action.payload);

      if (!currentUser) {
        currentUser = { username: action.payload, bookList: [] };
        users.push(currentUser);
        localStorage.setItem("users", JSON.stringify(users));
      }
      return {
        ...state,
        user: currentUser,
      };

    case actions.REMOVE_USERNAME:
      return {
        ...state,
        user: {},
      };
    default:
      return state;
  }
};

export default mainReducer;
