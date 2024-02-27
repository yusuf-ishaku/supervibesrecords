"use client";
import { useState } from "react";
import { useBuyTicketMutation } from "@/app/data/api/ticketSlice";
import { useRouter } from "next/navigation";
export const TicketBuyForm = ({ id, price }) => {
  //   const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [buyTicket, { isLoading, isSuccess }] = useBuyTicketMutation();
  const router = useRouter();
  const submitData = async (e) => {
    e.preventDefault();
    if (email !== "" && quantity >= 1) {
      const data = await buyTicket({
        id,
        data: {
          buyer: email,
          amount: quantity * price,
          ticketBought: id,
         
        },
      });
      if (data) {
        console.log(data.data.data.authorization_url);
        router.push(data.data.data.authorization_url);
      }
    }
  };
  return (
    <form
      onSubmit={submitData}
      className="bg-[#0A0B14]  w-full h-fit px-4 rounded-md p-4"
    >
      <div className="flex flex-col mb-5">
        <label className="text-[#ffaa00] text-md">Email</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          required
          className="border-[1px] text-[#ffaa00] border-[#ffaa00] bg-transparent outline-none p-2 rounded-md mt-3"
        ></input>
      </div>
      <div className="flex flex-col mb-5">
        <label className="text-[#ffaa00] text-md">Quantity</label>
        <input
          onChange={(e) => setQuantity(e.target.value)}
          required
          min={1}
          type="number"
          className="border-[1px] text-[#ffaa00] border-[#ffaa00] bg-transparent outline-none p-2 rounded-md mt-3"
        ></input>
      </div>
      <div className="text-[#ffaa00] text-xl">
        Total cost: N {price * quantity}
      </div>
      <div className="w-full flex justify-end">
        <button
          className={`${
            isLoading && "cursor-not-allowed"
          } bg-[#ffaa00] px-6 py-2 rounded-md`}
          type="submit"
        >
          {isLoading ? (
            <span className="loader mx-6 my-auto"></span>
          ) : (
            "Proceed to Buy"
          )}
        </button>
      </div>
    </form>
  );
};
