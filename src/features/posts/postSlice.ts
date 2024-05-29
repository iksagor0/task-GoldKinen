import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IPost } from "../../types/types";
import { getData } from "../getData";

interface IInitialPostState {
  posts: IPost[];
  isLoading: boolean;
  errorMessage: string;
}

const initialState: IInitialPostState = {
  posts: [],
  isLoading: false,
  errorMessage: "",
};

export const fetchPosts = createAsyncThunk<IPost[]>("posts/fetchPosts", async (_, { rejectWithValue }) => {
  try {
    const posts = await getData("https://jsonplaceholder.typicode.com/posts");
    return posts;
  } catch (error) {
    return rejectWithValue(error);
  }
});

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.isLoading = true;
        state.errorMessage = "";
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload ? String(action.payload) : "Failed to fetch posts!";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errorMessage = "";
        state.posts = action.payload?.sort((a, b) => b.id - a.id) || [];
      });
  },
});

export default postSlice.reducer;
