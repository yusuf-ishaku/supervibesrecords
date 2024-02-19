import { Footer } from "../components/Footer"
import { NewTicket } from "../components/NewTickets"
export default async function Page(){
    let data = await fetch("https://super-vibes-records.onrender.com/api/v1/ticket");
    data = await data.json();
    // console.log(data);
    return (
        <>
        <section className= "w-full px-4 md:px-24 pt-28 md:pt-[10rem] pb-10 bg-[#0A0B14]">
          <header className="w-full text-center text-3xl pb-4 md:pb-14">
              <h1 className="text-white">Tours and Tickets</h1>
          </header>
          <section className="w-full"> 
            { data.code === 200 ? 
                data.data.map((x,y) => {
                    return (
                        <NewTicket tickets={x.tickets} key={y} img={x.eventFlier}></NewTicket>
                    )
                })
                :
                <NewTicket></NewTicket>
            }
          </section>
      </section>
      <Footer></Footer>
      </>
    )
}