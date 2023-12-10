import { createSlice } from "@reduxjs/toolkit";

const initialState = { 
    value: {
        name: "Oremi"
    }
}

export const nowPlayingSlice = createSlice({
    name: "nowPlaying",
    initialState,
    reducers: {
        setNowPlaying: (state, action) => {
            // console.log(action.payload)
            state.value = action.payload
        }
    }
})

export const {setNowPlaying} = nowPlayingSlice.actions;
