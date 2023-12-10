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
        }),
        getAudio: builder.query({
            query: (id) =>({
                url: `/api/v1/audio/${id}`,
                method: 'GET'
            })
        })
    })
});

export const { useAddNewAudioMutation, useGetAudiosQuery, useGetAudioQuery } = audioApiSlice;