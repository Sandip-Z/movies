import {
  TOGGLE_SIDEBAR_NAV,
  EDIT_CURRENT_MARATHON_NAME,
  RESET_CURRENT_MARATHON_NAME,
} from "./action";

const initialStore = {
  sideNavbarOpen: false,
  currentMarathonName: "Current Marathon Name",
};

export default (state = initialStore, action) => {
  const { type, payload } = action;
  switch (type) {
    case TOGGLE_SIDEBAR_NAV:
      return {
        ...state,
        sideNavbarOpen: !state.sideNavbarOpen,
      };
    case EDIT_CURRENT_MARATHON_NAME:
      return {
        ...state,
        currentMarathonName: payload,
      };
    case RESET_CURRENT_MARATHON_NAME:
      return {
        ...state,
        currentMarathonName: "Current Marathon Name",
      };
    default:
      return state;
  }
};
