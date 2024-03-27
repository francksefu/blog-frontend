import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  comments: [],
  isLoading: false
}

const API_URL = 'https://blog-4a5w.onrender.com';
//const API_URL = 'http://127.0.0.1:3000';

export const createComment = createAsyncThunk('user/comment', async (comment) => {
  
  const response = await axios.post(`${API_URL}/comments`, {
    email: comment.title,
    name: comment.name,
    content: comment.content,
    post_id: comment.post_id
  },{
    headers: {
      "Content-Type": "application/json",
    }
  });
 
  return response.data;
 });

 export const getComments = createAsyncThunk('user/commentget', async(post_id,thunkAPI) => {
  try {
    const response = await axios.get(`${API_URL}/posts/${post_id}/comments`, {
      headers: {
        "Content-Type": "application/json",
      }
    });
    return response.data;
  } catch(e) {
    return thunkAPI.rejectWithValue('sorry something went wrong');
  }
});

export const commentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
     
      .addCase(createComment.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(createComment.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
      }))
     
      .addCase(getComments.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(getComments.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        comments: action.payload,
      }))
      
  },
});

export default commentSlice.reducer;