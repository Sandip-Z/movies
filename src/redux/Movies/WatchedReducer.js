import {
  ADD_IN_WATCHED,
  MIGRATE_TO_WATCHED,
  REARRANGE_IN_WATCHED,
  REMOVE_FROM_WATCHED,
} from "./action";

import { rearrange } from "../../utils/arrays";

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
      const sourceIndex = state.watched.length;
      const rearrangedForWatched = rearrange(
        newWatched,
        sourceIndex,
        action.index
      );
      return {
        ...state,
        watched: rearrangedForWatched,
      };
    case REARRANGE_IN_WATCHED:
      const rearranged = rearrange(
        state.watched,
        action.source,
        action.destination
      );
      return {
        ...state,
        watched: rearranged,
      };
    default:
      return state;
  }
};
