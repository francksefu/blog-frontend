import { configureStore } from '@reduxjs/toolkit';
import userReducer from './users/usersSlice';
import descriptionReducer from './users/descriptionSlice';
import postReducer from './post/postSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    description: descriptionReducer,
    post: postReducer,
  },
});