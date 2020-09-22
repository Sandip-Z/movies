import {
  ADD_IN_WATCHED,
  MIGRATE_TO_WATCHED,
  REMOVE_FROM_WATCHED,
} from "./action";

const initialStore = {
  watched: [],
};

export default (state = initialStore, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_IN_WATCHED:
      return {
        ...state,
        watched: [...state.watched, payload],
      };
    case REMOVE_FROM_WATCHED:
      const filteredWatched = state.watched.filter(
        (movie) => movie.id != payload
      );
      return {
        ...state,
        watched: [...filteredWatched],
      };
    case MIGRATE_TO_WATCHED:
      const newWatched = [...state.watched, payload];
      console.log(payload);
      return {
        ...state,
        watched: newWatched,
      };
    default:
      return state;
  }
};
