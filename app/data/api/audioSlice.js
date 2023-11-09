import { generalApiSlice } from "./generalApiSlice";

export const audioApiSlice = generalApiSlice.injectEndpoints({
    endpoints: (builder) =>({
        addNewAudio: builder.mutation({
            query: (newAudio) =>({
                url: "/api/v1/audio",
                method: "POST",
                body: newAudio
            })
        }),
        getAudios: builder.query({
            query: () =>({
                url: "/api/v1/audio",
                method: "GET",
            })
        })
    })
});

export const { useAddNewAudioMutation, useGetAudiosQuery } = audioApiSlice;