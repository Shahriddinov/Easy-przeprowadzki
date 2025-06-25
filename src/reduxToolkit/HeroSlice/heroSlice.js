import { createSlice } from "@reduxjs/toolkit";
import { getHero } from "./index";

const initialState = {
    loading: true,
    heroData: [],
    error: null,
};

const heroSlice = createSlice({
    name: "hero",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getHero.pending, (state) => {
                state.loading = true;
            })
            .addCase(getHero.fulfilled, (state, action) => {
                state.loading = false;
                state.heroData = action.payload;
            })
            .addCase(getHero.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default heroSlice.reducer;
