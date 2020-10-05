export const UPDATE_SEARCH_DATA = "UPDATE_SEARCH_DATA";
export const CLEAR_SEARCH_DATA = "CLEAR_SEARCH_DATA";
export const ADD_IN_TO_WATCH = "ADD_IN_TO_WATCH";
export const ADD_IN_WATCHING = "ADD_IN_WATCHING";
export const ADD_IN_WATCHED = "ADD_IN_WATCHED";
export const REMOVE_FROM_TO_WATCH = "REMOVE_FROM_TO_WATCH";
export const REMOVE_FROM_WATCHING = "REMOVE_FROM_WATCHING";
export const REMOVE_FROM_WATCHED = "REMOVE_FROM_WATCHED";
export const MIGRATE_TO_TO_WATCH = "MIGRATE_TO_TO_WATCH";
export const MIGRATE_TO_WATCHING = "MIGRATE_TO_WATCHING";
export const MIGRATE_TO_WATCHED = "MIGRATE_TO_WATCHED";
export const REARRANGE_IN_TO_WATCH = "REARRANGE_IN_TO_WATCH";
export const REARRANGE_IN_WATCHING = "REARRANGE_IN_WATCHING";
export const REARRANGE_IN_WATCHED = "REARRANGE_IN_WATCHED";
export const CLEAN_TO_WATCH = "CLEAN_TO_WATCH";
export const CLEAN_WATCHING = "CLEAN_WATCHING";
export const CLEAN_WATCHED = "CLEAN_WATCHED";

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

export const removeFromToWatch = (payload) => {
  return {
    type: REMOVE_FROM_TO_WATCH,
    payload,
  };
};

export const removeFromWatching = (payload) => {
  return {
    type: REMOVE_FROM_WATCHING,
    payload,
  };
};

export const removeFromWatched = (payload) => {
  return {
    type: REMOVE_FROM_WATCHED,
    payload,
  };
};

export const migrateToToWatch = (payload, index) => {
  return {
    type: MIGRATE_TO_TO_WATCH,
    payload,
    index,
  };
};

export const migrateToWatching = (payload, index) => {
  return {
    type: MIGRATE_TO_WATCHING,
    payload,
    index,
  };
};

export const migrateToWatched = (payload, index) => {
  return {
    type: MIGRATE_TO_WATCHED,
    payload,
    index,
  };
};

export const rearrangeInToWatch = (source, destination) => {
  return {
    type: REARRANGE_IN_TO_WATCH,
    source,
    destination,
  };
};

export const rearrangeInWatching = (source, destination) => {
  return {
    type: REARRANGE_IN_WATCHING,
    source,
    destination,
  };
};

export const rearrangeInWatched = (source, destination) => {
  return {
    type: REARRANGE_IN_WATCHED,
    source,
    destination,
  };
};

export const cleanToWatch = () => {
  return {
    type: CLEAN_TO_WATCH,
  };
};

export const cleanWatching = () => {
  return {
    type: CLEAN_WATCHING,
  };
};

export const cleanWatched = () => {
  return {
    type: CLEAN_WATCHED,
  };
};
