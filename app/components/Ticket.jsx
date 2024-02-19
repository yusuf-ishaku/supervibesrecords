export const Ticket = ({tag, price}) => {
    return <div className="w-full h-40 bg-blue-600 rounded-md mb-3 flex flex-col items-center justify-center">
        <h2 className="text-white text-3xl">
            {tag}
        </h2>
        <h4 className="text-[#ffaa00] text-2xl mt-4">
            N {price}
        </h4>
    </div>
}