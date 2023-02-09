import { actions } from "./actions";

const mainReducer = (state, action) => {
  switch (action.type) {
    case actions.ADD_TODO_TO_LIST:
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
      localStorage.setItem("Book-app-username", action.payload);
      return {
        ...state,
        user: {
          ...state.user,
          username: action.payload,
        },
      };
    case actions.REMOVE_USERNAME:
      localStorage.removeItem("Book-app-username");
      return {
        ...state,
        user: {
          ...state.user,
          username: "",
        },
      };
    default:
      return state;
  }
};

export default mainReducer;
