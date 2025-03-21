import {createSlice} from "@reduxjs/toolkit";
import {sendMessage} from "./index";

const initialState = {
    loading: true,
    messageData: [],
    error: null,
};

const messageSlice = createSlice({
    name: "message",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(sendMessage.pending, (state) => {
                state.loading = true;
            })
            .addCase(sendMessage.fulfilled, (state, action) => {
                state.loading = false;
                state.messageData = action.payload;
            })
            .addCase(sendMessage.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default messageSlice.reducer;
