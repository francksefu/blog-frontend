import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  name: JSON.parse(localStorage.getItem("nameUser")),
  description: '',
  isLoading: false
}

const API_URL = 'https://blog-4a5w.onrender.com';

export const createDescriptionUser = createAsyncThunk('user/description', async (description) => {
  console.log(description.access);
  const response = await axios.post(`${API_URL}/descriptions`, {
    name: description.name,
    descriptionUser: description.description
  },{
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${description.access}`,
    }
  });
 
  return response.data;
 });

 export const getdescrition = createAsyncThunk('user/getDescription', async(description,thunkAPI) => {
  try {
    const response = await axios.get(`${API_URL}/get_description`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${description.access}`,
      }
    });
    localStorage.setItem("nameUser", JSON.stringify(response.data.name));
    return response.data;
  } catch(e) {
    return thunkAPI.rejectWithValue('sorry something went wrong');
  }
});

export const descriptionsSlice = createSlice({
  name: 'description',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
     
      .addCase(createDescriptionUser.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(createDescriptionUser.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
      }))
      .addCase(getdescrition.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(getdescrition.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        name: action.payload.name,
        description: action.payload.description
      }))
      
  },
});

export default descriptionsSlice.reducer;