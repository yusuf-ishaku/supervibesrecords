'use client'
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
export default async function Page({params}){
    const router = useRouter();
    const searchParams = useSearchParams();
    const trxref = searchParams.get('trxref');
    // console.log(search);
    let ticket = await fetch(`https://super-vibes-records.onrender.com/api/v1/events/verify/ticket/${trxref}`, {
      cache: 'no-store'
    });
    ticket = await ticket.json();
    console.log(ticket);
    if(ticket.status) {
      setTimeout(() => router.push('/'), 5000);
    }
    return (
      <section className="h-[100vh] bg-[#0A0B14] flex flex-col items-center justify-center pt-10">
        {

          ticket?.data.status === "success" ? 
          <>
          <span>
            <IoCheckmarkCircleOutline size={100} color="#ffaa00" />
          </span>
           <span className="text-[#ffaa00]">
            Transaction successful, tickets will be sent to your email at {ticket?.data.customer.email}
          </span>
         </>
          :
          <>
          <span className="loader3"></span>
          <span className="text-[#ffaa00]">
            Verifying the status of your transaction
          </span>
          </>
        }
       
        
      </section>
    );
}