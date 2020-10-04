export const TOGGLE_SIDEBAR_NAV = "TOGGLE_SIDEBAR_NAV";
export const EDIT_CURRENT_MARATHON_NAME = "EDIT_CURRENT_MARATHON_NAME";
export const RESET_CURRENT_MARATHON_NAME = "RESET_CURRENT_MARATHON_NAME";

export const toggleSidebarNav = () => {
  return {
    type: TOGGLE_SIDEBAR_NAV,
  };
};

export const editCurrentMarathonName = (payload) => {
  return {
    type: EDIT_CURRENT_MARATHON_NAME,
    payload,
  };
};

export const resetCurrentMarathonName = () => {
  return {
    type: RESET_CURRENT_MARATHON_NAME,
  };
};
