import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts: []
};

export const PostSlice = createSlice({
    name: "postSlice",
    initialState,
    reducers: {
        addPost: (state, action) => {
            state.posts = [...action.payload];
        }
    }
});

export const { addPost } = PostSlice.actions;

export const selectPost = state => state.post.posts;

export default PostSlice.reducer;