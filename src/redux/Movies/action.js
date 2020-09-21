export const UPDATE_SEARCH_DATA = "UPDATE_SEARCH_DATA";
export const CLEAR_SEARCH_DATA = "CLEAR_SEARCH_DATA";
export const ADD_IN_TO_WATCH = "ADD_IN_TO_WATCH";
export const ADD_IN_WATCHING = "ADD_IN_WATCHING";
export const ADD_IN_WATCHED = "ADD_IN_WATCHED";

export const updateSearchData = (payload) => {
  return {
    type: UPDATE_SEARCH_DATA,
    payload,
  };
};

export const clearSearchData = () => {
  return {
    type: CLEAR_SEARCH_DATA,
  };
};

export const addInToWatch = (payload) => {
  return {
    type: ADD_IN_TO_WATCH,
    payload,
  };
};

export const addInWatching = (payload) => {
  return {
    type: ADD_IN_WATCHING,
    payload,
  };
};

export const addInWatched = (payload) => {
  return {
    type: ADD_IN_WATCHED,
    payload,
  };
};
