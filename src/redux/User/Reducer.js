import { USERS_ABILITY_TO_SUGGEST } from "./Action";

const initialState = {
  abilityToSuggest: true,
  name: "sandip satyal",
  email: undefined,
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case USERS_ABILITY_TO_SUGGEST:
      return {
        ...state,
        abilityToSuggest: payload,
      };
    default:
      return state;
  }
};
