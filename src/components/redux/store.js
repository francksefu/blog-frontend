import { configureStore } from '@reduxjs/toolkit';
import userReducer from './users/usersSlice';
import descriptionReducer from './users/descriptionSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    description: descriptionReducer,
  },
});