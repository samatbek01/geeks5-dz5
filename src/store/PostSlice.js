import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const BASE_URL = "https://jsonplaceholder.typicode.com";

export const getPosts = createAsyncThunk(
  "getPosts",
  async (_, { dispatch }) => {
    try {
      dispatch(isLoadingOn());
      const response = await fetch(`${BASE_URL}/posts`);
      if (response.status >= 200 || response.status <= 204) {
        const data = await response.json();
        dispatch(getUsers(data));
      }
    } catch (e) {
      throw e;
    } finally {
      dispatch(isLoadingOff());
    }
  }
);

export const postSlice = createSlice({
  name: "postSlice",
  initialState: {
    title: 0,
    posts: [],
    isLoading: false,
  },
  reducers: {
    changeTitle: (state) => {
      state.title += 1;
    },
    getUsers: (state, action) => {
      state.posts = action.payload;
    },
    isLoadingOff: (state, action) => {
      state.isLoading = false;
    },
    isLoadingOn: (state, action) => {
      state.isLoading = true;
    },
  },
});
export const { getUsers, changeTitle, isLoadingOff, isLoadingOn } =
  postSlice.actions;
export default postSlice.reducer;
