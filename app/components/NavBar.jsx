"use client"
import Logo from "../assets/images/logo.png";
import  Link from 'next/link';
import ToggleMenu from "../assets/images/segment.png";
import { useState, useContext } from "react";
import {RxCross2} from "react-icons/rx";
import Image from "next/image";
import { Nav2 } from "./Nav2";
import { usePathname } from "next/navigation";
export const NavBar = () =>{
    const [display, setDisplay ] = useState(false);
    const pathname = usePathname();
    return (
        <>
          <nav className="flex flex-row items-center m-0 fixed top-0 w-full h-[5rem] sm:h-fit  bg-white/30 backdrop-blur-sm z-50 px-0 sm:px-4">
           <figure className="h-fit w-fit mr-auto">
                <Image src={Logo}></Image>
           </figure>
           <section className="flex-row hidden sm:flex">
                <h3 className={pathname === "/" ? "mx-4 text-[#FFAA00]": "mx-4 text-white"}>
                    <Link href={'/'} >Home</Link>
                </h3>
                <h3 className={pathname === "/about" ? "mx-4 text-[#FFAA00]": "mx-4 text-white"}>
                   <Link href={"/about"}>About Us</Link> 
                </h3>
                <h3 className={pathname === "/artists" ? "mx-4 text-[#FFAA00]" : "mx-4 text-white"}>
                    <Link href={"/artists"}>Artists</Link>
                </h3>
                <h3 className={pathname === "/discography" ? "mx-4 text-[#FFAA00]": "mx-4 text-white"}>
                    <Link href={"/discography"}>Music</Link>
                </h3>
                <h3 className={pathname === "/tours-and-tickets" ? "mx-4 text-[#FFAA00]": "mx-4 text-white"}>
                    <Link href={"/tours-and-tickets"}>Tours and Tickets</Link>
                </h3>
                <h3 className={pathname === "/contact-us" ? "mx-4 text-[#FFAA00]": "mx-4 text-white"}>
                    <Link href={"/contact-us"}>Contact Us</Link>
                </h3>
           </section>
           <figure className="sm:hidden h-[100%] flex justify-center items-center w-fit pl-4 mr-5" onClick={() =>setDisplay(!display)}>
            {
                !display ? <Image alt="Hamburger"  width="20rem" height='20rem' src={ToggleMenu}></Image> : <RxCross2 className=" text-[#FFAA00]"></RxCross2>
            }
                
           </figure>
        </nav>
        {display && <Nav2></Nav2>}
        </>
    )
}