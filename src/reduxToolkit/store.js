import { configureStore } from "@reduxjs/toolkit";


import language from "./languageSlice";
import servicesSlice from "./services/servicesSlice";
import heroSlice from "./HeroSlice/heroSlice";
import aboutSlice from "./AboutSlice/AboutSlice";
import feedBackSlice from "./FeedBackSlice/feedBackSlice";

const store = configureStore({
    reducer: {
        language,
        servicesSlice,
        heroSlice,
        aboutSlice,
        feedBackSlice
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export default store;
