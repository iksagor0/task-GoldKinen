import { combineReducers, configureStore } from "@reduxjs/toolkit";
import postsReducer from "../features/posts/postSlice";

const rootReducer = combineReducers({
  posts: postsReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default store;
