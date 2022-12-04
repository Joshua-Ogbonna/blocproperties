import { getContract } from "../../helpers";
import {
  enlistmentABI,
  enlistmentContractAddress,
} from "../../utils/constants";

export const getEnlistmentContract = () => {
  return (dispatch) => {
    try {
      const enlistmentContract = getContract(
        enlistmentContractAddress,
        enlistmentABI
      );
      return enlistmentContract;
    } catch (error) {
      console.log(error);
    }
  };
};
