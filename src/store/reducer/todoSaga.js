import { createSlice } from "@reduxjs/toolkit";

export const sagaActions = {
    FETCH_DATA_SAGA: "FETCH_DATA_SAGA"
};


const todoSlice = createSlice({
    name: "todo",
    initialState: {
        todos: []
    },
    reducers: {
        fetchData: (_, action) => {
            console.log({ action });
            return {
                todos: action.payload
            };
        }
    }
});

export const { fetchData } = todoSlice.actions;

export default todoSlice.reducer;