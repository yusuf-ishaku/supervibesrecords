import { generalApiSlice } from "./generalApiSlice";

export const ticketSlice = generalApiSlice.injectEndpoints({
    endpoints: (builder) =>({
        buyTicket: builder.mutation({
            query: (data) =>({
                url: `/api/v1/events/ticket/${data.id}/buy`,
                method: "POST",
                body: data.data
            })
        })
    })
});

export const { useBuyTicketMutation }  = ticketSlice;