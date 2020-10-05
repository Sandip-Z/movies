import { ADD_TO_ARCHIVE } from "./actions";

const initialStore = {
  //   slugname: {
  //     watchlist: [],
  //     watchingList: [],
  //     watchedList: [],
  //     name: "",
  //   },
};

export default (state = initialStore, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_TO_ARCHIVE:
      return {
        ...state,
        [payload.slugname]: payload.data,
      };
    default:
      return state;
  }
};
