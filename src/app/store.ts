import { combineReducers, configureStore } from "@reduxjs/toolkit";
import commentReducer from "../features/comments/commentSlice";
import postsReducer from "../features/posts/postSlice";
import userReducer from "../features/users/userSlice";

const rootReducer = combineReducers({
  posts: postsReducer,
  users: userReducer,
  comments: commentReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootStateType = ReturnType<typeof rootReducer>;

export default store;
