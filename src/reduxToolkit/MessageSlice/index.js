import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { MESSAGE_SEND } from "../../Services/api/utilis";
import { toast } from "react-toastify";

export const sendMessage = createAsyncThunk("message/post", async (sendDataMessage, { rejectWithValue }) => {
    try {
        const formData = new URLSearchParams();
        Object.keys(sendDataMessage).forEach((key) => {
            formData.append(key, sendDataMessage[key]);
        });

        const response = await axios.post(MESSAGE_SEND, formData, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded", // 🟢 MUHIM!
            },
        });

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
        return rejectWithValue(error.response?.data);
    }
});
