"use client"

import { configureStore } from "@reduxjs/toolkit";
import { generalApiSlice } from "./api/generalApiSlice";
// import userReducer from "./dataSlice/userSlice"

export const store = configureStore({
    reducer: {
        [generalApiSlice.reducerPath]: generalApiSlice.reducer,
        // userReducer: userReducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(generalApiSlice.middleware),
});