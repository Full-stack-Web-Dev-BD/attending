import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  quests: [],
};

const questSlice = createSlice({
  name: "quest",
  initialState,
  reducers: {
    getAllQuests: (state, action) => {
      state.quests = [...action.payload.quests];
    },
    addQuest: (state, action) => {
      state.quests.push(action.payload);
    },
    updateQuest: (state, action) => {
      const { id, ...updatedQuest } = action.payload;
      const quest = state.quests.find((q) => q.id === id);
      if (quest) {
        Object.assign(quest, updatedQuest);
      }
    },
    deleteQuest: (state, action) => {
      const id = action.payload;
      state.quests = state.quests.filter((q) => q.id !== id);
    },
  },
});

export const { getAllQuests, addQuest, updateQuest, deleteQuest } =
  questSlice.actions;
export default questSlice.reducer;
