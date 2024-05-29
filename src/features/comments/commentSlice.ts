import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IComments } from "../../types/types";
import { getData } from "../getData";

interface IInitialCommentState {
  comments: IComments[];
  isLoading: boolean;
  errorMessage: string;
}

const initialState: IInitialCommentState = {
  comments: [],
  isLoading: false,
  errorMessage: "",
};

export const fetchComments = createAsyncThunk<IComments[]>("comments/fetchComments", async (_, { rejectWithValue }) => {
  try {
    const comments = await getData("https://jsonplaceholder.typicode.com/comments");
    return comments;
  } catch (error) {
    return rejectWithValue(error);
  }
});

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchComments.pending, (state) => {
        state.isLoading = true;
        state.errorMessage = "";
      })
      .addCase(fetchComments.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload ? String(action.payload) : "Failed to fetch comments!";
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errorMessage = "";
        state.comments = action.payload || [];
      });
  },
});

export default commentsSlice.reducer;
