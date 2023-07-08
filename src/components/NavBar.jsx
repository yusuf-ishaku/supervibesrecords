import Logo from "../assets/images/logo.png";
import { NavLink,} from 'react-router-dom';
import ToggleMenu from "../assets/images/segment.png";
import { useState, useContext } from "react";
import { DisplayHamContext } from "../App";
export const NavBar = () =>{
    // const [visible, setToggleVisible] = useState(false);
    const { display, setDisplay } = useContext(DisplayHamContext);
    return (
        <nav className="flex flex-row items-center m-0 fixed w-full h-[5rem]  bg-white/30 backdrop-blur-sm z-50">
           <figure className="h-[100%] w-fit pl-4 mr-auto">
                <img className=" h-[100%]" width="auto" height='50%' src={Logo}></img>
           </figure>
           <section className="flex-row hidden sm:flex">
                <h3 className="mx-4 text-white">
                    <NavLink to={'/'} >Home</NavLink>
                </h3>
                <h3 className="mx-4 text-white">
                   <NavLink to={"/about"}>About Us</NavLink> 
                </h3>
                <h3 className="mx-4 text-white">
                    <NavLink to={"/artists"}>Artists</NavLink>
                </h3>
                <h3 className="mx-4 text-white">
                    <NavLink to={"/music"}>Music</NavLink>
                </h3>
                <h3 className="mx-4 text-white">
                    <NavLink to={"/ticketsandtours"}>Tours and Tickets</NavLink>
                </h3>
                <h3 className="mx-4 show text-white opacity-100">
                    <NavLink to={"/contact"}>Contact Us</NavLink>
                </h3>
           </section>
           <figure className="md:hidden h-[100%] flex justify-center items-center w-fit pl-4 mr-5" onClick={() =>setDisplay(!display)}>
                <img  width="20rem" height='20rem' src={ToggleMenu}></img>
           </figure>
        </nav>
    )
}