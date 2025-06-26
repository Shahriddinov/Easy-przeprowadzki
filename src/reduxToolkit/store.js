import { configureStore } from "@reduxjs/toolkit";


import language from "./languageSlice";
import servicesSlice from "./services/servicesSlice";
import heroSlice from "./HeroSlice/heroSlice";
import aboutSlice from "./AboutSlice/AboutSlice";
import feedBackSlice from "./FeedBackSlice/feedBackSlice";
import pricingSlice from "./PricingSlice/pricingSlice";
import messageSlice from "./MessageSlice/MessageSlice";

const store = configureStore({
    reducer: {
        language,
        servicesSlice,
        heroSlice,
        aboutSlice,
        feedBackSlice,
        pricingSlice,
        messageSlice
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export default store;
