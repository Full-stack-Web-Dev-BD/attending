import axios from "axios";
import moment from "moment";
import { toast } from "react-toastify";
import Web3 from "web3";

export const getTimeDifference = (time) => {
  const currentTime = moment();
  const targetTime = moment(time);
  const duration = moment.duration(targetTime.diff(currentTime));

  const days = Math.floor(duration.asDays());
  const hours = Math.floor(duration.asHours());
  const minutes = Math.floor(duration.asMinutes());

  if (days > 0) {
    return days === 1 ? "1 day" : `${days} days`;
  }

  if (hours > 0) {
    return hours === 1 ? "1 hour" : `${hours} hours`;
  }

  if (minutes > 0) {
    return minutes === 1 ? "1 minute" : `${minutes} minutes`;
  }

  return "Expired";
};
export function filterQuests(data, filterParams) {
  console.log("data",  data)
  console.log("option",  filterParams)
  var filterResult = [...data];
  const { name, reward, users, status, wallet, time1, time2 } = filterParams;
  if (name) {
    const keyword = name.toLowerCase();
    filterResult = data.filter((quest) =>{
      console.log(quest.name.toLowerCase().includes(keyword))
      if(quest.name.toLowerCase().includes(keyword)){
        return quest
      }
    }
    );
  }
  // filter
  if (time1 && time2) {
    filterResult = filterResult.filter((quest) => {
      const fTime1= moment(time1);
      const fTime2= moment(time2);
      const questTime= moment(quest.time2);
      console.log(time1, time2, quest.time2);
      return questTime.isBetween(fTime1, fTime2);
    });
  }
  if (reward) {
    filterResult = filterResult.filter((quest) => {
      const questRewardId = quest.reward._id.toLowerCase();
      return questRewardId === reward;
    });
  }
  if (users) {
    filterResult = filterResult.filter((quest) => {
      const questRewardId = quest.userGroup?._id.toLowerCase();
      return questRewardId === users;
    });
  }
  return filterResult;
}

export const connectToMetamask = async () => {
  try {
    // Check if Metamask is available
    if (window.ethereum) {
      const web3 = new Web3(window.ethereum);
      await window.ethereum.enable(); // Request user permission to connect
      const accounts = await web3.eth.getAccounts();
      console.log(accounts);
      return accounts[0];
    } else {
      throw new Error("Metamask not detected");
    }
  } catch (error) {
    toast.error(error.message);
  }
};

export const fetchUserIP = async () => {
  try {
    const response = await axios.get("https://api.ipify.org/?format=json");
    const userIP = response.data.ip;
    return userIP;
  } catch (error) {
    alert("Error fetching user IP:");
    return null;
  }
};

export const getJoinDate = (date) => {
  const isValidDate = moment(date).isValid();
  if (isValidDate) {
    const formattedDateTime = moment(date).format("YYYY MM DD / HH:mm");
    return formattedDateTime;
  } else {
    return "N/A";
  }
};

export const formatWalletAddress = (walletAddress) => {
  const truncatedAddress = `${walletAddress.slice(
    0,
    6
  )}...${walletAddress.slice(-6)}`;
  return truncatedAddress;
};
