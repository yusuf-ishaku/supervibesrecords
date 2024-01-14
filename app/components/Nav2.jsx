import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
export const Nav2 = (props) =>{
    const pathname = usePathname()
    return(
        <section className={ "flex-col flex sm:hidden pt-20 top-0 sticky z-30  bg-[#0A0B14] w-full"}>
        <h3 className={pathname === "/" ? "mx-4 text-[#FFAA00] my-1" : "mx-4 my-1 text-white"}>
            <Link href={'/'} >Home</Link>
        </h3>
        <h3 className={pathname === "/about" ? "mx-4 text-[#FFAA00] my-1" : "mx-4 my-1 text-white"}>
           <Link href={"/about"}>About Us</Link> 
        </h3>
        <h3 className={pathname === "/artists" ? "mx-4 text-[#FFAA00] my-1" : "mx-4 my-1 text-white"}>
            <Link href={"/artists"}>Artists</Link>
        </h3>
        <h3 className={pathname === "/discography" ? "mx-4 text-[#FFAA00] my-1" : "mx-4 my-1 text-white"}>
            <Link href={"/discography"}>Music</Link>
        </h3>
        <h3 className={pathname === "/tours-and-tickets" ? "mx-4 text-[#FFAA00] my-1" : "mx-4 my-1 text-white"}>
            <Link href={"/tours-and-tickets"}>Tours and Tickets</Link>
        </h3>
        <h3 className={pathname === "/contact-us" ? "mx-4 text-[#FFAA00] my-1" : "mx-4 my-1 text-white"}>
            <Link href={"/contact-us"}>Contact Us</Link>
        </h3>
   </section>
    )
}