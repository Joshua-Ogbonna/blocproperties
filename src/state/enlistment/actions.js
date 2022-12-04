import { ethers } from "ethers";
import {
  enlistmentABI,
  enlistmentContractAddress,
} from "../../utils/constants";

const { ethereum } = window;

export const getEnlistmentContract = () => {
  return (dispatch) => {
    try {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      const enlistmentContract = new ethers.Contract(
        enlistmentContractAddress,
        enlistmentABI,
        signer
      );
      // console.log({ provider, signer, enlistmentContract });
      return enlistmentContract;
    } catch (error) {
      console.log(error);
    }
  };
};
