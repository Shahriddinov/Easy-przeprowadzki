import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {GET_SERVICES} from "../../Services/api/utilis";

export const getService = createAsyncThunk("services/get", async () => {
    try {
        const response = await axios.get(GET_SERVICES, {});
        return response.data;
    } catch (error) {
        console.error("API Error:", error);  // API xatosi bo'lsa
        throw error;
    }
});
