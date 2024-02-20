import Link from "next/link"

export const Ticket = ({tag, price, id}) => {
    console.log(id);
    return (
    <div className="w-full h-fit py-3 bg-blue-600 rounded-md mb-3 flex flex-col items-center justify-center">
        <h2 className="text-white text-3xl">
            {tag}
        </h2>
        <h4 className="text-[#ffaa00] text-2xl mt-4">
            N {price}
        </h4>
        <div className="flex flex-row justify-center mt-10">
            <Link href={`/tours-and-tickets/tickets/${id}`}>
            <button className="border-[#FFAA00] text-[#FFAA00] p-2 px-6 border-[1px] rounded-md bg-[]">Buy Ticket</button>
            </Link>
        </div>
    </div>
    )
}