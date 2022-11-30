import types from "./types";

let { ethereum } = window;

export const setAccount = (account) => {
  return async (dispatch) => {
    dispatch({ type: types.SET_ACCOUNT, payload: account})
  }
}

export const connectWallet = () => {
  return async (dispatch) => {
    try {
      if (!ethereum) return alert("Please install metamast browser extension");

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      dispatch(setAccount(accounts[0]));
      // console.log(accounts);
    } catch (error) {
      console.log(error);
    }
  };
};
