import {
  ADD_IN_WATCHING,
  MIGRATE_TO_WATCHING,
  REARRANGE_IN_WATCHING,
  REMOVE_FROM_WATCHING,
  CLEAN_WATCHING,
} from "./action";

import { rearrange } from "../../utils/arrays";

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
        (movie) => movie.id != payload
      );
      return {
        ...state,
        watching: [...filteredWatching],
      };
    case MIGRATE_TO_WATCHING:
      const newWatching = [...state.watching, payload];
      const sourceIndex = state.watching.length;
      const rearrangedForMigrate = rearrange(
        newWatching,
        sourceIndex,
        action.index
      );
      return {
        ...state,
        watching: rearrangedForMigrate,
      };
    case REARRANGE_IN_WATCHING:
      const rearranged = rearrange(
        state.watching,
        action.source,
        action.destination
      );
      return {
        ...state,
        watching: rearranged,
      };
    case CLEAN_WATCHING:
      return {
        ...state,
        watching: [],
      };
    default:
      return state;
  }
};
