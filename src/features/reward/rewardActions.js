import { toast } from "react-toastify";
import { BaseURL } from "../../utils/constant";
import {
  addReward,
  updateReward,
  deleteReward,
  getAllreward,
} from "./rewardSlice";
import axios from "axios";

export const createReward = async (rewardData, dispatch, setRewardData) => {
  try {
    const createReward = await axios.post(`${BaseURL}/api/reward`, rewardData);
    dispatch(addReward(createReward.data));
    toast.success("reward Created !", { position: "top-center" });
    setRewardData({
      name: "",
      logo: "",
      symbol: "",
      description: "",
      condition1: "",
      condition2: "",
      condition3: "",
      wallet: "",
      possible: "Yes",
    });
  } catch (error) {
    if (error.response && error.response.data && error.response.data.errors) {
      const errors = error.response.data.errors;
      errors.forEach((err) => {
        toast.error(err.msg);
      });
    } else {
      console.log(error);
    }
  }
};

export const fetchAllRewardAction = async (dispatch) => {
  try {
    const createReward = await axios.get(`${BaseURL}/api/reward`);
    dispatch(getAllreward({ rewards: createReward.data }));
  } catch (error) {
    console.log(error);
  }
};

export const editReward = async (rewardId, updatedData, dispatch) => {
  // Logic for updating a reward (e.g., API call)
  // Dispatch the action to update the reward in the store
  dispatch(updateReward({ id: rewardId, ...updatedData }));
};

export const removeReward = async (rewardId, dispatch) => {
  // Logic for deleting a reward (e.g., API call)
  // Dispatch the action to delete the reward from the store
  dispatch(deleteReward(rewardId));
};
