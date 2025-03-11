import { createSlice } from "@reduxjs/toolkit";
import {getPricing } from "./index";

const initialState = {
    loading: true,
    priceData: [],
    error: null,
};

const pricingSlice = createSlice({
    name: "feedBack",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getPricing.pending, (state) => {
                state.loading = true;
            })
            .addCase(getPricing.fulfilled, (state, action) => {
                state.loading = false;
                state.priceData = action.payload;
            })
            .addCase(getPricing.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default pricingSlice.reducer;
