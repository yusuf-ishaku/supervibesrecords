import { createSlice } from "@reduxjs/toolkit";

const initialState = []
export const audioDataSlice = createSlice({
    name: "audios",
    initialState,
    reducers: {
        setAudios: (state, action) => {
            state  = action.payload;
        }
    }
});

export const {setAudios} = audioDataSlice.actions;