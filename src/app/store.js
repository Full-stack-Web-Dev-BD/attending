import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import rewardReducer from '../features/reward/rewardSlice'
import userGroupReducer from '../features/userGroup/userGroupSlice'
import questReducer from '../features/quests/questSlice'
import userReducer from '../features/user/userSlice'



const loggerMiddleware = (store) => (next) => (action) => {
    console.log("Previous state <=", store.getState());
    console.log("Dispatching action :D", action);
    next(action);
    console.log("💁 Next state:", store.getState());
  };
  
export const store = configureStore({
  reducer: {
    reward: rewardReducer,
    userGroup: userGroupReducer,
    quest: questReducer,
    user: userReducer,
  },
  middleware: [...getDefaultMiddleware(), loggerMiddleware],
});

export const RootState = store.getState;
export const AppDispatch = store.dispatch;
