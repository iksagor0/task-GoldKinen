import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../types/types";
import { getData } from "../getData";

interface IInitialUserState {
  users: IUser[];
  isLoading: boolean;
  errorMessage: string;
}

const initialState: IInitialUserState = {
  users: [],
  isLoading: false,
  errorMessage: "",
};

export const fetchUsers = createAsyncThunk<IUser[]>("users/fetchUsers", async (_, { rejectWithValue }) => {
  try {
    const users = await getData("https://jsonplaceholder.typicode.com/users");
    return users;
  } catch (error) {
    return rejectWithValue(error);
  }
});

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.isLoading = true;
        state.errorMessage = "";
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload ? String(action.payload) : "Failed to fetch users!";
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errorMessage = "";
        state.users = action.payload || [];
      });
  },
});

export default usersSlice.reducer;
