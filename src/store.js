import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./component/CounterSlice";
import postReducer from "./component/PostSlice";
export default configureStore({
    reducer: {
        counter: counterReducer,
        post: postReducer
    }
});