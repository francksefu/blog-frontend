import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  accessToken: JSON.parse(localStorage.getItem("accessToken")),
  refreshToken: '',
  resourceOwner: JSON.parse(localStorage.getItem("resourceOwner")),
  message: '',
  isLoading: false,
  error: {}
};

const URL = 'http://127.0.0.1:3000/users/tokens'

export const loginUser = createAsyncThunk('user/login', async (user) => {
  const response = await axios.post(`${URL}/sign_in`, {
    email: user.email,
    password: user.password,
  });
  localStorage.setItem("resourceOwner", JSON.stringify(response.data.resource_owner));
  localStorage.setItem("refreshToken", JSON.stringify(response.data.refresh_token));
  localStorage.setItem("accessToken", JSON.stringify(response.data.token));
  return response.data;
 });

 export const registerUser = createAsyncThunk('user/register', async (user) => {
  const response = await axios.post(`${URL}/sign_up`, {
    name: user.name,
    email: user.email,
    password: user.password,
    password_confirmation: user.password,
  });
 
  localStorage.setItem("resourceOwner", JSON.stringify(response.data.resource_owner));
  localStorage.setItem("refreshToken", JSON.stringify(response.data.refresh_token));
  localStorage.setItem("accessToken", JSON.stringify(response.data.token));
  return response.data;
  
 });

//

export const usersSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
     
      .addCase(loginUser.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(loginUser.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        accessToken: action.payload.access_token,
        refreshToken: action.payload.refresh_token,
        resourceOwner: action.payload.resource_owner
      }))
      .addCase(registerUser.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(registerUser.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        accessToken: action.payload.access_token,
        refreshToken: action.payload.refresh_token,
        resourceOwner: action.payload.resource_owner
      }))
      .addCase(registerUser.rejected, (state, action) => ({
        ...state,
        isLoading: false,
        error: {...state.error, error: action.payload},
        type: action.type
      }))
      
      
  },
});

export default usersSlice.reducer;