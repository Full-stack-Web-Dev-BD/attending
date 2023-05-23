import { toast } from "react-toastify";
import { BaseURL } from "../../utils/constant";
import {
  addQuest,
  updateQuest,
  deleteQuest,
  getAllQuests,
} from "./questSlice";
import axios from "axios";

export const createQuestAction = async (questData, dispatch, setQuestData) => {
  try {
    const createQuest = await axios.post(`${BaseURL}/api/quest`, questData);
    fetchAllQuestsAction(dispatch)
    toast.success("Quest Created!", { position: "top-center" });
    setQuestData({
      time1: null,
      time2: null,
      reward: "Reward",
      userGroup: "",
      pool: "",
      rewardQuantity: "",
      questDescription: "",
      action: "",
      link: "",
      name: "",
      status: "Active",
      questType:"Default"
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

export const fetchAllQuestsAction = async (dispatch) => {
  try {
    const allQuests = await axios.get(`${BaseURL}/api/quest`);
    dispatch(getAllQuests({ quests: allQuests.data }));
  } catch (error) {
    console.log(error);
  }
};

export const editQuest = async (questId, updatedData, dispatch) => {
  // Logic for updating a quest (e.g., API call)
  // Dispatch the action to update the quest in the store
  dispatch(updateQuest({ id: questId, ...updatedData }));
};

export const removeQuest = async (questId, dispatch) => {
  // Logic for deleting a quest (e.g., API call)
  // Dispatch the action to delete the quest from the store
  dispatch(deleteQuest(questId));
};
