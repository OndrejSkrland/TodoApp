import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface TodoListState {
    list: string[];
}
const initialState: TodoListState = {
    list: [],
}
const todoListSlice = createSlice({
    name: "todoList",
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<string>) => {
            state.list.push(action.payload);
        },
        removeItem: (state, action: PayloadAction<number>) => {
            state.list = state.list.filter((todo, index) => index !== action.payload);
        },
        removeAllItems: (state) => {
            state.list = [];
        },
    },
});

export const { addItem, removeItem, removeAllItems } = todoListSlice.actions;
export default todoListSlice.reducer;
