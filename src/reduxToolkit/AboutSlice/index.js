import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {GET_ABOUT} from "../../Services/api/utilis";

export const getAbout = createAsyncThunk("about/get", async () => {
    return await axios.get(GET_ABOUT, {
    }).then((res) => res.data);
});