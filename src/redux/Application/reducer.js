import { TOGGLE_SIDEBAR_NAV } from "./action";

const initialStore = {
  sideNavbarOpen: false,
};

export default (state = initialStore, action) => {
  const { type, payload } = action;
  switch (type) {
    case TOGGLE_SIDEBAR_NAV:
      return {
        ...state,
        sideNavbarOpen: !state.sideNavbarOpen,
      };
    default:
      return state;
  }
};
