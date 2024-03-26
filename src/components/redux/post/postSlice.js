import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  blogs: [],
  blog: {},
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

 export const createParagraph = createAsyncThunk('post/paragraph', async (paragraph) => {
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

 export const getPosts = createAsyncThunk('user/getposts', async(thunkAPI) => {
  try {
    const response = await axios.get(`${API_URL}/posts`, {
      headers: {
        "Content-Type": "application/json",
      }
    });
    return response.data;
  } catch(e) {
    return thunkAPI.rejectWithValue('sorry something went wrong');
  }
});

export const getPost = createAsyncThunk('user/getpost', async(post_id, thunkAPI) => {
    try {
      const response = await axios.get(`${API_URL}/posts/${post_id}`, {
        headers: {
          "Content-Type": "application/json",
        }
      });
      return response.data;
    } catch(e) {
      return thunkAPI.rejectWithValue('sorry something went wrong');
    }
  });

  export const getUserPosts = createAsyncThunk('user/getuserposts', async(user_id, thunkAPI) => {
    try {
      const response = await axios.get(`${API_URL}/users/${user_id}`, {
        headers: {
          "Content-Type": "application/json",
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
      .addCase(getPosts.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(getPosts.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        blogs: action.payload,
      }))
      .addCase(getPost.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(getPost.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        blog: action.payload,
      }))
      .addCase(getUserPosts.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(getUserPosts.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        blogs: action.payload,
      }))
  },
});

export default postSlice.reducer;