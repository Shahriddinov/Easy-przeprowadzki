import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {GET_FEEDBACK} from "../../Services/api/utilis";

export const getFeedBack = createAsyncThunk("feedBack/get", async () => {
    return await axios.get(GET_FEEDBACK, {
    }).then((res) => res.data);
});