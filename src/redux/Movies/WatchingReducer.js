import { ADD_IN_WATCHING, REMOVE_FROM_WATCHING } from "./action";

const initialStore = {
  watching: [],
};

export default (state = initialStore, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_IN_WATCHING:
      return {
        ...state,
        watching: [...state.watching, payload],
      };
    case REMOVE_FROM_WATCHING:
      const filteredWatching = state.watching.filter(
        (movie) => movie.id !== payload
      );
      return {
        ...state,
        watching: [...filteredWatching],
      };
    default:
      return state;
  }
};
