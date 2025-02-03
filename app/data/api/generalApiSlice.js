import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
    baseUrl: "https://supervibesrecords-backend-production.up.railway.app",
});

export const generalApiSlice = createApi({
    baseQuery,
    endpoints: (builder) => ({}),
})

