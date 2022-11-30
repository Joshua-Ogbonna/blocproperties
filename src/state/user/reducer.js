import types from "./types"

const initiaState = {
  currentAccount: "",
};

export const userReducer = (state = initiaState, actions) => {
  const { type, payload } = actions;

  switch (type) {
    case types.SET_ACCOUNT:
      return {
        ...state,
        currentAccount: payload,
      };
    default:
      return state;
  }
};
