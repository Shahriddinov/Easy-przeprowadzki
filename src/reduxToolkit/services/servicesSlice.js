import { createSlice } from "@reduxjs/toolkit";
import { getService } from "./index";

const initialState = {
    loading: true,
    servicesData: [],
    error: null,
};

const servicesSlice = createSlice({
    name: "services",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getService.pending, (state) => {
                state.loading = true;
            })
            .addCase(getService.fulfilled, (state, action) => {
                state.loading = false;
                state.servicesData = action.payload;
            })
            .addCase(getService.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default servicesSlice.reducer;
