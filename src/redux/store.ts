import { configureStore } from "@reduxjs/toolkit";
import todoListSlice from "./reducers/todoListSlice";
export default configureStore({
    reducer: {
        todoListSlice,
    }
});
