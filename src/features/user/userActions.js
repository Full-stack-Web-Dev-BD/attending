import { toast } from "react-toastify";
import { BaseURL } from "../../utils/constant";
import { connectUser, updateUser, deleteUser, getAllUsers } from "./userSlice";
import axios from "axios";
import { connectToMetamask, fetchUserIP } from "../../utils/helperFunctions";
import moment from "moment";

export const createUserAction = async (dispatch, navigate, walletAddress) => {
  var userData;
  try {
    const fetchWallet = await connectToMetamask();
    if (fetchWallet.toLocaleLowerCase() === walletAddress.toLocaleLowerCase()) {
      userData = {
        wallet: fetchWallet,
        ipAddress: await fetchUserIP(),
      };
    } else {
      window.localStorage.removeItem("wallet");
      return toast.error(
        `${walletAddress} does not match with your  wallet address`
      );
    }
    const createdUser = await axios.post(`${BaseURL}/api/user`, userData);
    window.localStorage.setItem("wallet", userData.wallet);
    dispatch(connectUser({ wallet: userData.wallet }));
    setTimeout(() => {
      navigate(new URL(window.location.href).pathname);
    }, 2000);
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

export const updateUserAction = async (id, userData, dispatch, setUserData) => {
  try {
    const updatedUser = await axios.put(`${BaseURL}/api/user/${id}`, userData);
    dispatch(updateUser(updatedUser.data));
    toast.success("User  updated!", { position: "top-center" });
  } catch (error) {
    if (error.response && error.response.data && error.response.data.errors) {
      const errors = error.response.data.errors;
      errors.forEach((err) => {
        toast.error(err.msg);
      });
    } else {
      toast.info("Error while Registering !");
      console.log(error);
    }
  }
};

export const deleteUserAction = async (id, dispatch) => {
  try {
    await axios.delete(`${BaseURL}/api/user/${id}`);
    dispatch(deleteUser(id));
    toast.success("User  deleted!", { position: "top-center" });
  } catch (error) {
    console.log(error);
  }
};
export const fetchAllUsersAction = async (dispatch) => {
  try {
    const response = await axios.get(`${BaseURL}/api/user`);
    dispatch(getAllUsers({ users: response.data }));
  } catch (error) {
    console.log(error);
  }
};
export const toggleUserStatusAction = async (dispatch, id, message) => {
  try {
    await axios.put(`${BaseURL}/api/user/toggle/${id}`);
    toast.success(message, { position: "top-center" });
    fetchAllUsersAction(dispatch);
  } catch (error) {
    console.log(error);
  }
};

export const filterUserAction = async (users, filterOptions) => {
  var filterResult = [...users];
  if (filterOptions.wallet) {
    filterResult = filterResult.filter(
      (user) => user.wallet.toLowerCase() === filterOptions.wallet.toLowerCase()
    );
  }
  if (filterOptions.status) {
    filterResult = filterResult.filter(
      (user) => user.status.toLowerCase() === filterOptions.status.toLowerCase()
    );
  }
  if (filterOptions.time_of_reg1 && filterOptions.time_of_reg2) {
    filterResult = filterResult.filter((user) => {
      const time_of_reg1 = moment(filterOptions.time_of_reg1);
      const time_of_reg2 = moment(filterOptions.time_of_reg2);
      const registerTime = moment(user.registrationTime);
      return registerTime.isBetween(time_of_reg1, time_of_reg2);
    });
  }
  if (filterOptions.time_of_reward1 && filterOptions.time_of_reward2) {
    filterResult = filterResult.filter((user) => {
      const time_of_reward1 = moment(filterOptions.time_of_reward1);
      const time_of_reward2 = moment(filterOptions.time_of_reward2);
      const rewardTime = moment(user.lastRewardTime);
      return rewardTime.isBetween(time_of_reward1, time_of_reward2);
    });
  }
  if (filterOptions.ip) {
    filterResult = filterResult.filter(
      (user) => user.ipAddress.toLowerCase() === filterOptions.ip.toLowerCase()
    );
  }
  if (filterOptions.reward) {
    filterResult = filterResult.filter(
      (user) => user.reward.toLowerCase() === filterOptions.reward.toLowerCase()
    );
  }
  if (filterOptions.user_group) {
    filterResult = filterResult.filter(
      (user) => user?.userGroup?.toLowerCase() === filterOptions.user_group.toLowerCase()
    );
  }

  return filterResult;
};
