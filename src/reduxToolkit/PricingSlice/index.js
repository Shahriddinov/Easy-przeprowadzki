import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {GET_PRICING} from "../../Services/api/utilis";

export const getPricing = createAsyncThunk("price/get", async () => {
    return await axios.get(GET_PRICING, {
    }).then((res) => res.data);
});