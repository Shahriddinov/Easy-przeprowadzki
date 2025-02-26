import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {GET_SERVICES} from "../../Services/api/utilis";

export const getServices = createAsyncThunk("services/get", async () => {
    return await axios.get(GET_SERVICES, {
        
    }).then((res) => res.data);
});