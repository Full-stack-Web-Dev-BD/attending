import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  groups: [],
};

const userGroupSlice = createSlice({
  name: "userGroup",
  initialState,
  reducers: {
    getAllUserGroups: (state, action) => { 
      state.groups = [...action.payload.groups];
    },
    addUserGroup: (state, action) => {
      state.groups.push(action.payload);
    },
    updateUserGroup: (state, action) => {
      const { id, ...updatedUserGroup } = action.payload;
      const userGroup = state.groups.find((group) => group.id === id);
      if (userGroup) {
        Object.assign(userGroup, updatedUserGroup);
      }
    },
    deleteUserGroup: (state, action) => {
      const id = action.payload;
      state.groups = state.groups.filter((group) => group.id !== id);
    },
  },
});

export const {
  getAllUserGroups,
  addUserGroup,
  updateUserGroup,
  deleteUserGroup,
} = userGroupSlice.actions;

export default userGroupSlice.reducer;
