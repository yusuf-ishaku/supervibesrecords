import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
    baseUrl: "http://localhost:3001",
});

export const generalApiSlice = createApi({
    baseQuery,
    endpoints: (builder) => ({}),
})

