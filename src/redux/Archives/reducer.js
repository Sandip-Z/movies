import { ADD_TO_ARCHIVE } from "./actions";

const initialStore = {
  archives: {
    // slugname: {
    //   watchlist: [],
    //   watchingList: [],
    //   watchedList: [],
    //   name: "Slug Name",
    // },
  },
};

export default (state = initialStore, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_TO_ARCHIVE:
      return {
        ...state,
        archives: {
          ...state.archives,
          [action.slugname]: { ...action.data },
        },
      };
    default:
      return state;
  }
};
