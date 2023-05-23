import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  rewards: [],
};

const rewardSlice = createSlice({
  name: "reward",
  initialState,
  reducers: {
    getAllreward: (state, action) => {
      state.rewards = [ ...action.payload.rewards];
    },
    addReward: (state, action) => {
      state.rewards.push(action.payload);
    },
    updateReward: (state, action) => {
      const { id, ...updatedReward } = action.payload;
      const reward = state.rewards.find((r) => r.id === id);
      if (reward) {
        Object.assign(reward, updatedReward);
      }
    },
    deleteReward: (state, action) => {
      const id = action.payload;
      state.rewards = state.rewards.filter((r) => r.id !== id);
    },
  },
});

export const { getAllreward, addReward, updateReward, deleteReward } =
  rewardSlice.actions;
export default rewardSlice.reducer;
