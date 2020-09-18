import { UPDATE_SEARCH_DATA, CLEAR_SEARCH_DATA } from "./action";

const initialState = {
  searchData: [],
  toWatch: [],
  watching: [],
  watched: [],
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case UPDATE_SEARCH_DATA:
      return {
        ...state,
        searchData: payload,
      };
    case CLEAR_SEARCH_DATA:
      console.log("clearing search data");
      return {
        ...state,
        searchData: [],
      };
    default:
      return state;
  }
};
