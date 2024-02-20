import Link from "next/link";
import { TicketBuyForm } from "./components/ticketBuyForm";
export default async function Page({params}){
    const ticket = await fetch(`http://localhost:3001/api/v1/events/ticket/${params.ticket}`, {
        cache: 'no-store'
    }).then((res) => res.json());
    console.log(ticket)
    return (
      <section className="h-[100vh] bg-[#0A0B14] flex flex-col items-center ">
        <section className="w-full h-full px-4 pr-9 fixed bg-[#212121ab] overflow-y-auto pt-32 flex flex-row justify-center ">
          <section className="bg-[#0A0B14] w-full h-fit px-4 rounded-md p-4">
            <header className="flex flex-col items-start justify-between mb-5">
              <h1 className="text-[#ffaa00] text-xl">{ticket.data.ticket.tag}</h1>
              <h2 className="text-[#ffaa00] text-lg">{ticket.data.event.eventName}</h2>
              <p className="text-[#ffaa00] text-base">
                {ticket.data.ticket.description}
              </p>
            </header>
            <section className="h-fit flex flex-col items-center w-full justify-center">
              <img src={ticket.data.event.eventFlier} className="h-60  w-3/5"></img>
              <p className="text-[#ffaa00] text-lg">
                N {ticket.data.ticket.price}
              </p>
            </section>
            <TicketBuyForm id={params.ticket} price={ticket.data.ticket.price}></TicketBuyForm>
          </section>
        </section>
      </section>
    );
}