export const UPDATE_SEARCH_DATA = "UPDATE_SEARCH_DATA";
export const CLEAR_SEARCH_DATA = "CLEAR_SEARCH_DATA";

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
