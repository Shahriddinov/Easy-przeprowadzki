import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {GET_HERO} from "../../Services/api/utilis";

export const getHero = createAsyncThunk("hero/get", async () => {
    return await axios.get(GET_HERO, {

    }).then((res) => res.data);
});