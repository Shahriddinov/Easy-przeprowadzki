import { createSlice } from "@reduxjs/toolkit";
import {getFeedBack } from "./index";

const initialState = {
    loading: true,
    feedBackData: [],
    error: null,
};

const feedBackSlice = createSlice({
    name: "feedBack",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getFeedBack.pending, (state) => {
                state.loading = true;
            })
            .addCase(getFeedBack.fulfilled, (state, action) => {
                state.loading = false;
                state.feedBackData = action.payload;
            })
            .addCase(getFeedBack.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default feedBackSlice.reducer;
