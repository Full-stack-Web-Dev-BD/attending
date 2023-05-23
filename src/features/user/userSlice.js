import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  wallet:null
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getAllUsers: (state, action) => {
      state.users = [...action.payload.users];
    },
    connectUser: (state, action) => {
      state.wallet = action.payload.wallet
    },
    updateUser: (state, action) => {
      const { id, ...updatedUser } = action.payload;
      const user = state.users.find((u) => u.id === id);
      if (user) {
        Object.assign(user, updatedUser);
      }
    },
    deleteUser: (state, action) => {
      const id = action.payload;
      state.users = state.users.filter((u) => u.id !== id);
    },
  },
});

export const { getAllUsers, connectUser, updateUser, deleteUser } =
  userSlice.actions;
export default userSlice.reducer;
