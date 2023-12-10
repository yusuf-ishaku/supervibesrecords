"use client"
import { configureStore } from "@reduxjs/toolkit";
import { generalApiSlice } from "./api/generalApiSlice";
import { nowPlayingSlice } from "./dataslice/nowPlayingSlice";
import { audioDataSlice } from "./dataslice/audioDataSlice";
// import userReducer from "./dataSlice/userSlice"

export const store = configureStore({
    reducer: {
        [generalApiSlice.reducerPath]: generalApiSlice.reducer,
        nowPlaying: nowPlayingSlice.reducer,
        audios: audioDataSlice.reducer,
        // userReducer: userReducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(generalApiSlice.middleware),
});