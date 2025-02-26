import { configureStore } from "@reduxjs/toolkit";


import language from "./languageSlice";
import servicesSlice from "./services/servicesSlice";

const store = configureStore({
    reducer: {
        language,
        servicesSlice
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export default store;
