import { generalApiSlice } from "./generalApiSlice";

export const audioApiSlice = generalApiSlice.injectEndpoints({
    endpoints: (builder) =>({
        addNewAudio: builder.mutation({
            query: (newAudio) =>({
                url: "/api/v1/audio",
                method: "POST",
                body: newAudio
            })
        })
    })
});

export const { useAddNewAudioMutation } = audioApiSlice;