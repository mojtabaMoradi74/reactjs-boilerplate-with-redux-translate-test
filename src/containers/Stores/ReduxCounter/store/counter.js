import { createSlice } from "@reduxjs/toolkit";
import initialState from './initialState';


const slice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state, __) => state + 1,
        zero: (_, __) => 0,
        decrement: (state, __) => state - 1,
        incrementIfOdd: (state, __) => state % 2 ? state + 1 : state,
    },
});

export const { zero, increment, decrement, incrementIfOdd } = slice.actions;

export default slice.reducer;