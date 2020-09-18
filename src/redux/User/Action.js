export const USERS_ABILITY_TO_SUGGEST = "USERS_ABILITY_TO_SUGGEST";

export const usersAbilityToSuggest = (payload) => {
  return {
    type: USERS_ABILITY_TO_SUGGEST,
    payload,
  };
};
