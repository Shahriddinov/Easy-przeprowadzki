import { configureStore } from "@reduxjs/toolkit";


import language from "./languageSlice";
import servicesSlice from "./services/servicesSlice";
import heroSlice from "./HeroSlice/heroSlice";
import aboutSlice from "./AboutSlice/AboutSlice";

const store = configureStore({
    reducer: {
        language,
        servicesSlice,
        heroSlice,
        aboutSlice
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export default store;
