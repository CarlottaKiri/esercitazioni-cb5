export default function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1, name: state.name };
    case "decrement":
      return { count: state.count - 1, name: state.name };
    default:
      throw new Error();
  }
}
