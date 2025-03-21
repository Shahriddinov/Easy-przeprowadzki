import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {MESSAGE_SEND} from "../../Services/api/utilis";
import { toast } from "react-toastify";
export const sendMessage = createAsyncThunk("message/post", async (sendDataMessage, { rejectWithValue }) => {
    try {
        const response = await axios.post(MESSAGE_SEND, sendDataMessage);
        if (response.status === 200) {
            toast.success("Twoja wiadomość została wysłana pomyślnie!", {
                position: "top-right",
            });
        }
        return response.data;
    } catch (error) {
        toast.error("Błąd podczas wysyłania wiadomości!", {
            position: "top-right",
        });
        return rejectWithValue(error.response.data);
    }
});