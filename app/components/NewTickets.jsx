import TImage from "../assets/images/ticket.png";
import Event from "../assets/images/eventimage.png";
import Image from "next/image"
export const NewTicket = (props) =>{
    return(
        <section className="mb-10">
            <section className="w-full flex flex-row justify-between">
                <div className="object-cover rounded-md w-4/6 bg-gray-400">
                    <Image className="object-cover rounded-md w-full h-full" src={Event}></Image>
                </div>
                <div className="w-auto flex flex-col">
                    <Image src={TImage}></Image>
                    <Image src={TImage}></Image>
                    <Image src={TImage}></Image>
                </div>
            </section>
            <div className="flex flex-row justify-end mt-10">
                <button className="border-[#FFAA00] text-[#FFAA00] p-2 px-6 border-[1px] rounded-md bg-[]">Buy Ticket</button>
            </div>
        </section>
    )
}