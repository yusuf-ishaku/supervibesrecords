import { Ticket } from "./Ticket";
export const NewTicket = (props) =>{
    // console.log(props)
    return(
        <section className="mb-10">
            <section className="w-full flex flex-col md:flex-row justify-between">
                <div className="object-cover rounded-md w-full mb-4 md:w-4/6 bg-gray-400 mr-4">
                    <img alt="" className="object-cover rounded-md w-full h-full" src={props.img}></img>
                </div>
                <div className="w-auto md:w-2/6 md:h-full h-fit flex flex-col">
                    {
                        props.tickets?.map((x,y) => {
                            return (
                                <Ticket key={y} tag={x.tag} id={x._id} price = {x.price}>
                                </Ticket>
                            )
                        })
                    }
                </div>
            </section>
           
        </section>
    )
}