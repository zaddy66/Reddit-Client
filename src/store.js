import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../src/features/allPosts/allPostsSlice";

export const store = configureStore({
  reducer: {
    allPosts: postsReducer,
  },
});
