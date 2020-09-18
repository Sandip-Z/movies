export const USERS_ABILITY_TO_SUGGEST = false;

export const usersAbilityToSuggest = (payload) => {
  return {
    type: USERS_ABILITY_TO_SUGGEST,
    payload,
  };
};
