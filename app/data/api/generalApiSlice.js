import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
    baseUrl: "https://super-vibes-records.onrender.com/",
});

export const generalApiSlice = createApi({
    baseQuery,
    endpoints: (builder) => ({}),
})

