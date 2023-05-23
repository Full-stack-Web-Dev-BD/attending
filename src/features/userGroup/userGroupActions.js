import { toast } from "react-toastify";
import { BaseURL } from "../../utils/constant";
import {
  addUserGroup,
  updateUserGroup,
  deleteUserGroup,
  getAllUserGroups,
} from "./userGroupSlice";
import axios from "axios";

export const createUserGroupAction = async (
  userGroupData,
  dispatch,
  setUserGroupData
) => {
  console.log("data is ",  userGroupData)
  try {
    const createdUserGroup = await axios.post(
      `${BaseURL}/api/user-group`,
      userGroupData
    );
    dispatch(addUserGroup(createdUserGroup.data));
    toast.success("User group created!", { position: "top-center" });
    setUserGroupData({
      group_name: "",
      by_wallet: "",
      by_reward: null,
      by_token: null,
      by_token2: 2,
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

export const updateUserGroupAction = async (
  id,
  userGroupData,
  dispatch,
  setUserGroupData
) => {
  try {
    const updatedUserGroup = await axios.put(
      `${BaseURL}/api/usergroup/${id}`,
      userGroupData
    );
    dispatch(updateUserGroup(updatedUserGroup.data));
    toast.success("User group updated!", { position: "top-center" });
    setUserGroupData({
      group_name: "",
      by_wallet: "",
      by_reward: "",
      by_token: "",
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

export const deleteUserGroupAction = async (id, dispatch) => {
  try {
    await axios.delete(`${BaseURL}/api/usergroup/${id}`);
    dispatch(deleteUserGroup(id));
    toast.success("User group deleted!", { position: "top-center" });
  } catch (error) {
    console.log(error);
  }
};

export const fetchAllUserGroupsAction = async (dispatch) => {
  try {
    const response = await axios.get(`${BaseURL}/api/user-group`);
    dispatch(getAllUserGroups({groups:response.data}));
  } catch (error) {
    console.log(error);
  }
};
