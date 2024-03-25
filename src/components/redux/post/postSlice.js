import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  title: '',
  paragraphs: [],
  isLoading: false
}

const API_URL = 'http://127.0.0.1:3000';

export const createPost = createAsyncThunk('user/post', async (post) => {
  console.log(post.access);
  const response = await axios.post(`${API_URL}/posts`, {
    title: post.title,
    paragraphs: post.paragraphs
  },{
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${post.access}`,
    }
  });
 
  return response.data;
 });

 export const createParagraph = createAsyncThunk('post/paragraph', async (paragraph, access) => {
    console.log();
    const response = await axios.post(`${API_URL}/paragraphs`, {
      title: paragraph.title,
      content: paragraph.content,
    },{
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${paragraph.access}`,
      }
    });
   
    return response.data;
   });

 export const getdescrition = createAsyncThunk('user/getpost', async(post,thunkAPI) => {
  try {
    const response = await axios.get(`${API_URL}/get_post`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${post.access}`,
      }
    });
    return response.data;
  } catch(e) {
    return thunkAPI.rejectWithValue('sorry something went wrong');
  }
});

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
     
      .addCase(createPost.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(createPost.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
      }))
      
      .addCase(createParagraph.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(createParagraph.fulfilled, (state, action) => ({
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
        post: action.payload.post
      }))
      
  },
});

export default postSlice.reducer;