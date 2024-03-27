import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  accessToken: JSON.parse(localStorage.getItem("accessToken")),
  refreshToken: JSON.parse(localStorage.getItem("refreshToken")),
  resourceOwner: JSON.parse(localStorage.getItem("resourceOwner")),
  message: '',
  isLoading: false,
  error: {},
  users: [],
};

const URL = 'https://blog-4a5w.onrender.com/users/tokens';
const API_URL = 'https://blog-4a5w.onrender.com';
//const URL = 'http://127.0.0.1:3000/users/tokens';
//const API_URL = 'http://127.0.0.1:3000';

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


 export const getUsers = createAsyncThunk('user/getUser', async(thunkAPI) => {
  try {
    const response = await axios.get(`${API_URL}/users`, {
      headers: {
        "Content-Type": "application/json",
      }
    });
    return response.data;
  } catch(e) {
    return thunkAPI.rejectWithValue('sorry something went wrong');
  }
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
      }))
      .addCase(getUsers.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(getUsers.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        users: action.payload,
      }))
      
     
  },
});

export default usersSlice.reducer;