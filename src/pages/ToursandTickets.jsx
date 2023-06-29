import { NewTicket } from "../components/NewTickets"

export const ToursAndTickets = () =>{
    return (
        <section className= "w-full px-24 pt-[10rem] pb-10 bg-[#0A0B14]">
            <header className="w-full text-center text-3xl pb-14">
                <h1 className="text-white">Tours and Tickets</h1>
            </header>
            <section className="w-full"> 
                <NewTicket></NewTicket>
            </section>
        </section>
    )
}