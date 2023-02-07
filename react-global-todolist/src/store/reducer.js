const mainReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO_TO_LIST":
      console.log(state);
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };
    case "SET_TODO_ITEM_DONE":
      return {
        ...state,
        todoList: state.todoList,
      };
    default:
      return state;
  }
};

export default mainReducer;
