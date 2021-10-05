import { createSlice } from "@reduxjs/toolkit";
// import initialState from './initialState';


const slice = createSlice({
    name: "countdown",
    initialState: 0,
    reducers: {
        incrementAsync: (_, { payload }) => payload.value,
        cancelIncrementAsync: (_, __) => 0,
        countdownTerminated: (_, __) => 0
    },
});

export const { incrementAsync, cancelIncrementAsync, countdownTerminated } = slice.actions;

export default slice.reducer;